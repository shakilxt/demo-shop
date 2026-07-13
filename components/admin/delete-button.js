'use client';

import { deleteProduct } from '@/app/actions/admin/productActions';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { FormError } from './auth/form-error';

function DeleteSubmit() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="text-red-600 hover:text-red-800 text-sm font-medium disabled:opacity-50 cursor-pointer">
            {pending ? '...' : 'Delete'}
        </button>
    );
}

export default function DeleteButton({ id, name }) {

    const deleteWithId = deleteProduct.bind(null, id);

    const [state, formAction] = useActionState(deleteWithId, { error: null });

    return (
        <div className="inline-flex flex-col items-end gap-1">
            
            <form
                action={formAction}
                onSubmit={(e) => {
                    if (!confirm(`Delete "${name}"? This can't be undone.`)) {
                        e.preventDefault();
                    }
                }}
            >
                <DeleteSubmit />
            </form>

            <FormError message={state?.error} />
        </div>
    );
}