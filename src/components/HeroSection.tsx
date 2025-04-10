
import { useState, useEffect } from 'react';
import { ChevronDown, Cloud, Server, Code, GitBranch } from 'lucide-react';

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = 'DevOps Engineer';
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index]);
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-tech-kubernetes/20 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-tech-docker/20 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-tech-aws/20 animate-bounce-slow"></div>
        
        {/* Cloud animation */}
        <Cloud className="absolute top-1/5 right-1/5 text-cloud/20 w-16 h-16 animate-cloud-float" />
        <Server className="absolute bottom-1/4 right-1/3 text-devops-cyan/20 w-12 h-12 animate-bounce-slow" />
        <Code className="absolute top-1/3 left-1/5 text-devops-green/20 w-14 h-14 animate-pulse-slow" />
        <GitBranch className="absolute bottom-1/3 right-1/4 text-devops-blue/20 w-10 h-10 animate-spin-slow" />
      </div>
      
      {/* Pipeline animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="w-full h-full absolute" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M10,30 C30,10 50,90 90,50" 
            className="pipeline-path pipeline-flow"
            fill="none" 
            stroke="rgba(0, 206, 209, 0.1)" 
            strokeWidth="0.5"
          />
          <path 
            d="M5,60 C40,40 60,80 95,30" 
            className="pipeline-path pipeline-flow"
            fill="none" 
            stroke="rgba(30, 144, 255, 0.1)" 
            strokeWidth="0.5"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
      </div>
      
      <div className="container px-4 mx-auto text-center z-10">
        <div className="space-y-4 animate-fade-in">
          <h3 className="text-xl md:text-2xl text-accent">Hello, I'm</h3>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Yash Biyani</h1>
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-primary inline-block">
              {text}<span className="typing-cursor"></span>
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Specializing in AWS, Kubernetes, Docker, CI/CD, and cloud infrastructure automation
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow text-foreground hover:text-accent transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
