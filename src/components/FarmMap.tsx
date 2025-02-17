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
      name: "Oromia Farm Collective",
      coordinates: { x: 60, y: 40 },
      farmerCount: 250,
      crops: ["Teff", "Wheat", "Barley"],
      area: "Oromia Region",
    },
    {
      id: 2,
      name: "Amhara Highland Farms",
      coordinates: { x: 30, y: 30 },
      farmerCount: 180,
      crops: ["Chickpeas", "Lentils"],
      area: "Amhara Region",
    },
    {
      id: 3,
      name: "SNNP Grain Coalition",
      coordinates: { x: 45, y: 70 },
      farmerCount: 320,
      crops: ["Sorghum", "Millet"],
      area: "SNNP Region",
    },
  ],
  onLocationClick = (location) => console.log("Location clicked:", location),
}: FarmMapProps) => {
  const [activeLocation, setActiveLocation] = useState<FarmLocation | null>(
    null,
  );

  return (
    <Card className="w-full max-w-[1200px] h-[700px] bg-white mx-auto relative overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Farm Locations</CardTitle>
        <CardDescription>
          Interactive map showing our farming operations across Ethiopia
        </CardDescription>
      </CardHeader>
      <CardContent className="relative h-[600px]">
        {/* Map Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1576502200916-3808e07386a5?w=1200&auto=format&fit=crop)",
            opacity: 0.3,
          }}
        />

        {/* Location Markers */}
        <div className="relative h-full">
          {locations.map((location) => (
            <HoverCard key={location.id}>
              <HoverCardTrigger>
                <button
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full
                    ${
                      activeLocation?.id === location.id
                        ? "bg-primary text-white"
                        : "bg-white shadow-lg hover:bg-primary/10"
                    }`}
                  style={{
                    left: `${location.coordinates.x}%`,
                    top: `${location.coordinates.y}%`,
                  }}
                  onClick={() => {
                    setActiveLocation(location);
                    onLocationClick(location);
                  }}
                >
                  <MapPin className="h-6 w-6" />
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">{location.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {location.area}
                  </p>

                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">
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
        <div className="absolute bottom-4 right-4 bg-white/90 p-4 rounded-lg shadow-lg">
          <h4 className="font-semibold mb-2">Legend</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Farm Location</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="text-sm">Farmer Count</span>
            </div>
            <div className="flex items-center gap-2">
              <Wheat className="h-4 w-4" />
              <span className="text-sm">Crops Grown</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FarmMap;
