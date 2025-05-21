
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-dark/30 to-black"></div>
      
      {/* 3D Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-maroon/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-maroon-dark/10 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-maroon-light/60 rounded-full blur-sm float-effect"></div>
      <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-maroon-light/60 rounded-full blur-sm float-effect"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="rotate-3d">
            <div className="mb-2 inline-block px-4 py-2 bg-maroon/10 backdrop-blur-sm rounded-lg border border-maroon/20">
              <span className="text-maroon-light font-medium">Premium Phone Cases</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="block">Protect Your Phone</span> 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-maroon-light to-maroon">
              With Style
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl">
            Premium phone cases for iOS and Android devices.
            From hard matte and glossy to silicone, we've got your phone covered.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-maroon hover:bg-maroon-light text-white px-8 rotate-3d">
              <Link to="/products">
                Shop Now <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rotate-3d">
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
