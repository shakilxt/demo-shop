'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error("Caught by UI boundary:", error);
    }, [error]);

    return (
        <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center max-w-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong!</h2>
                <p className="text-gray-600 mb-6">{error.message || "Failed to load database items."}</p>

                <button
                    onClick={() => reset()}
                    className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}