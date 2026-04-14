import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Award } from "lucide-react";

const educations = [
  {
    degree: "M.S. Engineering Artificial Intelligence",
    school: "Stony Brook University",
    dates: "Aug 2025 – Dec 2026",
    coursework: "Machine Learning · Deep Learning · NLP · AI for Robotics · Motion Planning · Probability Theory · Software Engineering",
  },
  {
    degree: "B.S. Applied Mathematics & Statistics",
    school: "Stony Brook University",
    dates: "Aug 2021 – May 2025",
    coursework: "Data Structures and Algorithms · Numerical Analysis · Operations Research · Statistical Modeling · Financial Mathematics · Linear Algebra",
  },
];

const certifications = [
  {
    name: "IBM Data Fundamentals",
    link: "https://www.credly.com/badges/0afd92c2-2611-4343-baf0-8aa6b87ffc37/linked_in_profile",
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

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
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

        <h3 className="text-2xl font-bold mb-6">
          <span className="gradient-text">Certifications</span>
        </h3>
        <div className="flex flex-wrap gap-4">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-5 flex items-center gap-3 hover:border-primary/30 transition-colors"
            >
              <Award size={18} className="text-primary" />
              <span className="text-sm font-medium text-foreground">{cert.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
