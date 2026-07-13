import Link from 'next/link';

export default function SidebarLink({ href, icon, label, active = false }) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors 
                ${active ? 'bg-stone-50 text-stone-900' : 'text-stone-50 hover:bg-stone-800 hover:text-stone-50'}
            `}
        >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
            </svg>
            {label}
        </Link>
    );
}