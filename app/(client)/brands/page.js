import { Suspense } from 'react';
import { BrandGrid } from './brand-grid';

export default async function BrandsPage() {

    return (
        <div className="bg-stone-50 min-h-screen">
            <main className="max-w-6xl mx-auto p-8">

                <h1 className="text-3xl font-bold mb-8 text-stone-900 tracking-tight">Our Partner Brands</h1>

                <Suspense>
                    <BrandGrid />
                </Suspense>

            </main>
        </div>
    );
}