import { getBrands } from "@/lib/services/brandServices";
import BrandItem from "./brand-item";

export async function BrandGrid() {

    const brands = await getBrands();

    if (!brands || brands.length === 0) {
        return <div className="text-stone-500 py-10">Sorry, no brands are available at the moment.</div>;
    }

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {brands.map((brand, index) => (
                <BrandItem key={brand.id} brand={brand} index={index} />
            ))}

        </div>

    )

}