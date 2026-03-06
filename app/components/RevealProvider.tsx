"use client";

import useGsapScroll from "@/app/hooks/use-gsap-scroll";

export default function RevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useGsapScroll();
  return <>{children}</>;
}
