
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Protect Your Phone</span> 
            <span className="block">
              With <span className="text-maroon">Style</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Premium phone cases for iOS and Android devices.
            From hard matte and glossy to silicone, we've got your phone covered.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-maroon hover:bg-maroon-light text-white px-8">
              <Link to="/products">
                Shop Now <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/products?category=new-arrivals">
                New Arrivals
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
