
import React from "react";
import Navbar from "@/components/Navbar";
import CommunicationsHeader from "@/components/CommunicationsHeader";
import TabNavigation from "@/components/TabNavigation";
import ContactSection from "@/components/ContactSection";
import CommunicationsFooter from "@/components/CommunicationsFooter";

const Communications = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">
        <CommunicationsHeader />
        <TabNavigation />
        <ContactSection />
      </main>
      <CommunicationsFooter />
    </div>
  );
};

export default Communications;
