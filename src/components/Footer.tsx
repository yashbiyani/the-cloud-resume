
import { useEffect, useState } from 'react';
import { Coffee } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show footer when user scrolls near the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <footer className={`py-6 border-t border-border transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-full pointer-events-none absolute bottom-0 w-full'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Yash Biyani. Built with <Coffee size={14} className="inline mx-1" /> and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
