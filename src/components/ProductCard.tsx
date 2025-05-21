
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  phoneBrand?: string;
}

const ProductCard = ({ id, name, price, image, category, phoneBrand }: ProductCardProps) => {
  return (
    <div className="group border border-gray-200 hover:border-maroon rounded-lg overflow-hidden transition-all duration-300 rotate-3d bg-white shadow-md">
      <Link to={`/products/${id}`} className="block overflow-hidden">
        <div className="h-64 overflow-hidden flex items-center justify-center bg-gray-100">
          <div className="text-4xl text-gray-300">No Image</div>
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
        <Button 
          className="w-full bg-maroon hover:bg-maroon-light text-white flex items-center justify-center gap-2 mt-2 transition-transform hover:scale-105"
        >
          <ShoppingCart size={16} /> Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
