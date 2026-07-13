'use client';

import { useSearchParams } from 'next/navigation';

export default function RegisteredNotice() {
    const searchParams = useSearchParams();
    
    if (searchParams.get('registered') !== 'true') return null;

    return (
        <p className="mb-4 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700 border border-green-100">
            Account created successfully. Please sign in.
        </p>
    );
}