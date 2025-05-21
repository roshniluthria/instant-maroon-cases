
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Enhanced 3D Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-maroon/5 blur-3xl transform rotate-12"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-maroon-dark/5 blur-3xl transform -rotate-6"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-maroon-light/5 blur-3xl"></div>
        
        {/* Additional 3D elements */}
        <div className="absolute top-1/2 left-1/6 w-6 h-6 bg-maroon/10 rounded-full blur-sm float-effect"></div>
        <div className="absolute top-2/3 right-1/4 w-8 h-8 bg-maroon/15 rounded-full blur-md float-effect"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-maroon/20 rounded-full blur-sm float-effect"></div>
        <div className="absolute top-1/3 right-1/6 w-10 h-10 bg-maroon/5 rounded-full blur-lg float-effect"></div>
        
        {/* Subtle geometric shapes for added dimension */}
        <div className="absolute top-2/5 left-1/5 w-16 h-16 bg-maroon/5 rotate-45 transform blur-md"></div>
        <div className="absolute bottom-1/5 right-2/5 w-20 h-20 border border-maroon/10 rounded-lg rotate-12 transform blur-sm"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-16 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
