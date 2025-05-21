
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  slug: string;
}

const CategoryCard = ({ title, image, count, slug }: CategoryCardProps) => {
  return (
    <Link to={`/products?category=${slug}`} className="block group">
      <div className="relative overflow-hidden rounded-lg h-64">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <p className="text-white/80 text-sm">{count} Products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
