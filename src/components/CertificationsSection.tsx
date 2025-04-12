
import { useState } from 'react';
import { Award, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const certifications = [
    {
      id: 1,
      name: 'Introduction to Generative AI',
      issuer: 'Google',
      date: 'Apr 2024',
      image: '/lovable-uploads/ee270ea6-6e6e-4a86-98ad-24c7e02d9231.png',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png'
    },
    {
      id: 2,
      name: 'DevSecOps Foundation',
      issuer: 'VOIS',
      date: 'Jul 2023',
      image: '/lovable-uploads/d9e440ed-480f-463a-9360-99e3391f73c0.png',
      logo: '/lovable-uploads/d9e440ed-480f-463a-9360-99e3391f73c0.png'
    },
    {
      id: 3,
      name: 'Agile Essentials',
      issuer: 'VOIS',
      date: 'Jan 2023',
      image: '/lovable-uploads/d9e440ed-480f-463a-9360-99e3391f73c0.png',
      logo: '/lovable-uploads/d9e440ed-480f-463a-9360-99e3391f73c0.png'
    },
    {
      id: 4,
      name: 'Networking Essentials',
      issuer: 'Cisco',
      date: 'Aug 2021',
      image: '/lovable-uploads/98b4631a-9851-4d4d-b571-b92f12021673.png',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png'
    },
    {
      id: 5,
      name: 'PCAP: Programming Essentials in Python',
      issuer: 'Cisco',
      date: 'Jul 2021',
      image: '/lovable-uploads/98b4631a-9851-4d4d-b571-b92f12021673.png',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png'
    },
    {
      id: 6,
      name: 'Python (Basics)',
      issuer: 'HackerRank',
      date: 'Sep 2020',
      image: '/lovable-uploads/1e737bf9-28b7-48f4-9099-c2612b5f70af.png',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png'
    }
  ];
  
  const visibleCerts = () => {
    // For mobile, show only one certificate at a time
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return [certifications[currentIndex]];
    }
    
    // For desktop, show 3 certificates at a time
    const start = currentIndex;
    const end = Math.min(start + 3, certifications.length);
    return certifications.slice(start, end);
  };
  
  const nextCert = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next >= certifications.length - 2 ? 0 : next;
    });
  };
  
  const prevCert = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      return next < 0 ? certifications.length - 3 : next;
    });
  };
  
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            <span className="text-accent">&lt;</span> Certifications <span className="text-accent">/&gt;</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my technical expertise and knowledge in various domains.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevCert}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous certificate"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextCert}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next certificate"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Certificate Carousel */}
          <div className="overflow-hidden px-10">
            <div className="flex justify-center gap-6 transition-all duration-500 ease-in-out">
              {visibleCerts().map((cert, index) => (
                <div
                  key={cert.id}
                  className="w-full md:w-1/3 glass-card rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-card p-4 flex items-center gap-4 border-b border-border">
                    <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0 bg-white p-1 flex items-center justify-center">
                      <img 
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium line-clamp-1">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <div className="aspect-[4/3] bg-gradient-to-b from-card to-background flex items-center justify-center p-6">
                    <div className="relative w-20 h-20 animated-border rounded-full flex items-center justify-center bg-card">
                      <Award size={32} className="text-accent" />
                    </div>
                  </div>
                  
                  <div className="p-4 flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">Issued {cert.date}</div>
                    <button className="text-sm text-primary flex items-center gap-1 hover:underline">
                      Verify
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certification Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-6' : 'bg-muted hover:bg-muted-foreground'
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Awards Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">Awards & Recognition</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-lg hover:shadow-xl transition-all animate-slide-in-left">
              <div className="flex items-start gap-4">
                <div className="bg-card p-3 rounded-lg">
                  <Award size={32} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Vodafone Stars Award</h4>
                  <p className="text-sm text-muted-foreground">May 2024</p>
                  <p className="mt-3">
                    Honored to receive the Vodafone Stars Award for effectively managing project responsibilities
                    with dedication and efficiency.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg hover:shadow-xl transition-all animate-slide-in-right">
              <div className="flex items-start gap-4">
                <div className="bg-card p-3 rounded-lg">
                  <Award size={32} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Vodafone Stars Award</h4>
                  <p className="text-sm text-muted-foreground">Mar 2025</p>
                  <p className="mt-3">
                    Thrilled to receive the Vodafone Stars Award for the second time! This recognition highlights
                    my continuous efforts to deliver impactful results as a DevOps Engineer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
