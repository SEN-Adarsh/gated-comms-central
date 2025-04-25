
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

type ProductFormData = {
  name: string;
  category: string;
  price: string;
  stock: string;
};

type ProductFormProps = {
  onAddProduct: (product: ProductFormData) => void;
};

const ProductForm = ({ onAddProduct }: ProductFormProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ProductFormData>();
  
  const onSubmit = (data: ProductFormData) => {
    onAddProduct(data);
    reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Product</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="product-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <Input
                id="name"
                placeholder="Enter product name"
                {...register("name", { required: "Product name is required" })}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <Input
                id="category"
                placeholder="Enter category"
                {...register("category", { required: "Category is required" })}
              />
              {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price ($)
              </label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                placeholder="Enter price"
                {...register("price", { 
                  required: "Price is required",
                  pattern: { value: /^\d+(\.\d{1,2})?$/, message: "Enter a valid price" }
                })}
              />
              {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
            </div>
            
            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                Initial Stock
              </label>
              <Input
                id="stock"
                type="number"
                min="0"
                placeholder="Enter initial stock quantity"
                {...register("stock", { 
                  required: "Stock quantity is required",
                  pattern: { value: /^\d+$/, message: "Enter a valid quantity" }
                })}
              />
              {errors.stock && <p className="text-red-500 text-xs mt-1">{errors.stock.message}</p>}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="product-form" className="w-full">
          Add Product
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductForm;
