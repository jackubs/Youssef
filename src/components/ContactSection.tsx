import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#", color: "hover:text-foreground" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-primary" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-primary" },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Replace the placeholders with your actual EmailJS values
      await emailjs.send(
        "service_kn2clos",   // <-- EmailJS Service ID
        "template_910vc0c",  // <-- EmailJS Template ID
        formData,
        "9ljdQtUXQvi7CRpN9"    // <-- EmailJS Public Key
      );

      await emailjs.send(
        "service_kn2clos",             // Same service ID
        "template_h2u2jgv",          // Auto-reply template ID
        formData,                       // Make sure it has 'email', 'name', 'message'
        "9ljdQtUXQvi7CRpN9"             // Same public key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to send message. Try again later.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-radial-gradient opacity-30" />
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Let's create something amazing together</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display font-semibold text-xl mb-4">Let's Connect</h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Whether you need a game developer, musician, or
                creative collaborator—let's talk!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">youssef.yakoubbi@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Ariana, Tunisie</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-xl bg-card border border-border">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-secondary/50 border-border focus:border-primary"
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>

              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="bg-secondary/50 border-border focus:border-primary mb-6"
              />

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={6}
                className="bg-secondary/50 border-border focus:border-primary resize-none mb-6"
              />

              <Button type="submit" variant="hero" size="lg" className="w-full gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
