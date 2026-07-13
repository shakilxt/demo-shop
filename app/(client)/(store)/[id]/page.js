import { Suspense } from 'react';
import ProductDetailsContent from './product-details-content';
import { getAllProductIds } from '@/lib/services/productServices';

export async function generateStaticParams() {
    const products = await getAllProductIds();

    return products.map((product) => ({
        id: String(product.id)
    }));
}

export default async function ProductDetails({ params }) {
    return (
        <div className='bg-stone-50 min-h-screen'>
            <main className="max-w-5xl mx-auto p-8 flex flex-col md:flex-row gap-12 mt-10">

                <Suspense>
                    <ProductDetailsContent params={params} />
                </Suspense>

            </main>
        </div >
    )
}