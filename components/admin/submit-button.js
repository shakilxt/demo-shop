'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton({ children, pendingText }) {
    const { pending } = useFormStatus();

    return (
        <button 
            type="submit" 
            disabled={pending}
            className="w-full bg-stone-900 text-white p-3 rounded-lg font-semibold hover:bg-stone-800 transition-colors disabled:bg-stone-400 disabled:cursor-not-allowed"
        >
            {pending ? pendingText : children}
        </button>
    );
}