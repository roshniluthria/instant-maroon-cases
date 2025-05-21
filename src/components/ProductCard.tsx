
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  phoneBrand?: string;
}

const phoneModels = {
  iPhone: [
    "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16", 
    "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15", 
    "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", 
    "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 Mini",
    "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 Mini",
    "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone XR", "iPhone XS Max", "iPhone XS"
  ],
  Samsung: [
    "Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", 
    "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", 
    "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22", 
    "Galaxy S21 Ultra", "Galaxy S21+", "Galaxy S21", 
    "Galaxy S20 Ultra", "Galaxy S20+", "Galaxy S20",
    "Galaxy S10+", "Galaxy S10", "Galaxy S10e",
    "Galaxy Note 20 Ultra", "Galaxy Note 20",
    "Galaxy Note 10+", "Galaxy Note 10",
    "Galaxy Z Fold 5", "Galaxy Z Fold 4", "Galaxy Z Fold 3",
    "Galaxy Z Flip 5", "Galaxy Z Flip 4", "Galaxy Z Flip 3"
  ],
  Google: [
    "Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro", "Pixel 7",
    "Pixel 6 Pro", "Pixel 6", "Pixel 5", "Pixel 4 XL", "Pixel 4",
    "Pixel 3 XL", "Pixel 3", "Pixel 3a XL", "Pixel 3a"
  ],
  OnePlus: [
    "OnePlus 12", "OnePlus 11", "OnePlus 10 Pro", "OnePlus 10T",
    "OnePlus 9 Pro", "OnePlus 9", "OnePlus 8 Pro", "OnePlus 8",
    "OnePlus 7 Pro", "OnePlus 7", "OnePlus 6T", "OnePlus 6"
  ],
  Xiaomi: [
    "Xiaomi 14 Ultra", "Xiaomi 14 Pro", "Xiaomi 14",
    "Xiaomi 13 Ultra", "Xiaomi 13 Pro", "Xiaomi 13", 
    "Xiaomi 12 Pro", "Xiaomi 12", "Xiaomi 11 Ultra", "Xiaomi 11",
    "Xiaomi Mi 10 Pro", "Xiaomi Mi 10", "Xiaomi Mi 9", "Xiaomi Mi 8"
  ],
  Oppo: [
    "Find X7 Ultra", "Find X7 Pro", "Find X7", 
    "Find X6 Pro", "Find X6", "Find X5 Pro", "Find X5", 
    "Find X3 Pro", "Find X3", "Find X2 Pro", "Find X2",
    "Reno 10 Pro+", "Reno 10 Pro", "Reno 10", 
    "Reno 9 Pro+", "Reno 9 Pro", "Reno 9"
  ],
  Vivo: [
    "X100 Pro", "X100", "X90 Pro", "X90",
    "X80 Pro", "X80", "X70 Pro+", "X70 Pro", "X70",
    "X60 Pro+", "X60 Pro", "X60", "X50 Pro+", "X50 Pro", "X50"
  ],
  Realme: [
    "GT 5 Pro", "GT 5", "GT 3 Pro", "GT 3",
    "GT 2 Pro", "GT 2", "GT Neo 5", "GT Neo 3", 
    "GT Neo 2", "GT Neo", "X7 Pro", "X7", "X50 Pro", "X50"
  ]
};

const ProductCard = ({ id, name, price, image, category, phoneBrand }: ProductCardProps) => {
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(phoneBrand || "");
  
  const handleBrandChange = (value: string) => {
    setSelectedBrand(value);
    setSelectedModel("");
  };

  return (
    <div className="group border border-gray-200 hover:border-maroon rounded-lg overflow-hidden transition-all duration-300 rotate-3d bg-white shadow-md transform hover:translate-y-[-5px]">
      <Link to={`/products/${id}`} className="block overflow-hidden">
        <div className="h-64 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-maroon/5 to-transparent opacity-70"></div>
          <div className="text-4xl text-gray-300 transform transition-transform hover:scale-110">No Image</div>
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Link to={`/products/${id}`}>
              <h3 className="font-medium text-lg hover:text-maroon transition-colors">{name}</h3>
            </Link>
            <div className="text-sm text-gray-600 space-x-2">
              {phoneBrand && <span>{phoneBrand}</span>}
              {phoneBrand && <span>•</span>}
              <span>{category}</span>
            </div>
          </div>
          <span className="font-semibold">₹{price.toFixed(2)}</span>
        </div>
        
        <div className="space-y-3 my-4">
          <Select value={selectedBrand} onValueChange={handleBrandChange}>
            <SelectTrigger className="w-full border-maroon/30 focus:ring-maroon/30">
              <SelectValue placeholder="Select Phone Brand" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(phoneModels).map((brand) => (
                <SelectItem key={brand} value={brand}>{brand}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {selectedBrand && (
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-full border-maroon/30 focus:ring-maroon/30">
                <SelectValue placeholder="Select Phone Model" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px] overflow-y-auto">
                {phoneModels[selectedBrand as keyof typeof phoneModels]?.map((model) => (
                  <SelectItem key={model} value={model}>{model}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
        
        <Button 
          className="w-full bg-maroon hover:bg-maroon-light text-white flex items-center justify-center gap-2 mt-2 transition-transform hover:scale-105 shadow-md"
          disabled={!selectedModel}
        >
          <ShoppingCart size={16} /> Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
