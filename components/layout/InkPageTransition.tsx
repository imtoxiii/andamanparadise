"use client";

import { useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

/**
 * InkPageTransition
 * ─────────────────
 * Self-contained ink sprite transition that intercepts ALL internal
 * link clicks site-wide (no need to replace individual <Link> components).
 *
 * Flow:
 *  1. User clicks any internal <a> link
 *  2. We preventDefault and play the ink COVER animation (0.8s)
 *  3. Once the screen is fully covered, we router.push(href)
 *  4. We detect the pathname change (new page loaded under ink)
 *  5. We play the ink REVEAL animation (0.8s)
 *  6. Done — overlay hides
 */

const FRAME_PROPORTION = 1.78;
const FRAMES = 25;
const ANIM_DURATION = 800; // ms — matches CSS steps animation

export function InkPageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  const layerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const pendingHref = useRef<string | null>(null);
  const prevPathname = useRef(pathname);

  // ── Set sprite dimensions to cover viewport ──
  const setDimensions = useCallback(() => {
    const bg = bgRef.current;
    if (!bg) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let frameW: number, frameH: number;
    if (vw / vh > FRAME_PROPORTION) {
      frameW = vw;
      frameH = frameW / FRAME_PROPORTION;
    } else {
      frameH = vh * 1.2;
      frameW = frameH * FRAME_PROPORTION;
    }
    bg.style.width = `${frameW * FRAMES}px`;
    bg.style.height = `${frameH}px`;
  }, []);

  // ── Play COVER animation (ink fills screen) ──
  const playCover = useCallback(() => {
    const layer = layerRef.current;
    const bg = bgRef.current;
    if (!layer || !bg) return;

    setDimensions();

    // Reset any previous state
    bg.style.animation = "none";
    void bg.offsetWidth; // force reflow

    // Show the layer and start cover animation
    layer.style.opacity = "1";
    layer.style.visibility = "visible";
    bg.style.animation = `cd-sequence ${ANIM_DURATION}ms steps(24) forwards`;
  }, [setDimensions]);

  // ── Play REVEAL animation (ink retreats) ──
  const playReveal = useCallback(() => {
    const layer = layerRef.current;
    const bg = bgRef.current;
    if (!layer || !bg) return;

    setDimensions();

    // Reset animation and start reveal
    bg.style.animation = "none";
    void bg.offsetWidth;
    bg.style.animation = `cd-sequence-reverse ${ANIM_DURATION}ms steps(24) forwards`;

    // After reveal completes, hide the layer
    setTimeout(() => {
      layer.style.opacity = "0";
      layer.style.visibility = "hidden";
      bg.style.animation = "none";
      isAnimating.current = false;
      pendingHref.current = null;
    }, ANIM_DURATION + 50);
  }, [setDimensions]);

  // ── Detect pathname changes to trigger reveal ──
  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;

      if (pendingHref.current) {
        // A transition navigation just completed — play reveal
        // Small delay to let the new page render first
        requestAnimationFrame(() => {
          playReveal();
        });
      }
    }
  }, [pathname, playReveal]);

  // ── Intercept all internal link clicks ──
  useEffect(() => {
    setDimensions();
    window.addEventListener("resize", setDimensions);

    const handleClick = (e: MouseEvent) => {
      // Don't intercept if already animating
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      // Walk up from the click target to find an <a> tag
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip external, hash, tel, mailto links
      if (
        href.startsWith("http") ||
        href.startsWith("//") ||
        href.startsWith("mailto") ||
        href.startsWith("tel") ||
        href.startsWith("#") ||
        anchor.target === "_blank"
      ) {
        return;
      }

      // Skip if it's the current page
      if (href === pathname) return;

      // Intercept this navigation
      e.preventDefault();
      e.stopPropagation();

      isAnimating.current = true;
      pendingHref.current = href;

      // Play cover animation
      playCover();

      // After cover completes, navigate
      setTimeout(() => {
        router.push(href);
      }, ANIM_DURATION + 50);
    };

    // Use capture phase to intercept before Next.js Link handlers
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("resize", setDimensions);
    };
  }, [pathname, playCover, router, setDimensions]);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        opacity: 0,
        visibility: "hidden" as const,
        pointerEvents: "none",
      }}
    >
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translateY(-50%) translateX(-2%)",
          background: "url(/ink-black.png) no-repeat 0 0",
          backgroundSize: "100% 100%",
          willChange: "transform",
        }}
      />
    </div>
  );
}
