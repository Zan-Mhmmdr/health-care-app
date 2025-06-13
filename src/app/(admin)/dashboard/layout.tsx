export default function DashboardLayout({
    children,
    products,
    analytics,
    payments,
  }: {
    children: React.ReactNode;
    products: React.ReactNode;
    analytics: React.ReactNode;
    payments: React.ReactNode;
  }) {
    return (
      <main className="flex flex-col items-center justify-center bg-gray-100 min-h-screen py-10 px-4">
        {/* Header Section */}
        <section className="w-full max-w-[1400px] bg-slate-600 text-white p-6 rounded-2xl shadow-lg mb-6 flex items-center justify-center">
          {children}
        </section>
  
        {/* Middle Section */}
        <section className="w-full max-w-[1400px] flex gap-6 mb-6">
          <div className="flex-1 bg-white rounded-2xl shadow-md p-6">{products}</div>
          <div className="flex-1 bg-white rounded-2xl shadow-md p-6">{analytics}</div>
        </section>
  
        {/* Footer Section */}
        <section className="w-full max-w-[1400px] bg-slate-600 text-white p-6 rounded-2xl shadow-lg flex items-center justify-center">
          {payments}
        </section>
      </main>
    );
  }
  