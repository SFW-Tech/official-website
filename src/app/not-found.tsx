"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      
      <div className="max-w-md text-center">


        
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-cyan-400">
          404
        </h1>

        
        <p className="mt-4 text-2xl font-semibold">Oops! Page not found</p>

        
        <p className="mt-2 text-gray-400">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

       
        
        <button
          onClick={() => router.push("/")}
          className="mt-8 px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transform transition duration-300 cursor-pointer"
        >
          Go to Home
        </button>


      </div>


    </div>
  );
}
