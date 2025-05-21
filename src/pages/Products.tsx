
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const products = [
  {
    id: "1",
    name: "Matte Black Case",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Hard Cases",
    type: "hard-matte",
    phoneBrand: "iPhone 13"
  },
  {
    id: "2",
    name: "Clear Silicone Case",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Silicone Cases",
    type: "silicone",
    phoneBrand: "Samsung Galaxy S22"
  },
  {
    id: "3",
    name: "Glossy Red Case",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1606041011872-596597976b25?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Hard Cases",
    type: "glossy",
    phoneBrand: "Google Pixel 6"
  },
  {
    id: "4",
    name: "Navy Blue Silicone",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1471655233540-057dd3e0e886?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Silicone Cases",
    type: "silicone",
    phoneBrand: "iPhone 14 Pro"
  },
  {
    id: "5",
    name: "Carbon Fiber Case",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1541019842312-1d9fedf6eb93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Hard Cases",
    type: "hard-matte",
    phoneBrand: "Samsung Galaxy S23"
  },
  {
    id: "6",
    name: "Clear Glossy Case",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1592813593937-2ed984decafe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Hard Cases",
    type: "glossy",
    phoneBrand: "iPhone 12"
  },
  {
    id: "7",
    name: "Pink Silicone Case",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1603574670812-d24560880210?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Silicone Cases",
    type: "silicone",
    phoneBrand: "Google Pixel 7"
  },
  {
    id: "8",
    name: "Matte White Case",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1541019842312-1d9fedf6eb93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Hard Cases",
    type: "hard-matte",
    phoneBrand: "OnePlus 10 Pro"
  }
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilters, setActiveFilters] = useState({
    type: searchParams.get("category") || "",
    brand: "",
    search: "",
    sort: "newest"
  });

  useEffect(() => {
    let filtered = [...products];
    
    // Apply search filter
    if (activeFilters.search) {
      const searchLower = activeFilters.search.toLowerCase();
      filtered = filtered.filter(
        product => 
          product.name.toLowerCase().includes(searchLower) || 
          product.phoneBrand?.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply type filter
    if (activeFilters.type) {
      filtered = filtered.filter(product => product.type === activeFilters.type);
    }
    
    // Apply brand filter
    if (activeFilters.brand) {
      filtered = filtered.filter(
        product => product.phoneBrand?.toLowerCase().includes(activeFilters.brand.toLowerCase())
      );
    }
    
    // Apply sorting
    if (activeFilters.sort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (activeFilters.sort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(filtered);
  }, [activeFilters]);

  useEffect(() => {
    const categoryFromURL = searchParams.get("category");
    if (categoryFromURL) {
      setActiveFilters(prev => ({ ...prev, type: categoryFromURL }));
    }
  }, [searchParams]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveFilters(prev => ({ ...prev, search: e.target.value }));
  };

  const handleSortChange = (value: string) => {
    setActiveFilters(prev => ({ ...prev, sort: value }));
  };

  const handleTypeFilter = (type: string) => {
    setActiveFilters(prev => ({ ...prev, type: prev.type === type ? "" : type }));
  };

  const handleBrandFilter = (brand: string) => {
    setActiveFilters(prev => ({ ...prev, brand: prev.brand === brand ? "" : brand }));
  };

  const phoneTypes = [
    { id: "hard-matte", label: "Hard Matte Cases" },
    { id: "glossy", label: "Glossy Cases" },
    { id: "silicone", label: "Silicone Cases" }
  ];

  const phoneBrands = [
    { id: "iphone", label: "iPhone" },
    { id: "samsung", label: "Samsung" },
    { id: "google", label: "Google" },
    { id: "oneplus", label: "OnePlus" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">All Phone Cases</h1>
        <p className="text-gray-600 mb-8">Browse our entire collection of premium phone cases</p>
        
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Case Type</h3>
                <div className="space-y-2">
                  {phoneTypes.map((type) => (
                    <div key={type.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`type-${type.id}`} 
                        checked={activeFilters.type === type.id}
                        onCheckedChange={() => handleTypeFilter(type.id)}
                        className="border-gray-300 data-[state=checked]:bg-maroon data-[state=checked]:border-maroon"
                      />
                      <label
                        htmlFor={`type-${type.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {type.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />
              
              <div>
                <h3 className="text-lg font-medium mb-3">Phone Brand</h3>
                <div className="space-y-2">
                  {phoneBrands.map((brand) => (
                    <div key={brand.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`brand-${brand.id}`} 
                        checked={activeFilters.brand === brand.id}
                        onCheckedChange={() => handleBrandFilter(brand.id)}
                        className="border-gray-300 data-[state=checked]:bg-maroon data-[state=checked]:border-maroon"
                      />
                      <label
                        htmlFor={`brand-${brand.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {brand.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setActiveFilters({ type: "", brand: "", search: "", sort: "newest" })}
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            {/* Search and Sort Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Input
                  placeholder="Search cases..."
                  value={activeFilters.search}
                  onChange={handleSearch}
                  className="w-full"
                />
              </div>
              <Select value={activeFilters.sort} onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Active Filters */}
            {(activeFilters.type || activeFilters.brand) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {activeFilters.type && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => handleTypeFilter(activeFilters.type)}
                  >
                    {phoneTypes.find(t => t.id === activeFilters.type)?.label}
                    <span className="ml-1">×</span>
                  </Button>
                )}
                {activeFilters.brand && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => handleBrandFilter(activeFilters.brand)}
                  >
                    {phoneBrands.find(b => b.id === activeFilters.brand)?.label}
                    <span className="ml-1">×</span>
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveFilters({ type: "", brand: "", search: "", sort: activeFilters.sort })}
                >
                  Clear All
                </Button>
              </div>
            )}
            
            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or search term.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
