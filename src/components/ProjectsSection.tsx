import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Github, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Document Processing Suite",
    description:
      "Built scalable document ingestion and classification system using PyMuPDF and OCR for structured financial data extraction. Developed embedding-based semantic retrieval pipeline enabling contextual document Q&A.",
    tech: ["Python", "PyMuPDF", "Tesseract OCR", "LlamaIndex", "RAG", "NLP"],
    github: "https://github.com/ShamsRupak/ai-doc-processing-suite",
  },
  {
    title: "Student Buddy — AI Chrome Extension",
    description:
      "Engineered AI-powered Chrome extension using JavaScript and Gemini API with modular frontend architecture and scalable API integration for real-time academic assistance.",
    tech: ["JavaScript", "Gemini API", "Chrome APIs", "HTML/CSS"],
    github: "https://github.com/ShamsRupak/student-buddy-extension",
  },
  {
    title: "NYC Weather Prediction",
    description:
      "Full ML pipeline from EDA to feature engineering to model training with XGBoost and scikit-learn for accurate NYC temperature trend predictions.",
    tech: ["XGBoost", "scikit-learn", "Pandas", "Python"],
    github: "https://github.com/ShamsRupak/nyc-weather-prediction",
  },
  {
    title: "Voice Bot QA Testing System",
    description:
      "Automated QA system that makes real phone calls to AI healthcare agents, simulating patient scenarios with real-time voice processing and GPT-4o-mini for automated bug report generation.",
    tech: ["Python", "Twilio", "Deepgram", "GPT-4o-mini"],
    github: null,
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          ref={ref}
          className={`text-3xl font-bold mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`glass-card rounded-xl p-6 flex flex-col gap-4 transition-all duration-500 hover:border-primary/30 hover:purple-glow hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge
            key={t}
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20 text-xs"
          >
            {t}
          </Badge>
        ))}
      </div>

      {project.github ? (
        <Button asChild variant="outline" size="sm" className="w-fit border-border hover:bg-secondary">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={14} />
            View on GitHub
          </a>
        </Button>
      ) : (
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Lock size={12} />
          <span>Private Repository</span>
        </div>
      )}
    </div>
  );
}

export default ProjectsSection;
