import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Hero Section */}
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Welcome to <span className="text-indigo-600">SupportDesk</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Easily submit and track your support requests. Our team is here to
            help you with any issues, big or small.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/my-requests">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                View My Requests
              </Button>
            </Link>
            <Link to="/">
              <Button
                size="lg"
                variant="outline"
                className="border-indigo-600 text-indigo-600"
              >
                Submit a Request
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SupportDesk. All rights reserved.
      </footer>
    </div>
  );
}
