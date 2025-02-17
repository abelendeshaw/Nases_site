import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Badge } from "./ui/badge";
import { MapPin, Users, Wheat } from "lucide-react";

interface FarmLocation {
  id: number;
  name: string;
  coordinates: { x: number; y: number };
  farmerCount: number;
  crops: string[];
  area: string;
}

interface FarmMapProps {
  locations?: FarmLocation[];
  onLocationClick?: (location: FarmLocation) => void;
}

const FarmMap = ({
  locations = [
    {
      id: 1,
      name: "Amhara Highland Farms",
      coordinates: { x: 35, y: 30 },
      farmerCount: 180,
      crops: ["Chickpeas", "Lentils"],
      area: "Amhara Region",
    },
    {
      id: 2,
      name: "Tigray Farms",
      coordinates: { x: 40, y: 15 },
      farmerCount: 150,
      crops: ["Wheat", "Barley"],
      area: "Tigray Region",
    },
    {
      id: 3,
      name: "Oromia Farm Collective",
      coordinates: { x: 45, y: 55 },
      farmerCount: 250,
      crops: ["Teff", "Wheat", "Barley"],
      area: "Oromia Region",
    },
    {
      id: 4,
      name: "SNNP Grain Coalition",
      coordinates: { x: 37, y: 65 },
      farmerCount: 320,
      crops: ["Sorghum", "Millet"],
      area: "SNNP Region",
    },
    {
      id: 5,
      name: "Somali Region Collective",
      coordinates: { x: 65, y: 50 },
      farmerCount: 120,
      crops: ["Sorghum", "Maize"],
      area: "Somali Region",
    },
  ],
  onLocationClick = (location) => console.log("Location clicked:", location),
}: FarmMapProps) => {
  const [activeLocation, setActiveLocation] = useState<FarmLocation | null>(
    null,
  );

  return (
    <Card className="w-full max-w-[1200px] mx-auto bg-white">
      <CardHeader>
        <CardTitle>Farm Locations</CardTitle>
        <CardDescription>
          Interactive map showing our farming operations across Ethiopia
        </CardDescription>
      </CardHeader>

      <CardContent className="relative min-h-[600px] bg-[#F8F9FA]">
        {/* Map Background */}
        <div className="relative h-full">
          {locations.map((location) => (
            <HoverCard key={location.id}>
              <HoverCardTrigger>
                <button
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${location.coordinates.x}%`,
                    top: `${location.coordinates.y}%`,
                  }}
                  onClick={() => {
                    setActiveLocation(location);
                    onLocationClick(location);
                  }}
                >
                  <div className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <MapPin className="h-5 w-5 text-gray-600" />
                  </div>
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">{location.name}</h4>
                  <p className="text-sm text-gray-500">{location.area}</p>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {location.farmerCount} Farmers
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {location.crops.map((crop) => (
                      <Badge
                        key={crop}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        <Wheat className="h-3 w-3" />
                        {crop}
                      </Badge>
                    ))}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow p-4">
          <h4 className="font-semibold mb-2">Legend</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-600" />
              <span className="text-sm">Farm Location</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-600" />
              <span className="text-sm">Farmer Count</span>
            </div>
            <div className="flex items-center gap-2">
              <Wheat className="h-4 w-4 text-gray-600" />
              <span className="text-sm">Crops Grown</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FarmMap;
