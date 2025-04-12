
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText, MessageCircle, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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
  
  const socialLinks = [
    { 
      href: 'https://github.com/yashbiyani', 
      label: 'GitHub', 
      icon: Github,
      desktopSize: 18,
      mobileSize: 22
    },
    { 
      href: 'https://www.linkedin.com/in/yashbiyani/', 
      label: 'LinkedIn', 
      icon: Linkedin,
      desktopSize: 18,
      mobileSize: 22
    },
    { 
      href: 'https://leetcode.com/YashBiyani', 
      label: 'LeetCode', 
      icon: Code2,
      desktopSize: 18,
      mobileSize: 22
    },
    { 
      href: '//wa.me/917705094560?text=Hey%20Yash%2C%20I%20saw%20your%20portfolio%2C%20and%20I%27m%20really%20amazed%20by%20it%2C%20is%20it%20a%20good%20time%20to%20talk%3F', 
      label: 'WhatsApp', 
      icon: MessageCircle,
      desktopSize: 18,
      mobileSize: 22
    },
    { 
      href: 'https://drive.google.com/file/d/1-oeqtR0VraTRJXMq4i-XNUuHw1blM5S-/view?usp=sharing', 
      label: 'Resume', 
      icon: FileText,
      desktopSize: 18,
      mobileSize: 22
    }
  ];
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        scrolled ? 'py-2 bg-background/90 backdrop-blur-lg shadow-md' : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <motion.a 
            href="#home" 
            className="flex items-center gap-2 text-xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent">&lt;</span>
            <span className="text-gradient">yash.dev</span>
            <span className="text-accent">/&gt;</span>
          </motion.a>
          
          <motion.div 
            className="hidden md:flex items-center justify-center flex-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="flex items-center justify-center gap-6">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <a 
                    href={link.href} 
                    className="text-foreground hover:text-accent transition-colors py-1 border-b-2 border-transparent hover:border-accent text-base"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noopener" 
                className="text-foreground hover:text-accent transition-colors hover:scale-110" 
                aria-label={link.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.2 }}
              >
                <link.icon size={link.desktopSize} />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-foreground hover:text-accent transition-colors p-1 rounded-full"
            aria-label="Toggle menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-background/95 z-40 flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.ul 
              className="flex flex-col items-center gap-6 text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.1 * index, duration: 0.5 }
                  }}
                >
                  <a 
                    href={link.href} 
                    className="block text-2xl font-medium py-2 hover:text-accent transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              className="flex gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener" 
                  className="text-foreground hover:text-accent transition-colors" 
                  aria-label={link.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: 0.3 + (0.1 * index), duration: 0.3 }
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <link.icon size={link.mobileSize} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
