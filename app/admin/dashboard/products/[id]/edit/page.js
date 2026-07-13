import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/services/productServices';
import ProductForm from '@/components/admin/products/product-form';
import { Suspense } from 'react';

export default async function EditProductPage({ params }) {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) notFound();

    return (
        <div className="max-w-5xl mx-auto">

            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Edit Product</h1>
                <Link href="/admin/dashboard/products" className="text-sm font-medium text-stone-500 hover:text-stone-900">
                    &larr; Back to Products
                </Link>
            </div>

            <Suspense>
                <ProductForm product={product} />
            </Suspense>
        </div>
    );
}