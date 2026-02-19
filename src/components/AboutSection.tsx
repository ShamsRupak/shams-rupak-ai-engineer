import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState, useRef } from "react";

const metrics = [
  { value: 60, suffix: "%", label: "Processing Time Reduced" },
  { value: 95, suffix: "%+", label: "Detection Accuracy" },
  { value: 1000, suffix: "+", label: "Docs Automated" },
  { value: 30, suffix: "M+", label: "Content Views" },
];

function CountUp({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<ReturnType<typeof requestAnimationFrame>>();

  useEffect(() => {
    if (!start) return;
    const duration = 1500;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) ref.current = requestAnimationFrame(step);
    };

    ref.current = requestAnimationFrame(step);
    return () => { if (ref.current) cancelAnimationFrame(ref.current); };
  }, [start, target]);

  return (
    <span className="text-3xl sm:text-4xl font-bold gradient-text">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative z-10">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="gradient-text">About Me</span>
        </h2>

        <p className="text-muted-foreground leading-relaxed max-w-3xl text-base sm:text-lg mb-12">
          M.S. Engineering Artificial Intelligence candidate (Dec 2026) at Stony Brook University
          with a B.S. in Applied Mathematics & Statistics. Strong foundations in machine learning,
          C++ systems programming, and scalable systems design. Experienced designing, deploying,
          and optimizing end-to-end ML pipelines, RAG systems, and OCR-based document automation.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-5 text-center space-y-2"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CountUp target={m.value} suffix={m.suffix} start={isVisible} />
              <p className="text-xs sm:text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
