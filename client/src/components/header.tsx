import { useEffect, useState } from "react";
import { Search, Menu, X, Leaf, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="/" className="flex items-center space-x-2">
            <Leaf className="text-wellness-primary h-6 w-6" />
            <span className="text-xl font-bold text-gray-900">REVIGORELIFE</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <Button
                variant="ghost"
                className="flex items-center text-gray-700 hover:text-wellness-primary"
              >
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <a href="#featured" className="text-gray-700 hover:text-wellness-primary">
              Featured Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-wellness-primary">
              About
            </a>
          </nav>

          {/* Desktop search */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                className="w-64 pl-10 pr-4 py-2"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </Button>
        </div>
      </div>

      {/* Mobile overlay + panel */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-[1px] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Panel */}
          <div className="fixed inset-x-0 top-0 md:hidden z-50">
            <div className="bg-white shadow-lg">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <a href="/" className="flex items-center space-x-2">
                  <Leaf className="text-wellness-primary h-6 w-6" />
                  <span className="text-lg font-bold text-gray-900">REVIGORELIFE</span>
                </a>
                <Button
                  variant="ghost"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-gray-700" />
                </Button>
              </div>

              {/* Search (mobile) */}
              <div className="px-4 py-3 border-b">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2"
                  />
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Links */}
              <nav className="px-4 py-2 space-y-1">
                <a
                  href="#"
                  className="flex items-center justify-between px-2 py-3 rounded-md text-gray-800 hover:bg-gray-50"
                >
                  <span>Categories</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </a>
                <a
                  href="#featured"
                  className="block px-2 py-3 rounded-md text-gray-800 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Featured Products
                </a>
                <a
                  href="#about"
                  className="block px-2 py-3 rounded-md text-gray-800 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </nav>

              <div className="h-2" />
            </div>
          </div>
        </>
      )}
    </header>
  );
}
