
import { Cloud, Server, Database, GitBranch, Code } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold relative">
              <span className="text-accent">&lt;</span> About Me <span className="text-accent">/&gt;</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              As a DevOps Engineer at Vodafone, I work with a global team of IT professionals to deliver high-quality and innovative
              solutions for our clients. I use my strong development skills and proficiency in DevOps tools to optimize processes
              and drive operational excellence.
            </p>
            
            <p className="text-lg text-muted-foreground">
              I graduated with a Bachelor of Technology in Computer Science from Medicaps University in August 2022, where I
              learned the fundamentals of programming, web app architecture, and software development life cycle. I also completed
              multiple online courses on Python, which enhanced my scripting and automation abilities.
            </p>
            
            <p className="text-lg text-muted-foreground">
              I am passionate about learning new technologies and applying them to solve real-world problems. I am eager to collaborate
              with other DevOps enthusiasts and elevate organizations' DevOps initiatives.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                <Cloud size={18} className="text-cloud" />
                <span>Cloud Infrastructure</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                <Server size={18} className="text-tech-kubernetes" />
                <span>Kubernetes</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                <Database size={18} className="text-tech-aws" />
                <span>AWS</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                <GitBranch size={18} className="text-devops-blue" />
                <span>CI/CD</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                <Code size={18} className="text-devops-green" />
                <span>Automation</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl border-2 border-accent/20">
              <img 
                src="/lovable-uploads/674c6e35-3c7c-4b9e-9bb5-d74dbc32e88a.png" 
                alt="Yash Biyani" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            
            {/* Floating Experience Card */}
            <div className="absolute -bottom-10 -left-10 glass-card p-4 rounded-lg shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-devops-blue flex items-center justify-center text-white font-bold">
                  2+
                </div>
                <div>
                  <h4 className="font-semibold">Years of</h4>
                  <p className="text-sm text-accent">Experience</p>
                </div>
              </div>
            </div>
            
            {/* Floating Award Card */}
            <div className="absolute -top-5 -right-5 glass-card p-4 rounded-lg shadow-xl animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-tech-aws flex items-center justify-center text-white font-bold">
                  ⭐
                </div>
                <div>
                  <h4 className="font-semibold">Vodafone Stars</h4>
                  <p className="text-sm text-accent">Award Winner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
