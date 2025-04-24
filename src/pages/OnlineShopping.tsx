
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Sample data structure for items
interface ItemResult {
  id: string;
  name: string;
  source: string;
  price: number;
  image: string;
  deliveryFee: number;
  packageFee?: number;
  estimatedDelivery: string;
  available: boolean;
}

// Dummy data function to generate search results
const generateDummyResults = (query: string): ItemResult[] => {
  if (!query.trim()) return [];
  
  const sources = ["Zepto", "Blinkit", "Swiggy Instamart", "BigBasket", "Flipkart"];
  
  return Array.from({ length: Math.floor(Math.random() * 3) + 3 }, (_, i) => {
    // Reduced prices (30% of original)
    const price = Math.floor((Math.random() * 200) + 30);
    const source = sources[Math.floor(Math.random() * sources.length)];
    const deliveryFee = Math.floor(Math.random() * 30) + 10;
    const packageFee = price < 99 ? Math.floor(Math.random() * 10) + 5 : 0;
    
    return {
      id: `${i}-${Date.now()}`,
      name: `${query} ${['Premium', 'Regular', 'Organic', 'Fresh'][Math.floor(Math.random() * 4)]}`,
      source,
      price,
      image: `https://picsum.photos/seed/${query}${i}/200/200`,
      deliveryFee,
      packageFee,
      estimatedDelivery: `${Math.floor(Math.random() * 30) + 15} minutes`,
      available: Math.random() > 0.2
    };
  });
};

const OnlineShopping = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<ItemResult[]>([]);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setResults(generateDummyResults(searchQuery));
      setHasSearched(true);
    }
  };

  const toggleItemDetails = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
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
        
        <h1 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
          <ShoppingCart className="h-6 w-6" />
          Online Shopping
        </h1>
        
        <div className="mb-8">
          <p className="text-gray-600 mb-4">
            Search for items across various online delivery services to compare prices and delivery times.
          </p>
          
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input 
              type="text" 
              placeholder="Search for items (e.g., bread, milk, eggs)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">Search</Button>
          </form>
        </div>
        
        {hasSearched && results.length === 0 && (
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-500">No results found for "{searchQuery}"</p>
            <p className="text-sm text-gray-400 mt-2">Try another search term or check back later</p>
          </div>
        )}
        
        {results.length > 0 && (
          <div className="space-y-4">
            {results.map(item => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <div className="text-sm text-gray-500">{item.source}</div>
                    </div>
                    <div className="text-lg font-semibold text-green-700">₹{item.price}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Collapsible
                    open={openItems[item.id]}
                    onOpenChange={() => toggleItemDetails(item.id)}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {item.available ? (
                          <>
                            <span className="text-sm text-green-600">Available</span>
                            <span className="text-xs text-gray-500">•</span>
                            <span className="text-sm text-gray-600">Est. delivery: {item.estimatedDelivery}</span>
                          </>
                        ) : (
                          <span className="text-sm text-red-600">Currently unavailable</span>
                        )}
                      </div>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                          {openItems[item.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    
                    <CollapsibleContent className="space-y-2 pt-3 border-t mt-2">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Item price:</span>
                          <span>₹{item.price.toFixed(2)}</span>
                        </div>
                        
                        {item.packageFee > 0 && (
                          <div className="flex justify-between text-sm">
                            <span>Small cart fee:</span>
                            <span>₹{item.packageFee.toFixed(2)}</span>
                          </div>
                        )}
                        
                        <div className="flex justify-between text-sm">
                          <span>Delivery fee:</span>
                          <span>₹{item.deliveryFee.toFixed(2)}</span>
                        </div>
                        
                        <div className="flex justify-between font-semibold border-t pt-1 mt-1">
                          <span>Total:</span>
                          <span>₹{(item.price + item.deliveryFee + (item.packageFee || 0)).toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button className="w-full">View on {item.source}</Button>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineShopping;
