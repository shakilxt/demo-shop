export default function DashboardPage() {
    return (
        <div className="max-w-5xl mx-auto">

            <h1 className="text-2xl font-bold text-stone-900 mb-8 tracking-tight">Dashboard Overview</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Product Metric Card */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-center h-32">
                    <h3 className="text-sm font-medium text-stone-500 mb-1 uppercase tracking-wider">Total Products</h3>
                    <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold text-stone-900">--</p>
                        <span className="text-sm text-stone-400 font-medium">in database</span>
                    </div>
                </div>

                {/* Brand Metric Card */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-center h-32">
                    <h3 className="text-sm font-medium text-stone-500 mb-1 uppercase tracking-wider">Active Brands</h3>
                    <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold text-stone-900">--</p>
                        <span className="text-sm text-stone-400 font-medium">partnerships</span>
                    </div>
                </div>

            </div>
            
        </div>
    );
}