import { AlertTriangle } from "lucide-react";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
            <div className="text-center animate-fade-in-up">
                <div className="flex justify-center mb-4">
                    <AlertTriangle className="w-16 h-16 text-yellow-500" />
                </div>
                <h1 className="text-6xl font-bold mb-2">404</h1>
                <p className="text-2xl font-semibold mb-2">Oops! Page not found</p>
                <p className="text-gray-500 mb-6">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>
                <a
                    href="/"
                    className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition"
                >
                    Go back home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
