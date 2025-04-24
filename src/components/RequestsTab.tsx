import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import SubmittedRequestsList from "@/components/SubmittedRequestsList";

const RequestsTab = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="bg-teal-50">
              <CardTitle>Submit a Request to the President</CardTitle>
              <CardDescription>
                Your request will be reviewed and addressed within 48 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" disabled={isAnonymous} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="unit" className="text-sm font-medium">Unit/Apartment #</label>
                      <Input id="unit" placeholder="e.g., A-101" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Brief subject of your request" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details of your request..." 
                      rows={5}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="anonymous" 
                      checked={isAnonymous}
                      onCheckedChange={() => setIsAnonymous(!isAnonymous)} 
                    />
                    <label htmlFor="anonymous" className="text-sm font-medium cursor-pointer">
                      Submit anonymously
                    </label>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Submit Request</Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader className="bg-teal-50">
              <CardTitle>Requests in Action</CardTitle>
              <CardDescription>Track your submitted requests</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div className="border rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Park Bench Repair</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">In Progress</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Submitted on April 14, 2025</p>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Street Light Issue</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Resolved</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Submitted on April 5, 2025</p>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Guest Parking Permission</span>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Declined</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Submitted on March 27, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Update title */}
      <div className="mt-6 container mx-auto px-4">
        <Card className="mb-6">
          <CardHeader className="bg-purple-50">
            <CardTitle>Post a Request/Offer</CardTitle>
            <CardDescription>Share your needs or offerings with the community</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-4">
              
            </div>
          </CardContent>
        </Card>
        <SubmittedRequestsList />
      </div>
    </div>
  );
};

export default RequestsTab;
