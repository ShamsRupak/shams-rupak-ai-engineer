import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap } from "lucide-react";

const educations = [
  {
    degree: "M.S. Engineering Artificial Intelligence",
    school: "Stony Brook University",
    dates: "Aug 2025 – Dec 2026",
    coursework: "Machine Learning, Deep Learning, AI for Robotics",
  },
  {
    degree: "B.S. Applied Mathematics & Statistics",
    school: "Stony Brook University",
    dates: "Aug 2021 – May 2025",
    coursework: "Data Structures & Algorithms, OOP, Probability Theory",
  },
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 relative z-10">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold mb-12">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {educations.map((edu, i) => (
            <div key={i} className="glass-card rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <GraduationCap size={18} className="text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
              </div>
              <div className="text-sm text-muted-foreground">
                {edu.school} · {edu.dates}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="text-primary text-xs uppercase tracking-wider font-medium">Coursework: </span>
                {edu.coursework}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
