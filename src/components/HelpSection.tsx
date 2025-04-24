
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Handshake, X } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";

const HelpSection = () => {
  const [helpPosts, setHelpPosts] = useState([
    {
      id: 1,
      title: "Need help with grocery shopping",
      details: "I recently had surgery and can't drive for two weeks. Would someone be willing to help me with grocery shopping? I can provide a list and payment.",
      author: "David L. (C-310)",
      date: "April 16, 2025",
      category: "required",
      contact: "+91 9876543210"
    },
    {
      id: 2,
      title: "Offering free piano lessons for kids",
      details: "I'm a retired piano teacher willing to give free basic piano lessons to kids in our community. Sessions would be once a week for 30 minutes. Space for 3 students only.",
      author: "Robert M. (A-105)",
      date: "April 17, 2025",
      category: "offering",
      contact: "+91 8765432109"
    }
  ]);
  
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    category: "required",
    contact: ""
  });
  
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [currentContact, setCurrentContact] = useState({ name: "", contact: "" });
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('help-', '')]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new help post
    const newPost = {
      id: Date.now(),
      title: formData.title,
      details: formData.details,
      author: "You (Your Unit)",
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      category: formData.category,
      contact: formData.contact
    };
    
    // Add to the appropriate section
    setHelpPosts(prev => [newPost, ...prev]);
    
    // Reset form
    setFormData({
      title: "",
      details: "",
      category: "required",
      contact: ""
    });
    
    // Show confirmation
    toast.success("Your help post has been added!");
  };
  
  const handleContactClick = (post) => {
    setCurrentContact({
      name: post.author,
      contact: post.contact
    });
    setShowContactDialog(true);
  };
  
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2 flex flex-col gap-8">
        <div>
          <h2 className="text-lg font-bold mb-3 text-[#ea384c] flex items-center gap-2">
            <span>
              <Handshake size={22} className="inline mr-1 text-[#ea384c]" />
            </span>
            Required Help
          </h2>
          
          {helpPosts.filter(post => post.category === "required").map(post => (
            <div key={post.id} className="bg-white border-l-4 border-[#ea384c] shadow rounded-lg mb-6 px-5 py-4">
              <h3 className="font-semibold text-[#ea384c] mb-1">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{post.details}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white"
                  onClick={() => handleContactClick(post)}
                >
                  Contact
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <h2 className="text-lg font-bold mb-3 text-green-700 flex items-center gap-2">
            <span>
              <Handshake size={22} className="inline mr-1 text-green-700 fill-green-100" />
            </span>
            Offering Help
          </h2>
          
          {helpPosts.filter(post => post.category === "offering").map(post => (
            <div key={post.id} className="bg-[#F2FCE2] border-l-4 border-green-500 shadow rounded-lg mb-6 px-5 py-4">
              <h3 className="font-semibold text-green-700 mb-1">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{post.details}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-green-500 text-green-700 hover:bg-green-600 hover:text-white"
                  onClick={() => handleContactClick(post)}
                >
                  Contact
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <div className="bg-white border border-gray-200 rounded-lg shadow p-0">
          <div className="bg-green-50 rounded-t-lg px-6 py-4">
            <h3 className="font-semibold text-lg">Post Help Request</h3>
            <p className="text-gray-600 text-sm">Share your request with the community</p>
          </div>
          <div className="p-6 pt-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="help-title" className="text-sm font-medium">Title</label>
                <input 
                  id="help-title" 
                  placeholder="Brief title for your request" 
                  className="w-full border rounded px-3 py-2"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="help-details" className="text-sm font-medium">Details</label>
                <textarea 
                  id="help-details" 
                  placeholder="Explain what you need help with or what you're offering..." 
                  rows={4}
                  className="w-full border rounded px-3 py-2"
                  value={formData.details}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="help-category" className="text-sm font-medium">Category</label>
                <select
                  id="help-category"
                  className="w-full border rounded px-3 py-2"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="required">Required Help</option>
                  <option value="offering">Offering Help</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="help-contact" className="text-sm font-medium">Contact Information</label>
                <input 
                  id="help-contact" 
                  placeholder="How should people reach you?" 
                  className="w-full border rounded px-3 py-2" 
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Post Request</Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Information</DialogTitle>
            <DialogDescription>
              Contact details for {currentContact.name}
            </DialogDescription>
          </DialogHeader>
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Name</h3>
                <p>{currentContact.name}</p>
              </div>
              <div>
                <h3 className="font-medium">Contact</h3>
                <p className="text-blue-600">{currentContact.contact}</p>
              </div>
            </div>
          </div>
          <DialogClose asChild>
            <Button 
              variant="outline" 
              className="absolute right-4 top-4"
              size="icon"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HelpSection;
