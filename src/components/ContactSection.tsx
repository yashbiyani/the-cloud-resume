import { motion } from 'framer-motion';
import { AtSign, Code2, FileText, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

// Add custom WhatsApp icon component
const WhatsApp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.646.075-.3-.15-1.269-.468-2.419-1.491-.893-.8-1.498-1.786-1.674-2.086-.173-.3-.018-.462.13-.61.134-.133.3-.347.45-.52.149-.174.199-.3.3-.498.099-.2.05-.374-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172 0-.371-.025-.571-.025-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.488s1.07 2.886 1.219 3.085c.15.2 2.105 3.21 5.1 4.504.714.31 1.27.495 1.705.636.714.227 1.364.195 1.879.118.574-.078 1.767-.721 2.016-1.42.255-.7.255-1.3.18-1.425-.074-.127-.274-.204-.574-.354z" />
    <path d="M20.52 3.449C12.831-3.086 0 1.633 0 12.14c0 2.125.562 4.214 1.636 6.06L0 24l5.897-1.575c1.785.99 3.799 1.51 5.835 1.51 10.478 0 15.21-12.886 8.787-20.487z" />
  </svg>
);

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-accent">&lt;</span> Get In Touch <span className="text-accent">/&gt;</span>
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have a project in mind or interested in collaboration? Feel free to reach out!
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* YouTube Playlist Section */}
          <motion.div 
            className="glass-card rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Playlist</h3>
            <p className="text-muted-foreground mb-6">
              Take a break and enjoy some music from my personal YouTube playlist while you explore the site.
            </p>
            <div className="aspect-video w-full rounded-2xl overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/videoseries?list=PL3GtQHnAfaZoSFs2JyEJeN-zJRk1lRRmt" 
                title="Yash's Playlist" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div 
              className="glass-card rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-full">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Pune, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-full">
                    <AtSign size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:yash.biyani23@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                      yash.biyani23@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Connect & follow me on</h4>
                <div className="flex gap-4 justify-center md:justify-start">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.a 
                          href="https://github.com/yashbiyani" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="GitHub Profile"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} />
                        </motion.a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.a 
                          href="https://www.linkedin.com/in/yashbiyani/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="LinkedIn Profile"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin size={20} />
                        </motion.a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>LinkedIn</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.a 
                          href="https://leetcode.com/YashBiyani" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="LeetCode Profile"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Code2 size={20} />
                        </motion.a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>LeetCode</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.a 
                          href="//wa.me/917705094560?text=Hey%20Yash%2C%20I%20saw%20your%20portfolio%2C%20and%20I%27m%20really%20amazed%20by%20it%2C%20is%20it%20a%20good%20time%20to%20talk%3F" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="WhatsApp"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <WhatsApp size={20} />
                        </motion.a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>WhatsApp</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-4">Open to Work</h3>
              <p className="text-muted-foreground mb-4">
                I'm currently open to DevOps Engineer, Cloud Engineer, and Site Reliability Engineer roles.
                Feel free to reach out via WhatsApp or email for any opportunities.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center md:justify-start"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button asChild className="rounded-full">
                        <a 
                          href="https://drive.google.com/file/d/1-oeqtR0VraTRJXMq4i-XNUuHw1blM5S-/view?usp=sharing" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <FileText size={18} />
                          View Resume
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download CV</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
