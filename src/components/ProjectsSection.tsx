import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TinyLang — Compiled Programming Language from Scratch",
    description: "Complete programming language from scratch. Lexer, Pratt parser, type inference, 28-opcode bytecode compiler, stack-based VM with mark-sweep garbage collector. 112 tests.",
    tech: ["C++20", "Compilers", "Bytecode", "VM", "GC"],
    github: "https://github.com/ShamsRupak/tinylang",
  },
  {
    title: "StreamForge — Event Streaming Engine from Scratch",
    description: "Kafka-inspired streaming engine. Commit log with CRC32, TCP broker, wire protocol, producer/consumer SDKs, LZ4 compression. 304K records/sec. 73 tests.",
    tech: ["Rust", "TCP", "Tokio", "LZ4", "Async I/O"],
    github: "https://github.com/ShamsRupak/streamforge",
  },
  {
    title: "Nexus — AI Agent Orchestration Platform",
    description: "Enterprise agent orchestration with 6 modules. LoRA fine-tuning for Qwen-2.5, DAG planning, evaluation pipelines, Prometheus observability. 207 tests.",
    tech: ["Python", "FastAPI", "PyTorch", "LoRA", "LLMs"],
    github: "https://github.com/ShamsRupak/nexus",
  },
  {
    title: "SentinelBoard — ML Monitoring Dashboard",
    description: "Real-time ML monitoring with PSI drift detection, Prometheus instrumentation (p50/p95/p99), WebSocket streaming, React dashboard. 47 tests. Live deployed.",
    tech: ["Python", "FastAPI", "React", "WebSocket", "Prometheus"],
    github: "https://github.com/ShamsRupak/sentinelboard",
    live: "https://sentinelboard-ui.onrender.com",
  },
  {
    title: "MicroFormer — GPT Transformer from Scratch",
    description: "GPT architecture from scratch. RoPE, RMSNorm, BPE tokenizer, MQA ablation (20.6% param reduction). FastAPI inference server with KV-cache. 112 tests.",
    tech: ["Python", "PyTorch", "Transformers"],
    github: "https://github.com/ShamsRupak/microformer",
  },
  {
    title: "CacheCraft — Concurrent Cache Server",
    description: "Redis-inspired TCP cache server. O(1) LRU eviction, sharded thread-safe storage, TTL expiration. Benchmarked p50/p95/p99. ASAN/UBSAN CI.",
    tech: ["C++20", "TCP", "Concurrency", "Threads"],
    github: "https://github.com/ShamsRupak/cachecraft",
  },
  {
    title: "SAGE — LLM Research Agent",
    description: "Autonomous research agent with DAG-based hierarchical planner, ReAct tool-use loop, evidence critic scoring, provider-agnostic LLM failover. 59 tests.",
    tech: ["Python", "LLM Agents", "DAG Planner", "ReAct"],
    github: "https://github.com/ShamsRupak/sage",
  },
  {
    title: "Salesforce AI Workflow",
    description: "Automated lead qualification and opportunity risk detection. AI vs rule-based decision architecture. 71 tests, zero false classifications.",
    tech: ["Python", "Salesforce REST API", "OpenAI", "SOQL"],
    github: "https://github.com/ShamsRupak/salesforce-ai-workflow",
  },
  {
    title: "PulseAPI — Production Backend Service",
    description: "Production REST API with JWT auth, RBAC, PostgreSQL with Alembic migrations, Redis caching & rate limiting. Containerized with Docker Compose + CI/CD.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/ShamsRupak/pulseapi",
  },
  {
    title: "Insurance Risk and Claims Modeling",
    description: "Financial modeling pipeline on 678K+ policy records. Poisson/Gamma GLM with Bayesian calibration. Risk segmentation with up to 24.6x price relativities.",
    tech: ["Python", "R", "SQL", "Statistical Modeling"],
    github: "https://github.com/ShamsRupak/insurance-risk-and-claims-modeling",
  },
  {
    title: "AI Document Processing Suite",
    description: "End-to-end pipeline processing 1,000+ financial docs with intelligent classification, OCR extraction, and embedding-based semantic retrieval. 60% throughput increase.",
    tech: ["Python", "LlamaIndex", "RAG", "OCR"],
    github: "https://github.com/ShamsRupak/ai-doc-processing-suite",
  },
  {
    title: "NYC Weather Prediction",
    description: "Full ML pipeline: EDA, feature engineering, XGBoost model achieving 81.4% accuracy on NYC temperature trend classification.",
    tech: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
    github: "https://github.com/ShamsRupak/nyc-weather-prediction",
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

      <div className="flex flex-wrap gap-3">
        <Button asChild variant="outline" size="sm" className="w-fit border-border hover:bg-secondary">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={14} />
            GitHub
          </a>
        </Button>
        {project.live && (
          <Button asChild variant="outline" size="sm" className="w-fit border-primary/30 text-primary hover:bg-primary/10">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProjectsSection;
