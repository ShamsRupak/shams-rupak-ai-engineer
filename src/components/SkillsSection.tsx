import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "Java", "SQL", "JavaScript", "C", "R"],
  },
  {
    title: "ML & AI",
    skills: ["PyTorch", "scikit-learn", "XGBoost", "LLMs", "RAG", "LlamaIndex", "NLP", "OCR", "Embeddings", "Semantic Search", "Feature Engineering"],
  },
  {
    title: "Systems & Data",
    skills: ["DSA", "OOP", "STL", "Memory Management", "NumPy", "Pandas", "REST APIs", "ETL Pipelines", "Git", "Linux"],
  },
  {
    title: "Web",
    skills: ["React", "HTML/CSS", "Chrome Extensions"],
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
