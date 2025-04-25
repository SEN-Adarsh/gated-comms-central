
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import RequestsManagement from "@/components/RequestsManagement";

const ShopRequests = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Incoming Requests</h1>
        <RequestsManagement />
      </div>
    </div>
  );
};

export default ShopRequests;
