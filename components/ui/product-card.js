import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product, index }) {
    return (
        <Link href={`/${product.id}`} className="block group h-full">

            <div className="h-full flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-xs hover:shadow-sm transition">

                <Image
                    src={product.image_url}
                    alt={product.name}
                    width={800}
                    height={800}
                    className="w-full aspect-square object-cover"
                    priority={index < 4}
                />

                <div className="p-4 bg-white flex flex-col grow">

                    <div className='flex flex-col justify-between grow'>

                        <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
                        <p className="text-gray-600 mt-2 line-clamp-2 text-sm">{product.description}</p>

                    </div>

                    <p className="text-gray-500 mt-auto pt-2">${product.price}</p>

                </div>

            </div>

        </Link>
    );
}