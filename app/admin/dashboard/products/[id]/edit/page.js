import Link from 'next/link';
import { Suspense } from 'react';
import EditProductContent from './edit-product-content';

export default function EditProductPage({ params }) {

    return (
        <div className="max-w-5xl mx-auto">
            
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Edit Product</h1>
                <Link href="/admin/dashboard/products" className="text-sm font-medium text-stone-500 hover:text-stone-900">
                    &larr; Back to Products
                </Link>
            </div>

            <Suspense>
                <EditProductContent params={params} />
            </Suspense>
        </div>
    );
}