
import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/ptsc_logo.png" alt="PTSC Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold text-cyan-600 dark:text-cyan-400">PTSC</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/team" className="nav-link">Team</Link>
              <Link to="/events" className="nav-link">Events</Link>
              <Link to="/resources" className="nav-link">Resources</Link>
              <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Button onClick={toggleTheme} variant="ghost" size="icon">
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="mobile-nav-link">Home</Link>
              <Link to="/about" className="mobile-nav-link">About</Link>
              <Link to="/team" className="mobile-nav-link">Team</Link>
              <Link to="/events" className="mobile-nav-link">Events</Link>
              <Link to="/resources" className="mobile-nav-link">Resources</Link>
              <Link to="/leaderboard" className="mobile-nav-link">Leaderboard</Link>
              <Link to="/contact" className="mobile-nav-link">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
