
import DeleteButton from "../delete-button";
import Image from "next/image";
import Link from "next/link";

export default function ProductsTable({ products }) {

    return (
        <div className="overflow-hidden rounded-lg border border-stone-200 bg-white">
            <table className="w-full text-sm">
                <thead className="bg-stone-50 text-left text-stone-500">
                    <tr>
                        <th className="px-4 py-3 font-medium"></th>
                        <th className="px-4 py-3 font-medium">Name</th>
                        <th className="px-4 py-3 font-medium">Price</th>
                        <th className="px-4 py-3 font-medium">Added</th>
                        <th className="px-4 py-3 font-medium text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">

                    {products.map((product) => {

                        return (
                            <tr key={product.id}>
                                <td className="px-4 py-3">
                                    <Image
                                        src={product.image_url}
                                        alt={product.name}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                </td>
                                <td className="px-4 py-3 text-stone-900">{product.name}</td>
                                <td className="px-4 py-3 text-stone-600">${Number(product.price).toFixed(2)}</td>
                                <td className="px-4 py-3 text-stone-600">
                                    {new Date(product.created_at).toLocaleDateString()}
                                </td>

                                <td className="px-4 py-3 text-right">

                                    <div className="flex items-center justify-end gap-2">
                                        <Link
                                            href={`/admin/dashboard/products/${product.id}/edit`}
                                            className="text-stone-600 hover:text-stone-900 text-sm font-medium"
                                        >
                                            Edit
                                        </Link>
                                        <span className="text-stone-300">|</span>
                                        <DeleteButton id={product.id} name={product.name} />
                                    </div>

                                </td>

                            </tr>
                        )
                    })}

                    {products.length === 0 && (
                        <tr>
                            <td colSpan="5" className="px-6 py-8 text-center text-stone-500">
                                No products found.
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    );
}