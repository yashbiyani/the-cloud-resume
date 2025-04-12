
import { Coffee } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-border">
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
