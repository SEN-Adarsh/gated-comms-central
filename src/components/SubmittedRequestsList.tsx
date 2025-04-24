
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

// Initial demo data for requests
const demoRequests = [
  {
    id: 1,
    title: "Install more bike racks",
    subject: "Request for more bike parking spaces near Block B entrance.",
    submittedBy: "Samantha K. (B-202)",
    date: "April 17, 2025",
    status: "Under Review"
  },
  {
    id: 2,
    title: "Community Library Corner",
    subject: "Proposal to set up a book-sharing corner in the main lobby.",
    submittedBy: "Mark Z. (C-108)",
    date: "April 14, 2025",
    status: "Under Consideration"
  },
  {
    id: 3,
    title: "Kids' Playground Fence Maintenance",
    subject: "The fence around the kids' play area needs repair for safety.",
    submittedBy: "Priya S. (A-309)",
    date: "April 13, 2025",
    status: "Approved"
  },
  {
    id: 4,
    title: "Community Garden Volunteer Group",
    subject: "Looking for volunteers to maintain the community garden weekly.",
    submittedBy: "Anonymous",
    date: "April 12, 2025",
    status: "Open"
  },
];

type Request = {
  id: number;
  title: string;
  subject: string;
  submittedBy: string;
  date: string;
  status: string;
};

interface SubmittedRequestsListProps {
  initialRequests?: Request[];
}

const SubmittedRequestsList: React.FC<SubmittedRequestsListProps> = ({ initialRequests = [] }) => {
  const [requests, setRequests] = useState<Request[]>([...demoRequests]);

  useEffect(() => {
    if (initialRequests.length > 0) {
      setRequests(prev => [...initialRequests, ...prev]);
    }
  }, [initialRequests]);

  return (
    <div className="mt-12">
      <Card>
        <CardHeader className="bg-blue-50">
          <CardTitle>Submitted Requests</CardTitle>
          <CardDescription>
            Recent community requests and their current status
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          {requests.length === 0 ? (
            <p className="text-gray-600 text-sm">No submitted requests to display.</p>
          ) : (
            <div className="space-y-6">
              {requests.map((req) => (
                <div
                  key={req.id}
                  className="border flex items-start rounded-lg px-4 py-3 shadow-sm bg-white"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-base">{req.title}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        req.status === "Approved" 
                          ? "bg-green-100 text-green-800" 
                          : req.status === "Under Review" 
                          ? "bg-yellow-100 text-yellow-800"
                          : req.status === "Under Consideration"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                      }`}>
                        {req.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-[15px] mt-1 mb-2">{req.subject}</p>
                    <div className="text-xs text-gray-500 flex flex-wrap gap-2">
                      <span>{req.submittedBy}</span>
                      <span>•</span>
                      <span>{req.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmittedRequestsList;
