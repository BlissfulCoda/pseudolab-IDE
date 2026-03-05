'use client'

import Link from 'next/link'
import React from 'react'
import { Menu, X, Plus } from 'lucide-react'
import { useMedia } from '@/app/hooks/use-media'

const navLinks = [
    { name: 'Features', href: '/', highlight: false },
    { name: 'AI Tutor', href: '/pages/ai-tutor', highlight: true },
    { name: 'Reference', href: '/pages/references', highlight: false },
    { name: 'How it works', href: '/pages/how-it-works', highlight: false },
    { name: 'Cambridge Spec', href: '/pages/specifications', highlight: false },
]

const styles: Record<string, React.CSSProperties> = {
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(9, 9, 11, 0.9)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--border)',
    },
    inner: {
        width: '100%',
        maxWidth: 1152,
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: "'DM Mono', monospace",
        fontSize: 15,
        fontWeight: 500,
        color: 'var(--text)',
        textDecoration: 'none',
    },
    logoIcon: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'var(--purple)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        gap: 32,
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    navLink: {
        color: 'var(--text-2)',
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: 500,
        whiteSpace: 'nowrap',
    },
    navLinkHighlight: {
        color: 'var(--ai)',
    },
    cta: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
    },
    mobileMenuBtn: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 8,
        color: 'var(--text)',
    },
    mobileOverlay: {
        position: 'fixed',
        top: 60,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99,
        background: 'var(--bg)',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    mobileNavLink: {
        color: 'var(--text)',
        textDecoration: 'none',
        fontSize: 16,
        fontWeight: 500,
        padding: '12px 0',
        borderBottom: '1px solid var(--border)',
    },
    btnGhost: {
        padding: '8px 16px',
        fontSize: 14,
        color: 'var(--text-2)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        textDecoration: 'none',
    },
    btnPrimary: {
        padding: '8px 20px',
        fontSize: 14,
        fontWeight: 500,
        color: 'white',
        background: 'var(--purple)',
        border: 'none',
        borderRadius: 8,
        cursor: 'pointer',
        fontFamily: 'inherit',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
    },
}

export default function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const isDesktop = useMedia('(min-width: 1024px)')

    return (
        <>
            <header style={styles.header} role="banner">
                <div style={styles.inner}>
                    <Link href="/" style={styles.logo} aria-label="Home">
                        <span style={styles.logoIcon}>
                            <Plus size={16} strokeWidth={2.5} />
                        </span>
                        pseudolab
                    </Link>

                    {/* Desktop nav */}
                    <nav role="navigation" className="header-desktop-nav" style={{ gap: 32 }}>
                        <ul style={styles.nav}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        style={{
                                            ...styles.navLink,
                                            ...(link.highlight ? styles.navLinkHighlight : {}),
                                        }}>
                                        {link.highlight ? `✦ ${link.name}` : link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop CTA - only render on desktop to avoid DOM bloat on mobile/iPad */}
                    {isDesktop && (
                        <div className="header-desktop-cta" style={styles.cta}>
                            <Link href="#" style={styles.btnGhost}>
                                Sign in
                            </Link>
                            <Link href="#" style={styles.btnPrimary}>
                                <span>▶</span> Launch IDE
                            </Link>
                        </div>
                    )}

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                        className="header-mobile-btn">
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile menu */}
            {mobileOpen && (
                <div
                    style={styles.mobileOverlay}
                    className="header-mobile-overlay"
                    role="dialog"
                    aria-modal="true">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                ...styles.mobileNavLink,
                                ...(link.highlight ? styles.navLinkHighlight : {}),
                            }}>
                            {link.highlight ? `✦ ${link.name}` : link.name}
                        </Link>
                    ))}
                    <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <Link href="#" style={styles.btnGhost} onClick={() => setMobileOpen(false)}>
                            Sign in
                        </Link>
                        <Link href="#" style={styles.btnPrimary} onClick={() => setMobileOpen(false)}>
                            <span>▶</span> Launch IDE
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}
