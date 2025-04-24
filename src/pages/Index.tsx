
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">GatedComms Central</h1>
        <p className="text-xl text-gray-600 mb-8">
          A comprehensive communication system for gated communities and residential societies. 
          Stay connected with announcements, requests, and community support.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/login">Login to Access</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
