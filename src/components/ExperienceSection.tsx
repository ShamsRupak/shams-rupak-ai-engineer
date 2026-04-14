import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Teaching Assistant — Object-Oriented Programming (C++)",
    company: "Stony Brook University",
    dates: "Jan 2026 – Present",
    points: [
      "Mentoring 30+ students in C++ systems fundamentals: OOP design patterns, STL, dynamic memory management, RAII.",
      "Reviewed 150+ submissions with structured technical feedback on architecture, correctness, and efficiency.",
    ],
  },
  {
    title: "AI Engineering & Automation Extern",
    company: "Outamation",
    dates: "May 2025 – Jul 2025",
    points: [
      "Designed and deployed modular AI pipeline: OCR extraction, NLP classification, rule-based validation, RAG-based semantic retrieval.",
      "Processed 1,000+ financial documents with 60% throughput improvement across 3 departments.",
      "Built RAG system with LlamaIndex, contextual chunking, and embedding-based semantic search.",
      "Benchmarked multiple open-source LLMs for production model selection.",
    ],
  },
  {
    title: "Web3 Security Data Analytics Extern",
    company: "Webacy",
    dates: "Sep 2024 – Nov 2024",
    points: [
      "Applied unsupervised ML and clustering for anomalous blockchain transaction detection.",
      "Achieved 95%+ data validation reliability for risk categorization.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader />
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden sm:block" />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <TimelineCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function SectionHeader() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <h2
      ref={ref}
      className={`text-3xl font-bold mb-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <span className="gradient-text">Experience</span>
    </h2>
  );
}

function TimelineCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative sm:pl-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="absolute left-[12px] top-1 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background hidden sm:block" />
      <div className="glass-card rounded-xl p-6 space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <Briefcase size={16} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span>{exp.company}</span>
          <span className="text-border">|</span>
          <span>{exp.dates}</span>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          {exp.points.map((p, j) => (
            <li key={j} className="leading-relaxed">{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceSection;
