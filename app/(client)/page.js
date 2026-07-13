import { Suspense } from 'react';
import { ProductGrid } from '../../components/client/product-grid';

export default async function HomePage() {

    return (

        <div className='bg-stone-50 min-h-screen'>

            <main className="max-w-6xl mx-auto p-8">
                <h1 className="text-3xl font-bold mb-8 text-gray-900">Latest Arrivals</h1>

                <Suspense>
                    <ProductGrid />
                </Suspense>

            </main>

        </div>
    );
}