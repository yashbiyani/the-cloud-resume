
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground flex items-center">
            &copy; {currentYear} Yash Biyani. Built with <Heart size={14} className="mx-1 text-devops-red" fill="currentColor" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
