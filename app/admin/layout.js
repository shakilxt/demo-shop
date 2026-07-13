export const metadata = {
    title: 'DSP Admin Portal',
};

export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-stone-100 flex flex-col">
            {children}
        </div>
    );
}