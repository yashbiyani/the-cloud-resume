
import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from "@/components/ui/use-toast";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        setLoading(true);
        // In a real implementation, this would call your AWS Lambda function endpoint
        // For now, we'll simulate the API call with a placeholder URL
        const response = await fetch('https://api.example.com/visitor-counter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ page: 'home' }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to update visitor count');
        }
        
        const data = await response.json();
        setVisitorCount(data.count);
        
      } catch (error) {
        console.error('Error updating visitor count:', error);
        toast({
          title: "Couldn't update visitor count",
          description: "We'll still show you around!",
          variant: "destructive",
        });
        // Fallback to localStorage to show something
        const storedCount = localStorage.getItem('visitorCount');
        setVisitorCount(storedCount ? parseInt(storedCount) : 1);
      } finally {
        setLoading(false);
      }
    };

    // This is a fallback just to have something to display in the demo
    // Remove this in production when connecting to actual AWS Lambda
    const demoFallback = () => {
      const storedCount = localStorage.getItem('visitorCount') || '0';
      const newCount = parseInt(storedCount) + 1;
      localStorage.setItem('visitorCount', newCount.toString());
      setVisitorCount(newCount);
      setLoading(false);
    };

    // Comment this out when implementing the real API
    demoFallback();
    
    // Uncomment this when implementing the real API
    // fetchVisitorCount();
  }, []);

  return (
    <div className={cn(
      'fixed bottom-6 right-6 bg-card/90 backdrop-blur-md shadow-lg rounded-full px-3 py-2',
      'border border-border flex items-center gap-2 transition-all duration-300',
      loading ? 'opacity-0' : 'opacity-100'
    )}>
      <Users size={16} className="text-accent" />
      <span className="text-sm font-medium">
        {loading ? 'Counting...' : `${visitorCount?.toLocaleString() || 0} visitors`}
      </span>
    </div>
  );
}
