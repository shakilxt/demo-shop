import Image from "next/image";

export default function BrandItem({ brand, index }) {
    return (
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
    )
}