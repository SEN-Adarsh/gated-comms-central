
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShoppingTab = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader className="bg-blue-50">
        <CardTitle>
          <span className="flex items-center gap-2 text-blue-700">
            <ShoppingBag size={22} className="inline mr-1" />
            Shopping
          </span>
        </CardTitle>
        <CardDescription>
          Find information, resources, and upcoming opportunities for both in-person and online shopping in our community.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Offline Section */}
          <div className="bg-white border-l-4 border-gray-400 shadow rounded-lg px-5 py-4">
            <div className="flex items-center gap-2 mb-3">
              <ShoppingBag size={18} className="text-gray-600" />
              <span className="text-base font-semibold text-gray-700">Offline</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Local shopping options, community classifieds, upcoming in-person events, and information about stores nearby that members can use for their everyday needs.
            </p>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link to="/offline-shopping">View Local Shops</Link>
            </Button>
          </div>
          {/* Online Section */}
          <div className="bg-white border-l-4 border-green-400 shadow rounded-lg px-5 py-4">
            <div className="flex items-center gap-2 mb-3">
              <ShoppingCart size={18} className="text-green-600" />
              <span className="text-base font-semibold text-green-700">Online</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Explore tips for online shopping, safe e-commerce resources, community recommendations for trusted digital purchases, and virtual marketplaces hosted by our community.
            </p>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link to="/online-shopping">Search Online Deals</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default ShoppingTab;
