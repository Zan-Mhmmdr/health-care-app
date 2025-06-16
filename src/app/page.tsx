// app/page.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Button = ({
  children,
  variant = 'primary',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline';
}) => {
  const base = 'px-6 py-3 rounded-xl text-base font-semibold transition-all duration-200';
  const styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md',
    outline: 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-100',
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>HealthCare+ | Manage Your Health Easily</title>
        <meta
          name="description"
          content="Book appointments and manage your health efficiently with HealthCare+ – your trusted healthcare partner."
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-blue-50 p-8">
        <div className="max-w-2xl w-full text-center space-y-6">
          <h1 className="text-5xl font-extrabold text-blue-800 leading-tight">
            Welcome to <span className="text-blue-600">HealthCare+</span>
          </h1>
          <p className="text-lg text-blue-700">
            Your trusted partner in managing your health and wellness with ease and confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition"
              type="button"
            >
              Book Appointment
            </Link>
            <Link
              href="/about#progress-challenges"
              className="inline-block px-6 py-3 bg-slate-200 text-blue-700 font-semibold rounded-md hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition"
              type="button"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
