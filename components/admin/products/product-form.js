'use client';

import { useActionState } from 'react';
import { createProduct, editProduct } from '@/app/actions/admin/productActions';
import SubmitButton from '../submit-button';
import Input from '@/components/ui/input';
import { FormError } from '../auth/form-error';

export default function ProductForm({ product }) {

    const isEditing = Boolean(product);
    const action = isEditing ? editProduct.bind(null, product.id) : createProduct;

    const [state, formAction, isPending] = useActionState(action, { error: null });

    const submitButtonText = isPending ? 'Saving...' : isEditing ? 'Update Product' : 'Save Product'

    return (
        <form action={formAction} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm max-w-2xl flex flex-col gap-5">

            <FormError message={state?.error} />

            <Input
                name="name"
                label="Product Name"
                type="text"
                required
                defaultValue={product?.name}
                className='py-3 px-2'
            />

            <Input
                name="price"
                label="Price (USD)"
                type="number"
                required
                defaultValue={product?.price}
                className='py-3 px-2'
            />

            <Input
                name="image_url"
                label="Image URL"
                type="url"
                required
                defaultValue={product?.image_url}
                className='py-3 px-2'
            />

            <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Description</label>
                <textarea
                    name="description"
                    rows="4"
                    required
                    defaultValue={product?.description}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900"
                ></textarea>
            </div>

            <div className="pt-2">
                <SubmitButton>{submitButtonText}</SubmitButton>
            </div>

        </form>
    );

}