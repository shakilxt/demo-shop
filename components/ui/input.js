export default function Input({ name, type, label, autoComplete, required = true, className = "", defaultValue }) {
    return (
        <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">{label}</label>
            <input
                name={name}
                type={type}
                required={required}
                autoComplete={autoComplete}
                step={type === 'number' ? '0.01' : undefined}
                defaultValue={defaultValue}
                className={`w-full px-4 py-2 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 ${className}`}
            />
        </div>
    );
}