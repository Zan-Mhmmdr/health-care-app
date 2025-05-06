const DashboardLayout = ({
    children,
    products,
    analytics,
    payments,
}: {
    children: React.ReactNode,
    products: React.ReactNode,
    analytics: React.ReactNode,
    payments: React.ReactNode
}) => {
    return (
        <html lang="en">
            <body className="antialiased">
                <main>
                    <div>
                        {children}
                    </div>
                    <div>
                        {products}
                        {analytics}
                    </div>
                    <div>
                        {payments}
                    </div>
                </main>
            </body>
        </html>

    )
}

export default DashboardLayout