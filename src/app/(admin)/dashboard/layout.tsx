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
        <main className="flex flex-col justify-center items-center">
            <div className="w-[1400] mx-5 mt-5 h-96 bg-slate-500 text-white flex items-center justify-center">{children}</div>
            <div className="flex flex-row m-5 w-[1400] h-96 justify-between items-center">{products}{analytics}</div>
            <div className="w-[1400] mx-5 my-5 h-96 bg-slate-500 text-white flex items-center justify-center">{payments}</div>
        </main>
    );
}
