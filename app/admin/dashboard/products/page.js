import Link from 'next/link';
import ProductsTable from '@/components/admin/products/products-table';
import { Suspense } from 'react';

export default async function ProductsPage() {

    return (
        <div className="max-w-5xl mx-auto">

            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Products</h1>
                <Link
                    href="/admin/dashboard/products/new"
                    className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 transition"
                >
                    + Add Product
                </Link>
            </div>

            <Suspense>
                <ProductsTable />
            </Suspense>

        </div>
    );
}