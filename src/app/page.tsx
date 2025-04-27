'use client'

export default function Home() {


  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Welcome to Health Care Platform
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Your health, our priority. Find doctors, book appointments, and manage your wellness easily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-md border border-input px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
            >
              Login
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
