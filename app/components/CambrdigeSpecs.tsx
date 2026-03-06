"use client";

import { useState } from "react";
import { SPEC_TAGS, COMPARE_ROWS } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function CambridgeSpec() {
  return (
    <div
      id="spec"
      className="bg-surface border-t border-b border-border"
    >
      <div className="max-w-[1200px] mx-auto py-20 px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* ── Left: spec tags ── */}
        <div>
          <div className="pl-section-eyebrow">{`// cambridge spec`}</div>
          <h2 className="pl-section-h2">
            Every construct.
            <br />
            <em>Zero compromises.</em>
          </h2>
          <p className="pl-section-p">
            Built to the exact Cambridge International pseudocode specification
            for IGCSE (0478) and A-Level (9618) Computer Science. If it&apos;s
            in the spec, it works here.
          </p>
          <div className="flex flex-wrap gap-2 mt-7">
            {SPEC_TAGS.map((tag) => (
              <SpecTag
                key={tag.label}
                label={tag.label}
                highlight={tag.highlight}
              />
            ))}
          </div>
        </div>

        {/* ── Right: output demo + comparison ── */}
        <div>
          <OutputDemo />
          <div className="grid grid-cols-2 gap-3 mt-5">
            <CompareCard label="Other tools" rows={COMPARE_ROWS} good={false} />
            <CompareCard label="PseudoLab" rows={COMPARE_ROWS} good />
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecTag({
  label,
  highlight,
}: {
  label: string;
  highlight?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const active = highlight || hovered;

  return (
    <span
      className={cn(
        "py-1.5 px-3.5 rounded-full font-mono text-xs transition-all duration-200 cursor-default",
        "bg-surface-2 border border-border-bright text-text-2",
        active &&
          "border-[rgba(139,92,246,.4)] text-code-purple bg-[var(--purple-glow)]"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </span>
  );
}

function OutputDemo() {
  return (
    <div className="bg-background border border-border-bright rounded-[14px] overflow-hidden">
      <div className="py-3.5 px-5 border-b border-border bg-surface-2 flex items-center gap-2 text-[13px] text-code-green font-sans">
        <span>⊢_</span> Output
      </div>
      <div className="p-5 font-mono text-[13px] leading-[2]">
        <span className="block">
          <span className="pl-kw">DECLARE</span> total :{" "}
          <span className="pl-kw-b">INTEGER</span>
        </span>
        <span className="block">
          total <span className="pl-op">←</span> <span className="pl-num">0</span>
        </span>
        <span className="block">&nbsp;</span>
        <span className="block">
          <span className="pl-kw">FOR</span> i <span className="pl-op">←</span>{" "}
          <span className="pl-num">1</span> <span className="pl-kw">TO</span>{" "}
          <span className="pl-num">5</span>
        </span>
        <span className="block">
          &nbsp;&nbsp;&nbsp;&nbsp;total <span className="pl-op">←</span> total{" "}
          <span className="pl-op">+</span> i
        </span>
        <span className="block">
          <span className="pl-kw">NEXT</span> i
        </span>
        <span className="block">&nbsp;</span>
        <span className="block">
          <span className="pl-kw">OUTPUT</span> total
        </span>
        <span className="block text-text-3 text-[11px] mt-3">
          →&nbsp; Running...
        </span>
        <span className="block text-code-green mt-2">
          15 <span className="pl-cursor-blink" />
        </span>
        <span className="block text-text-3 text-[11px]">
          ✓ Executed in 8ms
        </span>
      </div>
    </div>
  );
}

function CompareCard({
  label,
  rows,
  good,
}: {
  label: string;
  rows: string[];
  good: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[14px] p-7 border",
        good
          ? "border-[rgba(139,92,246,.4)] bg-[rgba(109,40,217,.05)]"
          : "border-border-bright bg-surface"
      )}
    >
      <div
        className={cn(
          "font-mono text-[11px] uppercase tracking-[0.1em] mb-4",
          good ? "text-code-purple" : "text-text-3"
        )}
      >
        {label}
      </div>
      {rows.map((row) => (
        <div
          key={row}
          className="flex items-center gap-2.5 py-2.5 border-b border-border last:border-b-0 text-sm text-text-2 font-sans"
        >
          <span
            className={cn(
              "text-base",
              good ? "text-code-green" : "text-text-3"
            )}
          >
            {good ? "✓" : "✕"}
          </span>
          {row}
        </div>
      ))}
    </div>
  );
}
