
import React from "react";
import { Link } from "react-router-dom";

const CommunicationsFooter = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">GatedComms</h3>
          <p className="text-gray-400">
            Simplifying community communications for gated societies and residential complexes.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
            <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>© 2025 GatedComms. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default CommunicationsFooter;
