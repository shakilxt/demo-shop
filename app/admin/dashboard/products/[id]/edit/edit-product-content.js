import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/services/productServices';
import ProductForm from '@/components/admin/products/product-form';

export default async function EditProductContent({ params }) {

    const { id } = await params;
    const product = await getProductById(id);

    if (!product) notFound();

    return <ProductForm product={product} />;

}