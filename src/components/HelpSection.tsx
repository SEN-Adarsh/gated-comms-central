
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

const HelpSection = () => (
  <div className="grid gap-6 md:grid-cols-3">
    <div className="md:col-span-2 flex flex-col gap-8">
      <div>
        <h2 className="text-lg font-bold mb-3 text-[#ea384c] flex items-center gap-2">
          <span>
            <Handshake size={22} className="inline mr-1 text-[#ea384c]" />
          </span>
          Required Help
        </h2>
        <div className="bg-white border-l-4 border-[#ea384c] shadow rounded-lg mb-6 px-5 py-4">
          <h3 className="font-semibold text-[#ea384c] mb-1">Need help with grocery shopping</h3>
          <p className="text-gray-600 text-sm mb-2">
            I recently had surgery and can't drive for two weeks. Would someone be willing to help me with grocery shopping? I can provide a list and payment.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
            <span>Posted by David L. (C-310)</span>
            <span>•</span>
            <span>April 16, 2025</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white">
              Contact
            </Button>
            <Button variant="ghost" size="sm">5 Replies</Button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-3 text-green-700 flex items-center gap-2">
          <span>
            <Handshake size={22} className="inline mr-1 text-green-700 fill-green-100" />
          </span>
          Offering Help
        </h2>
        <div className="bg-[#F2FCE2] border-l-4 border-green-500 shadow rounded-lg mb-6 px-5 py-4">
          <h3 className="font-semibold text-green-700 mb-1">Offering free piano lessons for kids</h3>
          <p className="text-gray-600 text-sm mb-2">
            I'm a retired piano teacher willing to give free basic piano lessons to kids in our community. Sessions would be once a week for 30 minutes. Space for 3 students only.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
            <span>Posted by Robert M. (A-105)</span>
            <span>•</span>
            <span>April 17, 2025</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-green-500 text-green-700 hover:bg-green-600 hover:text-white">
              Contact
            </Button>
            <Button variant="ghost" size="sm">7 Replies</Button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="bg-white border border-gray-200 rounded-lg shadow p-0">
        <div className="bg-green-50 rounded-t-lg px-6 py-4">
          <h3 className="font-semibold text-lg">Post Help Request</h3>
          <p className="text-gray-600 text-sm">Share your request with the community</p>
        </div>
        <div className="p-6 pt-4">
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="help-title" className="text-sm font-medium">Title</label>
              <input id="help-title" placeholder="Brief title for your request" className="w-full border rounded px-3 py-2" />
            </div>
            <div className="space-y-2">
              <label htmlFor="help-details" className="text-sm font-medium">Details</label>
              <textarea 
                id="help-details" 
                placeholder="Explain what you need help with or what you're offering..." 
                rows={4}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="help-category" className="text-sm font-medium">Category</label>
              <select
                id="help-category"
                className="w-full border rounded px-3 py-2"
                defaultValue="required"
              >
                <option value="required">Required Help</option>
                <option value="offering">Offering Help</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="help-contact" className="text-sm font-medium">Contact Information</label>
              <input id="help-contact" placeholder="How should people reach you?" className="w-full border rounded px-3 py-2" />
            </div>
          </form>
        </div>
        <div className="p-6 pt-0">
          <Button className="w-full">Post Request</Button>
        </div>
      </div>
    </div>
  </div>
);

export default HelpSection;
