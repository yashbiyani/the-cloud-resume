import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import CloudParticles from "@/components/CloudParticles";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import FloatingTechIcons from "@/components/FloatingTechIcons";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { VisitorCounter } from "@/components/VisitorCounter";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      {/* Background Effects */}
      <CloudParticles />
      <FloatingTechIcons />
      
      {/* DevOps-themed Pipeline Visualization (subtle background effect) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="pipeline-container w-full h-1 absolute top-1/4">
          <div className="pipeline-dot" style={{ animationDelay: "0s" }}></div>
          <div className="pipeline-dot" style={{ animationDelay: "1s" }}></div>
          <div className="pipeline-dot" style={{ animationDelay: "2s" }}></div>
        </div>
        <div className="pipeline-container w-full h-1 absolute top-2/3">
          <div className="pipeline-dot" style={{ animationDelay: "0.5s" }}></div>
          <div className="pipeline-dot" style={{ animationDelay: "1.5s" }}></div>
          <div className="pipeline-dot" style={{ animationDelay: "2.5s" }}></div>
        </div>
      </div>
      
      {/* Main Content */}
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <VisitorCounter />
    </div>
  );
};

export default Index;
