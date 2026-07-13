import ClientHeader from "@/components/ui/client-header/client-header";

export default function ClientLayout({ children }) {
    return (
        <>
            <ClientHeader />

            {children}
        </>
    );
}