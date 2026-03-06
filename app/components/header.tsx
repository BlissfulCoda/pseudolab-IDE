'use client'

import Link from 'next/link'
import React from 'react'
import { Menu, X, Plus } from 'lucide-react'
import { useMedia } from '@/app/hooks/use-media'
import { cn } from '@/lib/utils'

const navLinks = [
    { name: 'Features', href: '/', highlight: false },
    { name: 'AI Tutor', href: '/pages/ai-tutor', highlight: true },
    { name: 'Reference', href: '/pages/references', highlight: false },
    { name: 'How it works', href: '/pages/how-it-works', highlight: false },
    { name: 'Cambridge Spec', href: '/pages/specifications', highlight: false },
]

export default function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const isDesktop = useMedia('(min-width: 1024px)')

    return (
        <>
            <header
                role="banner"
                className="fixed top-0 left-0 right-0 z-[100] h-[60px] flex items-center justify-center bg-[rgba(9,9,11,0.9)] backdrop-blur-[14px] border-b border-border"
            >
                <div className="w-full max-w-[1152px] px-6 lg:px-10 flex items-center justify-between">
                    <Link
                        href="/"
                        aria-label="Home"
                        className="flex items-center gap-2 font-mono text-[15px] font-medium text-foreground no-underline"
                    >
                        <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                            <Plus size={16} strokeWidth={2.5} />
                        </span>
                        pseudolab
                    </Link>

                    {/* Desktop nav */}
                    <nav
                        role="navigation"
                        className="header-desktop-nav hidden lg:flex items-center gap-8"
                    >
                        <ul className="flex items-center gap-8 list-none m-0 p-0">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            'text-sm font-medium whitespace-nowrap no-underline',
                                            link.highlight ? 'text-ai' : 'text-text-2'
                                        )}
                                    >
                                        {link.highlight ? `✦ ${link.name}` : link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop CTA */}
                    {isDesktop && (
                        <div className="header-desktop-cta hidden lg:flex items-center gap-3">
                            <Link
                                href="#"
                                className="py-2 px-4 text-sm text-text-2 bg-transparent border-none cursor-pointer font-inherit no-underline"
                            >
                                Sign in
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-1.5 py-2 px-5 text-sm font-medium text-white bg-primary rounded-lg cursor-pointer font-inherit no-underline"
                            >
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
                        className="header-mobile-btn lg:hidden flex items-center justify-center bg-transparent border-none cursor-pointer p-2 text-foreground"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile menu */}
            {mobileOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="header-mobile-overlay fixed top-[60px] left-0 right-0 bottom-0 z-[99] bg-background p-6 flex flex-col gap-2 lg:hidden"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                                'text-base font-medium py-3 border-b border-border no-underline',
                                link.highlight ? 'text-ai' : 'text-foreground'
                            )}
                        >
                            {link.highlight ? `✦ ${link.name}` : link.name}
                        </Link>
                    ))}
                    <div className="mt-6 flex flex-col gap-3">
                        <Link
                            href="#"
                            className="py-2 px-4 text-sm text-text-2 bg-transparent border-none cursor-pointer font-inherit no-underline"
                            onClick={() => setMobileOpen(false)}
                        >
                            Sign in
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex items-center gap-1.5 py-2 px-5 text-sm font-medium text-white bg-primary rounded-lg cursor-pointer font-inherit no-underline"
                            onClick={() => setMobileOpen(false)}
                        >
                            <span>▶</span> Launch IDE
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}
