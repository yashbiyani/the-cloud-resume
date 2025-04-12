
import { useEffect, useState } from 'react';
import { 
  Cloud, Server, Database, GitBranch, Code, Cpu, Terminal, Boxes, 
  Workflow, Cog, ChevronRight, AlertCircle, Package
} from 'lucide-react';

interface FloatingIcon {
  id: number;
  icon: JSX.Element;
  left: string;
  top: string;
  animationDelay: string;
  scale: number;
  rotation: number;
}

export default function FloatingTechIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  
  useEffect(() => {
    // Create random icons
    const iconComponents = [
      <Cloud className="text-tech-aws dark:text-tech-aws/70" />,
      <Server className="text-tech-kubernetes dark:text-tech-kubernetes/70" />,
      <Database className="text-tech-docker dark:text-tech-docker/70" />,
      <GitBranch className="text-devops-blue dark:text-devops-blue/70" />,
      <Code className="text-devops-green dark:text-devops-green/70" />,
      <Terminal className="text-devops-cyan dark:text-devops-cyan/70" />,
      <Cpu className="text-devops-orange dark:text-devops-orange/70" />,
      <Boxes className="text-tech-docker dark:text-tech-docker/70" />,
      <Workflow className="text-devops-blue dark:text-devops-blue/70" />,
      <Cog className="text-tech-kubernetes dark:text-tech-kubernetes/70" />,
      <ChevronRight className="text-devops-orange dark:text-devops-orange/70" />, // Jenkins icon alternative
      <AlertCircle className="text-devops-red dark:text-devops-red/70" />, // Prometheus icon alternative
      <Package className="text-tech-terraform dark:text-tech-terraform/70" /> // Terraform icon alternative
    ];
    
    const generatedIcons: FloatingIcon[] = [];
    
    for (let i = 0; i < 20; i++) {
      generatedIcons.push({
        id: i,
        icon: iconComponents[i % iconComponents.length],
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 90}%`,
        animationDelay: `${Math.random() * 5}s`,
        scale: 0.8 + Math.random() * 0.8, // Scale between 0.8 and 1.6
        rotation: Math.random() * 360, // Random rotation
      });
    }
    
    setIcons(generatedIcons);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute w-8 h-8 opacity-10 animate-float transition-all duration-700"
          style={{
            left: icon.left,
            top: icon.top,
            animationDelay: icon.animationDelay,
            transform: `scale(${icon.scale}) rotate(${icon.rotation}deg)`,
          }}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  );
}
