
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { InfoIcon } from "lucide-react";

interface ProductCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  price?: number;
  specifications?: {
    origin?: string;
    grade?: string;
    quantity?: string;
  };
  onQuoteRequest?: () => void;
  onExportInquiry?: () => void;
}

const ProductCard = ({
  title = "Premium Ethiopian Teff",
  description = "High-quality, gluten-free ancient grain from Ethiopia's highlands",
  imageUrl = "/soya2.jpg",
  price = 850,
  specifications = {
    origin: "Oromia Region",
    grade: "Grade A",
    quantity: "20MT minimum",
  },
  onQuoteRequest = () => console.log("Quote requested"),
  onExportInquiry = () => console.log("Export inquiry"),
}: ProductCardProps) => {
  return (
    <Card className="w-[380px] h-[450px] bg-white overflow-hidden flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>

      <CardHeader className="space-y-1">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <Badge variant="secondary">${price}/MT</Badge>
        </div>
        <CardDescription className="text-sm text-gray-500">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Origin:</span>
            <span className="text-sm">{specifications.origin}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Grade:</span>
            <div className="flex items-center gap-1">
              <span className="text-sm">{specifications.grade}</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Meets international export standards</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Min. Quantity:</span>
            <span className="text-sm">{specifications.quantity}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
