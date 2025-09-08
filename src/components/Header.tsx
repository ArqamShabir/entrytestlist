import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen, FileText, Info } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: BookOpen },
    { name: 'Tests', href: '/tests', icon: FileText },
    { name: 'Blog', href: '/blog', icon: Info },
    { name: 'About', href: '/about', icon: Info }
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Ad Space - Header Banner (Cleaner Design) */}
        <div className="py-2 text-center border-b border-border/30">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-md py-3 px-6 text-muted-foreground text-sm border border-border/20">
            Advertisement Space (728x90)
          </div>
        </div>
        
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">EntryTestList</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Test Guide</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Button variant="default" size="sm" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="space-y-3">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center space-x-3 py-2 px-4 text-foreground hover:bg-muted rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              <Button variant="default" size="sm" className="ml-4 mt-2" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;