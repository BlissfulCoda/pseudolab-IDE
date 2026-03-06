import type { CSSProperties } from "react";
import { STATS } from "../../lib/utils";

export default function StatsBar() {
  return (
    <div style={styles.bar}>
      {STATS.map((s, i) => (
        <div
          key={i}
          style={{ ...styles.item, ...(i > 0 ? styles.itemDivider : {}) }}
        >
          <div style={styles.num}>
            {s.num}
            <span style={styles.numHighlight}>{s.numHighlight}</span>
            {s.suffix}
          </div>
          <div style={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  bar: {                                                 
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
    padding: "32px 40px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  item: {
    textAlign: "center",
    padding: "16px",
    position: "relative",
  },

  /* Left border divider between items */
  itemDivider: {
    borderLeft: "1px solid var(--border)",
  },

  num: {
    fontFamily: "'Instrument Serif', serif",
    fontSize: "40px",
    fontWeight: 400,
    color: "var(--text)",
    lineHeight: 1,
  },

  numHighlight: {
    color: "var(--code-purple)",
  },

  label: {
    marginTop: "6px",
    fontSize: "13px",
    color: "var(--text-3)",
    fontFamily: "'DM Mono', monospace",
  },
};
