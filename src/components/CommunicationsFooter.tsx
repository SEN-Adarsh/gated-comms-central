
import React from "react";
import { Button } from "@/components/ui/button";

const CommunicationsFooter = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">GatedComms</h3>
          <p className="text-gray-400">
            Simplifying community communications for gated societies and residential complexes.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <p className="text-gray-400 mb-2">Download our mobile app:</p>
          <div className="flex space-x-3">
            <Button variant="outline" className="text-gray-400 border-gray-600 hover:text-white hover:border-white">
              App Store
            </Button>
            <Button variant="outline" className="text-gray-400 border-gray-600 hover:text-white hover:border-white">
              Google Play
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>© 2025 GatedComms. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default CommunicationsFooter;
