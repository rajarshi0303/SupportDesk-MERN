import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import api from "@/lib/axios";

export default function RequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRequest = async () => {
    try {
      const res = await api.get(`/api/support-requests/${id}`);
      setRequest(res.data);
    } catch (err) {
      console.error("Error fetching request details", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">Loading request details...</p>
      </div>
    );
  }

  if (!request) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Request not found.</p>
      </div>
    );
  }

  const { subject, description, category, priority, status, attachmentUrl } =
    request;
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-6">
      <h1 className="text-2xl font-bold mb-4">{subject}</h1>

      <div className="space-y-3">
        <p>
          <span className="font-semibold">Description:</span> {description}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Priority:</span> {priority}
        </p>
        <p>
          <span className="font-semibold">Status:</span> {status}
        </p>
      </div>

      {attachmentUrl && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Attachment:</h3>

          <div className="mt-2">
            <a
              href={`http://localhost:3000/download/${attachmentUrl.replace(
                "/uploads/",
                ""
              )}`}
              className="text-blue-600 hover:underline"
            >
              Download file
            </a>
          </div>
        </div>
      )}

      <div className="mt-6">
        <Button variant="outline" onClick={() => navigate("/my-requests")}>
          Back to My Requests
        </Button>
      </div>
    </div>
  );
}
