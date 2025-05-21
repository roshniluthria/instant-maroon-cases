
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-montserrat font-bold text-2xl">
            Instant<span className="text-maroon">Cases</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-maroon transition-colors">
            Home
          </Link>
          <Link to="/products" className="font-medium hover:text-maroon transition-colors">
            Products
          </Link>
          <Link to="/contact" className="font-medium hover:text-maroon transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-maroon hover:bg-black">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button className="bg-maroon hover:bg-maroon-light text-white">
            Shop Now
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black px-4 py-5 absolute top-16 left-0 w-full shadow-md">
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              className="font-medium hover:text-maroon transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="font-medium hover:text-maroon transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="font-medium hover:text-maroon transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-maroon hover:bg-maroon-light text-white w-full mt-2">
              Shop Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
