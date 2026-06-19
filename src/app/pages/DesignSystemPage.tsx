import { useState } from "react";

// ─── Design System Page ────────────────────────────────────────────────────────
// Jacidi · Visual audit de tipografía, colores y espaciados

// ─── Sección wrapper ──────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="w-full border-t border-[rgba(32,32,31,0.12)] pt-10 pb-16">
      <p className="font-normal text-[#909090] text-[13px] tracking-[0.08em] uppercase mb-10">{title}</p>
      {children}
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-normal text-[#909090] text-[13px] tracking-[-0.2px] mt-3">{children}</p>
  );
}

// ─── Tipografía ───────────────────────────────────────────────────────────────

function TypographySection() {
  return (
    <Section title="Tipografía">
      <div className="flex flex-col gap-16 w-full">

        {/* Display */}
        <div>
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">Display / Hero</p>
          <div className="flex flex-col gap-8">
            <div>
              <p
                className="font-medium text-[#20201f]"
                style={{ fontSize: "clamp(48px, 7vw, 120px)", letterSpacing: "-6px", lineHeight: "0.83" }}
              >
                Hacemos grande tu marca
              </p>
              <Label>Display XL · clamp(48–120px) · weight 500 · tracking -6px · lh 0.83</Label>
            </div>
            <div>
              <p
                className="font-medium text-[#20201f]"
                style={{ fontSize: "clamp(56px, 8vw, 120px)", letterSpacing: "-6px", lineHeight: "0.9" }}
              >
                Let's Talk
              </p>
              <Label>Display LG · clamp(56–120px) · weight 500 · tracking -6px · lh 0.9</Label>
            </div>
          </div>
        </div>

        {/* H1 */}
        <div>
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">H1 · Título de página</p>
          <div className="flex flex-col gap-8">
            <div>
              <p
                className="font-medium text-[#20201f]"
                style={{ fontSize: "clamp(48px, 5vw, 72px)", letterSpacing: "-3.6px", lineHeight: "0.9" }}
              >
                Nuestros casos de éxito
              </p>
              <Label>H1 · clamp(48–72px) · weight 500 · tracking -3.6px · lh 0.9</Label>
            </div>
            <div>
              <p
                className="font-medium text-[#20201f]"
                style={{ fontSize: "clamp(48px, 4.5vw, 72px)", letterSpacing: "-4.32px", lineHeight: "0.9" }}
              >
                Nuestra Esencia
              </p>
              <Label>H1 Alt · clamp(48–72px) · weight 500 · tracking -4.32px · lh 0.9</Label>
            </div>
          </div>
        </div>

        {/* H2 */}
        <div>
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">H2 · Título de sección</p>
          <div className="flex flex-col gap-8">
            <div>
              <p
                className="font-medium text-[#20201f]"
                style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-3.6px", lineHeight: "0.9" }}
              >
                Nuestro enfoque creativo
              </p>
              <Label>H2 · clamp(40–72px) · weight 500 · tracking -3.6px · lh 0.9</Label>
            </div>
            <div>
              <p
                className="font-medium text-[#20201f]"
                style={{ fontSize: "clamp(40px, 5vw, 68px)", letterSpacing: "-4.08px", lineHeight: "0.9" }}
              >
                Lo que hacemos por ti
              </p>
              <Label>H2 Alt · clamp(40–68px) · weight 500 · tracking -4.08px · lh 0.9</Label>
            </div>
            <div>
              <p
                className="font-medium text-[#20201f]"
                style={{ fontSize: "clamp(40px, 6vw, 90px)", letterSpacing: "-4.5px", lineHeight: "0.9" }}
              >
                Ver todos los proyectos
              </p>
              <Label>H2 CTA · clamp(40–90px) · weight 400 · tracking -4.5px · lh 0.9</Label>
            </div>
          </div>
        </div>

        {/* H3 */}
        <div>
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">H3 · Subtítulo de sección</p>
          <div className="flex flex-col gap-8">
            <div>
              <p
                className="font-medium text-[#20201f]"
                style={{ fontSize: "clamp(28px, 3.5vw, 52px)", letterSpacing: "-2.6px", lineHeight: "1" }}
              >
                Te ofrecemos soluciones reales para resultados reales
              </p>
              <Label>H3 · clamp(28–52px) · weight 500 · tracking -2.6px · lh 1</Label>
            </div>
            <div>
              <p
                className="font-semibold text-[#20201f]"
                style={{ fontSize: "32px", letterSpacing: "-1.92px" }}
              >
                Innovación Constante
              </p>
              <Label>H3 Card · 32px · weight 600 · tracking -1.92px</Label>
            </div>
          </div>
        </div>

        {/* H4 */}
        <div>
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">H4 · Título de tarjeta</p>
          <div className="flex flex-col gap-6">
            <div>
              <p
                className="font-medium text-[#20201f]"
                style={{ fontSize: "28px", letterSpacing: "-1.68px" }}
              >
                Estrategias que convierten innovación en rentabilidad
              </p>
              <Label>H4 Subtítulo servicio · 28px · weight 500 · tracking -1.68px</Label>
            </div>
            <div>
              <p className="font-medium text-[#20201f] text-[24px] tracking-[-0.48px]">navicu.com</p>
              <Label>H4 Card title · 24px · weight 500 · tracking -0.48px</Label>
            </div>
          </div>
        </div>

        {/* Párrafo grande */}
        <div>
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">Párrafo grande / Lead</p>
          <div className="flex flex-col gap-8">
            <div>
              <p
                className="font-normal text-[#20201f]"
                style={{ fontSize: "clamp(32px, 3.5vw, 52px)", letterSpacing: "-2.08px", lineHeight: "1.05", maxWidth: 882 }}
              >
                Innovación y creatividad es nuestro ADN. Diseñamos soluciones que impulsan tu proyecto
              </p>
              <Label>Lead XL · clamp(32–52px) · weight 400 · tracking -2.08px · lh 1.05</Label>
            </div>
            <div>
              <p
                className="font-normal text-[#20201f]"
                style={{ fontSize: "clamp(22px, 2.5vw, 40px)", letterSpacing: "-1.2px", lineHeight: "1.15", maxWidth: 960 }}
              >
                No somos solo una consultora digital; somos agentes de cambio. En Jacidi, creemos que el mundo puede ser mejor a través de Outstanding Ideas que transforman marcas en sus mejores versiones.
              </p>
              <Label>Lead LG · clamp(22–40px) · weight 400 · tracking -1.2px · lh 1.15</Label>
            </div>
            <div>
              <p
                className="font-normal text-[#20201f]"
                style={{ fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-2.4px" }}
              >
                Tu idea merece algo mejor. ¡Contáctanos!
              </p>
              <Label>Lead MD · clamp(24–40px) · weight 400 · tracking -2.4px</Label>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div>
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">Estadísticas / Datos destacados</p>
          <div>
            <p
              className="font-semibold text-[#909090]"
              style={{ fontSize: "clamp(24px, 3vw, 44px)", letterSpacing: "-0.03em", lineHeight: "1.05" }}
            >
              +10 Años de Know-How (España &amp; Latam)
            </p>
            <Label>Stats · clamp(24–44px) · weight 600 · tracking -3% · lh 1.05</Label>
          </div>
        </div>

        {/* Párrafo body */}
        <div>
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">Body / Párrafo estándar</p>
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-normal text-[#20201f] text-[22px] tracking-[-0.66px] leading-[1.5]" style={{ maxWidth: 640 }}>
                Con años de trayectoria impulsando marcas competitivas, en Jacidi no solo pensamos, ¡ejecutamos! Entendemos que el objetivo de cada marca es alcanzar la máxima rentabilidad.
              </p>
              <Label>Body · 22px · weight 400 · tracking -0.66px · lh 1.5</Label>
            </div>
            <div>
              <p className="font-normal text-[#909090] text-[22px] tracking-[-0.66px] leading-[1.5]" style={{ maxWidth: 560 }}>
                Transformamos desafíos complejos en oportunidades estratégicas mediante la creatividad
              </p>
              <Label>Body muted · 22px · weight 400 · tracking -0.66px · color #909090</Label>
            </div>
          </div>
        </div>

        {/* Small / Labels */}
        <div>
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">Small / Etiquetas</p>
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-normal text-[#404040] text-[20px] tracking-[-1px] leading-[0.9]">Nombre y apellido</p>
              <Label>Form label · 20px · weight 400 · tracking -1px · color #404040</Label>
            </div>
            <div>
              <p className="font-semibold text-[#909090] text-[18px] tracking-[-0.36px]">Marketing 360, UX/UI, Brand</p>
              <Label>Tags · 18px · weight 600 · tracking -0.36px · color #909090</Label>
            </div>
            <div>
              <p className="font-semibold text-[#777] text-[14px] tracking-[-0.28px]">Branding, Web design</p>
              <Label>Tags small · 14px · weight 600 · tracking -0.28px · color #777</Label>
            </div>
            <div>
              <p className="font-semibold text-[#20201f] text-[18px] tracking-[-0.5px]" style={{ opacity: 0.7 }}>Castro Suites</p>
              <Label>Logo text · 18px · weight 600 · tracking -0.5px · opacity 0.7</Label>
            </div>
            <div>
              <p className="font-medium text-white text-[18px] tracking-[-0.36px] bg-[rgba(32,32,31,0.7)] inline-block px-3 py-2 rounded-[6px]">2025</p>
              <Label>Badge año · 18px · weight 500 · bg rgba(32,32,31,0.7) · rounded 6px</Label>
            </div>
          </div>
        </div>

        {/* CTAs especiales */}
        <div>
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">CTA / Acciones especiales</p>
          <div className="flex flex-col gap-6">
            <div>
              <p
                className="font-semibold text-[#20201f] underline decoration-solid underline-offset-4 cursor-pointer"
                style={{ fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.03em", lineHeight: "0.9" }}
              >
                Let's talk
              </p>
              <Label>CTA underline · clamp(28–44px) · weight 600 · tracking -3%</Label>
            </div>
            <div>
              <p
                className="font-semibold underline decoration-solid cursor-pointer"
                style={{ fontSize: "clamp(40px, 5vw, 80px)", letterSpacing: "-4.8px", lineHeight: "1", color: "#909090" }}
              >
                info@jacidi.com
              </p>
              <Label>Email CTA · clamp(40–80px) · weight 600 · tracking -4.8px · color #909090</Label>
            </div>
            <div>
              <span className="font-normal text-[#f26b2d] text-[24px] tracking-[-0.48px]">01</span>
              <Label>Número servicio · 24px · weight 400 · color #f26b2d</Label>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}

// ─── Colores ──────────────────────────────────────────────────────────────────

function ColorSwatch({ hex, label, sublabel, dark }: { hex: string; label: string; sublabel: string; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-2 min-w-[120px]">
      <div
        className="w-full h-20 rounded-[12px] border border-[rgba(32,32,31,0.1)]"
        style={{ backgroundColor: hex }}
      />
      <p className="font-medium text-[#20201f] text-[14px] tracking-[-0.2px]">{label}</p>
      <p className="font-normal text-[#909090] text-[13px] tracking-[-0.1px] font-mono">{sublabel}</p>
    </div>
  );
}

function AlphaSwatch({ bg, label, sublabel }: { bg: string; label: string; sublabel: string }) {
  return (
    <div className="flex flex-col gap-2 min-w-[140px]">
      <div className="w-full h-20 rounded-[12px] border border-[rgba(32,32,31,0.1)] relative overflow-hidden">
        {/* Checkered background to show alpha */}
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "repeating-conic-gradient(#e0e0e0 0% 25%, white 0% 50%)", backgroundSize: "16px 16px" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: bg }} />
      </div>
      <p className="font-medium text-[#20201f] text-[14px] tracking-[-0.2px]">{label}</p>
      <p className="font-normal text-[#909090] text-[13px] tracking-[-0.1px] font-mono">{sublabel}</p>
    </div>
  );
}

function ColorsSection() {
  return (
    <Section title="Colores">
      <div className="flex flex-col gap-12">

        <div>
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">Colores sólidos</p>
          <div className="flex flex-wrap gap-6">
            <ColorSwatch hex="#20201f" label="Primary Dark" sublabel="#20201f" />
            <ColorSwatch hex="#f26b2d" label="Accent Orange" sublabel="#f26b2d" />
            <ColorSwatch hex="#D55D26" label="Accent Orange Hover" sublabel="#D55D26" />
            <ColorSwatch hex="#909090" label="Gray Medium" sublabel="#909090" />
            <ColorSwatch hex="#777777" label="Gray Tags" sublabel="#777777" />
            <ColorSwatch hex="#404040" label="Gray Dark" sublabel="#404040" />
            <ColorSwatch hex="#ffffff" label="White" sublabel="#ffffff" />
          </div>
        </div>

        <div>
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">Colores con transparencia</p>
          <div className="flex flex-wrap gap-6">
            <AlphaSwatch bg="rgba(32,32,31,0.04)" label="Surface subtle" sublabel="rgba(32,32,31,0.04)" />
            <AlphaSwatch bg="rgba(32,32,31,0.12)" label="Border light" sublabel="rgba(32,32,31,0.12)" />
            <AlphaSwatch bg="rgba(32,32,31,0.20)" label="Border medium" sublabel="rgba(32,32,31,0.20)" />
            <AlphaSwatch bg="rgba(32,32,31,0.70)" label="Badge overlay" sublabel="rgba(32,32,31,0.70)" />
            <AlphaSwatch bg="rgba(0,0,0,0.80)" label="Info card overlay" sublabel="rgba(0,0,0,0.80)" />
            <AlphaSwatch bg="rgba(255,255,255,0.20)" label="Border on dark" sublabel="rgba(255,255,255,0.20)" />
          </div>
        </div>

      </div>
    </Section>
  );
}

// ─── Espaciados ───────────────────────────────────────────────────────────────

function SpacingRow({ label, value, px }: { label: string; value: string; px: number }) {
  return (
    <div className="flex items-center gap-6">
      <div className="w-48 shrink-0">
        <p className="font-medium text-[#20201f] text-[14px] tracking-[-0.2px]">{label}</p>
        <p className="font-normal text-[#909090] text-[12px] font-mono mt-0.5">{value}</p>
      </div>
      <div className="flex items-center gap-3 flex-1">
        <div
          className="bg-[#f26b2d] h-5 rounded-sm shrink-0"
          style={{ width: Math.min(px, 700) }}
        />
        <p className="font-normal text-[#909090] text-[13px]">{px}px</p>
      </div>
    </div>
  );
}

function SpacingSection() {
  return (
    <Section title="Espaciados">
      <div className="flex flex-col gap-6">

        <div>
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">Padding de sección · horizontal</p>
          <div className="flex flex-col gap-4">
            <SpacingRow label="Mobile min" value="clamp(16px, 4.5vw, 80px)" px={16} />
            <SpacingRow label="Desktop max" value="clamp(16px, 4.5vw, 80px)" px={80} />
          </div>
        </div>

        <div className="mt-4">
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">Padding de sección · vertical</p>
          <div className="flex flex-col gap-4">
            <SpacingRow label="V small min" value="clamp(24px, 3vw, 40px)" px={24} />
            <SpacingRow label="V small max" value="clamp(24px, 3vw, 40px)" px={40} />
            <SpacingRow label="V medium min" value="clamp(40px, 6vw, 80px)" px={40} />
            <SpacingRow label="V medium max" value="clamp(40px, 6vw, 80px)" px={80} />
            <SpacingRow label="V large min" value="clamp(60px, 8vw, 120px)" px={60} />
            <SpacingRow label="V large max" value="clamp(60px, 8vw, 120px)" px={120} />
          </div>
        </div>

        <div className="mt-4">
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">Gap entre componentes</p>
          <div className="flex flex-col gap-4">
            <SpacingRow label="Gap XS" value="6px" px={6} />
            <SpacingRow label="Gap SM" value="16px" px={16} />
            <SpacingRow label="Gap MD" value="clamp(12px, 3vw, 40px)" px={40} />
            <SpacingRow label="Gap LG" value="52px" px={52} />
            <SpacingRow label="Gap XL" value="80px" px={80} />
            <SpacingRow label="Gap 2XL" value="88px" px={88} />
            <SpacingRow label="Gap 3XL" value="160px" px={160} />
          </div>
        </div>

        <div className="mt-4">
          <p className="font-normal text-[#909090] text-[11px] tracking-[0.1em] uppercase mb-6">Border radius</p>
          <div className="flex items-end gap-8 flex-wrap">
            {[
              { r: 6, label: "Badge · 6px" },
              { r: 12, label: "Card overlay · 12px" },
              { r: 16, label: "Card · 16px" },
              { r: 25, label: "Mockup · 25px" },
            ].map(({ r, label }) => (
              <div key={r} className="flex flex-col gap-2 items-center">
                <div
                  className="bg-[rgba(32,32,31,0.08)] border border-[rgba(32,32,31,0.12)]"
                  style={{ width: 60 + r * 2, height: 60 + r * 2, borderRadius: r }}
                />
                <p className="font-normal text-[#909090] text-[12px] text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}

// ─── Transiciones ─────────────────────────────────────────────────────────────

function TransitionsSection() {
  return (
    <Section title="Animaciones y transiciones">
      <div className="flex flex-col gap-6">
        {[
          { label: "Easing principal", value: "cubic-bezier(0.76, 0, 0.24, 1)", use: "Hover de tarjetas, flechas, zoom de imágenes" },
          { label: "Duración standard", value: "300ms", use: "Cambios de color, opacidad" },
          { label: "Duración media", value: "500ms", use: "Animación de flechas, tags con translateY" },
          { label: "Duración larga", value: "600ms", use: "Fondo deslizante CTA (translateY 101%)" },
          { label: "Zoom imagen hover", value: "scale(1.08) en 300ms", use: "Tarjetas de proyectos" },
          { label: "Marquee velocidad", value: "35s–45s linear infinite", use: "Ribbons de logos y mockups" },
          { label: "Reveal imagen", value: "revealFromRight 0.5s cubic-bezier(0.76,0,0.24,1)", use: "Preview cliente en hover" },
        ].map(({ label, value, use }) => (
          <div key={label} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 border-b border-[rgba(32,32,31,0.08)] pb-4">
            <p className="font-medium text-[#20201f] text-[15px] tracking-[-0.3px] w-56 shrink-0">{label}</p>
            <p className="font-normal text-[#f26b2d] text-[14px] font-mono">{value}</p>
            <p className="font-normal text-[#909090] text-[14px]">{use}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Clases nemotécnicas ──────────────────────────────────────────────────────

function NamingSection() {
  const classes = [
    ["imagen-hero", "Imagen principal del hero"],
    ["titulo-hero", "H1 display del hero"],
    ["seccion-intro-detalles", "Sección intro + marquesinas + stats"],
    ["contenedor-estadisticas", "Wrapper de stats y CTA let's talk"],
    ["marquesina-mockups-superior / inferior", "Ribbons de imágenes mockup"],
    ["marquesina-izq / der", "Dirección del marquee (left/right)"],
    ["seccion-enfoque", "Grid de 4 columnas de enfoque"],
    ["seccion-servicios", "Tarjeta oscura de servicios"],
    ["tarjeta-servicios", "Card bg-[#20201f] con servicios"],
    ["seccion-clientes-logos", "Ribbons de logos de clientes"],
    ["seccion-proyectos", "Lista interactiva de clientes + preview"],
    ["seccion-about-imagen", "Columna imagen + texto about"],
    ["seccion-contacto", "Formulario de contacto global"],
    ["tarjeta-mockup", "Card de imagen en marquee mockup"],
    ["tarjeta-logo-cliente", "Card de logo en marquee clientes"],
    ["tarjeta-proyecto", "Card interactiva en página proyectos"],
    ["badge-año", "Glassmorphic badge con año del proyecto"],
    ["boton-enviar", "CTA de envío del formulario"],
    ["boton-lets-talk", "CTA underline Let's talk"],
  ];

  return (
    <Section title="Clases nemotécnicas">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3">
        {classes.map(([cls, desc]) => (
          <div key={cls} className="flex gap-4 border-b border-[rgba(32,32,31,0.06)] pb-3">
            <p className="font-normal text-[#f26b2d] text-[13px] font-mono shrink-0 pt-0.5">.{cls}</p>
            <p className="font-normal text-[#909090] text-[13px]">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Paleta Inversa / Modo Oscuro ──────────────────────────────────────────────

function InversePaletteSection() {
  const [isDark, setIsDark] = useState(false);

  const mappings = [
    {
      name: "Fondo Principal",
      light: { hex: "#ffffff", name: "White" },
      dark: { hex: "#161615", name: "Charcoal Dark" },
      desc: "El fondo de la página se invierte a un negro cálido para evitar fatiga visual sin perder la calidez de la marca.",
    },
    {
      name: "Texto Principal",
      light: { hex: "#20201f", name: "Primary Dark" },
      dark: { hex: "#f5f5f4", name: "Warm Off-White" },
      desc: "El texto oscuro pasa a un tono blanco hueso de alta legibilidad, reduciendo el contraste deslumbrante del blanco puro.",
    },
    {
      name: "Acento Naranja",
      light: { hex: "#f26b2d", name: "Accent Orange" },
      dark: { hex: "#ff7e42", name: "Vibrant Orange" },
      desc: "El naranja de la marca se ilumina sutilmente para destacar adecuadamente sobre el fondo Charcoal.",
    },
    {
      name: "Texto Muted",
      light: { hex: "#909090", name: "Gray Medium" },
      dark: { hex: "#a1a19e", name: "Light Gray Muted" },
      desc: "Subtítulos e información secundaria se aclaran para mantener el cumplimiento de contraste WCAG AA.",
    },
    {
      name: "Bordes y Divisores",
      light: { hex: "rgba(32,32,31,0.12)", name: "Border Light" },
      dark: { hex: "rgba(255,255,255,0.15)", name: "Border Dark" },
      desc: "Las líneas de división pasan de ser sombras oscuras sutiles a transparencias blancas ligeras.",
    },
    {
      name: "Superficies (Cards)",
      light: { hex: "rgba(32,32,31,0.04)", name: "Surface Light" },
      dark: { hex: "rgba(255,255,255,0.06)", name: "Surface Dark" },
      desc: "Las tarjetas de fondo gris claro pasan a tener un brillo blanco con opacidad muy baja sobre el fondo negro.",
    },
  ];

  return (
    <Section title="Paleta Inversa (Propuesta Modo Oscuro)">
      <div className="flex flex-col lg:flex-row gap-12 w-full">
        {/* Tabla comparativa */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="border border-[rgba(32,32,31,0.12)] rounded-[16px] overflow-hidden bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[rgba(32,32,31,0.02)] border-b border-[rgba(32,32,31,0.08)]">
                  <th className="p-4 text-[13px] font-semibold text-[#20201f] tracking-[-0.2px]">Token</th>
                  <th className="p-4 text-[13px] font-semibold text-[#20201f] tracking-[-0.2px]">Modo Claro</th>
                  <th className="p-4 text-[13px] font-semibold text-[#20201f] tracking-[-0.2px]">Modo Oscuro (Inverso)</th>
                  <th className="p-4 text-[13px] font-semibold text-[#20201f] tracking-[-0.2px] hidden md:table-cell">Comportamiento / Razón</th>
                </tr>
              </thead>
              <tbody>
                {mappings.map((m) => (
                  <tr key={m.name} className="border-b border-[rgba(32,32,31,0.06)] last:border-b-0 hover:bg-[rgba(32,32,31,0.01)] transition-colors">
                    <td className="p-4 align-middle">
                      <p className="font-medium text-[#20201f] text-[14px] tracking-[-0.3px]">{m.name}</p>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-[6px] border border-[rgba(32,32,31,0.1)] shrink-0" style={{ backgroundColor: m.light.hex }} />
                        <div>
                          <p className="font-semibold text-[#20201f] text-[12px] font-mono leading-none">{m.light.hex}</p>
                          <span className="text-[11px] text-[#909090] font-normal">{m.light.name}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-[6px] border border-[rgba(255,255,255,0.15)] shrink-0" style={{ backgroundColor: m.dark.hex }} />
                        <div>
                          <p className="font-semibold text-[#f26b2d] text-[12px] font-mono leading-none">{m.dark.hex}</p>
                          <span className="text-[11px] text-[#909090] font-normal">{m.dark.name}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle text-[13px] text-[#909090] leading-[1.3] hidden md:table-cell max-w-[300px]">
                      {m.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Interactive Preview */}
        <div className="w-full lg:w-[420px] shrink-0">
          <div className="border border-[rgba(32,32,31,0.12)] rounded-[16px] p-6 flex flex-col gap-6 bg-[rgba(32,32,31,0.02)] relative overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <p className="font-semibold text-[#20201f] text-[15px] tracking-[-0.3px]">Vista previa interactiva</p>
              
              {/* Toggle Switch */}
              <button 
                onClick={() => setIsDark(!isDark)}
                className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-full border border-[rgba(32,32,31,0.1)] shadow-sm hover:bg-[rgba(32,32,31,0.02)] transition-all"
              >
                <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${isDark ? 'bg-[#ff7e42]' : 'bg-[#f26b2d]'}`} />
                <span className="text-[12px] font-medium text-[#20201f]">
                  {isDark ? "Modo Oscuro" : "Modo Claro"}
                </span>
              </button>
            </div>

            {/* Mock Component Box */}
            <div 
              className="rounded-[12px] p-6 border transition-all duration-500 flex flex-col gap-5 shadow-md"
              style={{
                backgroundColor: isDark ? "#161615" : "#ffffff",
                borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(32,32,31,0.12)",
                color: isDark ? "#f5f5f4" : "#20201f",
              }}
            >
              {/* Card Badge & Year */}
              <div className="flex items-center justify-between">
                <span 
                  className="font-semibold text-[12px] tracking-[-0.2px] px-2 py-0.5 rounded-[4px] transition-colors duration-500"
                  style={{
                    backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(32,32,31,0.05)",
                    color: isDark ? "#a1a19e" : "#777777",
                  }}
                >
                  DISEÑO WEB · BRANDING
                </span>
                <span 
                  className="font-medium text-[12px] tracking-[-0.2px] transition-all duration-500 px-2 py-0.5 rounded-[4px]"
                  style={{
                    backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(32,32,31,0.7)",
                    color: isDark ? "#ff7e42" : "#ffffff"
                  }}
                >
                  2026
                </span>
              </div>

              {/* Title */}
              <div className="flex flex-col gap-1">
                <p 
                  className="text-[14px] font-semibold transition-colors duration-500"
                  style={{ color: isDark ? "#ff7e42" : "#f26b2d" }}
                >
                  01 / PROYECTO DESTACADO
                </p>
                <h4 
                  className="text-[26px] font-medium tracking-[-1.2px] leading-[1.05] transition-colors duration-500"
                  style={{ color: isDark ? "#f5f5f4" : "#20201f" }}
                >
                  Castro Suites
                </h4>
              </div>

              {/* Divider */}
              <div 
                className="h-[1px] w-full transition-colors duration-500"
                style={{ backgroundColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(32,32,31,0.12)" }}
              />

              {/* Description */}
              <p 
                className="text-[15px] font-normal leading-[1.4] transition-colors duration-500"
                style={{ color: isDark ? "#a1a19e" : "#909090" }}
              >
                Diseñamos una experiencia digital de primer nivel que conecta la esencia del hospedaje boutique con la simplicidad tecnológica del sector hotelero moderno.
              </p>

              {/* Items List */}
              <ul className="flex flex-col gap-1.5 pl-4 list-disc text-[14px]">
                {[
                  "Optimización del embudo de conversión",
                  "Diseño UI/UX de alta fidelidad",
                  "Desarrollo frontend interactivo"
                ].map((item, idx) => (
                  <li 
                    key={idx} 
                    className="transition-colors duration-500"
                    style={{ color: isDark ? "#e5e5e3" : "#404040" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Interactive Button */}
              <div 
                className="mt-2 flex items-center justify-between rounded-[8px] p-3 border transition-all duration-500 cursor-pointer"
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(32,32,31,0.02)",
                  borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(32,32,31,0.08)",
                }}
              >
                <span 
                  className="text-[14px] font-medium transition-colors duration-500"
                  style={{ color: isDark ? "#f5f5f4" : "#20201f" }}
                >
                  Ver estudio de caso
                </span>
                <svg 
                  className="w-4 h-4 transition-transform duration-300 transform translate-x-0 hover:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  style={{ color: isDark ? "#ff7e42" : "#f26b2d" }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            <p className="text-[12px] text-[#909090] leading-none text-center">
              Haz clic en el botón de modo arriba para ver la transición de colores.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function DesignSystemPage() {
  return (
    <div
      className="pagina-design-system w-full min-h-screen bg-white"
      style={{ paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)", paddingTop: 80, paddingBottom: 120 }}
    >
      {/* Header */}
      <div className="mb-16">
        <p className="font-medium text-[#20201f]" style={{ fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-2.8px", lineHeight: "0.9" }}>
          Jacidi · Design System
        </p>
        <p className="font-normal text-[#909090] text-[18px] tracking-[-0.36px] mt-4">
          Tipografía · Colores · Espaciados · Transiciones · Clases nemotécnicas
        </p>
      </div>

      <TypographySection />
      <ColorsSection />
      <InversePaletteSection />
      <SpacingSection />
      <TransitionsSection />
      <NamingSection />
    </div>
  );
}
