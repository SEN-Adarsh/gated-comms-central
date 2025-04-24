
import { Link, useLocation } from "react-router-dom";
import { Home, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/communications";
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-xl font-bold text-blue-600">
            GatedComms
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4">
          {!isHomePage && (
            <Link to="/communications" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              <Home size={16} />
              <span>Home</span>
            </Link>
          )}
        </nav>
        
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <User size={16} />
            <span>Account</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
