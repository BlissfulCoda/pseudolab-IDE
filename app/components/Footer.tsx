/* ============================================================
   PSEUDOLAB — Footer.jsx
   Minimal footer with logo, nav links, and attribution copy.
   ============================================================ */

import React from "react";

const FOOTER_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
  { label: "EduFeedbackPro", href: "#" },
];

export default function Footer() {
  return (
    <>
      <hr className="divider" style={{ margin: "0 40px" }} />
      <footer style={styles.footer}>
        <div style={styles.logo}>pseudolab — © 2025</div>

        <ul style={styles.links}>
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} style={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={styles.copy}>Built by a Cambridge CS teacher</div>
      </footer>
    </>
  );
}

const styles = {
  footer: {
    padding: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "14px",
    color: "var(--text-3)",
  },

  links: {
    display: "flex",
    gap: "32px",
    listStyle: "none",
  },

  link: {
    fontSize: "13px",
    color: "var(--text-3)",
    textDecoration: "none",
    transition: "color 0.2s",
  },

  copy: {
    fontSize: "12px",
    color: "var(--text-3)",
    fontFamily: "'DM Mono', monospace",
  },
};
