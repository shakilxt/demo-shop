export function FormError({ message }) {
    if (!message) return null;
    return (
        <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600 border border-red-100">
            {message}
        </p>
    );
}