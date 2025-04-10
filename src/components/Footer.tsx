
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-accent">&lt;</span>Yash.<span className="text-accent">dev</span><span className="text-accent">/&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              DevOps Engineer & Cloud Specialist
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8">
            <div>
              <h4 className="font-medium mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm text-muted-foreground hover:text-accent transition-colors">Home</a></li>
                <li><a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About</a></li>
                <li><a href="#skills" className="text-sm text-muted-foreground hover:text-accent transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:yash.biyani@example.com" 
                    className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <Mail size={14} />
                    Email
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Yash Biyani. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground mt-2 md:mt-0 flex items-center gap-1">
            Built with <Heart size={14} className="text-devops-red" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
