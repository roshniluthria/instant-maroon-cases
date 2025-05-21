
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    id: "1",
    name: "Matte Black Case",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Hard Cases",
    phoneBrand: "iPhone 13"
  },
  {
    id: "2",
    name: "Clear Silicone Case",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Silicone Cases",
    phoneBrand: "Samsung Galaxy S22"
  },
  {
    id: "3",
    name: "Glossy Red Case",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1606041011872-596597976b25?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Hard Cases",
    phoneBrand: "Google Pixel 6"
  },
  {
    id: "4",
    name: "Navy Blue Silicone",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1471655233540-057dd3e0e886?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Silicone Cases",
    phoneBrand: "iPhone 14 Pro"
  }
];

const categories = [
  {
    title: "Hard Matte Cases",
    image: "https://images.unsplash.com/photo-1592813593937-2ed984decafe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    count: 42,
    slug: "hard-matte"
  },
  {
    title: "Glossy Cases",
    image: "https://images.unsplash.com/photo-1541019842312-1d9fedf6eb93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    count: 36,
    slug: "glossy"
  },
  {
    title: "Silicone Cases",
    image: "https://images.unsplash.com/photo-1603574670812-d24560880210?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    count: 51,
    slug: "silicone"
  }
];

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
              <p className="text-gray-600">Find the perfect case for your phone</p>
            </div>
            <Button asChild variant="link" className="text-maroon font-medium">
              <Link to="/products" className="flex items-center">
                View All Categories <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard 
                key={index}
                title={category.title}
                image={category.image}
                count={category.count}
                slug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-gray-600">Our best selling phone cases</p>
            </div>
            <Button asChild variant="link" className="text-maroon font-medium">
              <Link to="/products" className="flex items-center">
                View All Products <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                phoneBrand={product.phoneBrand}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Compatible with All Major Brands</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            We offer premium cases for all the latest phones from Apple, Samsung, 
            Google, and more. Find the perfect case for your device.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            <div className="text-center">
              <span className="text-xl font-semibold">Apple</span>
            </div>
            <div className="text-center">
              <span className="text-xl font-semibold">Samsung</span>
            </div>
            <div className="text-center">
              <span className="text-xl font-semibold">Google</span>
            </div>
            <div className="text-center">
              <span className="text-xl font-semibold">Xiaomi</span>
            </div>
            <div className="text-center">
              <span className="text-xl font-semibold">OnePlus</span>
            </div>
            <div className="text-center">
              <span className="text-xl font-semibold">Huawei</span>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-maroon hover:bg-maroon-light text-white px-8">
              <Link to="/products">Find Your Phone Case</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
