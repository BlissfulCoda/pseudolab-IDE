/* ============================================================
   PSEUDOLAB — useGsapScroll
   GSAP ScrollTrigger: refined scroll-triggered animations.
   Motion design: smooth easing, staggered reveals, subtle depth.
   ============================================================ */

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Bouncy easing for more noticeable motion
const EASE = "power3.out";

// Base animation: larger Y + opacity for obvious entrance
const BASE_FROM = { y: 80, autoAlpha: 0 };
const BASE_TO = {
  y: 0,
  autoAlpha: 1,
  duration: 1.4,
  ease: EASE,
  overwrite: "auto" as const,
};

const STAGGER_FROM = { y: 60, autoAlpha: 0 };
const STAGGER_TO = {
  y: 0,
  autoAlpha: 1,
  duration: 1.1,
  ease: EASE,
  overwrite: "auto" as const,
};

export default function useGsapScroll() {
  useEffect(() => {
    const wrappers = gsap.utils.toArray<HTMLElement>("[data-scroll-section]");

    wrappers.forEach((wrapper) => {
      const variant = wrapper.getAttribute("data-scroll-variant");

      // Hero: skip GSAP (above the fold, has its own pl-fade-up CSS animations)
      if (variant === "hero") return;
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

      // Sections with distinct content blocks: stagger children only
      if (hasStaggerContent) {
        gsap.fromTo(
          staggerTargets,
          STAGGER_FROM,
          {
            ...STAGGER_TO,
            stagger: 0.18,
            delay: 0.1,
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom", // Fires when section enters viewport; above-fold content triggers on load
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
            scale: 0.94,
          },
          {
            ...BASE_TO,
            scale: 1,
            duration: 1.3,
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom", // Fires when section enters viewport; above-fold content triggers on load
              once: true,
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Refresh immediately so above-the-fold sections animate on load
    ScrollTrigger.refresh();
    // Delayed refresh for dynamic content (fonts, images, etc.)
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 600);

    return () => {
      clearTimeout(refreshTimer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
