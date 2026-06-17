import { useState, useRef, useEffect } from "react";
import videoHero from "../../assets/video/video-hero-prueba.mp4";
const imgClientLogo = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop";
const imgClientLogo1 = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop";
const imgClientLogo2 = "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop";
const imgClientLogo3 = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";
const imgClientLogo4 = "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop";
const imgClientLogo5 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop";
const imgClientLogo6 = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop";
const imgClientLogo7 = "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop";
const imgClientLogo8 = "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop";
const imgColumn = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop";
const imgColumn1 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop";
const imgImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop";
const imgImage1 = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop";
const HERO_IMG =
  "https://images.unsplash.com/photo-1561070791-36c11767b26a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwYWdlbmN5JTIwd29ya3NwYWNlJTIwYnJhbmRpbmclMjBkZXNpZ24lMjBib2xkfGVufDF8fHx8MTc4MTI5NTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080";

// ─── Client Logo Cards ─────────────────────────────────────────────────────────

function LogoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="tarjeta-logo-cliente bg-[rgba(32,32,31,0.04)] relative rounded-[16px] shrink-0 flex-none" style={{ width: "clamp(202px, 25vw, 288px)", height: "clamp(112px, 14vw, 160px)" }}>
      <div className="contenido-tarjeta-logo flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        {children}
      </div>
      <div className="borde-tarjeta-logo absolute border border-[rgba(32,32,31,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function LogoText({ name }: { name: string }) {
  return (
    <span
      className="texto-nombre-cliente font-semibold text-[#20201f] tracking-tight select-none"
      style={{ fontSize: 18, opacity: 0.7, fontFamily: "Inter, sans-serif", letterSpacing: "-0.0125em" }}
    >
      {name}
    </span>
  );
}

const row1Logos = ["Castro Suites", "Testis Suite", "Navicu", "Hyatt", "Metropolitan", "Barok", "eRoom"];
const row2Logos = ["Hesperia", "Mas Oliu", "Grand Hyatt", "Odoo", "iDempiere", "Jacidi Pro", "MediaHub"];

function LogoRibbonRow1() {
  return (
    <div className="fila-logos-1 flex gap-[6px] items-center flex-none mx-[3px] my-[0px]">
      {row1Logos.map((name) => (
        <LogoCard key={name}><LogoText name={name} /></LogoCard>
      ))}
    </div>
  );
}

function LogoRibbonRow2() {
  return (
    <div className="fila-logos-2 flex gap-[6px] items-center flex-none mx-[3px] my-[0px]">
      {row2Logos.map((name) => (
        <LogoCard key={name}><LogoText name={name} /></LogoCard>
      ))}
    </div>
  );
}

// ─── Marquee ──────────────────────────────────────────────────────────────────

interface MarqueeProps {
  direction: "left" | "right";
  duration?: number;
  children: React.ReactNode;
}

function Marquee({ direction, duration = 40, children }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animName = direction === "left" ? "marqueeLeft" : "marqueeRight";
  const directionClass = direction === "left" ? "marquesina-izq" : "marquesina-der";
  return (
    <div className={`contenedor-marquesina ${directionClass} overflow-hidden w-full relative`}>
      <div
        ref={trackRef}
        className="track-marquesina flex w-max"
        style={{ animation: `${animName} ${duration}s linear infinite` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

// ─── Mockup Cards ─────────────────────────────────────────────────────────────

function MockupCard({ src }: { src: string }) {
  return (
    <div className="tarjeta-mockup relative rounded-[25px] shrink-0 flex-none has-hover-preview" style={{ width: "clamp(240px, 33vw, 400px)", height: "clamp(160px, 22vw, 267px)" }}>
      <div className="contenedor-imagen-mockup absolute inset-0 pointer-events-none rounded-[25px]">
        <div className="fondo-mockup absolute bg-[#909090] inset-0 rounded-[25px]" />
        <img alt="" className="imagen-mockup absolute max-w-none object-cover rounded-[25px] size-full" src={src} />
      </div>
    </div>
  );
}

function MockupRibbonContent() {
  return (
    <div className="contenido-marquesina-mockups-1 flex items-center flex-none px-5" style={{ gap: "clamp(12px, 3vw, 40px)" }}>
      <MockupCard src={imgClientLogo} />
      <MockupCard src={imgClientLogo1} />
      <MockupCard src={imgClientLogo2} />
      <MockupCard src={imgClientLogo3} />
      <MockupCard src={imgClientLogo4} />
      <MockupCard src={imgClientLogo3} />
    </div>
  );
}

function MockupRibbonContent2() {
  return (
    <div className="contenido-marquesina-mockups-2 flex items-center flex-none px-5" style={{ gap: "clamp(12px, 3vw, 40px)" }}>
      <MockupCard src={imgClientLogo5} />
      <MockupCard src={imgClientLogo6} />
      <MockupCard src={imgClientLogo7} />
      <MockupCard src={imgClientLogo} />
      <MockupCard src={imgClientLogo5} />
      <MockupCard src={imgClientLogo8} />
    </div>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <div className="seccion-hero w-full">
      <p
        className="titulo-hero font-medium text-[#20201f] pt-[0px] pb-[24px]"
        style={{ fontSize: "clamp(48px, 7vw, 120px)", letterSpacing: "-0.04em", lineHeight: "0.83", paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)" }}
      >
        Hacemos<br />grande tu marca
      </p>
      <div className="contenedor-imagen-hero relative w-full overflow-hidden aspect-[3/4] md:aspect-[16/9]">
        <video
          src={videoHero}
          autoPlay
          loop
          muted
          playsInline
          className="imagen-hero absolute inset-0 w-full h-full object-cover object-top mx-[0px] mt-[-10px] mb-[0px]"
        />
      </div>
    </div>
  );
}

// ─── Intro + Details ──────────────────────────────────────────────────────────

function IntroAndDetailsSection() {
  return (
    <div className="seccion-intro-detalles flex flex-col items-center w-full" style={{ gap: "clamp(60px, 12vw, 160px)", paddingTop: "clamp(40px, 6vw, 80px)", paddingBottom: "clamp(40px, 6vw, 80px)" }}>
      <div className="contenedor-texto-intro w-full py-[0px]" style={{ paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)" }}>
        <p
          className="texto-intro font-normal text-[#20201f]"
          style={{ fontSize: "clamp(32px, 3.5vw, 52px)", letterSpacing: "-0.0125em", lineHeight: "1.05", maxWidth: 882 }}
        >
          Innovación y creatividad es nuestro ADN. Diseñamos soluciones que impulsan tu proyecto
        </p>
      </div>
      <div className="marquesina-mockups-superior h-[267px] overflow-hidden w-full">
        <Marquee direction="left" duration={35}>
          <MockupRibbonContent />
        </Marquee>
      </div>
      <div className="contenedor-estadisticas flex flex-col gap-[52px] items-center w-full" style={{ paddingTop: "clamp(32px, 4vw, 52px)", paddingBottom: "clamp(32px, 4vw, 52px)", paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)" }}>
        <div className="lista-estadisticas flex flex-col gap-[16px] items-center w-full overflow-hidden">
          {[
            "+10 Años de Know-How (España & Latam)",
            "+90 Proyectos Ejecutados",
            "+70 Profesionales Especializados",
            "52% ROI Promedio (Elevamos la rentabilidad y el Love Brand)",
            "1M$ invertidos en Paid Media",
          ].map((text) => (
            <div key={text} className="item-estadistica flex flex-col items-center w-full">
              <p
                className="texto-estadistica font-semibold text-[#909090] text-center transition-colors duration-300 hover:text-[#20201f] cursor-default"
                style={{ fontSize: "clamp(24px, 3vw, 44px)", letterSpacing: "-0.0125em", lineHeight: "1.05", maxWidth: "calc(100% - 0px)", overflowWrap: "break-word", wordBreak: "break-word" }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
        <button
          className="boton-lets-talk font-semibold text-[#20201f] text-center underline decoration-solid underline-offset-4"
          style={{ fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.0125em", lineHeight: "0.9" }}
        >
          {"Let's talk"}
        </button>
      </div>
      <div className="marquesina-mockups-inferior h-[267px] overflow-hidden w-full">
        <Marquee direction="right" duration={35}>
          <MockupRibbonContent2 />
        </Marquee>
      </div>
    </div>
  );
}

// ─── Section About ─────────────────────────────────────────────────────────────

function SectionAbout() {
  return (
    <div className="seccion-enfoque relative w-full">
      <div className="contenedor-enfoque flex flex-col gap-20 items-start w-full" style={{ paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)", paddingTop: "clamp(24px, 3vw, 40px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
        <p
          className="titulo-enfoque font-medium text-[#20201f]"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: "0.9", maxWidth: 578 }}
        >
          Nuestro enfoque creativo
        </p>
        <div className="grid-enfoque flex flex-wrap gap-px h-auto lg:h-[508px] items-start w-full">
          {[
            { text: "Innovamos el mercado con estrategias" },
            { text: "Construimos una relación duradera entre marcas y consumidores" },
            { text: "Maximizamos el retorno de inversión a través de campañas efectivas" },
            { text: "Inspiramos confianza y credibilidad en cada proyecto" },
          ].map(({ text }, i) => (
            <div key={i} className={`columna-enfoque columna-enfoque-${i + 1} flex-1 min-w-[220px] h-full relative border-r border-[rgba(32,32,31,0.2)] last:border-r-0`}>
              <div className="contenido-columna-enfoque flex flex-col px-5 py-3 h-full">
                {i > 0 && <div className="espaciador-superior" style={{ flex: i }} />}
                <p
                  className="texto-enfoque font-normal text-[#20201f]"
                  style={{ fontSize: "clamp(20px, 2.2vw, 32px)", letterSpacing: "-0.0125em", lineHeight: "1.05" }}
                >
                  {text}
                </p>
                {i < 3 && <div className="espaciador-inferior" style={{ flex: 3 - i }} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section Services ──────────────────────────────────────────────────────────

const services = [
  {
    index: "01",
    name: "Marketing",
    subtitle: "Estrategias que convierten innovación en rentabilidad",
    items: ["Marketing 360° & Media Paid", "Social Media & Brand Strategy", "SEO/SEM & Publicidad Online", "Auditoría y Consultoría"],
  },
  {
    index: "02",
    name: "Diseño",
    subtitle: "Donde la estrategia se convierte en arte visual",
    items: ["Branding & Identidad Visual", "Diseño UX/UI (Web & App)", "Motion Graphics", "Producción y Post-producción Audiovisual"],
  },
  {
    index: "03",
    name: "Desarrollo",
    subtitle: "Desarrollamos experiencias interactivas para captar, fidelizar y generar engagement",
    items: ["Desarrollo Web a medida", "Desarrollo de tienda online en Shopify, Woocommerce", "Apps a medida", "Configuración y gestión de Redes"],
  },
  {
    index: "04",
    name: "Consultoría",
    subtitle: "Te ayudamos a optimizar los procesos administrativos y comerciales claves de tu negocio.",
    items: ["Idempiere by Jacidi", "CRM Odoo"],
  },
];

function SectionServices() {
  return (
    <div id="servicios" className="seccion-servicios bg-white relative w-full">
      <div className="contenedor-servicios flex flex-col items-start w-full px-0 md:px-[clamp(16px,4.5vw,80px)]" style={{ paddingTop: "clamp(40px, 6vw, 80px)", paddingBottom: "clamp(60px, 8vw, 120px)" }}>
        <div className="tarjeta-servicios bg-[#20201f] relative rounded-none md:rounded-[12px] w-full">
          <div className="contenido-servicios flex flex-col gap-[88px] items-start w-full pt-[64px] pb-[64px] md:pt-[clamp(24px,4.5vw,80px)] md:pb-[clamp(24px,4.5vw,80px)]" style={{ paddingLeft: "clamp(24px, 4.5vw, 80px)", paddingRight: "clamp(24px, 4.5vw, 80px)" }}>
            <p
              className="titulo-servicios font-medium text-white"
              style={{ fontSize: "clamp(40px, 5vw, 68px)", letterSpacing: "-0.03em", lineHeight: "0.9", maxWidth: 480 }}
            >
              Lo que hacemos por ti
            </p>
            <div className="lista-servicios flex flex-col gap-16 items-start w-full">
              {services.map((s) => (
                <div key={s.index} className={`item-servicio item-servicio-${s.index} flex flex-col gap-6 items-start w-full`}>
                  {/* Separador + encabezado: en mobile índice y título van en fila */}
                  <div className="separador-servicio flex items-start pt-4 w-full relative">
                    <div className="linea-separador absolute border-t border-[rgba(255,255,255,0.2)] inset-0 pointer-events-none" />
                    <div className="encabezado-servicio flex flex-row items-baseline gap-3 w-full md:contents">
                      <span className="numero-servicio font-normal text-[#f26b2d] tracking-[-0.0125em] text-[19px] md:text-[24px]">{s.index}</span>
                      <p
                        className="nombre-servicio-mobile font-medium text-white md:hidden"
                        style={{ fontSize: "clamp(28px, 5vw, 68px)", letterSpacing: "-0.03em" }}
                      >
                        {s.name}
                      </p>
                    </div>
                  </div>
                  {/* Contenido: en mobile columna, en desktop fila */}
                  <div className="detalles-servicio flex flex-col md:flex-row items-start justify-between w-full gap-8">
                    <p
                      className="nombre-servicio font-medium text-white hidden md:block md:w-1/2"
                      style={{ fontSize: "clamp(36px, 5vw, 68px)", letterSpacing: "-0.03em" }}
                    >
                      {s.name}
                    </p>
                    <div className="descripcion-servicio flex flex-col gap-8 items-start pt-[10px] w-full md:w-1/2">
                      <p className="subtitulo-servicio font-medium text-white tracking-[-0.03em] max-w-[410px]" style={{ fontSize: "clamp(20px, 3.1vw, 28px)", lineHeight: "1.1" }}>{s.subtitle}</p>
                      <ul className="lista-items-servicio list-disc font-normal text-[#909090] text-[22px] tracking-[-0.0125em]">
                        {s.items.map((item) => (
                          <li key={item} className="item-lista-servicio ms-[33px] mb-1 leading-[1.65]" style={{ fontSize: "clamp(18px, 2.4vw, 22px)" }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section Clients ───────────────────────────────────────────────────────────

function SectionClientsLogos() {
  return (
    <div className="seccion-clientes-logos flex flex-col gap-[52px] items-start overflow-hidden w-full" style={{ paddingTop: "clamp(40px, 6vw, 80px)", paddingBottom: "clamp(40px, 6vw, 80px)" }}>
      <div className="contenedor-titulo-clientes w-full" style={{ paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)" }}>
        <p
          className="titulo-clientes font-medium text-[#20201f]"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
        >
          Nuestros Clientes
        </p>
      </div>
      <div className="contenedor-marquesinas-logos flex flex-col gap-[6px] items-start w-full relative">
        <div
          className="fade-izquierdo absolute left-0 top-0 h-full w-40 z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(90deg, white 0%, white 50%, rgba(255,255,255,0) 100%)" }}
        />
        <div
          className="fade-derecho absolute right-0 top-0 h-full w-40 z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(270deg, white 0%, white 50%, rgba(255,255,255,0) 100%)" }}
        />
        <div className="marquesina-logos-row1 w-full overflow-hidden">
          <Marquee direction="left" duration={45}>
            <LogoRibbonRow1 />
          </Marquee>
        </div>
        <div className="marquesina-logos-row2 w-full overflow-hidden">
          <Marquee direction="right" duration={45}>
            <LogoRibbonRow2 />
          </Marquee>
        </div>
      </div>
    </div>
  );
}

// ─── Section Projects ──────────────────────────────────────────────────────────

const clientList = [
  { name: "Navicu.com", preview: imgColumn1 },
  { name: "Mas Oliu", preview: imgColumn },
  { name: "Barok", preview: imgColumn1 },
  { name: "eRoom Suite", preview: imgColumn },
  { name: "Grand Hyatt", preview: imgColumn1 },
  { name: "Club Metropolitan", preview: imgColumn },
  { name: "Hesperia World America", preview: imgColumn1 },
];

function SectionProyects() {
  const [activeClient, setActiveClient] = useState<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveClient((prev) => (prev + 1) % clientList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const handleClientEnter = (i: number) => {
    setIsHovering(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setActiveClient(i);
    }, 50);
  };

  const handleClientLeave = () => {
    setIsHovering(false);
  };

  const clientBullets: Record<number, string[]> = {
    0: ["10 años de gestión digital", "+175.000 Followers en Instagram", "+6.000 Leads mensuales"],
    1: ["Incremento del 38% en ventas online", "Rediseño de identidad visual completa", "+12.000 visitas únicas al mes"],
    2: ["Campaña 360° en 3 mercados", "52% de incremento en reservas", "ROI publicitario de 4.2x"],
    3: ["Integración con canal de reservas propio", "+200 propiedades gestionadas", "Reducción del 30% en coste por adquisición"],
    4: ["Estrategia de lujo para 5 países LATAM", "+85.000 impresiones mensuales en paid", "NPS aumentado de 62 a 88 puntos"],
    5: ["Campaña de membresías con +3.200 nuevos socios", "Producción audiovisual de 12 piezas/mes", "Engagement rate del 8.4% en RRSS"],
    6: ["Presencia en 8 mercados internacionales", "Gestión de +1M$ en Paid Media anual", "Incremento del 67% en ocupación directa"],
  };

  return (
    <div className="seccion-proyectos flex flex-col items-start w-full">
      <div className="contenedor-proyectos flex flex-col gap-20 items-start w-full" style={{ paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)", paddingTop: "clamp(60px, 8vw, 120px)", paddingBottom: "clamp(60px, 8vw, 120px)" }}>
        <div className="encabezado-proyectos flex flex-col gap-6 items-start max-w-[864px]">
          <p
            className="titulo-proyectos font-medium text-[#20201f]"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: "0.9" }}
          >
            Esto es lo<br />que hacemos
          </p>
          <p
            className="subtitulo-proyectos font-normal text-[#20201f]"
            style={{ fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-0.0125em", lineHeight: "1.1", maxWidth: 614 }}
          >
            Conoce nuestra experiencia a través de nuestros clientes
          </p>
        </div>
        <div className="contenido-proyectos flex gap-5 items-start justify-end pb-10 w-full">
          <div className="lista-proyectos flex flex-col items-end flex-1 max-w-[1043px]">
            {clientList.map((client, i) => (
              <div
                key={client.name}
                className={`item-proyecto item-proyecto-${i + 1} flex items-end justify-end w-full`}
                onMouseEnter={() => handleClientEnter(i)}
                onMouseLeave={handleClientLeave}
                style={{ cursor: "pointer" }}
              >
                <p
                  className="nombre-proyecto font-medium text-right transition-colors duration-300 whitespace-nowrap"
                  style={{
                    fontSize: "clamp(32px, 4.5vw, 64px)",
                    letterSpacing: "-0.03em",
                    lineHeight: "1.1",
                    color: activeClient === i ? "rgb(32,32,31)" : "rgba(32,32,31,0.2)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {client.name}
                </p>
                <div className="indicador-proyecto flex items-center justify-center ml-2">
                  <div
                    className="linea-indicador bg-[#f26b2d] h-[3px] transition-all duration-300"
                    style={{ width: activeClient === i ? 32 : 0 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="preview-proyecto flex flex-col gap-[10px] h-[751px] items-start justify-end relative shrink-0 w-[600px] overflow-hidden">
            <div className="contenedor-imagen-proyecto flex-1 min-h-0 relative w-full overflow-hidden">
              {clientList.map((client, i) => (
                <img
                  key={client.name}
                  alt={client.name}
                  className={`imagen-preview-proyecto absolute inset-0 max-w-none object-cover pointer-events-none size-full has-hover-preview transition-opacity duration-500 ease-in-out ${activeClient === i ? "opacity-100" : "opacity-0"}`}
                  src={client.preview}
                />
              ))}
            </div>
            <div
              className="tarjeta-info-proyecto absolute backdrop-blur-[16px] bg-[rgba(0,0,0,0.8)] flex items-center left-[17px] overflow-hidden px-6 py-[23px] rounded-[12px] w-[566px] transition-opacity duration-500 ease-in-out"
              style={{ bottom: 40, opacity: activeClient !== null ? 1 : 0 }}
            >
              <ul className="lista-logros-proyecto font-medium text-white text-[20px] tracking-[-0.0125em] list-disc whitespace-nowrap">
                {(clientBullets[activeClient] ?? []).map((b, i) => (
                  <li key={i} className="logro-proyecto ms-[30px] leading-[1.3]">{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className="cta-ver-proyectos flex items-start justify-between overflow-hidden relative w-full"
          style={{ cursor: "pointer", borderRadius: 8, paddingLeft: "clamp(16px, 4.5vw, 40px)", paddingRight: "clamp(16px, 4.5vw, 40px)", paddingTop: "clamp(32px, 5vw, 64px)", paddingBottom: "clamp(32px, 5vw, 64px)" }}
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
        >
          <div
            className="fondo-hover-cta absolute inset-0"
            style={{
              backgroundColor: "#20201f",
              transform: ctaHovered ? "translateY(0)" : "translateY(101%)",
              transition: "transform 0.6s cubic-bezier(0.76,0,0.24,1)",
            }}
          />
          <p
            className="texto-cta-proyectos font-normal relative z-10"
            style={{
              fontSize: "clamp(40px, 6vw, 90px)",
              letterSpacing: "-0.03em",
              lineHeight: "0.9",
              maxWidth: 698,
              color: ctaHovered ? "white" : "#20201f",
              transition: "color 0.5s ease 200ms",
            }}
          >
            Ver todos los proyectos
          </p>
          <div className="icono-flecha-cta overflow-hidden relative shrink-0 size-[160px] z-10 flex items-center justify-center">
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M106.691 62.7614L49.3143 120.139L39.8862 110.711L97.2635 53.3333H46.6917V40H120.025V113.333H106.691V62.7614Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section About Image ───────────────────────────────────────────────────────

function SectionAboutImage() {
  return (
    <div className="seccion-about-imagen relative w-full">
      <div className="contenedor-about-imagen flex flex-col lg:flex-row items-start w-full" style={{ gap: "4.167em", paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)", paddingTop: "clamp(40px, 6vw, 80px)", paddingBottom: "clamp(60px, 8vw, 120px)" }}>
        <div className="columna-imagen-about w-full lg:w-1/2 shrink-0">
          <div className="contenedor-imagenes-superpuestas relative w-full" style={{ aspectRatio: "1/1" }}>
            <img alt="" className="imagen-about-base absolute max-w-none object-cover size-full has-hover-preview" src={imgImage} />
            <img alt="" className="imagen-about-overlay absolute max-w-none object-cover size-full opacity-60 has-hover-preview" src={imgImage1} />
          </div>
        </div>
        <div className="columna-texto-about flex flex-col gap-[160px] items-start justify-center w-full lg:w-1/2 py-16" style={{ maxWidth: 720 }}>
          <p
            className="titulo-about-imagen font-medium text-[#20201f]"
            style={{ fontSize: "clamp(28px, 3.5vw, 52px)", letterSpacing: "-0.03em", lineHeight: "1", maxWidth: 640 }}
          >
            Te ofrecemos soluciones reales para resultados comerciales reales
          </p>
          <div className="descripcion-about flex flex-col gap-[63px] items-start w-full">
            <p className="texto-descripcion-about font-normal text-[#20201f] text-[22px] tracking-[-0.0125em] leading-[1.35]">
              Con años de trayectoria impulsando marcas competitivas, en Jacidi no solo pensamos, ¡ejecutamos! Entendemos que el objetivo de cada marca es alcanzar la máxima rentabilidad, por lo que integramos nuestra experiencia técnica con una visión comercial para apoyar cualquier objetivo que te plantees.
            </p>
            <p
              className="llamada-accion-about font-medium text-[#20201f] whitespace-nowrap"
              style={{ fontSize: "clamp(24px, 2.8vw, 40px)", letterSpacing: "-0.03em" }}
            >
              ¡Haz grande tu marca hoy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── HomePage ─────────────────────────────────────────────────────────────────

export function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroAndDetailsSection />
      <SectionAbout />
      <SectionServices />
      <SectionClientsLogos />
      <SectionProyects />
      <SectionAboutImage />
    </>
  );
}
