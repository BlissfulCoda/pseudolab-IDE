/* ============================================================
   PSEUDOLAB — Hero.tsx
   Full-viewport hero with:
   - Radial purple glow background
   - Floating Cambridge keyword pills (animated)
   - Badge, headline, subtext, CTA buttons
   - Full IDE preview window (editor + AI feedback panel)
   ============================================================ */
import { FLOATING_KEYWORDS } from "@/lib/utils";

/* ── IDE preview code lines ── */
const CODE_LINES = [
  <>
    <span className="pl-cmt">{"// Cambridge IGCSE Grade Calculator"}</span>
  </>,
  <></>,
  <>
    <span className="pl-kw">DECLARE</span> score{" "}
    <span className="pl-op">:</span> <span className="pl-kw-b">INTEGER</span>
  </>,
  <>
    <span className="pl-kw">DECLARE</span> grade{" "}
    <span className="pl-op">:</span> <span className="pl-kw-b">STRING</span>
  </>,
  <></>,
  <>
    <span className="pl-kw">INPUT</span> score
  </>,
  <></>,
  <>
    <span className="pl-kw">IF</span> score <span className="pl-op">≥</span>{" "}
    <span className="pl-num">90</span> <span className="pl-kw">THEN</span>
  </>,
  <>
    {"\u00a0\u00a0\u00a0\u00a0"}grade <span className="pl-op">←</span>{" "}
    <span className="pl-str">&quot;A*&quot;</span>
  </>,
  <>
    <span className="pl-kw">ELSE IF</span> score{" "}
    <span className="pl-op">≥</span> <span className="pl-num">70</span>{" "}
    <span className="pl-kw">THEN</span>
  </>,
  <>
    {"\u00a0\u00a0\u00a0\u00a0"}grade <span className="pl-op">←</span>{" "}
    <span className="pl-str">&quot;A&quot;</span>
  </>,
  <>
    <span className="pl-kw">ELSE</span>
  </>,
  <>
    {"\u00a0\u00a0\u00a0\u00a0"}grade <span className="pl-op">←</span>{" "}
    <span className="pl-str">&quot;B&quot;</span>
  </>,
  <>
    <span className="pl-kw">ENDIF</span>
  </>,
  <></>,
  <>
    <span className="pl-kw">OUTPUT</span>{" "}
    <span className="pl-str">&quot;Grade: &quot;</span>, grade
  </>,
];

export default function Hero() {
  return (
    <section className="hero-section min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden pt-8 px-4 pb-10 sm:py-[100px] sm:px-7 sm:pb-[70px] md:py-[120px] md:px-10 md:pb-20">
      {/* ── Radial glow background ── */}
      <div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(109,40,217,.18) 0%, transparent 70%)",
        }}
      />

      {/* ── Floating keyword pills ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {FLOATING_KEYWORDS.map((kw, i) => (
          <div
            key={i}
            className="absolute font-mono text-[11px] py-1.5 px-3 rounded-full border bg-surface opacity-0 pl-float-pill"
            style={kw.style}
          >
            {kw.text}
          </div>
        ))}
      </div>

      {/* ── Live badge ── */}
      <div className="hero-badge inline-flex items-center gap-2 py-1.5 px-3.5 bg-surface border border-border-bright rounded-full text-xs font-mono text-code-purple mb-5 sm:mb-9 relative z-[2] pl-fade-up">
        <div className="w-1.5 h-1.5 rounded-full bg-chart-2 pl-pulse-badge" />
        Cambridge IGCSE &amp; A-Level Pseudocode Spec
      </div>

      {/* ── Headline ── */}
      <h1 className="font-serif text-[clamp(36px,5vw,56px)] font-normal leading-[1.05] tracking-[-0.02em] max-w-[900px] relative z-[2] pl-fade-up-delay-1">
        Write pseudocode.
        <br />
        <em className="italic text-code-purple">See it run.</em>
        <br />
        Ace the exam.
      </h1>

      {/* ── Subtext ── */}
      <p className="hero-sub mt-4 text-sm sm:mt-5 sm:text-base text-text-2 max-w-[560px] leading-[1.7] relative z-[2] pl-fade-up-delay-2">
        The only IDE built specifically for Cambridge International pseudocode —
        with real-time execution, syntax highlighting, AI-powered feedback, and
        a built-in reference guide.
      </p>

      {/* ── CTA Buttons ── */}
      <div className="hero-actions mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-[320px] sm:max-w-none sm:w-auto relative z-[2] pl-fade-up-delay-3">
        <a
          href="#"
          className="pl-btn-large w-full sm:w-auto justify-center py-2.5 px-5 sm:py-3.5 sm:px-7 text-sm sm:text-base rounded-lg sm:rounded-[10px]"
        >
          <span>▶</span> Start writing — it&apos;s free
        </a>
        <a
          href="#"
          className="pl-btn-outline w-full sm:w-auto justify-center py-2.5 px-4 sm:py-3.5 sm:px-6 text-sm sm:text-base rounded-lg sm:rounded-[10px]"
        >
          Watch 2 min demo →
        </a>
      </div>

      {/* ── IDE Preview window ── */}
      <div className="hero-preview mt-7 sm:mt-[72px] w-full max-w-[1000px] relative z-[2] pl-fade-up-delay-4 px-2 sm:px-0">
        <div
          className="absolute -inset-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgba(109,40,217,.25) 0%, transparent 60%)",
          }}
        />
        <div className="bg-surface border border-border-bright rounded-[14px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,.6),0_0_0_1px_rgba(255,255,255,.03)]">
          {/* Tabs bar */}
          <div className="hero-ide-tabs flex flex-nowrap overflow-x-auto overflow-y-hidden pl-scrollbar-hide border-b border-border px-3 sm:px-4 items-center">
            <IdeTab label="⚡ Editor" activeColor="var(--orange)" active />
            <IdeTab label="⊢_ Output" activeColor="var(--code-green)" />
            <IdeTab label="□ Reference" activeColor="var(--code-purple)" />
            <IdeTab
              label="✦ AI Feedback"
              activeColor="var(--ai)"
              active
              aiTab
            />
            <div className="hero-execute-btn ml-auto py-1.5 px-3.5 bg-[#28C840] rounded-md text-xs font-mono text-black font-medium cursor-pointer shrink-0">
              ▶ Execute
            </div>
          </div>

          {/* Editor + AI panel body */}
          <div className="hero-ide-body flex flex-col md:flex-row min-h-[260px] md:min-h-[360px] md:h-[360px]">
            {/* Editor: gutter + code (order-2 on mobile so AI shows first) */}
            <div className="flex flex-1 min-w-0 min-h-0 order-2 md:order-1">
              {/* Line numbers */}
              <div className="hero-gutter w-8 md:w-11 bg-surface-2 border-r border-border py-2 md:py-4 flex flex-col items-center shrink-0">
                {CODE_LINES.map((_, i) => (
                  <div
                    key={i}
                    className="font-mono text-xs text-text-3 leading-6 w-full text-center select-none"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>

              {/* Code area */}
              <div className="hero-code-area flex-1 min-h-[80px] md:min-h-[100px] py-2 px-3 md:py-4 md:px-5 font-mono text-[13px] leading-6 overflow-auto flex flex-col">
                {CODE_LINES.map((line, i) => (
                  <span key={i} className="block whitespace-pre min-h-6">
                    {line}
                  </span>
                ))}
              </div>
            </div>

            {/* AI mini panel - first on mobile, fixed 280px on desktop */}
            <div className="order-1 md:order-2 md:w-[280px] md:shrink-0">
              <AiFeedbackMiniPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ── */

function IdeTab({
  label,
  active = false,
  aiTab = false,
}: {
  label: string;
  active?: boolean;
  aiTab?: boolean;
  activeColor?: string;
}) {
  const color = aiTab
    ? "var(--ai)"
    : active
      ? "var(--orange)"
      : "var(--text-3)";
  const borderColor = aiTab
    ? "var(--ai)"
    : active
      ? "var(--orange)"
      : "transparent";
  return (
    <div
      className="hero-ide-tab py-3 px-4 text-[13px] cursor-pointer flex items-center gap-1.5 font-sans shrink-0"
      style={{ color, borderBottom: `2px solid ${borderColor}` }}
    >
      {label}
    </div>
  );
}

function AiFeedbackMiniPanel() {
  return (
    <div className="hero-ai-panel w-full md:w-full min-h-[100px] md:min-h-0 border-t md:border-t-0 md:border-l border-border bg-surface-2 flex flex-col">
      {/* Panel header */}
      <div className="py-2 px-3 md:py-3 md:px-4 border-b border-border text-xs text-ai font-mono flex items-center gap-1.5">
        <span>✦</span> AI Feedback
        <span className="ml-auto py-0.5 px-2 bg-ai-glow border border-ai-border rounded-full text-[10px]">
          7/10
        </span>
      </div>
      {/* Panel body */}
      <div className="py-2 px-3 md:py-3.5 md:px-4 flex-1 overflow-y-auto">
        <div className="text-[11px] text-chart-4 font-mono uppercase tracking-[0.08em] mb-2">
          ⚠ Mark Scheme
        </div>
        <p className="text-xs text-text-2 leading-[1.6] font-sans mb-2.5">
          Missing boundary case for scores between 0–69. Cambridge mark scheme
          awards 1 mark for handling this.
        </p>
        {/* Suggested fix */}
        <div className="font-mono text-[11px] text-code-purple bg-surface border border-border rounded-md py-2 px-2.5 leading-[1.7] mb-3">
          <span className="pl-kw">ELSE</span>
          <br />
          &nbsp;&nbsp;grade <span className="pl-op">←</span>{" "}
          <span className="pl-str">&quot;C&quot;</span>
          <br />
          <span className="pl-cmt">{"// Add for full marks"}</span>
        </div>
        <div className="text-[11px] text-code-green font-mono uppercase tracking-[0.08em] mb-2 mt-3">
          ✓ Correct
        </div>
        <p className="text-xs text-text-2 leading-[1.6] font-sans mb-2.5">
          Proper use of DECLARE before INPUT. Good indentation structure.
        </p>
      </div>
    </div>
  );
}
