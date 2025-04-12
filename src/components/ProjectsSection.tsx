
import { useState } from 'react';
import { ExternalLink, GitBranch, Cloud, Database, Server, Terminal, Code } from 'lucide-react';

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
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            <span className="text-accent">&lt;</span> Projects <span className="text-accent">/&gt;</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Key projects showcasing my DevOps expertise
          </p>
        </div>
        
        {/* Compact Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`glass-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/20 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-secondary/50 rounded-full text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{project.timeline}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-1">
                      <Terminal size={16} className="text-devops-cyan" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Key Achievement</h4>
                      <p className="text-xs text-muted-foreground">{project.results[0]}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="mt-1">
                      <Code size={16} className="text-devops-green" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Core Technology</h4>
                      <p className="text-xs text-muted-foreground">{project.technologies[0]}, {project.technologies[1]}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4 gap-2">
                  {project.links.map(link => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 hover:bg-primary/20 rounded-md text-xs transition-colors"
                    >
                      {link.label}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
