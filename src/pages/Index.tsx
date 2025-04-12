
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CloudParticles from "@/components/CloudParticles";
import FloatingTechIcons from "@/components/FloatingTechIcons";

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
      
      {/* Floating Badges */}
      <div className="fixed top-32 left-5 md:left-16 z-10 hidden md:block">
        <div className="floating-badge animate-bounce-slow">
          DevOps Engineer
        </div>
      </div>
      
      <div className="fixed top-56 right-5 md:right-16 z-10 hidden md:block">
        <div className="floating-badge animate-bounce-slow" style={{ animationDelay: "1.5s" }}>
          2+ Years Experience
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
    </div>
  );
};

export default Index;
