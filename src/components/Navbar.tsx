import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

const DynamicIcon = React.lazy(() => import('lucide-react/dynamicIconImports/whatsapp'));

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certs' },
    { href: '#contact', label: 'Contact' }
  ];
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'py-2 bg-background/90 backdrop-blur-lg shadow-md' : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-accent">&lt;</span>
            <span className="text-gradient">yash.dev</span>
            <span className="text-accent">/&gt;</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-foreground hover:text-accent transition-colors py-1 border-b-2 border-transparent hover:border-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-3">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener" className="text-foreground hover:text-accent transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener" className="text-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <React.Suspense fallback={<span>WA</span>}>
                <a 
                  href="https://wa.me/+919876543210" 
                  target="_blank" 
                  rel="noopener" 
                  className="text-foreground hover:text-accent transition-colors" 
                  aria-label="WhatsApp"
                >
                  <DynamicIcon size={18} />
                </a>
              </React.Suspense>
              <a href="#" className="text-foreground hover:text-accent transition-colors" aria-label="Resume">
                <FileText size={18} />
              </a>
            </div>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      <div 
        className={cn(
          'fixed inset-0 bg-background z-40 transition-transform duration-300 md:hidden pt-20',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container mx-auto px-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="block text-lg py-2 border-b border-border hover:text-accent transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex gap-6 mt-8 justify-center">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener" className="text-foreground hover:text-accent transition-colors" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener" className="text-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <React.Suspense fallback={<span>WA</span>}>
              <a 
                href="https://wa.me/+919876543210" 
                target="_blank" 
                rel="noopener" 
                className="text-foreground hover:text-accent transition-colors" 
                aria-label="WhatsApp"
              >
                <DynamicIcon size={22} />
              </a>
            </React.Suspense>
            <a href="#" className="text-foreground hover:text-accent transition-colors" aria-label="Resume">
              <FileText size={22} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
