import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 relative z-10">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold mb-4">
          <span className="gradient-text">Get in Touch</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just saying hello.
        </p>

        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 mb-10">
          <a href="mailto:shamsrupak@gmail.com">
            <Mail size={16} />
            shamsrupak@gmail.com
          </a>
        </Button>

        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          <a
            href="https://www.linkedin.com/in/shams-rupak-262906272/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/ShamsRupak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:shamsrupak@gmail.com"
            className="hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="tel:+16466197873"
            className="hover:text-primary transition-colors"
            aria-label="Phone"
          >
            <Phone size={22} />
          </a>
        </div>

        <p className="text-sm text-muted-foreground mt-4">646-619-7873</p>
      </div>
    </section>
  );
};

export default ContactSection;
