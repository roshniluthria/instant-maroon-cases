
import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">
              Instant<span className="text-maroon">Cases</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Premium phone cases for iOS and Android devices. Choose from Hard Matte, Glossy, 
              and Silicone options to protect your device in style.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="text-gray-700 hover:text-maroon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-700 hover:text-maroon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-700 hover:text-maroon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-maroon transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-maroon transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-maroon transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-maroon transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-maroon transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-maroon" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-maroon" />
                <span className="text-gray-600">contact@instantcases.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Instant Cases. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
