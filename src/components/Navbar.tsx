import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Code2, FileText, Github, Linkedin, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

// Add custom WhatsApp icon component
const WhatsApp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.646.075-.3-.15-1.269-.468-2.419-1.491-.893-.8-1.498-1.786-1.674-2.086-.173-.3-.018-.462.13-.61.134-.133.3-.347.45-.52.149-.174.199-.3.3-.498.099-.2.05-.374-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172 0-.371-.025-.571-.025-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.488s1.07 2.886 1.219 3.085c.15.2 2.105 3.21 5.1 4.504.714.31 1.27.495 1.705.636.714.227 1.364.195 1.879.118.574-.078 1.767-.721 2.016-1.42.255-.7.255-1.3.18-1.425-.074-.127-.274-.204-.574-.354z" />
    <path d="M20.52 3.449C12.831-3.086 0 1.633 0 12.14c0 2.125.562 4.214 1.636 6.06L0 24l5.897-1.575c1.785.99 3.799 1.51 5.835 1.51 10.478 0 15.21-12.886 8.787-20.487z" />
  </svg>
);

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
    
    // Prevent body scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certs' },
    { href: '#contact', label: 'Contact' }
  ];
  
  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    // Close the menu first
    setIsMenuOpen(false);
    
    // Navigate after a small delay to allow menu to close
    setTimeout(() => {
      if (href.startsWith('#')) {
        try {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            // Enhanced smooth scrolling with easing
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - 80;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        } catch (error) {
          console.error("Error scrolling to section:", error);
          window.location.href = "/" + href;
        }
      } else {
        window.location.href = href;
      }
    }, 250);
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
      icon: WhatsApp,
      desktopSize: 18,
      mobileSize: 22
    },
    { 
      href: 'https://drive.google.com/file/d/1TbuvuSdb4S7uXBSiT00HBUGH5qTNUDL1/view?usp=sharing', 
      label: 'Resume', 
      icon: FileText,
      desktopSize: 18,
      mobileSize: 22
    }
  ];
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-[100] transition-all duration-700',
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
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-accent">&lt;</span>
            <span className="text-gradient">yash.space</span>
            <span className="text-accent">/&gt;</span>
          </motion.a>
          
          <motion.div 
            className="hidden md:flex items-center justify-center flex-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <ul className="flex items-center justify-center gap-6">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 * index }}
                >
                  <a 
                    href={link.href} 
                    className="text-foreground hover:text-accent transition-colors duration-300 py-1 border-b-2 border-transparent hover:border-accent text-base"
                    onClick={(e) => handleNavClick(e, link.href)}
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
            transition={{ duration: 0.6, ease: "easeOut" }}
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
                transition={{ duration: 0.3, delay: 0.1 * index, ease: "easeOut" }}
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              >
                <link.icon size={link.desktopSize} />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-foreground hover:text-accent transition-colors duration-300 p-1 rounded-full z-[150]"
            aria-label="Toggle menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div 
            className="fixed top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-lg z-[140] flex flex-col items-center justify-center md:hidden overflow-y-auto"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ height: '100vh', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full w-full py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.ul 
                className="flex flex-col items-center justify-center gap-6 text-center mb-12 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.08 * index, duration: 0.5, ease: "easeOut" }
                    }}
                  >
                    <a 
                      href={link.href} 
                      className="block text-2xl font-medium py-2 hover:text-accent transition-colors duration-300"
                      onClick={(e) => handleNavClick(e, link.href)}
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
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
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
                      transition: { delay: 0.25 + (0.08 * index), duration: 0.3, ease: "easeOut" }
                    }}
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                  >
                    <link.icon size={link.mobileSize} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
