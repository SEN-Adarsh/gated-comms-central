
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

const Terms = () => {
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
        
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: April 24, 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using GatedComms, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily access and use GatedComms for personal, non-commercial transitory viewing only.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>The materials cannot be modified or copied</li>
              <li>The materials cannot be used for commercial purposes</li>
              <li>Any unauthorized use terminates the permission granted herein</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The materials on GatedComms are provided on an 'as is' basis. GatedComms makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
