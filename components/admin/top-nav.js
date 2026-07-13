import Link from "next/link";
import { verifyAdmin } from "@/lib/auth/verifyAdmin";
import { Suspense } from "react";

export default async function AdminTopNav() {

    return (
        <header className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-6 shrink-0">

            <Link href="/">
                <span className="md:hidden text-lg sm:text-xl font-light tracking-[0.25em] text-stone-900">DEMO SHOP</span>
            </Link>

            <div className="hidden md:block"></div>

            <div className="flex items-center gap-4">
                <Suspense>
                    <AdminName />
                </Suspense>
            </div>

        </header>
    );
}

async function AdminName() {
    const admin = await verifyAdmin();

    return <span className="text-sm font-normal text-stone-400 hidden sm:inline-block">
        Logged in as <span className="text-stone-900 font-medium">{admin.name ?? 'Admin'}</span>
    </span>
}