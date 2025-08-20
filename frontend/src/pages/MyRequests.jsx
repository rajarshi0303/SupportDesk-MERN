import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import api from "@/lib/axios";
import SupportRequestForm from "@/components/SupportRequestForm";

export default function MyRequests() {
  const [requests, setRequests] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const fetchRequests = async () => {
    try {
      const res = await api.get("/api/support-requests");
      setRequests(res.data);
    } catch (err) {
      console.error("Error fetching requests", err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Support Requests</h1>
        <Button onClick={() => setOpenForm(true)}>+ New Request</Button>
      </div>

      {requests.length === 0 ? (
        <p className="text-gray-500">No requests yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border">Subject</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Created</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{req.subject}</td>
                  <td className="px-4 py-2 border">{req.status}</td>
                  <td className="px-4 py-2 border">
                    {new Date(req.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => (window.location = `/requests/${req.id}`)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal Form */}
      <SupportRequestForm
        open={openForm}
        setOpen={setOpenForm}
        onSuccess={fetchRequests}
      />
    </div>
  );
}
