
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: 'DevOps Engineer',
      company: 'Vodafone',
      location: 'Pune, Maharashtra, India',
      period: 'Aug 2022 - Present',
      duration: '2 yrs 9 mos',
      description: [
        'Led the deployment of a two-tier Flask-primarily based Todo software with MySQL backend',
        'Championed containerization using Docker and Docker Compose',
        'Automated Kubernetes cluster setup with kubeadm, later transitioning to AWS EKS',
        'Implemented Helm charts for better deployment management',
        'Set up multi-node clusters with load balancers for high availability',
        'Reduced downtime by 60% through improved infrastructure management',
      ],
      skills: ['Kubernetes', 'GitHub', 'Docker', 'AWS', 'CI/CD', 'Jenkins']
    },
    {
      id: 2,
      role: 'Trainee',
      company: 'Vodafone',
      location: 'Pune, Maharashtra, India',
      period: 'Aug 2022 - Oct 2022',
      duration: '3 mos',
      description: [
        'Underwent intensive training in DevOps practices and tools',
        'Developed strong foundation in Python for automation',
        'Learned containerization basics with Docker',
        'Participated in collaborative programming projects',
      ],
      skills: ['Python', 'Competitive Programming', 'Docker', 'Git']
    }
  ];
  
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            <span className="text-accent">&lt;</span> Work Experience <span className="text-accent">/&gt;</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey in the world of DevOps and cloud engineering.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Connector */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/50 transform md:translate-x-px"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-card border-2 border-primary rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <Briefcase size={16} className="text-primary" />
                </div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 relative">
                  <div 
                    className={`glass-card rounded-lg p-6 hover:shadow-xl transition-all duration-300 
                    ${index % 2 === 0 ? 'md:animate-slide-in-left' : 'md:animate-slide-in-right'}`}
                    style={{ animationDelay: '0.3s' }}
                  >
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-primary">{exp.company}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar size={14} />
                      <span>{exp.period} · {exp.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                    
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight size={16} className="text-accent mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span 
                          key={skill} 
                          className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Spacer for timeline layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
