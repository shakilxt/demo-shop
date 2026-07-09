import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/services/productServices';

export default async function ProductDetails({ params }) {

    const { id } = await params;
    let product = null

    try {
        product = await getProductById(id);
    } catch (error) {
        notFound();
    }

    return (
        <div className='bg-stone-50 min-h-screen'>
            <main className="max-w-5xl mx-auto p-8 flex flex-col md:flex-row gap-12 mt-10">
                <div className="md:w-1/2">
                    <Image
                        src={product.image_url}
                        alt={product.name}
                        width={800}
                        height={800}
                        className="w-full aspect-square rounded-xl shadow-lg object-cover"
                        priority
                    />
                </div>

                <div className="md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                    <p className="text-3xl text-gray-700 mb-6">${product.price}</p>

                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        {product.description || "A premium addition to your collection. High-quality materials and perfect fit."}
                    </p>

                    <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg w-full md:w-64">
                        Buy Now
                    </button>
                </div>
            </main>
        </div>
    );
}