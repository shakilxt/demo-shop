import { getProducts } from '@/lib/services/productServices';
import ProductCard from '@/components/ui/product-card';
import { Suspense } from 'react';

async function ProductList() {
    const products = await getProducts();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                products?.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))
            }
        </div>
    )
}

export default async function HomePage() {

    return (

        <div className='bg-stone-50 min-h-screen'>

            <main className="max-w-6xl mx-auto p-8">
                <h1 className="text-3xl font-bold mb-8 text-gray-900">Latest Arrivals</h1>

                <Suspense fallback={<div className="text-gray-600">Loading products...</div>}>
                    <ProductList />
                </Suspense>

            </main>

        </div>
    );
}