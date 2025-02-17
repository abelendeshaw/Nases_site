import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImages?: string[];
  onQuoteRequest?: () => void;
  onExportInquiry?: () => void;
}

const HeroSection = ({
  title = "Ethiopia's Premium Grain Exports",
  subtitle = "Delivering sustainable, high-quality grains from Ethiopia's fertile highlands to the world market",
  backgroundImages = [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1530267981375-f08b1e5731df?w=1920&h=1080&fit=crop",
  ],
  onQuoteRequest = () => console.log("Quote requested"),
  onExportInquiry = () => console.log("Export inquiry"),
}: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative w-full h-[800px] bg-black overflow-hidden">
      {/* Background Image Carousel */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentImageIndex === index ? 1 : 0,
          }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white flex justify-center pt-4">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-[6px] h-[6px] rounded-full bg-white"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
