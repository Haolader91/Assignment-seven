import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <h1 className="text-7xl font-extrabold text-emerald-900 mb-4">404</h1>

      <h2 className="text-2xl font-bold text-slate-800 mb-2">Page Not Found</h2>

      <p className="text-slate-500 mb-6 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-emerald-900 text-white rounded-full font-semibold hover:bg-emerald-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
