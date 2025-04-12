import { useToast } from "@/components/ui/use-toast";
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://tzztk47mb3zkerizaarl67ppye0eeqoq.lambda-url.us-east-1.on.aws/');
        if (!response.ok) {
          throw new Error('Failed to fetch visitor count');
        }
        const data = await response.json();
        setVisitorCount(data);
      } catch (err) {
        console.error('Error fetching visitor count:', err);
        setError('Error loading visitor count');
        toast({
          title: "Couldn't update visitor count",
          description: "We'll still show you around!",
          variant: "destructive",
        });
        // Fallback to localStorage to show something
        const storedCount = localStorage.getItem('visitorCount');
        setVisitorCount(storedCount ? parseInt(storedCount) : 1);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <motion.div 
      className="fixed bottom-6 right-6 flex items-center justify-center gap-2 py-2 px-4 bg-card/40 backdrop-blur-sm rounded-full shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Users size={16} className="text-accent" />
      <span className="text-sm text-muted-foreground">
        {error ? error : visitorCount !== null ? `Visitor Count: ${visitorCount}` : 'Loading...'}
      </span>
    </motion.div>
  );
}
