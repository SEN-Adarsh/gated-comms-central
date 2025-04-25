
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Plus, Minus, Package, PackagePlus } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductForm from "@/components/ProductForm";

// Initial mock inventory data
const initialInventory = [
  { id: 1, name: "Fresh Bread", category: "Bakery", price: 3.99, stock: 15 },
  { id: 2, name: "Milk (1L)", category: "Dairy", price: 2.49, stock: 8 },
  { id: 3, name: "Eggs (dozen)", category: "Dairy", price: 4.99, stock: 12 },
  { id: 4, name: "Apples (kg)", category: "Fruits", price: 3.29, stock: 20 },
  { id: 5, name: "Chicken Breast (kg)", category: "Meat", price: 8.99, stock: 5 },
  { id: 6, name: "Pasta (500g)", category: "Dry Goods", price: 1.99, stock: 25 },
];

const ShopInventory = () => {
  const [inventory, setInventory] = useState(initialInventory);
  
  const updateStock = (id: number, change: number) => {
    setInventory(inventory.map(item => {
      if (item.id === id) {
        const newStock = Math.max(0, item.stock + change);
        return { ...item, stock: newStock };
      }
      return item;
    }));
    
    toast.success("Inventory updated!");
  };
  
  const addProduct = (product: any) => {
    const newProduct = {
      id: inventory.length + 1,
      ...product,
      stock: parseInt(product.stock)
    };
    
    setInventory([...inventory, newProduct]);
    toast.success("Product added successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Inventory Management</h1>
        
        <Tabs defaultValue="inventory">
          <TabsList className="mb-6">
            <TabsTrigger value="inventory" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span>Current Inventory</span>
            </TabsTrigger>
            <TabsTrigger value="add" className="flex items-center gap-2">
              <PackagePlus className="h-4 w-4" />
              <span>Add Products</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="inventory">
            <Card>
              <CardHeader>
                <CardTitle>Current Inventory</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inventory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>${item.price.toFixed(2)}</TableCell>
                        <TableCell>
                          {item.stock === 0 ? (
                            <span className="text-red-500 font-bold">Out of Stock!</span>
                          ) : (
                            item.stock
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateStock(item.id, -1)}
                              disabled={item.stock === 0}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateStock(item.id, 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="add">
            <ProductForm onAddProduct={addProduct} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopInventory;
