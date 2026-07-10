import Image from 'next/image';
import { getBrands } from '@/lib/services/brandServices';

export const dynamic = 'force-dynamic';

export default async function BrandsPage() {

    const brands = await getBrands();

    return (
        <div className="bg-stone-50 min-h-screen">
            <main className="max-w-6xl mx-auto p-8">

                <h1 className="text-3xl font-bold mb-8 text-stone-900 tracking-tight">Our Partner Brands</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {brands.map((brand, index) => (
                        <div key={brand.id} className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
                            <div className="w-20 h-20 relative rounded-full overflow-hidden bg-stone-100 border border-stone-100 mb-4">
                                <Image
                                    src={brand.logo_url}
                                    alt={brand.name}
                                    width={200}
                                    height={200}
                                    className="object-cover"
                                    priority={index < 8}
                                />
                            </div>
                            <h2 className="text-xl font-bold text-stone-900">{brand.name}</h2>
                            <p className="text-stone-500 text-sm mt-1 italic">{brand.slogan}</p>
                        </div>
                    ))}

                </div>

            </main>
        </div>
    );
}