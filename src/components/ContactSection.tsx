
import { AtSign, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            <span className="text-accent">&lt;</span> Get In Touch <span className="text-accent">/&gt;</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or interested in collaboration? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* YouTube Playlist Section */}
          <div className="glass-card rounded-lg p-6 md:p-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">My Playlist</h3>
            <p className="text-muted-foreground mb-6">
              Take a break and enjoy some music from my personal YouTube playlist while you explore the site.
            </p>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" 
                title="Yash's Playlist" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="glass-card rounded-lg p-6 md:p-8">
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
                    <a href="mailto:yash.biyani@example.com" className="text-muted-foreground hover:text-accent transition-colors">
                      yash.biyani@example.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://wa.me/+919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Open to Work</h3>
              <p className="text-muted-foreground">
                I'm currently open to DevOps Engineer, Cloud Engineer, and Site Reliability Engineer roles.
                Feel free to reach out via WhatsApp or email for any opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
