// app/page.tsx
import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline';
}) => {
  const base = 'px-6 py-3 rounded-lg transition font-medium';
  const styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-50 p-8">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-800">
          Welcome to HealthCare+
        </h1>
        <p className="text-lg text-blue-600">
          Your trusted partner in managing your health and wellness.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" type="button">
            Book Appointment
          </Button>
          <Button variant="outline" type="button">
            Learn More
          </Button>
        </div>
      </div>
    </main>
  );
}
