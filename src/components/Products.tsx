import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Teff",
    description:
      "Ethiopia's ancient grain, perfect for making injera and gluten-free baking",
    image:
      "/soya2.jpg",
    category: "Grains",
  },
  {
    id: 2,
    name: "Red Kidney Beans",
    description: "High-quality kidney beans from sustainable farms",
    image:
      "/wteff3.jpg",
    category: "Beans",
  },
  {
    id: 3,
    name: "White Wheat",
    description: "Premium white wheat from Ethiopia's highlands",
    image:
      "/rteff.jpg",
    category: "Grains",
  },
  {
    id: 4,
    name: "Chickpeas",
    description: "Nutrient-rich chickpeas perfect for various cuisines",
    image:
      "/white_s.jpg",
    category: "Beans",
  },
  {
    id: 5,
    name: "Barley",
    description: "High-grade barley ideal for brewing and food production",
    image:
      "/mung.jpg",
    category: "Grains",
  },
  {
    id: 6,
    name: "Green Mung Beans",
    description: "Premium quality mung beans for sprouting and cooking",
    image:
      "/wteff3.jpg",
    category: "Beans",
  },
];

import Header from "./Header";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=1920&h=600&fit=crop)",
            opacity: 0.6,
          }}
        />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Discover our premium selection of Ethiopian grains and beans
          </motion.p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: product.id * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <div className="mt-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      {product.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
