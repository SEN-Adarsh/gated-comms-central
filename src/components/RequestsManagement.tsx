
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Check, X } from "lucide-react";

// Mock data with added status field
const initialRequests = [
  {
    id: 1,
    title: "Request for Fresh Produce",
    subject: "Please stock more organic vegetables",
    submittedBy: "John Doe (A-101)",
    date: "April 14, 2025",
    status: "pending"
  },
  {
    id: 2,
    title: "Gluten-Free Products",
    subject: "I need more gluten-free options in the shop",
    submittedBy: "Jane Smith (B-202)",
    date: "April 5, 2025",
    status: "pending"
  },
];

const RequestsManagement = () => {
  const [requests, setRequests] = useState(initialRequests);

  const handleAction = (id: number, action: 'accept' | 'reject') => {
    setRequests(requests.map(request => {
      if (request.id === id) {
        return {
          ...request,
          status: action
        };
      }
      return request;
    }));
    toast.success(`Request ${action === 'accept' ? 'accepted' : 'rejected'} successfully!`);
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Shop Product Requests</CardTitle>
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
                  
                  {request.status === 'pending' ? (
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
                  ) : (
                    <div className={`flex items-center gap-2 ${
                      request.status === 'accept' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {request.status === 'accept' ? (
                        <>
                          <Check className="h-5 w-5" />
                          <span>This request has been accepted</span>
                        </>
                      ) : (
                        <>
                          <X className="h-5 w-5" />
                          <span>This request has been rejected</span>
                        </>
                      )}
                    </div>
                  )}
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
