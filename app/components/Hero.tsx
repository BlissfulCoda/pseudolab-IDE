/* ============================================================
   PSEUDOLAB — Hero.tsx
   Full-viewport hero with:
   - Radial purple glow background
   - Floating Cambridge keyword pills (animated)
   - Badge, headline, subtext, CTA buttons
   - Full IDE preview window (editor + AI feedback panel)
   ============================================================ */

import React from "react";
import type { CSSProperties } from "react";

/* ── Floating keyword pill data ── */
const FLOATING_KEYWORDS = [
  {
    text: "FOR i ← 1 TO n",
    style: {
      top: "15%",
      left: "5%",
      animationDelay: "0.8s",
      color: "var(--text-3)",
      borderColor: "var(--border)",
    },
  },
  {
    text: "DECLARE x : INTEGER",
    style: {
      top: "25%",
      right: "8%",
      animationDelay: "1s",
      color: "var(--code-purple)",
      borderColor: "rgba(139,92,246,.2)",
    },
  },
  {
    text: 'OUTPUT "Hello"',
    style: {
      top: "60%",
      left: "3%",
      animationDelay: "1.2s",
      color: "var(--code-green)",
      borderColor: "rgba(34,197,94,.15)",
    },
  },
  {
    text: "WHILE count < 10",
    style: {
      top: "70%",
      right: "5%",
      animationDelay: "1.4s",
      color: "var(--text-3)",
      borderColor: "var(--border)",
    },
  },
  {
    text: "IF score > 50",
    style: {
      top: "40%",
      left: "2%",
      animationDelay: "1.6s",
      color: "#F472B6",
      borderColor: "rgba(244,114,182,.15)",
    },
  },
  {
    text: "NEXT i",
    style: {
      top: "35%",
      right: "3%",
      animationDelay: "1.1s",
      color: "var(--text-3)",
      borderColor: "var(--border)",
    },
  },
];

/* ── IDE preview code lines ── */
const CODE_LINES = [
  <>
    <span className="cmt">{"// Cambridge IGCSE Grade Calculator"}</span>
  </>,
  <></>,
  <>
    <span className="kw">DECLARE</span> score <span className="op">:</span>{" "}
    <span className="kw-b">INTEGER</span>
  </>,
  <>
    <span className="kw">DECLARE</span> grade <span className="op">:</span>{" "}
    <span className="kw-b">STRING</span>
  </>,
  <></>,
  <>
    <span className="kw">INPUT</span> score
  </>,
  <></>,
  <>
    <span className="kw">IF</span> score <span className="op">≥</span>{" "}
    <span className="num">90</span> <span className="kw">THEN</span>
  </>,
  <>
    {"\u00a0\u00a0\u00a0\u00a0"}grade <span className="op">←</span>{" "}
    <span className="str">&quot;A*&quot;</span>
  </>,
  <>
    <span className="kw">ELSE IF</span> score <span className="op">≥</span>{" "}
    <span className="num">70</span> <span className="kw">THEN</span>
  </>,
  <>
    {"\u00a0\u00a0\u00a0\u00a0"}grade <span className="op">←</span>{" "}
    <span className="str">&quot;A&quot;</span>
  </>,
  <>
    <span className="kw">ELSE</span>
  </>,
  <>
    {"\u00a0\u00a0\u00a0\u00a0"}grade <span className="op">←</span>{" "}
    <span className="str">&quot;B&quot;</span>
  </>,
  <>
    <span className="kw">ENDIF</span>
  </>,
  <></>,
  <>
    <span className="kw">OUTPUT</span> <span className="str">&quot;Grade: &quot;</span>,{" "}
    grade
  </>,
];

export default function Hero() {
  return (
    <section className="hero-section" style={styles.hero}>
      {/* ── Radial glow background ── */}
      <div style={styles.heroBgGlow} />

      {/* ── Floating keyword pills ── */}
      <div style={styles.keywordsLayer}>
        {FLOATING_KEYWORDS.map((kw, i) => (
          <div key={i} style={{ ...styles.floatingKw, ...kw.style }}>
            {kw.text}
          </div>
        ))}
      </div>

      {/* ── Live badge ── */}
      <div style={styles.badge}>
        <div style={styles.badgeDot} />
        Cambridge IGCSE &amp; A-Level Pseudocode Spec
      </div>

      {/* ── Headline ── */}
      <h1 style={styles.h1}>
        Write pseudocode.
        <br />
        <em style={styles.h1Em}>See it run.</em>
        <br />
        Ace the exam.
      </h1>

      {/* ── Subtext ── */}
      <p className="hero-sub" style={styles.sub}>
        The only IDE built specifically for Cambridge International pseudocode —
        with real-time execution, syntax highlighting, AI-powered feedback, and
        a built-in reference guide.
      </p>

      {/* ── CTA Buttons ── */}
      <div className="hero-actions" style={styles.actions}>
        <a href="#" className="btn-large">
          <span>▶</span> Start writing — it&apos;s free
        </a>
        <a href="#" className="btn-outline">
          Watch 2 min demo →
        </a>
      </div>

      {/* ── IDE Preview window ── */}
      <div className="hero-preview" style={styles.preview}>
        <div style={styles.previewGlow} />
        <div style={styles.ideWindow}>
          {/* Tabs bar */}
          <div className="hero-ide-tabs" style={styles.ideTabs}>
            <IdeTab label="⚡ Editor" activeColor="var(--orange)" active />
            <IdeTab label="⊢_ Output" activeColor="var(--code-green)" />
            <IdeTab label="□ Reference" activeColor="var(--code-purple)" />
            <IdeTab
              label="✦ AI Feedback"
              activeColor="var(--ai)"
              active
              aiTab
            />
            {/* Execute button */}
            <div className="hero-execute-btn" style={styles.executeBtn}>▶ Execute</div>
          </div>

          {/* Editor + AI panel body */}
          <div className="hero-ide-body" style={styles.ideBody}>
            {/* Line numbers */}
            <div className="hero-gutter" style={styles.gutter}>
              {CODE_LINES.map((_, i) => (
                <div key={i} style={styles.lineNum}>
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Code area */}
            <div className="hero-code-area" style={styles.codeArea}>
              {CODE_LINES.map((line, i) => (
                <span key={i} style={styles.codeLine}>
                  {line}
                </span>
              ))}
            </div>

            {/* AI mini panel */}
            <AiFeedbackMiniPanel />
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
      className="hero-ide-tab"
      style={{
        ...styles.ideTab,
        color,
        borderBottom: `2px solid ${borderColor}`,
      }}
    >
      {label}
    </div>
  );
}

function AiFeedbackMiniPanel() {
  return (
    <div className="hero-ai-panel" style={styles.aiMiniPanel}>
      {/* Panel header */}
      <div style={styles.aiMiniHeader}>
        <span>✦</span> AI Feedback
        <span style={styles.aiMiniScore}>7/10</span>
      </div>
      {/* Panel body */}
      <div style={styles.aiMiniBody}>
        <div style={styles.aiWarnLabel}>⚠ Mark Scheme</div>
        <p style={styles.aiMiniText}>
          Missing boundary case for scores between 0–69. Cambridge mark scheme
          awards 1 mark for handling this.
        </p>
        {/* Suggested fix */}
        <div style={styles.aiCodeSuggest}>
          <span className="kw">ELSE</span>
          <br />
          &nbsp;&nbsp;grade <span className="op">←</span>{" "}
          <span className="str">&quot;C&quot;</span>
          <br />
          <span className="cmt">{"// Add for full marks"}</span>
        </div>
        <div style={styles.aiOkLabel}>✓ Correct</div>
        <p style={styles.aiMiniText}>
          Proper use of DECLARE before INPUT. Good indentation structure.
        </p>
      </div>
    </div>
  );
}

/* ── Hero-scoped styles ── */
const styles: Record<string, CSSProperties> = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "120px 40px 80px",
    position: "relative",
    overflow: "hidden",
  },

  heroBgGlow: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "800px",
    height: "500px",
    background:
      "radial-gradient(ellipse at center, rgba(109,40,217,.18) 0%, transparent 70%)",
    pointerEvents: "none",
  },

  keywordsLayer: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    overflow: "hidden",
  },

  floatingKw: {
    position: "absolute",
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    padding: "5px 12px",
    borderRadius: "100px",
    border: "1px solid",
    background: "var(--surface)",
    opacity: 0,
    animation: "floatIn 0.8s ease forwards, floatDrift 8s ease-in-out infinite",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 14px",
    background: "var(--surface)",
    border: "1px solid var(--border-bright)",
    borderRadius: "100px",
    fontSize: "12px",
    fontFamily: "'DM Mono', monospace",
    color: "var(--code-purple)",
    marginBottom: "36px",
    position: "relative",
    zIndex: 2,
    animation: "fadeUp 0.6s ease both",
  },

  badgeDot: {
    width: "6px",
    height: "6px",
    background: "var(--green)",
    borderRadius: "50%",
    animation: "pulse 2s ease infinite",
  },

  h1: {
    fontFamily: "'Instrument Serif', serif",
    fontSize: "clamp(36px, 5vw, 56px)",
    fontWeight: 400,
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
    maxWidth: "900px",
    position: "relative",
    zIndex: 2,
    animation: "fadeUp 0.6s 0.1s ease both",
  },

  h1Em: {
    fontStyle: "italic",
    color: "var(--code-purple)",
  },

  sub: {
    marginTop: "20px",
    fontSize: "16px",
    color: "var(--text-2)",
    maxWidth: "560px",
    lineHeight: 1.7,
    position: "relative",
    zIndex: 2,
    animation: "fadeUp 0.6s 0.2s ease both",
  },

  actions: {
    marginTop: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    position: "relative",
    zIndex: 2,
    animation: "fadeUp 0.6s 0.3s ease both",
  },

  preview: {
    marginTop: "72px",
    width: "100%",
    maxWidth: "1000px",
    position: "relative",
    zIndex: 2,
    animation: "fadeUp 0.8s 0.4s ease both",
  },

  previewGlow: {
    position: "absolute",
    inset: "-40px",
    background:
      "radial-gradient(ellipse at center bottom, rgba(109,40,217,.25) 0%, transparent 60%)",
    pointerEvents: "none",
  },

  ideWindow: {
    background: "var(--surface)",
    border: "1px solid var(--border-bright)",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 40px 100px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.03)",
  },

  ideTabs: {
    display: "flex",
    borderBottom: "1px solid var(--border)",
    padding: "0 16px",
    alignItems: "center",
  },

  ideTab: {
    padding: "12px 16px",
    fontSize: "13px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: "'Geist', sans-serif",
  },

  executeBtn: {
    marginLeft: "auto",
    padding: "6px 14px",
    background: "#28C840",
    borderRadius: "6px",
    fontSize: "12px",
    fontFamily: "'DM Mono', monospace",
    color: "#000",
    fontWeight: 500,
    cursor: "pointer",
  },

  ideBody: {
    display: "flex",
    height: "360px",
  },

  gutter: {
    width: "44px",
    background: "var(--surface-2)",
    borderRight: "1px solid var(--border)",
    padding: "16px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  lineNum: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "12px",
    color: "var(--text-3)",
    lineHeight: "24px",
    width: "100%",
    textAlign: "center",
    userSelect: "none",
  },

  codeArea: {
    flex: 1,
    padding: "16px 20px",
    fontFamily: "'DM Mono', monospace",
    fontSize: "13px",
    lineHeight: "24px",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
  },

  codeLine: {
    display: "block",
    whiteSpace: "pre",
    minHeight: "24px",
  },

  /* AI mini panel */
  aiMiniPanel: {
    width: "280px",
    borderLeft: "1px solid var(--border)",
    background: "var(--surface-2)",
    display: "flex",
    flexDirection: "column",
  },

  aiMiniHeader: {
    padding: "12px 16px",
    borderBottom: "1px solid var(--border)",
    fontSize: "12px",
    color: "var(--ai)",
    fontFamily: "'DM Mono', monospace",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  aiMiniScore: {
    marginLeft: "auto",
    padding: "2px 8px",
    background: "var(--ai-glow)",
    border: "1px solid var(--ai-border)",
    borderRadius: "100px",
    fontSize: "10px",
  },

  aiMiniBody: {
    padding: "14px 16px",
    flex: 1,
    overflowY: "auto",
  },

  aiWarnLabel: {
    fontSize: "11px",
    color: "var(--orange)",
    fontFamily: "'DM Mono', monospace",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "8px",
  },

  aiOkLabel: {
    fontSize: "11px",
    color: "var(--code-green)",
    fontFamily: "'DM Mono', monospace",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "8px",
    marginTop: "12px",
  },

  aiMiniText: {
    fontSize: "12px",
    color: "var(--text-2)",
    lineHeight: 1.6,
    fontFamily: "'Geist', sans-serif",
    marginBottom: "10px",
  },

  aiCodeSuggest: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    color: "var(--code-purple)",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    padding: "8px 10px",
    lineHeight: 1.7,
    marginBottom: "12px",
  },
};
