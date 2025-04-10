
import { useState } from 'react';
import { ExternalLink, GitBranch, Cloud, Database, Server } from 'lucide-react';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: 'Scaling a Flask Todo App on Kubernetes',
      timeline: 'Nov 2023 - Nov 2023',
      image: '/lovable-uploads/2ec3e1f6-9c22-4da0-b6ef-c5e86b1738bd.png',
      description: 'Led the deployment of a two-tier Flask-primarily based Todo software with a MySQL backend, designed to efficiently handle 10,000 concurrent customers.',
      tasks: [
        'Championed the containerization of the application using Docker and Docker Compose',
        'Automated Kubernetes cluster setup with kubeadm, later transitioning to AWS EKS',
        'Leveraged Helm for package management and configuration',
        'Orchestrated a multi-node cluster for high availability',
      ],
      results: [
        'Successfully scaled to handle 10,000 concurrent users',
        'Achieved 60% reduction in downtime',
        'Established fault tolerance with AWS EKS',
      ],
      technologies: ['Kubernetes', 'Docker', 'AWS EKS', 'Helm', 'MySQL', 'Flask'],
      links: [
        { label: 'Project Demo', url: '#' },
        { label: 'GitHub', url: '#' },
      ]
    },
    {
      id: 2,
      title: 'Linux for DevOps Series',
      timeline: 'Jan 2024 - Ongoing',
      image: '/lovable-uploads/12a10b7b-0fe3-48c6-856a-bd5f819c451e.png',
      description: 'Created a comprehensive tutorial series on Linux fundamentals for DevOps engineers, covering essential commands, user management, and file permissions.',
      tasks: [
        'Developed hands-on exercises for practical learning',
        'Created documentation for common Linux operations',
        'Published articles on Medium covering various Linux topics',
        'Built a community around DevOps best practices',
      ],
      results: [
        'Growing follower base on professional platforms',
        'Positive feedback from DevOps community',
        'Improved awareness of Linux best practices',
      ],
      technologies: ['Linux', 'Bash', 'Shell Scripting', 'DevOps', 'Documentation'],
      links: [
        { label: 'Medium Blog', url: '#' },
      ]
    }
  ];
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-card/60 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            <span className="text-accent">&lt;</span> Projects <span className="text-accent">/&gt;</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Highlighting key projects that demonstrate my expertise in DevOps, cloud infrastructure, and container orchestration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Project Tabs */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  activeProject === index
                    ? 'glass-card border-l-4 border-l-primary'
                    : 'bg-secondary/50 hover:bg-secondary'
                }`}
              >
                <h3 className={`text-xl font-medium ${activeProject === index ? 'text-primary' : 'text-foreground'}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{project.timeline}</p>
              </button>
            ))}
          </div>
          
          {/* Active Project Details */}
          <div className="relative">
            <div className="glass-card rounded-lg overflow-hidden animate-fade-in">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold">{projects[activeProject].title}</h3>
                <p className="text-muted-foreground mt-2">{projects[activeProject].description}</p>
                
                <div className="mt-4">
                  <h4 className="text-lg font-medium flex items-center gap-2">
                    <Server size={18} className="text-devops-blue" />
                    Key Tasks
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {projects[activeProject].tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent">▹</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-lg font-medium flex items-center gap-2">
                    <Database size={18} className="text-devops-green" />
                    Results
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {projects[activeProject].results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent">▹</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {projects[activeProject].technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 flex flex-wrap gap-3">
                  {projects[activeProject].links.map(link => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors"
                    >
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-5 -left-5 p-3 glass-card rounded-full animate-float hidden md:block">
              <Cloud size={24} className="text-tech-kubernetes" />
            </div>
            <div className="absolute -bottom-5 -right-5 p-3 glass-card rounded-full animate-float hidden md:block" style={{ animationDelay: "1.5s" }}>
              <GitBranch size={24} className="text-devops-cyan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
