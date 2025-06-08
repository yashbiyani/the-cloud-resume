import { useToast } from "@/components/ui/use-toast";
import { incrementVisitorCount } from '@/services/visitorService';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const hasRun = useRef(false);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      if (hasRun.current) return;
      hasRun.current = true;
      
      try {
        const response = await incrementVisitorCount();
        if (response.success) {
          setVisitorCount(response.count);
        } else {
          throw new Error(response.message || 'Failed to fetch visitor count');
        }
      } catch (err) {
        console.error('Error fetching visitor count:', err);
        setError('Error loading visitor count');
        toast({
          title: "Couldn't update visitor count",
          description: "We'll still show you around!",
          variant: "destructive",
        });
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
