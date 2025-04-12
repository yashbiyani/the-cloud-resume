import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const certifications = [
    {
      id: 1,
      name: 'Introduction to Generative AI',
      issuer: 'Google',
      date: 'Apr 2024',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png',
      url: 'https://www.cloudskillsboost.google/public_profiles/d060b981-d432-4aa4-9c6e-4277b92cf1d4/badges/8625377'
    },
    {
      id: 2,
      name: 'DevSecOps Foundation',
      issuer: 'VOIS',
      date: 'Jul 2023',
      logo: '/assets/vois.png',
      url: 'https://www.credly.com/badges/4c3556e8-aab3-4dbf-a3ba-90cb4d957375/linked_in_profile'
    },
    {
      id: 3,
      name: 'Agile Essentials',
      issuer: 'VOIS',
      date: 'Jan 2023',
      logo: '/assets/vois.png',
      url: 'https://www.credly.com/badges/c8b55983-b911-4cb3-a66c-abae5ce9b0f0/linked_in_profile'
    },
    {
      id: 4,
      name: 'Verified International Academic Qualifications',
      issuer: 'World Education Services',
      date: 'Oct 2023',
      logo: '/assets/wes_logo.png',
      url: 'http://credly.com/badges/8f6b33d5-7823-4a51-8e85-ec3efb9acd98/linked_in_profile'
    },
    {
      id: 5,
      name: 'Networking Essentials',
      issuer: 'Cisco',
      date: 'Aug 2021',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png',
      url: 'https://drive.google.com/file/d/172kv_x3nvVl0Dkr_xft5bc-BMwCAZj8E/view'
    },
    {
      id: 6,
      name: 'CCNAv7: Introduction to Networks',
      issuer: 'Cisco',
      date: 'Jul 2021',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png',
      url: 'https://drive.google.com/file/d/1Q1_3cMSFsTF-qbCC-InT09i25D4nVgQu/view'
    },
    {
      id: 7,
      name: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      date: 'Oct 2020',
      logo: '/assets/HR.png',
      url: 'https://www.hackerrank.com/certificates/54e478a3e523'
    },
    {
      id: 8,
      name: 'Java (Basic)',
      issuer: 'HackerRank',
      date: 'Sep 2020',
      logo: '/assets/HR.png',
      url: 'https://www.hackerrank.com/certificates/e265e01527db'
    },
    {
      id: 9,
      name: 'Python (Basic)',
      issuer: 'HackerRank',
      date: 'Sep 2020',
      logo: '/assets/HR.png',
      url: 'https://www.hackerrank.com/certificates/4f8cd316e402'
    },
    {
      id: 10,
      name: 'Using Python to Interact with the Operating System',
      issuer: 'Google',
      date: 'Aug 2020',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png',
      url: 'https://www.coursera.org/account/accomplishments/verify/THHMMLVAXDWT'
    },
    {
      id: 11,
      name: 'Programming for Everybody (Getting Started with Python)',
      issuer: 'University of Michigan',
      date: 'Apr 2020',
      logo: '/assets/um_logo.png',
      url: 'https://www.coursera.org/account/accomplishments/verify/LTLWZXM2QY5W'
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
          <motion.div 
            className="flex items-center justify-center mb-3 gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
              <span className="text-accent">&lt;</span> Certifications <span className="text-accent">/&gt;</span>
            </h2>
          </motion.div>
          <motion.p 
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional certifications that validate my technical expertise and knowledge in various domains.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button 
            onClick={prevCert}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous certificate"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button 
            onClick={nextCert}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next certificate"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
          
          {/* Certificate Carousel */}
          <div className="overflow-hidden px-10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="flex justify-center gap-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {visibleCerts().map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    className="w-full md:w-1/3 glass-card rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-card p-4 flex items-center gap-4 border-b border-border rounded-t-2xl">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white p-1 flex items-center justify-center">
                        <div className="p-1 bg-primary/10 rounded-full flex items-center justify-center">
                          <Award size={20} className="text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium line-clamp-1 text-sm sm:text-base">{cert.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    
                    <div className="aspect-[4/3] bg-gradient-to-b from-card to-background flex items-center justify-center p-6">
                      <div className="relative w-24 h-24 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-white/95 flex items-center justify-center p-2">
                          {cert.issuer === 'World Education Services' ? (
                            <img 
                              src={cert.logo}
                              alt={cert.issuer}
                              className="w-[90%] h-[90%] object-cover"
                            />
                          ) : cert.issuer === 'HackerRank' ? (
                            <img 
                              src={cert.logo}
                              alt={cert.issuer}
                              className="w-[90%] h-[90%] object-contain scale-110"
                            />
                          ) : (
                            <img 
                              src={cert.logo}
                              alt={cert.issuer}
                              className="w-full h-full object-contain"
                            />
                          )}
                        </div>
                        <motion.div 
                          className="absolute inset-0 border-2 border-primary/40 rounded-full"
                          animate={{ 
                            scale: [1, 1.05, 1], 
                            opacity: [0.7, 0.4, 0.7] 
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="p-4 flex justify-between items-center">
                      <div className="text-xs sm:text-sm text-muted-foreground">Issued {cert.date}</div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.a 
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs sm:text-sm text-primary flex items-center gap-1 hover:underline"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Verify
                              <ExternalLink size={14} />
                            </motion.a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View certificate verification</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Certification Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  index === currentIndex ? "bg-primary w-6 h-2" : "bg-muted hover:bg-muted-foreground w-2 h-2"
                )}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Awards Section */}
        <div className="mt-16">
          <motion.div 
            className="flex items-center justify-center gap-2 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              <span className="text-accent">&lt;</span> Awards & Recognition <span className="text-accent">/&gt;</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-card p-3 rounded-full">
                  <Award size={28} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold">Vodafone Stars Award</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">May 2024</p>
                  <p className="mt-3 text-xs sm:text-sm md:text-base">
                    Honored to receive the Vodafone Stars Award for effectively managing project responsibilities
                    with dedication and efficiency.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-card p-3 rounded-full">
                  <Award size={28} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold">Vodafone Stars Award</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Mar 2025</p>
                  <p className="mt-3 text-xs sm:text-sm md:text-base">
                    Thrilled to receive the Vodafone Stars Award for the second time! This recognition highlights
                    my continuous efforts to deliver impactful results as a DevOps Engineer.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
