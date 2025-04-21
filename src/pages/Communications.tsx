
import React from "react";
import Navbar from "@/components/Navbar";
import CommunicationsMainContent from "@/components/CommunicationsMainContent";
import CommunicationsFooter from "@/components/CommunicationsFooter";

const Communications = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <CommunicationsMainContent />
      <CommunicationsFooter />
    </div>
  );
};

export default Communications;
