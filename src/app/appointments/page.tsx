'use client';

import React, { useState } from 'react';

type Appointment = {
  id: number;
  doctor: string;
  date: string;
  time: string;
  location: string;
};

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      doctor: 'Dr. John Doe',
      date: '2025-05-05',
      time: '10:00 AM',
      location: 'HealthCare Center A',
    },
    {
      id: 2,
      doctor: 'Dr. Jane Smith',
      date: '2025-05-10',
      time: '2:00 PM',
      location: 'HealthCare Center B',
    },
  ]);

  const [newAppointment, setNewAppointment] = useState<Partial<Appointment>>({});

  const handleAddAppointment = () => {
    if (!newAppointment.doctor || !newAppointment.date || !newAppointment.time || !newAppointment.location) {
      alert('Please fill all fields.');
      return;
    }
    const newApp: Appointment = {
      id: Date.now(),
      doctor: newAppointment.doctor,
      date: newAppointment.date,
      time: newAppointment.time,
      location: newAppointment.location,
    };
    setAppointments([...appointments, newApp]);
    setNewAppointment({});
  };

  const handleDelete = (id: number) => {
    setAppointments(appointments.filter((app) => app.id !== id));
  };

  return (
    <main className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Your Appointments</h1>

      {/* Appointment List */}
      <div className="space-y-4 mb-8">
        {appointments.length === 0 ? (
          <p className="text-gray-600">No appointments yet. Book one below!</p>
        ) : (
          appointments.map((app) => (
            <div key={app.id} className="border p-4 rounded-lg bg-white shadow flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{app.doctor}</h2>
                <p className="text-gray-600">{app.date} at {app.time}</p>
                <p className="text-gray-500">{app.location}</p>
              </div>
              <button
                onClick={() => handleDelete(app.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          ))
        )}
      </div>

      {/* Add New Appointment */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Book New Appointment</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Doctor's Name"
            value={newAppointment.doctor || ''}
            onChange={(e) => setNewAppointment({ ...newAppointment, doctor: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="date"
            value={newAppointment.date || ''}
            onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="time"
            value={newAppointment.time || ''}
            onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={newAppointment.location || ''}
            onChange={(e) => setNewAppointment({ ...newAppointment, location: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <button
            onClick={handleAddAppointment}
            className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded"
          >
            Add Appointment
          </button>
        </div>
      </div>
    </main>
  );
}
