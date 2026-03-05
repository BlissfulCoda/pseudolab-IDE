import type { CSSProperties } from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav style={styles.nav}>
      {/* ── Logo ── */}
      <Link href="/" style={styles.logo}>
        <span style={styles.logoIcon}>⊢</span>
        pseudolab
      </Link>

      {/* ── Navigation Links ── */}
      <ul style={styles.navLinks}>
        <li>
          <a href="#features" style={styles.navLink}>
            Features
          </a>
        </li>
        <li>
          <a href="#ai" style={{ ...styles.navLink, color: "var(--ai)" }}>
            ✦ AI Tutor
          </a>
        </li>
        <li>
          <a href="#reference" style={styles.navLink}>
            Reference
          </a>
        </li>
        <li>
          <a href="#how-it-works" style={styles.navLink}>
            How it works
          </a>
        </li>
        <li>
          <a href="#spec" style={styles.navLink}>
            Cambridge Spec
          </a>
        </li>
      </ul>

      {/* ── CTA Buttons ── */}
      <div style={styles.navCta}>
        <button className="btn-ghost">Sign in</button>
        <a href="#" className="btn-primary">
          <span>▶</span> Launch IDE
        </a>
      </div>
    </nav>
  );
}

/* ── Nav-scoped styles ── */
const styles: Record<string, CSSProperties> = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 100,
    padding: "0 40px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(9, 9, 11, 0.85)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    borderBottom: "1px solid var(--border)",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "'DM Mono', monospace",
    fontSize: "15px",
    fontWeight: 500,
    color: "var(--text)",
    textDecoration: "none",
  },

  logoIcon: {
    width: "28px",
    height: "28px",
    background: "linear-gradient(135deg, var(--purple-dim), var(--purple))",
    borderRadius: "7px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
    listStyle: "none",
  },

  navLink: {
    color: "var(--text-2)",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.2s",
  },

  navCta: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
};
