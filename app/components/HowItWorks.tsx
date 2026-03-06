/* ============================================================
   PSEUDOLAB — HowItWorks.tsx
   Two-column layout: numbered step list on the left,
   Reference panel visual mockup on the right.
   ============================================================ */

"use client";

const STEPS = [
  {
    num: "01",
    title: "Write your pseudocode",
    desc: "Start typing in the Editor tab. Syntax highlighting kicks in immediately, helping you structure your logic correctly from line one.",
    tag: "DECLARE · FOR · IF · WHILE · OUTPUT",
  },
  {
    num: "02",
    title: "Hit Execute and see the output",
    desc: "Click Execute and the interpreter runs your pseudocode. The Output tab shows exactly what your algorithm produces, instantly.",
    tag: "12ms avg. execution",
  },
  {
    num: "03",
    title: "Check the Reference when stuck",
    desc: "Forget the syntax for a CASE statement? Switch to the Reference tab. Every Cambridge construct with examples, right next to your code.",
    tag: "Full Cambridge IGCSE & A-Level spec",
  },
];

const REF_ENTRIES = [
  {
    title: "Variables",
    code: (
      <>
        <span className="pl-kw">DECLARE</span> name :{" "}
        <span className="pl-kw-b">TYPE</span>
      </>
    ),
  },
  {
    title: "Assignment",
    code: (
      <>
        variable <span className="pl-op">←</span> value
      </>
    ),
  },
  {
    title: "Output",
    code: (
      <>
        <span className="pl-kw">OUTPUT</span> message
      </>
    ),
  },
  {
    title: "Loops",
    code: (
      <>
        <span className="pl-kw">FOR</span> i <span className="pl-op">←</span>{" "}
        start <span className="pl-kw">TO</span> end
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;...
        <br />
        <span className="pl-kw">NEXT</span> i
      </>
    ),
  },
  {
    title: "Conditionals",
    code: (
      <>
        <span className="pl-kw">IF</span> condition{" "}
        <span className="pl-kw">THEN</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;...
        <br />
        <span className="pl-kw">ELSE</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;...
        <br />
        <span className="pl-kw">ENDIF</span>
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="max-w-[1200px] mx-auto py-[100px] px-6 md:px-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] items-center">
        {/* ── Left: Step list ── */}
        <div>
          <div className="pl-section-eyebrow">{`// how it works`}</div>
          <h2 className="pl-section-h2">
            From blank editor
            <br />
            to <em>exam confidence</em>
            <br />
            in three steps
          </h2>

          <div className="mt-12 flex flex-col">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="flex gap-5 py-7 border-b border-border last:border-b-0"
              >
                <div className="font-mono text-[11px] text-text-3 pt-1 min-w-6">
                  {step.num}
                </div>
                <div>
                  <div className="text-base font-medium text-foreground mb-1.5 font-sans">
                    {step.title}
                  </div>
                  <div className="text-sm text-text-2 leading-[1.65] font-sans">
                    {step.desc}
                  </div>
                  <div className="inline-block mt-2.5 py-0.5 px-2.5 bg-[var(--purple-glow)] border border-[rgba(139,92,246,.25)] rounded-full font-mono text-[11px] text-code-purple">
                    {step.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Reference panel mockup ── */}
        <div className="bg-surface border border-border-bright rounded-[14px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,.4)]">
          <div className="py-3.5 px-5 border-b border-border flex items-center gap-2 bg-surface-2">
            <span className="text-base">□</span>
            <span className="text-[13px] text-code-purple font-sans">
              Reference
            </span>
          </div>
          <div className="p-6">
            {REF_ENTRIES.map((entry) => (
              <div key={entry.title} className="mb-6 last:mb-0">
                <div className="text-[13px] font-medium text-foreground mb-2.5 font-sans">
                  {entry.title}
                </div>
                <div className="bg-surface-2 border border-border rounded-lg py-3 px-4 font-mono text-xs leading-[1.8]">
                  {entry.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
