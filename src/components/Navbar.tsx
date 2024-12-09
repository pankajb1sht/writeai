import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="#8B5CF6"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-semibold text-secondary">WriteAI</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-secondary hover:text-primary transition-colors">
              Home
            </Link>
            <a href="#features" className="text-secondary hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-secondary hover:text-primary transition-colors">
              Pricing
            </a>
            <Link to="/login">
              <Button variant="outline" className="mr-2">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary hover:bg-primary-dark text-white">
                Sign up free
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-secondary hover:text-primary transition-colors">
                Home
              </Link>
              <a href="#features" className="text-secondary hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-secondary hover:text-primary transition-colors">
                Pricing
              </a>
              <Link to="/login">
                <Button variant="outline" className="w-full mb-2">
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  Sign up free
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};