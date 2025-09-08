import { Link } from 'react-router-dom';
import { BookOpen, Mail, Shield, Cookie, FileText, Info } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '/' },
      { name: 'All Tests', href: '/tests' },
      { name: 'Blog', href: '/blog' },
      { name: 'About Us', href: '/about' }
    ],
    'Popular Tests': [
      { name: 'MDCAT', href: '/tests/mdcat-medical-college-admission-test' },
      { name: 'NAT', href: '/tests/nat-national-aptitude-test' },
      { name: 'GAT', href: '/tests/gat-graduate-assessment-test' },
      { name: 'ECAT', href: '/tests' }
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '/privacy-policy', icon: Shield },
      { name: 'Terms of Service', href: '/terms-of-service', icon: FileText },
      { name: 'Cookie Policy', href: '/cookie-policy', icon: Cookie },
      { name: 'Disclaimer', href: '/disclaimer', icon: Info }
    ]
  };

  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">EntryTestList</h2>
                <p className="text-xs text-muted-foreground">Test Preparation Hub</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Your comprehensive guide to Pakistani entrance tests. Get the latest information, 
              preparation tips, and resources for MDCAT, NAT, GAT, and more.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@entrytestlist.com</span>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center space-x-2"
                    >
                      {link.icon && <link.icon className="w-3 h-3" />}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ad Space */}
        <div className="mb-6 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg py-4 px-6 text-muted-foreground text-sm border border-border/20">
            Advertisement Space (970x250)
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} EntryTestList. All rights reserved.
            </div>
            <div className="text-xs text-muted-foreground text-center md:text-right">
              <p>This website uses cookies to enhance user experience.</p>
              <p>We are not affiliated with any testing organization.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;