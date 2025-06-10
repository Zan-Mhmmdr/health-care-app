// app/page.tsx
import React from 'react';
import Head from 'next/head';

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
            <Button variant="primary" type="button">
              Book Appointment
            </Button>
            <Button variant="outline" type="button">
              Learn More
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
