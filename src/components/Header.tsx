import React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Wheat, Map, Menu } from "lucide-react";

interface HeaderProps {
  onQuoteRequest?: () => void;
  onExportInquiry?: () => void;
  logo?: string;
}

const Header = ({
  onQuoteRequest = () => console.log("Quote requested"),
  onExportInquiry = () => console.log("Export inquiry"),
  logo = "https://api.dicebear.com/7.x/initials/svg?seed=NE",
}: HeaderProps) => {
  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/">
            <img src={logo} alt="Nases Export" className="h-12 w-12" />
          </a>
          <a
            href="/"
            className="text-xl font-bold text-gray-900 hover:text-gray-700"
          >
            Nases Export
          </a>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="/products"
                  className="text-gray-600 px-4 py-2 hover:text-gray-900"
                >
                  Products
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="/about"
                  className="text-gray-600 px-4 py-2 hover:text-gray-900"
                >
                  About Us
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="/contact"
                  className="text-gray-600 px-4 py-2 hover:text-gray-900"
                >
                  Contact
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => console.log("Mobile menu")}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
