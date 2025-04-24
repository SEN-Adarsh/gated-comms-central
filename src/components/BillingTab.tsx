import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Droplet, Zap, Wallet } from "lucide-react";

const BillingTab = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader className="bg-cyan-50">
        <CardTitle>
          <span className="flex items-center gap-2 text-cyan-700">
            <CreditCard size={22} className="inline mr-1" />
            Billing & Payments
          </span>
        </CardTitle>
        <CardDescription>
          Manage and track your community payments and utility bills
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Electricity Bill Section */}
          <Card>
            <CardHeader className="bg-yellow-50 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  <span className="flex items-center gap-2 text-yellow-700">
                    <Zap size={18} className="inline" />
                    Electricity Bill
                  </span>
                </CardTitle>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Paid</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Last Bill</span>
                  <span className="font-medium">₹3,875</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Due Date</span>
                  <span className="font-medium">April 15, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Payment Date</span>
                  <span className="font-medium">April 10, 2025</span>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full">View History</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Water Bill Section */}
          <Card>
            <CardHeader className="bg-blue-50 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  <span className="flex items-center gap-2 text-blue-700">
                    <Droplet size={18} className="inline" />
                    Water Bill
                  </span>
                </CardTitle>
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Due Soon</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Current Bill</span>
                  <span className="font-medium">₹675</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Due Date</span>
                  <span className="font-medium">April 30, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Status</span>
                  <span className="font-medium text-amber-600">Due in 6 days</span>
                </div>
                <div className="pt-2">
                  <Button size="sm" className="w-full">Pay Now</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Maintenance Fee Section */}
          <Card>
            <CardHeader className="bg-purple-50 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  <span className="flex items-center gap-2 text-purple-700">
                    <Wallet size={18} className="inline" />
                    Maintenance Fee
                  </span>
                </CardTitle>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Overdue</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Quarterly Fee</span>
                  <span className="font-medium">₹17,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Due Date</span>
                  <span className="font-medium">April 5, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Status</span>
                  <span className="font-medium text-red-600">19 days overdue</span>
                </div>
                <div className="pt-2">
                  <Button variant="destructive" size="sm" className="w-full">Pay Now + Late Fee</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader className="bg-emerald-50">
        <CardTitle>Payment History</CardTitle>
        <CardDescription>Your recent payment transactions</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 border-b">
            <div>
              <p className="font-medium">Electricity Bill</p>
              <p className="text-sm text-gray-500">April 10, 2025</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-green-600">₹6,225</p>
              <p className="text-sm text-gray-500">Online Payment</p>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 border-b">
            <div>
              <p className="font-medium">Water Bill</p>
              <p className="text-sm text-gray-500">March 25, 2025</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-green-600">₹4,137</p>
              <p className="text-sm text-gray-500">Auto-pay</p>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 border-b">
            <div>
              <p className="font-medium">Maintenance Fee</p>
              <p className="text-sm text-gray-500">January 15, 2025</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-green-600">₹17,500</p>
              <p className="text-sm text-gray-500">Bank Transfer</p>
            </div>
          </div>
          <div className="flex justify-between items-center p-3">
            <div>
              <p className="font-medium">Special Assessment</p>
              <p className="text-sm text-gray-500">January 5, 2025</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-green-600">₹7,500</p>
              <p className="text-sm text-gray-500">Check Payment</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default BillingTab;
