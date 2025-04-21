
import React from "react";
import CommunicationsHeader from "./CommunicationsHeader";
import TabNavigation from "./TabNavigation";
import ContactSection from "./ContactSection";

const CommunicationsMainContent = () => {
  return (
    <main className="container mx-auto px-4 py-8 flex-1">
      <CommunicationsHeader />
      <TabNavigation />
      <ContactSection />
    </main>
  );
};

export default CommunicationsMainContent;
