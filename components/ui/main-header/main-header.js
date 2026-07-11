'use client';

import Link from "next/link";
import { Suspense, useState } from "react";
import NavLink from "./nav-link";

export default function MainHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-stone-100 bg-white/95 shadow-sm backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between gap-4">
                    <Link href="/" className="text-lg sm:text-xl font-light tracking-[0.25em] text-stone-900">
                        DEMO SHOP
                    </Link>

                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-stone-200 text-stone-900 transition hover:bg-stone-100 md:hidden"
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsOpen((current) => !current)}
                    >
                        <span className="relative block h-4 w-5">
                            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                            <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                            <span className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                        </span>
                    </button>

                    <Suspense fallback={<div className="hidden md:block w-50 h-6" />}>
                        <nav className="hidden items-center gap-6 md:flex">
                            <NavLink href="/">All Products</NavLink>
                            <NavLink href="/brands">Featured Brands</NavLink>
                        </nav>
                    </Suspense>
                </div>

                <nav
                    id="mobile-navigation"
                    className={`md:hidden overflow-hidden border-t border-stone-100 transition-[max-height,opacity] duration-200 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <Suspense fallback={<div className="h-22 w-full" />}>
                        <div className="flex flex-col gap-3 py-4">
                            <NavLink href="/" onNavigate={() => setIsOpen(false)}>
                                All Products
                            </NavLink>
                            <NavLink href="/brands" onNavigate={() => setIsOpen(false)}>
                                Featured Brands
                            </NavLink>
                        </div>
                    </Suspense>
                </nav>
            </div>
        </header>
    );
}