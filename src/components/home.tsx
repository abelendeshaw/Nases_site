import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProductGrid from "./ProductGrid";
import FarmMap from "./FarmMap";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection />

        {/* Product Grid Section */}
        <section className="py-16">
          <ProductGrid />
        </section>

        {/* Farm Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Farming Locations
            </h2>
            <FarmMap />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Nases Export</h3>
              <p className="text-gray-400">
                Premium Ethiopian grain exports for the global market.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Email: info@nasesexport.com</p>
              <p className="text-gray-400">Phone: +251 11 234 5678</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Address</h3>
              <p className="text-gray-400">
                Bole Road, Addis Ababa
                <br />
                Ethiopia
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Nases Export. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
