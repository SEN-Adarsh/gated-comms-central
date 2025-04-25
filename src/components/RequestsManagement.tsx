import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Check, X, Receipt, MessageSquare } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

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

const shoppingLists = [
  {
    id: 1,
    storeName: "Fresh Grocers Supermart",
    items: "1. Organic Vegetables\n2. Whole Wheat Bread\n3. Milk",
    billAmount: 850,
    date: "2025-04-24",
    status: "Delivered",
    submittedBy: "John Doe (A-101)"
  },
  {
    id: 2,
    storeName: "Daily Essentials",
    items: "1. Rice\n2. Pulses\n3. Cooking Oil",
    billAmount: 1200,
    date: "2025-04-23",
    status: "Processing",
    submittedBy: "Jane Smith (B-202)"
  }
];

const RequestsManagement = () => {
  const [requests, setRequests] = useState(initialRequests);
  const [lists, setLists] = useState(shoppingLists);

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
      <Tabs defaultValue="requests" className="space-y-4">
        <TabsList>
          <TabsTrigger value="requests" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Product Requests
          </TabsTrigger>
          <TabsTrigger value="lists" className="flex items-center gap-2">
            <Receipt className="h-4 w-4" />
            Shopping Lists
          </TabsTrigger>
        </TabsList>

        <TabsContent value="requests">
          <Card>
            <CardHeader>
              <CardTitle>Product Requests</CardTitle>
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
        </TabsContent>

        <TabsContent value="lists">
          <Card>
            <CardHeader>
              <CardTitle>Shopping Lists</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Store</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Bill Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Submitted By</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lists.map((list) => (
                    <TableRow key={list.id}>
                      <TableCell className="font-medium">{list.storeName}</TableCell>
                      <TableCell className="whitespace-pre-line">{list.items}</TableCell>
                      <TableCell>₹{list.billAmount}</TableCell>
                      <TableCell>{list.date}</TableCell>
                      <TableCell>{list.submittedBy}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          list.status === 'Delivered' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {list.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RequestsManagement;
