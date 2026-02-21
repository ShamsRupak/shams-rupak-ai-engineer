import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Python", "Java", "SQL", "JavaScript", "C"],
  },
  {
    title: "Backend & Systems",
    skills: ["FastAPI", "REST APIs", "JWT Auth", "RBAC", "Redis", "PostgreSQL", "Docker", "GitHub Actions CI/CD", "CMake", "Linux", "Alembic"],
  },
  {
    title: "Testing & Quality",
    skills: ["Unit & Integration Testing", "ASAN/UBSAN Sanitizers", "CI Pipelines", "GDB", "Valgrind"],
  },
  {
    title: "AI / ML / Data Science",
    skills: ["PyTorch", "scikit-learn", "LlamaIndex", "LLMs", "NLP", "OCR", "Embeddings", "XGBoost", "RAG"],
  },
  {
    title: "Web & Tools",
    skills: ["React", "Chrome Extensions", "HTML/CSS", "NumPy", "Pandas", "Git"],
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
