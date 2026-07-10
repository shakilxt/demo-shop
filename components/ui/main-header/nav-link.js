'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, onNavigate }) {

    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={onNavigate}
            className={`text-md font-semibold transition-all decoration-2 decoration-amber-600 hover:underline hover:underline-offset-4 
                ${isActive ? "text-amber-600" : "text-stone-900"}`}
        >
            {children}
        </Link>
    );

}