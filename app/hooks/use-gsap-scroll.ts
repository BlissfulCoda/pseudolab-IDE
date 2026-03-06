/* ============================================================
   PSEUDOLAB — useGsapScroll
   GSAP ScrollTrigger: refined scroll-triggered animations.
   Motion design: smooth easing, staggered reveals, subtle depth.
   ============================================================ */

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Refined easing: power4.out for silky deceleration at the end
const EASE = "power4.out";

// Base animation: subtle Y + opacity, no reverse (play once)
const BASE_FROM = { y: 48, autoAlpha: 0 };
const BASE_TO = {
  y: 0,
  autoAlpha: 1,
  duration: 1.2,
  ease: EASE,
  overwrite: "auto" as const,
};

const STAGGER_FROM = { y: 32, autoAlpha: 0 };
const STAGGER_TO = {
  y: 0,
  autoAlpha: 1,
  duration: 0.9,
  ease: EASE,
  overwrite: "auto" as const,
};

export default function useGsapScroll() {
  useEffect(() => {
    const wrappers = gsap.utils.toArray<HTMLElement>("[data-scroll-section]");

    wrappers.forEach((wrapper) => {
      // Skip all: fromTo sets autoAlpha:0 immediately, hiding content until scroll.
      // Re-enable when ScrollTrigger can be configured to avoid hiding above-fold content.
      return;
      const variant = wrapper.getAttribute("data-scroll-variant");
      const inner = wrapper.firstElementChild as HTMLElement | null;
      const direct = inner?.querySelectorAll<HTMLElement>(":scope > *") ?? [];

      // Stagger: 2–6 direct children, or 1 child whose children are 2–6 (e.g. HowItWorks grid)
      let staggerTargets: HTMLElement[] = [];
      if (direct.length >= 2 && direct.length <= 6) {
        staggerTargets = Array.from(direct);
      } else if (direct.length === 1) {
        const sub = direct[0].querySelectorAll<HTMLElement>(":scope > *");
        if (sub.length >= 2 && sub.length <= 6) {
          staggerTargets = Array.from(sub);
        }
      }
      const hasStaggerContent = staggerTargets.length >= 2;

      // Hero: skip GSAP (above the fold, has its own pl-fade-up CSS animations)
      if (variant === "hero") return;

      // Sections with distinct content blocks: stagger children only
      if (hasStaggerContent) {
        gsap.fromTo(
          staggerTargets,
          STAGGER_FROM,
          {
            ...STAGGER_TO,
            stagger: 0.12,
            delay: 0.08,
            scrollTrigger: {
              trigger: wrapper,
              start: "top 88%",
              once: true,
              toggleActions: "play none none none",
            },
          }
        );
      } else {
        // Single-block sections: smooth unified entrance
        gsap.fromTo(
          wrapper,
          {
            ...BASE_FROM,
            scale: 0.98,
          },
          {
            ...BASE_TO,
            scale: 1,
            duration: 1.1,
            scrollTrigger: {
              trigger: wrapper,
              start: "top 88%",
              once: true,
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Refresh ScrollTrigger after a short delay (handles dynamic content)
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      clearTimeout(refreshTimer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
