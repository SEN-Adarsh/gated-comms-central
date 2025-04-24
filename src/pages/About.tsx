
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

const About = () => {
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
        
        <h1 className="text-3xl font-bold mb-6">About GatedComms</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            Welcome to GatedComms, your comprehensive community management platform designed specifically for gated communities and residential complexes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At GatedComms, we strive to create a seamless communication channel between residents and community management. Our platform aims to simplify daily tasks, facilitate community engagement, and enhance the overall living experience in gated communities.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Streamlined community announcements and updates</li>
            <li>Efficient maintenance request management</li>
            <li>Integrated billing and payment system</li>
            <li>Community event organization and scheduling</li>
            <li>Local shopping and service directory</li>
            <li>Resident help and support network</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Community First</h3>
              <p className="text-sm text-gray-600">We prioritize the needs and well-being of our community members in everything we do.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">Transparency</h3>
              <p className="text-sm text-gray-600">We believe in open communication and clear processes for all community matters.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">We continuously improve our platform to better serve our communities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
