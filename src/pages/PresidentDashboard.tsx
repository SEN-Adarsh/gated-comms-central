
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Calendar, ListChecks } from "lucide-react";
import ResidentsView from "@/components/ResidentsView";
import PresidentAnnouncements from "@/components/PresidentAnnouncements";
import RequestsManagement from "@/components/RequestsManagement";
import PresidentEvents from "@/components/PresidentEvents";

const PresidentDashboard = () => {
  const [activeView, setActiveView] = useState<'main' | 'residents' | 'announcements' | 'requests' | 'events'>('main');

  if (activeView === 'residents') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Residents Directory</h1>
            <Button onClick={() => setActiveView('main')}>Back to Dashboard</Button>
          </div>
          <ResidentsView />
        </div>
      </div>
    );
  }

  if (activeView === 'announcements') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Announcements Management</h1>
            <Button onClick={() => setActiveView('main')}>Back to Dashboard</Button>
          </div>
          <PresidentAnnouncements />
        </div>
      </div>
    );
  }

  if (activeView === 'requests') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Requisitions Management</h1>
            <Button onClick={() => setActiveView('main')}>Back to Dashboard</Button>
          </div>
          <RequestsManagement />
        </div>
      </div>
    );
  }

  if (activeView === 'events') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Events Management</h1>
            <Button onClick={() => setActiveView('main')}>Back to Dashboard</Button>
          </div>
          <PresidentEvents />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Community President Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Resident Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Manage community residents and their access.</p>
              <Button className="w-full" onClick={() => setActiveView('residents')}>
                View Residents
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Announcements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Create and manage community announcements.</p>
              <Button className="w-full" onClick={() => setActiveView('announcements')}>
                Manage Announcements
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListChecks className="h-5 w-5" />
                Requisitions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Review and manage community requests.</p>
              <Button className="w-full" onClick={() => setActiveView('requests')}>
                Manage Requisitions
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Manage community events and activities.</p>
              <Button className="w-full" onClick={() => setActiveView('events')}>
                Manage Events
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PresidentDashboard;
