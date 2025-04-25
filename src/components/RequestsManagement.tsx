
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Mock data - in a real app this would come from the RequestsTab component
const requests = [
  {
    id: 1,
    title: "Park Bench Repair",
    subject: "The bench near Block A needs urgent repair",
    submittedBy: "John Doe (A-101)",
    date: "April 14, 2025",
    status: "Pending"
  },
  {
    id: 2,
    title: "Street Light Issue",
    subject: "Street light not working in front of Block B",
    submittedBy: "Jane Smith (B-202)",
    date: "April 5, 2025",
    status: "Pending"
  },
];

const RequestsManagement = () => {
  const handleAction = (id: number, action: 'accept' | 'reject') => {
    // In a real app, this would update the database
    toast.success(`Request ${action === 'accept' ? 'accepted' : 'rejected'} successfully!`);
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Pending Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {requests.map((request) => (
              <Card key={request.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{request.title}</h3>
                    <span className="text-sm text-gray-500">{request.date}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{request.subject}</p>
                  <p className="text-sm text-gray-500 mb-4">Submitted by: {request.submittedBy}</p>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="bg-green-50 hover:bg-green-100 text-green-600"
                      onClick={() => handleAction(request.id, 'accept')}
                    >
                      Accept
                    </Button>
                    <Button 
                      variant="outline" 
                      className="bg-red-50 hover:bg-red-100 text-red-600"
                      onClick={() => handleAction(request.id, 'reject')}
                    >
                      Reject
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestsManagement;
