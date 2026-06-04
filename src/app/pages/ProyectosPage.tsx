import { useState } from "react";

// Imágenes de Unsplash para proyectos
const UNSPLASH_IMAGES = {
  project1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  project2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  project3: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
  project4: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  project5: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
  project6: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  project7: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  project8: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
  project9: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
};

// ─── Arrow SVG Component ───────────────────────────────────────────────────────

interface ArrowIconProps {
  isHovered: boolean;
  size?: number;
}

function ArrowIcon({ isHovered, size = 32 }: ArrowIconProps) {
  const arrowPath = "M21.3379 12.5444L9.88235 24L8 22.1177L19.4556 10.6621H9.35874V8H24V22.6413H21.3379V12.5444Z";

  return (
    <div className="contenedor-flecha-proyecto relative shrink-0" style={{ width: size, height: size }}>
      <svg
        className="svg-flecha-proyecto absolute block inset-0 size-full"
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip-arrow">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip-arrow)">
          {/* Arrow Path 1 - Estado inicial: x=8, y=8 | Hover: x=36, y=-21 */}
          <path
            className="arrow-path-1 transition-transform duration-500"
            style={{
              transform: isHovered ? "translate(36px, -21px)" : "translate(8px, 8px)",
              transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
            }}
            d={arrowPath}
            fill="#20201F"
          />

          {/* Arrow Path 2 - Estado inicial: x=-20, y=36 | Hover: x=8, y=8 */}
          <path
            className="arrow-path-2 transition-transform duration-500"
            style={{
              transform: isHovered ? "translate(8px, 8px)" : "translate(-20px, 36px)",
              transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
            }}
            d={arrowPath}
            fill="#20201F"
          />
        </g>
      </svg>
    </div>
  );
}

// ─── Project Card Component (First Row - Large) ────────────────────────────────

interface ProjectCardProps {
  title: string;
  tags: string;
  year: string;
  image: string;
  gradient?: string;
}

function ProjectCardLarge({ title, tags, year, image, gradient }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="tarjeta-proyecto tarjeta-proyecto-grande flex flex-col gap-2 w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen Container - Sin border-radius */}
      <div className="contenedor-imagen-proyecto relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {/* Fondo con gradiente */}
        <div className="fondo-gradiente-proyecto absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                gradient ||
                "linear-gradient(117.529deg, rgb(195, 198, 200) 12.721%, rgb(231, 234, 237) 46.826%, rgb(193, 197, 199) 106.37%)",
            }}
          />
        </div>

        {/* Imagen con zoom - Sin border-radius */}
        <img
          alt={title}
          className="imagen-proyecto absolute inset-0 w-full h-full object-cover transition-transform duration-300"
          src={image}
          style={{
            transform: isHovered ? "scale(1.08)" : "scale(1)",
            transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        />

        {/* Badge año */}
        <div className="badge-año absolute top-5 left-5 backdrop-blur-[12px] bg-[rgba(32,32,31,0.7)] px-3 py-2 rounded-[6px] z-10">
          <div className="absolute border border-[rgba(32,32,31,0.2)] inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-medium text-white text-[18px] tracking-[-0.36px] relative whitespace-nowrap">{year}</p>
        </div>
      </div>

      {/* Info Container */}
      <div className="info-proyecto flex items-center justify-between w-full">
        {/* Título */}
        <p className="titulo-proyecto font-medium text-[#20201f] text-[24px] tracking-[-0.48px] whitespace-nowrap">{title}</p>

        {/* Tags y Flecha Container */}
        <div className="contenedor-tags-icono flex items-center gap-2">
          {/* Tags Container con overflow hidden */}
          <div className="contenedor-tags-hidden relative h-8 overflow-hidden">
            <p
              className="tags-texto-visible font-semibold text-[#909090] text-[18px] tracking-[-0.36px] whitespace-nowrap transition-transform duration-500"
              style={{
                transform: isHovered ? "translateY(0%)" : "translateY(100%)",
                transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
              }}
            >
              {tags}
            </p>
          </div>

          {/* Icono Flecha */}
          <ArrowIcon isHovered={isHovered} size={32} />
        </div>
      </div>
    </div>
  );
}

// ─── Project Card Component (First Row - Normal) ───────────────────────────────

function ProjectCardNormal({ title, tags, year, image, gradient }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="tarjeta-proyecto tarjeta-proyecto-normal flex flex-col gap-2 w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen Container - Sin border-radius */}
      <div className="contenedor-imagen-proyecto relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {/* Fondo con gradiente */}
        <div className="fondo-gradiente-proyecto absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                gradient ||
                "linear-gradient(117.534deg, rgb(195, 198, 200) 12.721%, rgb(231, 234, 237) 46.826%, rgb(193, 197, 199) 106.37%)",
            }}
          />
        </div>

        {/* Imagen con zoom - Sin border-radius */}
        <img
          alt={title}
          className="imagen-proyecto absolute inset-0 w-full h-full object-cover transition-transform duration-300"
          src={image}
          style={{
            transform: isHovered ? "scale(1.08)" : "scale(1)",
            transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        />

        {/* Badge año */}
        <div className="badge-año absolute top-5 left-5 backdrop-blur-[12px] bg-[rgba(32,32,31,0.7)] px-3 py-2 rounded-[6px] z-10">
          <div className="absolute border border-[rgba(32,32,31,0.2)] inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-medium text-white text-[18px] tracking-[-0.36px] relative whitespace-nowrap">{year}</p>
        </div>
      </div>

      {/* Info Container */}
      <div className="info-proyecto flex items-center justify-between w-full">
        {/* Título */}
        <p className="titulo-proyecto font-medium text-[#20201f] text-[24px] tracking-[-0.48px] whitespace-nowrap">{title}</p>

        {/* Tags y Flecha Container */}
        <div className="contenedor-tags-icono flex items-center gap-1">
          {/* Tags Container con overflow hidden */}
          <div className="contenedor-tags-hidden relative h-8 overflow-hidden">
            <p
              className="tags-texto-visible font-semibold text-[#777] text-[14px] tracking-[-0.28px] whitespace-nowrap transition-transform duration-500"
              style={{
                transform: isHovered ? "translateY(0%)" : "translateY(120%)",
                transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
              }}
            >
              {tags}
            </p>
          </div>

          {/* Icono Flecha */}
          <ArrowIcon isHovered={isHovered} size={32} />
        </div>
      </div>
    </div>
  );
}

// ─── Small Project Card (Rows 2 & 3) ──────────────────────────────────────────

function ProjectCardSmall({ title, tags, year, image, gradient }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="tarjeta-proyecto-small flex flex-col gap-3 w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen Container - Sin border-radius */}
      <div className="contenedor-imagen-proyecto-small relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {/* Fondo con gradiente */}
        <div className="fondo-gradiente-proyecto absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                gradient ||
                "linear-gradient(117.519deg, rgb(195, 198, 200) 12.721%, rgb(231, 234, 237) 46.826%, rgb(193, 197, 199) 106.37%)",
            }}
          />
        </div>

        {/* Imagen con zoom - Sin border-radius */}
        <img
          alt={title}
          className="imagen-proyecto-small absolute inset-0 w-full h-full object-cover transition-transform duration-300"
          src={image}
          style={{
            transform: isHovered ? "scale(1.08)" : "scale(1)",
            transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        />

        {/* Badge año */}
        <div className="badge-año-small absolute top-5 left-5 backdrop-blur-[12px] bg-[rgba(32,32,31,0.7)] px-3 py-2 rounded-[6px] z-10">
          <div className="absolute border border-[rgba(32,32,31,0.2)] inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-medium text-white text-[18px] tracking-[-0.36px] relative whitespace-nowrap">{year}</p>
        </div>
      </div>

      {/* Info Container */}
      <div className="info-proyecto-small flex items-center justify-between w-full">
        {/* Título */}
        <p className="titulo-proyecto-small font-medium text-[#20201f] text-[24px] tracking-[-0.48px] whitespace-nowrap">{title}</p>

        {/* Tags y Icono Container */}
        <div className="contenedor-tags-icono-small flex items-center gap-1">
          {/* Tags Container con overflow hidden */}
          <div className="contenedor-tags-hidden-small relative h-8 overflow-hidden">
            <p
              className="tags-texto-small-visible font-semibold text-[#777] text-[14px] tracking-[-0.28px] whitespace-nowrap transition-transform duration-500"
              style={{
                transform: isHovered ? "translateY(0%)" : "translateY(120%)",
                transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
              }}
            >
              {tags}
            </p>
          </div>

          {/* Icono Flecha */}
          <ArrowIcon isHovered={isHovered} size={32} />
        </div>
      </div>
    </div>
  );
}

// ─── Proyectos Page ────────────────────────────────────────────────────────────

export function ProyectosPage() {
  return (
    <div className="pagina-proyectos w-full">
      {/* Título */}
      <div className="encabezado-proyectos px-20 pt-[60px] pb-[80px]">
        <h1
          className="titulo-pagina-proyectos font-medium text-[#20201f]"
          style={{ fontSize: "clamp(48px, 5vw, 72px)", letterSpacing: "-3.6px", lineHeight: "0.83", maxWidth: 459 }}
        >
          Nuestros casos de éxito
        </h1>
      </div>

      {/* Grid de Proyectos */}
      <div className="contenedor-grid-proyectos px-20 pb-20">
        {/* Fila 1: 7 columnas (3 + 2 + 2) */}
        <div
          className="fila-proyectos-1 grid gap-3 mb-[110px]"
          style={{
            gridTemplateColumns: "repeat(7, 1fr)",
          }}
        >
          {/* Proyecto Grande */}
          <div className="col-span-3">
            <ProjectCardLarge
              title="navicu.com"
              tags="Marketing 360, UX/UI, Brand"
              year="2025"
              image={UNSPLASH_IMAGES.project1}
            />
          </div>

          {/* Proyecto Normal 1 */}
          <div className="col-span-2">
            <ProjectCardNormal
              title="Grand Hyatt"
              tags="Marketing 360, UX/UI, Brand"
              year="2025"
              image={UNSPLASH_IMAGES.project2}
            />
          </div>

          {/* Proyecto Normal 2 */}
          <div className="col-span-2">
            <ProjectCardNormal
              title="Morrocoy"
              tags="Marketing 360, UX/UI, Brand"
              year="2025"
              image={UNSPLASH_IMAGES.project3}
              gradient="linear-gradient(117.534deg, rgb(195, 198, 200) 12.721%, rgb(231, 234, 237) 46.826%, rgb(193, 197, 199) 106.37%)"
            />
          </div>
        </div>

        {/* Fila 2: 3 columnas iguales */}
        <div className="fila-proyectos-2 grid grid-cols-3 gap-3 mb-[110px]">
          <ProjectCardSmall
            title="Heyba"
            tags="Branding, Web design"
            year="2025"
            image={UNSPLASH_IMAGES.project4}
          />
          <ProjectCardSmall
            title="Castro Suite"
            tags="Marketing Digital, SEO"
            year="2025"
            image={UNSPLASH_IMAGES.project5}
          />
          <ProjectCardSmall
            title="Barok"
            tags="Brand Identity, Motion"
            year="2025"
            image={UNSPLASH_IMAGES.project6}
          />
        </div>

        {/* Fila 3: 3 columnas iguales */}
        <div className="fila-proyectos-3 grid grid-cols-3 gap-3">
          <ProjectCardSmall
            title="Mas Oliu"
            tags="Web Design, Development"
            year="2025"
            image={UNSPLASH_IMAGES.project7}
          />
          <ProjectCardSmall
            title="eRoom Suite"
            tags="UX/UI, App Design"
            year="2025"
            image={UNSPLASH_IMAGES.project8}
          />
          <ProjectCardSmall
            title="Metropolitan"
            tags="Branding, Photography"
            year="2025"
            image={UNSPLASH_IMAGES.project9}
          />
        </div>
      </div>

      {/* Responsive: Mobile/Tablet - 1 columna */}
      <style>{`
        @media (max-width: 1024px) {
          .fila-proyectos-1,
          .fila-proyectos-2,
          .fila-proyectos-3 {
            grid-template-columns: 1fr !important;
          }
          .col-span-3,
          .col-span-2 {
            grid-column: span 1 !important;
          }
        }

        @media (min-width: 1025px) and (max-width: 1440px) {
          .fila-proyectos-1 {
            grid-template-columns: repeat(5, 1fr) !important;
          }
          .col-span-3 {
            grid-column: span 3 !important;
          }
          .col-span-2 {
            grid-column: span 2 !important;
          }
          .fila-proyectos-2,
          .fila-proyectos-3 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
