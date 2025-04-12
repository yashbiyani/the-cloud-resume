import { Coffee, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPushedBack, setIsPushedBack] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show footer only when user forcefully scrolls to the very bottom
      const isAtBottom = scrollPosition + windowHeight >= documentHeight - 5;
      
      // Check if user is forcefully pulling down
      if (isAtBottom && scrollPosition > documentHeight - windowHeight - 50) {
        setIsVisible(true);
        
        // After a delay, gently push back
        if (isVisible && !isPushedBack) {
          setTimeout(() => {
            setIsPushedBack(true);
            window.scrollTo({
              top: documentHeight - windowHeight - 10,
              behavior: 'smooth'
            });
            
            // Reset the push back state after animation
            setTimeout(() => {
              setIsPushedBack(false);
            }, 1000);
          }, 1500);
        }
      } else if (!isAtBottom) {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, isPushedBack]);
  
  return (
    <footer className={`py-6 border-t border-border transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full pointer-events-none'} absolute bottom-0 w-full bg-background/90 backdrop-blur-sm shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © 2025 Yash Biyani. Built with 
            <Heart size={14} className="text-red-500 animate-pulse" /> 
            and 
            <Coffee size={14} className="text-amber-600" />
          </p>
        </div>
      </div>
    </footer>
  );
}
