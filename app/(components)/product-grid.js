import ProductCard from "@/components/ui/product-card";
import { getProducts } from "@/lib/services/productServices";

export async function ProductGrid() {

    const products = await getProducts();

    if (!products || products.length === 0) {
        return <div className="text-stone-500 py-10">Sorry, current no items are available in the store.</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                products?.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))
            }
        </div>
    )
    
}
