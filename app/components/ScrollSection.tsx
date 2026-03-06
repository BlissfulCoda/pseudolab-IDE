"use client";

export default function ScrollSection({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: "hero" | "default";
}) {
  return (
    <div
      data-scroll-section
      {...(variant ? { "data-scroll-variant": variant } : {})}
    >
      {children}
    </div>
  );
}
