import { useParams, Link, useNavigate } from "react-router";
import { getCaseStudy, type CaseStudyData, type RelatedProject } from "@/app/data/caseStudies";

// ─── Constantes de espaciado (sistema de diseño) ──────────────────────────────

const PAD_H = "clamp(16px, 4.5vw, 80px)";
const PAD_V_MD = "clamp(40px, 6vw, 80px)";
const PAD_V_LG = "clamp(48px, 6vw, 64px)";
const GAP_SECTIONS = "clamp(40px, 6vw, 64px)";

// ─── Arrow icon (diagonal) ────────────────────────────────────────────────────

function ArrowDiagonal({ size = 34, color = "#20201F" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 9H25M25 9V25M25 9L9 25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection({ data }: { data: CaseStudyData }) {
  return (
    <section
      className="seccion-hero-casestudy w-full flex flex-col"
      style={{ gap: "clamp(16px, 2vw, 15px)", paddingLeft: PAD_H, paddingRight: PAD_H, paddingTop: PAD_V_MD, paddingBottom: 0 }}
    >
      {/* Hero image */}
      <div className="contenedor-imagen-hero-cs relative w-full overflow-hidden aspect-[4/3] md:aspect-[1760/565]">
        <img
          alt={data.title}
          src={data.heroImage}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* CTA Row: título + visitar sitio */}
      <div className="cta-row-cs flex items-end justify-between w-full flex-wrap gap-4">
        <p
          className="titulo-cs font-medium text-[#20201f]"
          style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.04em", lineHeight: "1" }}
        >
          {data.client}
        </p>
        {data.siteUrl && (
          <a
            href={data.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="visitar-sitio-cs flex items-center gap-[6px] shrink-0"
          >
            <span
              className="font-medium text-[#20201f] whitespace-nowrap"
              style={{ fontSize: "clamp(18px, 2vw, 28px)", letterSpacing: "-0.03em" }}
            >
              Visitar sitio
            </span>
            <ArrowDiagonal size={28} />
          </a>
        )}
      </div>
    </section>
  );
}

// ─── Intro Section (texto + 2 imágenes) ──────────────────────────────────────

function IntroSection({ data }: { data: CaseStudyData }) {
  return (
    <section
      className="seccion-intro-cs w-full flex flex-col"
      style={{ gap: GAP_SECTIONS, paddingLeft: PAD_H, paddingRight: PAD_H, paddingTop: PAD_V_LG, paddingBottom: PAD_V_LG }}
    >
      {/* Text block */}
      <div className="text-block-cs flex flex-col lg:flex-row items-start justify-between gap-8 w-full">
        <p
          className="h2-cs font-medium text-[#20201f] shrink-0"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: "1" }}
        >
          {data.intro.h2}
        </p>
        <div className="flex flex-col gap-[clamp(32px,4vw,64px)] items-start" style={{ maxWidth: 867 }}>
          <p
            className="font-normal text-[#20201f] leading-[1.2]"
            style={{ fontSize: "clamp(16px, 1.8vw, 22px)", letterSpacing: "-0.0125em" }}
          >
            {data.intro.text}
          </p>
          <ul
            className="list-disc font-medium text-[#20201f]"
            style={{ fontSize: "clamp(16px, 1.8vw, 22px)", letterSpacing: "-0.0125em", lineHeight: "1.5", marginLeft: 33 }}
          >
            {data.intro.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Images row */}
      <div className="images-row-cs flex flex-col md:flex-row items-stretch justify-between gap-3 w-full">
        <div className="flex-1 min-w-0 aspect-[862/899] relative overflow-hidden">
          <img alt="" src={data.intro.leftImage} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0 aspect-[862/899] relative overflow-hidden">
          <img alt="" src={data.intro.rightImage} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

// ─── Branding Section (texto + imagen full width) ─────────────────────────────

function BrandingSection({ data }: { data: CaseStudyData }) {
  return (
    <section
      className="seccion-branding-cs w-full flex flex-col"
      style={{ gap: GAP_SECTIONS, paddingLeft: PAD_H, paddingRight: PAD_H, paddingTop: PAD_V_LG, paddingBottom: PAD_V_LG }}
    >
      {/* Text block */}
      <div className="text-block-cs flex flex-col gap-[clamp(20px,3vw,34px)] w-full" style={{ maxHeight: "unset" }}>
        <p
          className="h2-cs font-medium text-[#20201f]"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: "1" }}
        >
          {data.branding.h2}
        </p>
        <p
          className="font-normal text-[#20201f] leading-[1.2]"
          style={{ fontSize: "clamp(16px, 1.8vw, 22px)", letterSpacing: "-0.0125em", maxWidth: 867 }}
        >
          {data.branding.text}
        </p>
      </div>

      {/* Full width image */}
      <div className="imagen-full-cs aspect-[1760/767] relative w-full overflow-hidden">
        <img alt="" src={data.branding.fullImage} className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </section>
  );
}

// ─── Solution Section (texto + 2 imágenes + imagen wide) ─────────────────────

function SolutionSection({ data }: { data: CaseStudyData }) {
  return (
    <section
      className="seccion-solucion-cs w-full flex flex-col"
      style={{ gap: GAP_SECTIONS, paddingLeft: PAD_H, paddingRight: PAD_H, paddingTop: PAD_V_LG, paddingBottom: PAD_V_LG }}
    >
      {/* Text block */}
      <div className="text-block-cs flex flex-col gap-[clamp(20px,3vw,34px)] w-full">
        <p
          className="h2-cs font-medium text-[#20201f]"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: "1" }}
        >
          {data.solution.h2}
        </p>
        <p
          className="font-normal text-[#20201f] leading-[1.2]"
          style={{ fontSize: "clamp(16px, 1.8vw, 22px)", letterSpacing: "-0.0125em", maxWidth: 867 }}
        >
          {data.solution.text}
        </p>
      </div>

      {/* Solution content: 2 images + wide image */}
      <div className="solution-content-cs flex flex-col gap-3 w-full">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-3 w-full">
          <div className="flex-1 min-w-0 aspect-[862/913] relative overflow-hidden">
            <img alt="" src={data.solution.leftImage} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0 aspect-[862/913] relative overflow-hidden">
            <img alt="" src={data.solution.rightImage} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        <div className="aspect-[1744/565] relative w-full overflow-hidden">
          <img alt="" src={data.solution.wideImage} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

// ─── Related Projects Section ─────────────────────────────────────────────────

function RelatedProjectCard({ project }: { project: RelatedProject }) {
  const navigate = useNavigate();
  return (
    <div
      className="proyecto-relacionado flex-1 min-w-0 flex flex-col gap-3 cursor-pointer"
      onClick={() => navigate(`/proyectos/${project.slug}`)}
    >
      {/* Image with date badge */}
      <div className="aspect-[442/332] relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#909090]" />
        <img alt={project.title} src={project.image} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-5 left-5 backdrop-blur-[6px] bg-[rgba(32,32,31,0.7)] px-3 py-2 rounded-[6px]">
          <div className="absolute border border-[rgba(32,32,31,0.2)] inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-medium text-white text-[18px] tracking-[-0.0125em] whitespace-nowrap relative">{project.year}</p>
        </div>
      </div>
      {/* Labels */}
      <div className="flex items-end justify-between w-full">
        <p className="font-medium text-[#20201f] text-[24px] tracking-[-0.03em]">{project.title}</p>
        <p className="font-normal text-[#20201f] text-[20px] tracking-[-0.0125em]">{project.tags}</p>
      </div>
    </div>
  );
}

function RelatedProjectsSection({ data }: { data: CaseStudyData }) {
  return (
    <section
      className="seccion-proyectos-cs w-full flex flex-col"
      style={{ gap: "clamp(32px, 4vw, 52px)", paddingLeft: PAD_H, paddingRight: PAD_H, paddingTop: PAD_V_LG, paddingBottom: PAD_V_LG }}
    >
      <p
        className="font-medium text-[#20201f]"
        style={{ fontSize: "clamp(32px, 5vw, 68px)", letterSpacing: "-0.03em", lineHeight: "0.9", maxWidth: 578 }}
      >
        Proyectos más recientes
      </p>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-3 w-full">
        {data.relatedProjects.map((p) => (
          <RelatedProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

// ─── CaseStudyPage ────────────────────────────────────────────────────────────

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = getCaseStudy(slug ?? "");

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <p className="font-medium text-[#20201f]" style={{ fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-0.03em" }}>
          Proyecto no encontrado
        </p>
        <Link to="/proyectos" className="font-medium text-[#20201f] underline text-[18px] tracking-[-0.0125em]">
          Ver todos los proyectos
        </Link>
      </div>
    );
  }

  return (
    <div className="pagina-case-study w-full bg-white flex flex-col">
      <HeroSection data={data} />
      <IntroSection data={data} />
      <BrandingSection data={data} />
      <SolutionSection data={data} />
      <RelatedProjectsSection data={data} />
    </div>
  );
}
