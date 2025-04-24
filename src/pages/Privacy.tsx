
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Button variant="outline" size="sm" asChild className="mb-6">
          <Link to="/communications" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Communications
          </Link>
        </Button>
        
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: April 24, 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including name, email address, phone number, and residential unit details when you register for an account.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>To provide and maintain our Services</li>
              <li>To notify you about changes to our Services</li>
              <li>To allow you to participate in interactive features of our Services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our Services</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              The security of your data is important to us. We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
