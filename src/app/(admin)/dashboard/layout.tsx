export default function DashboardLayout({
    children,
    products,
    analytics,
    payments,
}: {
    children: React.ReactNode,
    products: React.ReactNode,
    analytics: React.ReactNode,
    payments: React.ReactNode
}) {
    return (
        <main>
            <div>{children}</div>
            <div>{products}{analytics}</div>
            <div>{payments}</div>
        </main>
    );
}
