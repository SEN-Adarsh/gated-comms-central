
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Copy, ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

// Dummy data for nearby stores
const nearbyStores = [
  {
    id: 1,
    name: "Fresh Grocers Supermart",
    address: "123 Main Street, Block A, Gated Community",
    distance: "0.5 km",
    contact: "+91 9876543210",
    category: "Supermarket"
  },
  {
    id: 2,
    name: "Daily Essentials",
    address: "45 Park Avenue, Block C, Gated Community",
    distance: "0.8 km",
    contact: "+91 9988776655",
    category: "General Store"
  },
  {
    id: 3,
    name: "Medico Pharmacy",
    address: "78 Health Lane, Block B, Gated Community",
    distance: "1.2 km",
    contact: "+91 9876123450",
    category: "Pharmacy"
  },
  {
    id: 4,
    name: "Sunshine Bakery",
    address: "22 Baker Street, Block D, Gated Community",
    distance: "1.5 km",
    contact: "+91 9123456789",
    category: "Bakery"
  },
  {
    id: 5,
    name: "Green Fresh Vegetables",
    address: "89 Garden Road, Block A, Gated Community",
    distance: "0.7 km",
    contact: "+91 8765432109",
    category: "Vegetable Store"
  },
  {
    id: 6,
    name: "Stationary World",
    address: "56 School Road, Block C, Gated Community",
    distance: "1.1 km",
    contact: "+91 7890123456",
    category: "Stationary Store"
  }
];

const OfflineShopping = () => {
  // Function to copy phone number to clipboard
  const copyToClipboard = (phoneNumber: string) => {
    navigator.clipboard.writeText(phoneNumber);
    toast.success("Phone number copied to clipboard!");
  };
  
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<typeof nearbyStores[0] | null>(null);
  const [groceryList, setGroceryList] = useState("");
  
  const handleSendList = (store) => {
    setSelectedStore(store);
    setDialogOpen(true);
  };
  
  const handleSubmitList = () => {
    if (groceryList.trim()) {
      toast.success(`List sent to ${selectedStore?.name}!`);
      setDialogOpen(false);
      setGroceryList("");
    } else {
      toast.error("Please enter your grocery list");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-6 flex-1">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link to="/communications" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Communications
            </Link>
          </Button>
        </div>
        
        <h1 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <MapPin className="h-6 w-6" />
          Offline Shopping Options
        </h1>
        
        <p className="text-gray-600 mb-8">
          Find local stores and supermarkets near your community. Contact them directly or visit in person.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyStores.map(store => (
            <Card key={store.id} className="transition-shadow hover:shadow-lg bg-blue-50">
              <CardHeader className="border-b pb-3 bg-blue-100">
                <CardTitle className="text-lg font-bold text-blue-700">
                  {store.name}
                </CardTitle>
                <div className="text-xs text-gray-500">{store.category}</div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div className="text-sm">{store.address}</div>
                </div>
                <div className="text-sm text-blue-600 mb-3">Distance: {store.distance}</div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">{store.contact}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => copyToClipboard(store.contact)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-1 border-blue-500 text-blue-700"
                      onClick={() => handleSendList(store)}
                    >
                      <Send className="h-4 w-4" />
                      Send List
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Send List Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Send Grocery List to {selectedStore?.name}</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <label htmlFor="grocery-list" className="block text-sm font-medium mb-2">
              Your Grocery List
            </label>
            <Textarea
              id="grocery-list"
              placeholder="Enter your grocery list here..."
              rows={6}
              value={groceryList}
              onChange={(e) => setGroceryList(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmitList}
              className="flex items-center gap-1"
            >
              <Send className="h-4 w-4" />
              Send List
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OfflineShopping;
