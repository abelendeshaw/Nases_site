import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Users, Award, Globe2, Sprout } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Sustainable Farming",
      description:
        "Supporting eco-friendly agricultural practices across Ethiopia",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premium Quality",
      description: "Delivering the highest grade grains to global markets",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Farmer Partnerships",
      description: "Working directly with over 750 local farming families",
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: "Global Reach",
      description: "Exporting to markets across Europe, Asia, and the Americas",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&h=600&fit=crop)",
            opacity: 0.6,
          }}
        />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Nases Export
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl"
          >
            Leading Ethiopia's agricultural exports with sustainable practices
            and premium quality grains
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600">
                Founded in 2015, Nases Export has grown from a small local
                operation to one of Ethiopia's leading grain exporters. Our
                journey began with a vision to showcase Ethiopia's premium
                agricultural products to the world while supporting local
                farming communities.
              </p>
              <p className="text-gray-600">
                Today, we work with over 750 farming families across Ethiopia's
                most fertile regions, maintaining the highest standards of
                quality while promoting sustainable farming practices.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&fit=crop"
                alt="Farming in Ethiopia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="text-primary mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
