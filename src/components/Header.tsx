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
          <img src={logo} alt="Nases Export" className="h-12 w-12" />
          <span className="text-xl font-bold text-gray-900">Nases Export</span>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-600">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <div className="flex items-center gap-2">
                    <Wheat className="h-5 w-5" />
                    <div>
                      <h4 className="text-sm font-medium">Our Grains</h4>
                      <p className="text-sm text-gray-500">
                        Premium Ethiopian grains and beans
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Map className="h-5 w-5" />
                    <div>
                      <h4 className="text-sm font-medium">Farm Locations</h4>
                      <p className="text-sm text-gray-500">
                        View our farming regions
                      </p>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
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
