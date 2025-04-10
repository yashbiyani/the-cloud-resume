
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <nav className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
      scrolled ? 'bg-card/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">
          <span className="text-accent">&lt;</span>Yash.<span className="text-accent">dev</span><span className="text-accent">/&gt;</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-foreground hover:text-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
            </li>
          ))}
        </ul>
        
        {/* Social Icons and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <a href="https://github.com/yourusername" target="_blank" rel="noopener" className="text-foreground hover:text-accent transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener" className="text-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors" aria-label="Resume">
            <FileText size={20} />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-foreground hover:text-accent focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-card/95 backdrop-blur-lg flex flex-col justify-center items-center z-50 transition-all duration-300 md:hidden",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-6 right-6 text-foreground hover:text-accent focus:outline-none"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        <ul className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-xl text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center space-x-8 mt-12">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener" className="text-foreground hover:text-accent transition-colors" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener" className="text-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors" aria-label="Resume">
            <FileText size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}
