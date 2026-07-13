import { logoutAdmin } from '@/app/actions/admin/authActions';
import SidebarLinks from './sidebar-links';
import Link from 'next/link';
import { Suspense } from 'react';

export default function AdminSidebar() {
    return (
        <aside className="w-64 bg-stone-900 flex flex-col md:flex shrink-0">

            <div className="h-16 flex items-center px-6 border-b border-stone-200">
                <Link href="/" className="text-lg sm:text-xl font-light tracking-[0.25em] text-stone-50">
                    DEMO SHOP
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                <Suspense>
                    <SidebarLinks />
                </Suspense>
            </nav>

            <div className="p-4 flex items-center justify-center">
                <form action={logoutAdmin}>
                    <button
                        type="submit"
                        className="text-sm font-medium text-red-200 hover:text-red-700 transition-colors hover:underline rounded-lg cursor-pointer"
                    >
                        Sign Out
                    </button>
                </form>
            </div>

        </aside>
    );
}