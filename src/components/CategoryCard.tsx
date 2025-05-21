
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  slug: string;
}

const CategoryCard = ({ title, count, slug }: CategoryCardProps) => {
  return (
    <Link to={`/products?category=${slug}`} className="block group">
      <div className="relative overflow-hidden rounded-lg h-64 rotate-3d bg-gradient-to-br from-maroon/10 to-white border border-maroon/20 shadow-lg transform transition-transform hover:scale-[1.02] hover:shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon/20 to-transparent opacity-80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-16 h-16 mb-4 bg-maroon/10 rounded-full flex items-center justify-center backdrop-blur-md border border-maroon/30 shadow-lg transform hover:rotate-6 transition-transform">
            <span className="text-2xl text-maroon">{title.charAt(0)}</span>
          </div>
          <h3 className="text-gray-800 text-2xl font-semibold text-center px-4 text-glow">{title}</h3>
          <p className="text-maroon text-sm mt-2">{count} Products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
