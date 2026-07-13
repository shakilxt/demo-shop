import Link from 'next/link';
import ProductForm from '@/components/admin/products/product-form';

export default function NewProductPage() {
    return (

        <div className="max-w-5xl mx-auto">

            <div className="flex items-center justify-between mb-8">

                <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Add New Product</h1>
                
                <Link href="/admin/dashboard/products" className="text-sm font-medium text-stone-500 hover:text-stone-900">
                    &larr; Back to Products
                </Link>

            </div>

            <ProductForm />

        </div>

    );
}