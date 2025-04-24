
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Bell, MessageSquare, Handshake, Calendar, ShoppingBag, CreditCard } from "lucide-react";
import Announcements from "@/components/Announcements";
import RequestsTab from "@/components/RequestsTab";
import HelpSection from "@/components/HelpSection";
import EventsTab from "@/components/EventsTab";
import ShoppingTab from "@/components/ShoppingTab";
import BillingTab from "@/components/BillingTab";

const TabNavigation = () => (
  <Tabs defaultValue="announcements" className="w-full mb-8">
    <TabsList className="grid w-full grid-cols-6 mb-8">
      <TabsTrigger value="announcements" className="flex items-center gap-2">
        <Bell className="h-4 w-4" />
        <span className="hidden sm:inline">Announcements</span>
      </TabsTrigger>
      <TabsTrigger value="requests" className="flex items-center gap-2">
        <MessageSquare className="h-4 w-4" />
        <span className="hidden sm:inline">Requests</span>
      </TabsTrigger>
      <TabsTrigger value="help" className="flex items-center gap-2">
        <Handshake className="h-4 w-4" />
        <span className="hidden sm:inline">Help</span>
      </TabsTrigger>
      <TabsTrigger value="events" className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <span className="hidden sm:inline">Events</span>
      </TabsTrigger>
      <TabsTrigger value="shopping" className="flex items-center gap-2">
        <ShoppingBag className="h-4 w-4" />
        <span className="hidden sm:inline">Shopping</span>
      </TabsTrigger>
      <TabsTrigger value="billing" className="flex items-center gap-2">
        <CreditCard className="h-4 w-4" />
        <span className="hidden sm:inline">Billing</span>
      </TabsTrigger>
    </TabsList>
    <TabsContent value="announcements" id="announcements">
      <Announcements />
    </TabsContent>
    <TabsContent value="requests" id="requests">
      <RequestsTab />
    </TabsContent>
    <TabsContent value="help" id="help">
      <HelpSection />
    </TabsContent>
    <TabsContent value="events" id="events">
      <EventsTab />
    </TabsContent>
    <TabsContent value="shopping" id="shopping">
      <ShoppingTab />
    </TabsContent>
    <TabsContent value="billing" id="billing">
      <BillingTab />
    </TabsContent>
  </Tabs>
);

export default TabNavigation;
