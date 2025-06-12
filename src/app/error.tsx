'use client'

import { AlertCircle } from 'lucide-react'

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      <div className="flex flex-col items-center space-y-4 animate-fade-in">
        <AlertCircle className="w-16 h-16 text-red-500" />
        <h1 className="text-7xl font-bold tracking-tight text-red-600">500</h1>
        <h2 className="text-2xl font-semibold">Something went wrong</h2>
        <p className="text-center max-w-md text-gray-500">
          We're sorry, but something went wrong on our end. Please try again later or contact support if the issue
          persists.
        </p>
      </div>
    </div>
  )
}

export default Error
