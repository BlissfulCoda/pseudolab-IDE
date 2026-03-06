"use client";

/* ============================================================
   PSEUDOLAB — Features.tsx
   3-column feature card grid with hover top-border glow.
   Left: section header copy. Right: supporting paragraph.
   ============================================================ */

import { useState } from "react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: "⚡",
    iconVariant: "purple" as const,
    title: "Live Execution",
    desc: "Run your pseudocode in real time and see exactly what the interpreter does. No more guessing if your logic is right.",
  },
  {
    icon: "✦",
    iconVariant: "purple" as const,
    title: "Syntax Highlighting",
    desc: "Keywords, operators, strings, and types each get their own colour. Instantly spot structure and avoid formatting mistakes.",
  },
  {
    icon: "□",
    iconVariant: "green" as const,
    title: "Built-in Reference",
    desc: "Every Cambridge construct documented with examples, right inside the editor. No tab switching, no Googling mid-question.",
  },
  {
    icon: "↵",
    iconVariant: "orange" as const,
    title: "Smart Indentation",
    desc: "Auto-indents after IF, FOR, WHILE, and PROCEDURE blocks. ENDIF and NEXT auto-outdent. Your pseudocode stays readable.",
  },
  {
    icon: "←",
    iconVariant: "blue" as const,
    title: "Arrow Conversion",
    desc: (
      <>
        Type <code className="font-mono text-code-purple text-xs">&lt;-</code>{" "}
        and it becomes the proper assignment arrow{" "}
        <span className="text-code-purple">←</span>. Write exactly as the spec
        requires.
      </>
    ),
  },
  {
    icon: "↗",
    iconVariant: "green" as const,
    title: "Export Ready",
    desc: "Download your pseudocode as a clean text file, formatted and ready for your teacher, coursework folder, or revision notes.",
  },
];

const ICON_VARIANTS: Record<
  "purple" | "green" | "orange" | "blue",
  { background: string; border: string }
> = {
  purple: {
    background: "var(--purple-glow)",
    border: "1px solid rgba(139,92,246,.3)",
  },
  green: {
    background: "var(--green-dim)",
    border: "1px solid rgba(34,197,94,.2)",
  },
  orange: {
    background: "rgba(249,115,22,.1)",
    border: "1px solid rgba(249,115,22,.2)",
  },
  blue: {
    background: "rgba(96,165,250,.1)",
    border: "1px solid rgba(96,165,250,.2)",
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="max-w-[1200px] mx-auto py-[100px] px-6 md:px-10"
    >
      {/* ── Header row ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start mb-16">
        <div>
          <div className="pl-section-eyebrow">{`// features`}</div>
          <h2 className="pl-section-h2">
            Everything you need
            <br />
            to <em>master the spec</em>
          </h2>
        </div>
        <p className="pl-section-p pt-10">
          Built by a Cambridge CS teacher from the ground up. Every feature
          solves a real problem students face when learning to write pseudocode
          under exam conditions.
        </p>
      </div>

      {/* ── Feature card grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-[14px] overflow-hidden">
        {FEATURES.map((feat, i) => (
          <FeatureCard key={i} {...feat} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  iconVariant,
  title,
  desc,
}: {
  icon: string;
  iconVariant: "purple" | "green" | "orange" | "blue";
  title: string;
  desc: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const variant = ICON_VARIANTS[iconVariant];

  return (
    <div
      className={cn(
        "relative overflow-hidden p-8 transition-colors duration-200",
        hovered ? "bg-surface-2" : "bg-surface",
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top glow line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--purple-dim), transparent)",
          opacity: hovered ? 1 : 0,
        }}
      />

      <div
        className="w-11 h-11 rounded-[10px] flex items-center justify-center text-xl mb-5"
        style={variant}
      >
        {icon}
      </div>
      <div className="text-[15px] font-medium text-foreground mb-2.5 font-sans">
        {title}
      </div>
      <div className="text-sm text-text-2 leading-[1.65] font-sans">{desc}</div>
    </div>
  );
}
