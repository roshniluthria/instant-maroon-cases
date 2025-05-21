
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 3D Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-maroon/5 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-maroon-dark/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-maroon-light/5 blur-3xl"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-16 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
