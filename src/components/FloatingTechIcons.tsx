
import { useEffect, useState } from 'react';
import { Cloud, Server, Database, GitBranch, Code } from 'lucide-react';

interface FloatingIcon {
  id: number;
  icon: JSX.Element;
  left: string;
  top: string;
  animationDelay: string;
}

export default function FloatingTechIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  
  useEffect(() => {
    // Create random icons
    const iconComponents = [
      <Cloud className="text-tech-aws" />,
      <Server className="text-tech-kubernetes" />,
      <Database className="text-tech-docker" />,
      <GitBranch className="text-devops-blue" />,
      <Code className="text-devops-green" />,
    ];
    
    const generatedIcons: FloatingIcon[] = [];
    
    for (let i = 0; i < 8; i++) {
      generatedIcons.push({
        id: i,
        icon: iconComponents[i % iconComponents.length],
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 90}%`,
        animationDelay: `${Math.random() * 5}s`,
      });
    }
    
    setIcons(generatedIcons);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute w-8 h-8 opacity-10 animate-float"
          style={{
            left: icon.left,
            top: icon.top,
            animationDelay: icon.animationDelay,
          }}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  );
}
