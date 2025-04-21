
import { Link } from "react-router-dom";
import { Bell, MessageSquare, HelpCircle, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-xl font-bold text-blue-600">
            GatedComms
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/communications" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/communications#announcements" className="text-gray-700 hover:text-blue-600 transition-colors">
            Announcements
          </Link>
          <Link to="/communications#requests" className="text-gray-700 hover:text-blue-600 transition-colors">
            Requests
          </Link>
          <Link to="/communications#help" className="text-gray-700 hover:text-blue-600 transition-colors">
            Help
          </Link>
          <Link to="/communications#events" className="text-gray-700 hover:text-blue-600 transition-colors">
            Events
          </Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">Sign In</Button>
          <Button size="sm">Register</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
