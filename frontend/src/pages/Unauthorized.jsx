import React from "react";
import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-5xl font-bold text-red-600">
        401 - Unauthorized
      </h1>
      <p className="mb-6 text-gray-600">
        You do not have permission to view this page.
      </p>
      <Link
        to="/login"
        className="rounded bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-white transition "
      >
        Go to Login
      </Link>
    </div>
  );
}
