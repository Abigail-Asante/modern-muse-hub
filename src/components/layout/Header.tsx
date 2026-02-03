import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Who We Are',
    href: '/who-we-are',
    children: [
      { name: 'About MiDA', href: '/who-we-are/about' },
      { name: 'Our Board', href: '/who-we-are/board' },
      { name: 'Leadership', href: '/who-we-are/leadership' },
    ],
  },
  {
    name: 'What We Do',
    href: '/what-we-do',
    children: [
      { name: 'Power Compact', href: '/what-we-do/power-compact' },
      { name: 'Agricultural Projects', href: '/what-we-do/agriculture' },
      { name: 'Economic Enclaves', href: '/what-we-do/economic-enclaves' },
      { name: 'Digital Youth Hubs', href: '/what-we-do/digital-youth-hubs' },
    ],
  },
  { name: 'Media', href: '/media' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-lg transition-all duration-300",
              isScrolled 
                ? "bg-primary text-primary-foreground" 
                : "bg-white text-primary"
            )}>
              MiDA
            </div>
            <div className={cn(
              "hidden sm:block transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              <span className="font-serif font-bold text-lg">Millennium Development</span>
              <span className="block text-xs font-sans opacity-80">Authority</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200",
                    isScrolled
                      ? "text-foreground hover:bg-muted hover:text-primary"
                      : "text-white/90 hover:text-white hover:bg-white/10",
                    location.pathname === item.href && (isScrolled ? "text-primary bg-muted" : "text-white bg-white/10")
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant={isScrolled ? "default" : "hero"} size="lg">
              Get Involved
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
            >
              <div className="py-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="block px-6 py-3 font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="bg-muted/50">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-8 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-6 pt-4">
                  <Button variant="gold" className="w-full">
                    Get Involved
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
