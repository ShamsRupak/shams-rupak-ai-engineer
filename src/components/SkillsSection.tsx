import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++20 (Compilers & Systems)", "Rust (Event Streaming)", "Python (Backend & ML)", "Java (OOP)", "SQL (PostgreSQL)", "JavaScript/TypeScript (Full Stack)", "C (Low Level)"],
  },
  {
    title: "Systems & Backend",
    skills: ["FastAPI", "REST APIs", "JWT/OAuth2", "Redis", "PostgreSQL", "Docker", "Prometheus", "WebSockets", "GitHub Actions", "CMake", "Cargo", "Linux", "TCP", "Alembic"],
  },
  {
    title: "AI / ML / Data Science",
    skills: ["PyTorch", "Transformers (GPT)", "LoRA (Fine Tuning)", "LLM Agents (DAG)", "RAG", "Drift Detection (PSI/KL)", "scikit-learn", "LlamaIndex", "NLP", "OCR", "XGBoost"],
  },
  {
    title: "Testing & Quality",
    skills: ["500+ Tests", "ASAN/UBSAN", "CI Pipelines", "GDB & Valgrind", "Benchmarking (p50/p95/p99)"],
  },
  {
    title: "Web & Tools",
    skills: ["React", "Chrome Extensions", "REST APIs", "NumPy", "Pandas"],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative z-10">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold mb-12">
          <span className="gradient-text">Skills & Tech Stack</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <Badge
                    key={s}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground border border-border hover:border-primary/30 transition-colors text-xs"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
