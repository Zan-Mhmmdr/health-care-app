// app/page.tsx
import React from 'react';

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
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Book Appointment
          </button>
          <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
