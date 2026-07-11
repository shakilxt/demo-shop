import Link from "next/link";

export default function HeaderFallback() {
    return (
        <header className="sticky top-0 z-50 border-b border-stone-100 bg-white/95 shadow-sm backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between gap-4">
                    <Link href="/" className="text-lg sm:text-xl font-light tracking-[0.25em] text-stone-900">
                        DEMO SHOP
                    </Link>
                    <nav className="hidden items-center gap-6 md:flex">
                        <Link href="/" className="text-md font-semibold text-stone-900">All Products</Link>
                        <Link href="/brands" className="text-md font-semibold text-stone-900">Featured Brands</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}