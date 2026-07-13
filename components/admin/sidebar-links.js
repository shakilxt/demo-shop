'use client';

import { usePathname } from 'next/navigation';
import SidebarLink from './sidebar-link';

const navItems = [
    {
        name: 'Overview',
        href: '/admin/dashboard',
        icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    },
    {
        name: 'Products',
        href: '/admin/dashboard/products',
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
    },
    {
        name: 'Brands',
        href: '/admin/dashboard/brands',
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    }
];

export default function SidebarLinks() {
    
    const pathname = usePathname();

    return (
        <>
            {navItems.map((item) => {
                const isActive = item.href === '/admin/dashboard'
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                return (
                    <SidebarLink
                        key={item.name}
                        href={item.href}
                        icon={item.icon}
                        label={item.name}
                        active={isActive}
                    />
                );
            })}
        </>
    );
}
