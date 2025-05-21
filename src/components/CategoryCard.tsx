
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
      <div className="relative overflow-hidden rounded-lg h-64 rotate-3d bg-gradient-to-br from-blue-900/30 to-black border border-blue-500/20 glass-effect">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-16 h-16 mb-4 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-md border border-blue-500/30">
            <span className="text-2xl text-blue-300">{title.charAt(0)}</span>
          </div>
          <h3 className="text-white text-2xl font-semibold text-center px-4">{title}</h3>
          <p className="text-blue-300 text-sm mt-2">{count} Products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
