
import { useState } from 'react';
import { Cloud, Server, Database, GitBranch, Code, BarChart2 } from 'lucide-react';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('cloud');
  
  const skills = {
    cloud: [
      { name: 'AWS', level: 90, icon: Cloud, color: 'text-tech-aws' },
      { name: 'Azure', level: 80, icon: Cloud, color: 'text-devops-blue' },
      { name: 'GCP', level: 70, icon: Cloud, color: 'text-devops-red' },
      { name: 'Terraform', level: 85, icon: Server, color: 'text-devops-cyan' },
    ],
    container: [
      { name: 'Docker', level: 95, icon: Server, color: 'text-tech-docker' },
      { name: 'Kubernetes', level: 90, icon: Server, color: 'text-tech-kubernetes' },
      { name: 'Helm', level: 85, icon: Server, color: 'text-accent' },
      { name: 'EKS', level: 80, icon: Server, color: 'text-tech-aws' },
    ],
    cicd: [
      { name: 'Jenkins', level: 90, icon: GitBranch, color: 'text-tech-jenkins' },
      { name: 'GitHub Actions', level: 85, icon: GitBranch, color: 'text-foreground' },
      { name: 'GitLab CI', level: 80, icon: GitBranch, color: 'text-devops-orange' },
      { name: 'ArgoCD', level: 75, icon: GitBranch, color: 'text-devops-cyan' },
    ],
    programming: [
      { name: 'Python', level: 85, icon: Code, color: 'text-tech-python' },
      { name: 'Java', level: 75, icon: Code, color: 'text-devops-orange' },
      { name: 'Bash/Shell', level: 90, icon: Code, color: 'text-devops-green' },
      { name: 'YAML/JSON', level: 95, icon: Code, color: 'text-devops-blue' },
    ],
    monitoring: [
      { name: 'Prometheus', level: 85, icon: BarChart2, color: 'text-devops-orange' },
      { name: 'Grafana', level: 80, icon: BarChart2, color: 'text-devops-green' },
      { name: 'ELK Stack', level: 75, icon: BarChart2, color: 'text-devops-red' },
      { name: 'CloudWatch', level: 85, icon: BarChart2, color: 'text-tech-aws' },
    ],
  };
  
  const tabs = [
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'container', label: 'Containers', icon: Server },
    { id: 'cicd', label: 'CI/CD', icon: GitBranch },
    { id: 'programming', label: 'Programming', icon: Code },
    { id: 'monitoring', label: 'Monitoring', icon: BarChart2 },
  ];
  
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-card/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            <span className="text-accent">&lt;</span> Technical Skills <span className="text-accent">/&gt;</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            My expertise spans across various DevOps technologies and practices, with a focus on cloud infrastructure, containerization, and automation.
          </p>
        </div>
        
        {/* Skills Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                activeTab === tab.id 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              <tab.icon size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        
        {/* Skills Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {skills[activeTab as keyof typeof skills].map((skill, index) => (
            <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <skill.icon size={20} className={skill.color} />
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                </div>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary/80 to-accent rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%`, animationDelay: `${index * 0.2}s` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
