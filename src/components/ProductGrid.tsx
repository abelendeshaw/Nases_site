import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  specifications: {
    origin: string;
    grade: string;
    quantity: string;
  };
  category: string;
}

interface ProductGridProps {
  products?: Product[];
  onQuoteRequest?: (productId: number) => void;
  onExportInquiry?: (productId: number) => void;
}

const defaultProducts: Product[] = [
  {
    id: 1,
    title: "Premium Ethiopian Teff",
    description:
      "High-quality, gluten-free ancient grain from Ethiopia's highlands",
    imageUrl:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop",
    price: 850,
    specifications: {
      origin: "Oromia Region",
      grade: "Grade A",
      quantity: "20MT minimum",
    },
    category: "Grains",
  },
  {
    id: 2,
    title: "Organic Red Kidney Beans",
    description: "Premium quality organic kidney beans from sustainable farms",
    imageUrl:
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=800&auto=format&fit=crop",
    price: 720,
    specifications: {
      origin: "Amhara Region",
      grade: "Grade A",
      quantity: "15MT minimum",
    },
    category: "Beans",
  },
  {
    id: 3,
    title: "Ethiopian White Wheat",
    description: "Premium white wheat grown in Ethiopia's fertile highlands",
    imageUrl:
      "https://images.unsplash.com/photo-1565591452825-67d6b7df1d47?w=800&auto=format&fit=crop",
    price: 680,
    specifications: {
      origin: "Tigray Region",
      grade: "Grade B+",
      quantity: "25MT minimum",
    },
    category: "Grains",
  },
];

const ProductGrid = ({
  products = defaultProducts,
  onQuoteRequest = (id) => console.log(`Quote requested for product ${id}`),
  onExportInquiry = (id) => console.log(`Export inquiry for product ${id}`),
}: ProductGridProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(
    new Set(products.map((product) => product.category)),
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      <div className="mb-8 space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
            price={product.price}
            specifications={product.specifications}
            onQuoteRequest={() => onQuoteRequest(product.id)}
            onExportInquiry={() => onExportInquiry(product.id)}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No products found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
