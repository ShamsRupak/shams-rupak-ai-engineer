import { useEffect, useState } from "react";
import { MapPin, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const terminalLines = [
  "deploying ML pipelines...",
  "building RAG systems...",
  "shipping production code...",
  "optimizing model inference...",
  "automating document workflows...",
];

const HeroSection = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = terminalLines[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 50);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setLineIndex((i) => (i + 1) % terminalLines.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, lineIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="mx-auto max-w-6xl w-full px-6 grid lg:grid-cols-5 gap-12 items-center">
        {/* Left content */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin size={14} className="text-primary" />
            <span>New York, NY</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Shams Rupak</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-muted-foreground">
            Software Engineer · AI/ML Engineer
          </p>

          <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
            I build production ML pipelines, RAG systems, and full-stack applications.
          </p>

          {/* Terminal */}
          <div className="glass-card rounded-lg px-4 py-3 max-w-md font-mono text-sm">
            <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-destructive/70" />
            <span className="w-3 h-3 rounded-full bg-accent/70" />
            <span className="w-3 h-3 rounded-full bg-primary/70" />
            </div>
            <div className="text-muted-foreground">
              <span className="text-primary">~/shams</span>
              <span className="text-foreground"> $ </span>
              <span className="text-foreground">
                {terminalLines[lineIndex].substring(0, charIndex)}
              </span>
              <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-terminal-blink" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80">
              <a href="/Shams_Rupak_Software_Engineer_2026.pdf" target="_blank" rel="noopener noreferrer">
                <FileText size={16} />
                View Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
              <a href="#contact">
                <Mail size={16} />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Right — avatar placeholder */}
        <div className="lg:col-span-2 flex justify-center">
        <div className="relative">
            <img
              src="/headshot.jpg"
              alt="Shams Rupak"
              className="w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover purple-glow border-2 border-primary/30"
            />
            <div className="absolute -inset-4 rounded-full border border-primary/10 animate-pulse pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
