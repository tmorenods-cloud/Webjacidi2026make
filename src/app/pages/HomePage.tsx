import { useState, useRef, useEffect } from "react";
import { useOutletContext, Link } from "react-router";
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
    <div className="tarjeta-logo-cliente bg-surface-light relative rounded-[16px] shrink-0 flex-none" style={{ width: "clamp(202px, 25vw, 288px)", height: "clamp(112px, 14vw, 160px)" }}>
      <div className="contenido-tarjeta-logo flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        {children}
      </div>
      <div className="borde-tarjeta-logo absolute border border-border-light border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function LogoText({ name }: { name: string }) {
  return (
    <span
      className="texto-nombre-cliente font-semibold text-foreground tracking-tight select-none"
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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let inView = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (!inView) {
          track.getAnimations().forEach((anim) => {
            anim.playbackRate = 1;
          });
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(track);

    let currentRate = 1;
    let targetRate = 1;
    let lastScrollY = window.scrollY;
    let rafId: number;

    const update = () => {
      if (inView) {
        const scrollY = window.scrollY;
        // Calcular la velocidad de scroll por frame (delta)
        const delta = Math.abs(scrollY - lastScrollY);
        lastScrollY = scrollY;

        // La velocidad base es 1. Multiplicamos el delta por un factor para obtener la aceleración extra,
        // con un tope máximo (ej. tope de +3 para un playbackRate máximo de 4)
        targetRate = 1 + Math.min(delta * 0.15, 3);

        // Suavizar la transición (Lerp) de la velocidad actual a la objetivo
        currentRate += (targetRate - currentRate) * 0.1;

        track.getAnimations().forEach((anim) => {
          anim.playbackRate = Math.max(1, currentRate);
        });
      } else {
        // Si no está a la vista, sincronizamos lastScrollY pero mantenemos rate en 1
        lastScrollY = window.scrollY;
        currentRate = 1;
      }
      
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

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
    <div className="contenido-marquesina-mockups-1 flex items-center flex-none px-3" style={{ gap: "clamp(12px, 2.5vw, 20px)" }}>
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
    <div className="contenido-marquesina-mockups-2 flex items-center flex-none px-3" style={{ gap: "clamp(12px, 2.5vw, 20px)" }}>
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
    <div className="seccion-hero w-full mt-[6em] md:mt-0">
      <p
        className="titulo-hero font-medium text-foreground pt-[0px] pb-[24px]"
        style={{ fontSize: "clamp(48px, 7vw, 120px)", letterSpacing: "-0.04em", lineHeight: "0.83", paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)", zIndex: 2, position: "relative" }}
      >
        Hacemos<br />grande tu marca
      </p>
      <div className="contenedor-imagen-hero relative w-full overflow-hidden aspect-[3/4] md:aspect-[16/9] mt-[-22px] md:mt-[-16px]">
        <video
          src={videoHero}
          autoPlay
          loop
          muted
          playsInline
          className="imagen-hero absolute inset-0 w-full h-full object-cover object-top mx-[0px] mb-[0px]"
        />
      </div>
    </div >
  );
}

// ─── Intro + Details ──────────────────────────────────────────────────────────

function IntroAndDetailsSection() {
  return (
    <div className="seccion-intro-detalles flex flex-col items-center w-full" style={{ gap: "clamp(60px, 12vw, 160px)", paddingTop: "clamp(40px, 6vw, 80px)", paddingBottom: "clamp(40px, 6vw, 80px)" }}>
      <div className="contenedor-texto-intro w-full py-[0px]" style={{ paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)" }}>
        <p
          className="texto-intro font-normal text-foreground"
          style={{ fontSize: "clamp(32px, 3.5vw, 52px)", letterSpacing: "-0.025em", lineHeight: "1.05", maxWidth: 882 }}
        >
          Innovación y creatividad es nuestro ADN. Diseñamos soluciones que impulsan tu proyecto
        </p>
      </div>
      <div className="marquesina-mockups-superior h-auto md:h-[267px] overflow-hidden w-full">
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
                className="texto-estadistica font-semibold text-muted-text text-center transition-colors duration-300 hover:text-foreground cursor-default"
                style={{ fontSize: "clamp(24px, 3vw, 44px)", letterSpacing: "-0.0125em", lineHeight: "1.05", maxWidth: "calc(100% - 0px)", overflowWrap: "break-word", wordBreak: "break-word" }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
        <a
          href="#contacto"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="boton-lets-talk font-semibold text-foreground text-center underline decoration-solid underline-offset-4"
          style={{ fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.0125em", lineHeight: "0.9" }}
        >
          {"Let's talk"}
        </a>
      </div>
      <div className="marquesina-mockups-inferior h-auto md:h-[267px] overflow-hidden w-full">
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
      <div className="contenedor-enfoque flex flex-col gap-10 md:gap-20 items-start w-full" style={{ paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)", paddingTop: "clamp(24px, 3vw, 40px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
        <p
          className="titulo-enfoque font-medium text-foreground"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: "0.9", maxWidth: 578 }}
        >
          Nuestro enfoque creativo
        </p>
        <div className="grid-enfoque flex flex-wrap gap-px h-auto lg:h-[508px] items-start w-full">
          {[
            { text: "Innovamos el mercado con strategies" },
            { text: "Construimos una relación duradera entre marcas y consumidores" },
            { text: "Maximizamos el retorno de inversión a través de campañas efectivas" },
            { text: "Inspiramos confianza y credibilidad en cada proyecto" },
          ].map(({ text }, i) => (
            <div key={i} className={`columna-enfoque columna-enfoque-${i + 1} flex-1 min-w-[220px] h-full relative border-r border-border-medium last:border-r-0`}>
              <div className="contenido-columna-enfoque flex flex-col px-5 py-3 h-full">
                {i > 0 && <div className="espaciador-superior" style={{ flex: i }} />}
                <p
                  className="texto-enfoque font-normal text-foreground"
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
    <div id="servicios" className="seccion-servicios bg-background relative w-full">
      <div className="contenedor-servicios flex flex-col items-start w-full" style={{ paddingTop: "clamp(40px, 6vw, 80px)" }}>
        <div className="tarjeta-servicios relative w-full">
          <div className="contenido-servicios flex flex-col gap-[2em] md:gap-[88px] items-start w-full pt-[64px] pb-[64px] md:pt-[clamp(24px,4.5vw,80px)] md:pb-[clamp(24px,4.5vw,80px)]" style={{ paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)" }}>
            <p
              className="titulo-servicios font-medium text-foreground"
              style={{ fontSize: "clamp(40px, 5vw, 68px)", letterSpacing: "-0.03em", lineHeight: "0.9", maxWidth: 480 }}
            >
              Lo que hacemos por ti
            </p>
            <div className="lista-servicios flex flex-col gap-10 md:gap-16 items-start w-full">
              {services.map((s) => (
                <div key={s.index} className={`item-servicio item-servicio-${s.index} flex flex-col gap-0 items-start w-full`}>
                  {/* Separador + encabezado: en mobile índice y título van en fila */}
                  <div className="separador-servicio flex items-start pt-4 w-full relative">
                    <div className="linea-separador absolute border-t border-border-medium inset-0 pointer-events-none" />
                    <div className="encabezado-servicio flex flex-row items-baseline gap-3 w-full md:contents">
                      <span className="numero-servicio font-normal text-[#f26b2d] tracking-[-0.0125em] text-[19px] md:text-[24px]">{s.index}</span>
                      <p
                        className="nombre-servicio-mobile font-medium text-foreground md:hidden"
                        style={{ fontSize: "clamp(28px, 5vw, 68px)", letterSpacing: "-0.03em" }}
                      >
                        {s.name}
                      </p>
                    </div>
                  </div>
                  {/* Contenido: en mobile columna, en desktop fila */}
                  <div className="detalles-servicio flex flex-col md:flex-row items-start justify-between w-full gap-8">
                    <p
                      className="nombre-servicio font-medium text-foreground hidden md:block md:w-1/2"
                      style={{ fontSize: "clamp(36px, 5vw, 68px)", letterSpacing: "-0.03em" }}
                    >
                      {s.name}
                    </p>
                    <div className="descripcion-servicio flex flex-col gap-8 items-start pt-[10px] w-full md:w-1/2">
                      <p className="subtitulo-servicio font-medium text-foreground tracking-[-0.03em] max-w-[410px]" style={{ fontSize: "clamp(20px, 3.1vw, 28px)", lineHeight: "1.1" }}>{s.subtitle}</p>
                      <ul className="lista-items-servicio list-disc font-normal text-muted-text text-[22px] tracking-[-0.0125em]">
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
          className="titulo-clientes font-medium text-foreground"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
        >
          Nuestros Clientes
        </p>
      </div>
      <div className="contenedor-marquesinas-logos flex flex-col gap-[6px] items-start w-full relative">
        <div
          className="fade-izquierdo absolute left-0 top-0 h-full w-40 z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(90deg, var(--background) 0%, var(--background) 50%, transparent 100%)" }}
        />
        <div
          className="fade-derecho absolute right-0 top-0 h-full w-40 z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(270deg, var(--background) 0%, var(--background) 50%, transparent 100%)" }}
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
  const [prevActive, setPrevActive] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [ctaHovered, setCtaHovered] = useState(false);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);

  const handleImageError = (name: string) => {
    setBrokenImages((prev) => ({ ...prev, [name]: true }));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isHovering && !isMobile) return;
    const interval = setInterval(() => {
      setPrevActive(activeClient);
      setActiveClient((activeClient + 1) % clientList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering, activeClient, isMobile]);

  const handleClientEnter = (i: number) => {
    if (isMobile) return;
    setIsHovering(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (i !== activeClient) {
        setPrevActive(activeClient);
        setActiveClient(i);
      }
    }, 50);
  };

  const handleClientLeave = () => {
    if (isMobile) return;
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
      <div className="contenedor-proyectos flex flex-col gap-10 items-start w-full" style={{ paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)", paddingTop: "clamp(60px, 8vw, 120px)", paddingBottom: "clamp(60px, 8vw, 120px)" }}>
        <div className="encabezado-proyectos flex flex-col gap-6 items-start max-w-[864px]">
          <p
            className="titulo-proyectos font-medium text-foreground"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: "0.9" }}
          >
            Esto es lo<br />que hacemos
          </p>
          <p
            className="subtitulo-proyectos font-normal text-foreground"
            style={{ fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-0.0125em", lineHeight: "1.1", maxWidth: 614 }}
          >
            Conoce nuestra experiencia a través de nuestros clientes
          </p>
        </div>
        <div className="contenido-proyectos flex gap-5 items-start justify-end pb-10 w-full flex-wrap lg:flex-nowrap relative">
          {!isMobile && (
            <div className="lista-proyectos hidden lg:flex flex-col items-end flex-1 max-w-[1043px] gap-[2px]">
              {clientList.map((client, i) => (
                <div
                  key={client.name}
                  className={`item-proyecto item-proyecto-${i + 1} flex items-end justify-end w-full`}
                  onMouseEnter={() => handleClientEnter(i)}
                  onMouseLeave={handleClientLeave}
                  style={{ cursor: "pointer" }}
                >
                  <p
                    className="nombre-proyecto font-medium text-right transition-all duration-300 whitespace-nowrap"
                    style={{
                      fontSize: "clamp(32px, 4.5vw, 64px)",
                      letterSpacing: "-0.03em",
                      lineHeight: "1.1",
                      color: "var(--foreground)",
                      opacity: activeClient === i ? 1 : 0.2,
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
          )}
          <Link 
            to="/proyectos" 
            className="preview-proyecto flex flex-col gap-[10px] items-start justify-end relative shrink-0 w-full lg:w-[600px] overflow-hidden group"
            style={{ 
              height: isMobile ? "auto" : "751px", 
              aspectRatio: isMobile ? "600/751" : "auto" 
            }}
          >
            <div className="contenedor-imagen-proyecto flex-1 min-h-0 relative w-full overflow-hidden bg-muted rounded-none">
              {clientList.map((client, i) => (
                <div
                  key={client.name}
                  className={`image-reveal-container bg-muted ${
                    activeClient === i ? "active" : prevActive === i ? "prev-active" : ""
                  }`}
                >
                  {!brokenImages[client.name] && (
                    <img
                      alt={client.name}
                      onError={() => handleImageError(client.name)}
                      className="imagen-preview-proyecto absolute inset-0 max-w-none object-cover pointer-events-none size-full has-hover-preview group-hover:scale-105 transition-transform duration-700"
                      src={client.preview}
                    />
                  )}
                </div>
              ))}

              {/* Overlay y titulos indicadores para Mobile */}
              {isMobile && (
                <div 
                  className="indicadores-mobile absolute bottom-0 right-0 w-full flex flex-col items-end justify-end z-10 pointer-events-none" 
                  style={{ 
                    backgroundImage: "linear-gradient(0deg, var(--background) 0%, var(--background) 15%, #00000047 100%)", 
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    padding: "1.5rem"
                  }}
                >
                  <div className="flex flex-col gap-0 items-end pointer-events-auto w-full max-w-[280px]">
                    {clientList.map((client, i) => (
                      <div key={client.name} className="item-proyecto-mobile flex items-center justify-end w-full">
                        <p 
                          className="font-semibold text-right transition-all duration-300 whitespace-nowrap" 
                          style={{ 
                            fontSize: "20px", 
                            letterSpacing: "-0.01em", 
                            color: "var(--foreground)", 
                            opacity: activeClient === i ? 1 : 0.3 
                          }}
                        >
                          {client.name}
                        </p>
                        <div className="indicador-proyecto-mobile flex items-center justify-center ml-[10px]">
                          <div 
                            className="linea-indicador bg-[#f26b2d] h-[2px] transition-all duration-300" 
                            style={{ width: activeClient === i ? 24 : 0 }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div
              className="tarjeta-info-proyecto absolute backdrop-blur-[16px] bg-[rgba(0,0,0,0.55)] hidden lg:flex items-center left-[17px] overflow-hidden px-6 py-[23px] rounded-[12px] w-[566px] transition-opacity duration-300 ease-in-out z-20 pointer-events-none"
              style={{ bottom: 17, opacity: activeClient !== null ? 1 : 0 }}
            >
              <ul className="lista-logros-proyecto font-medium text-white text-[20px] tracking-[-0.0125em] list-disc whitespace-nowrap">
                {(clientBullets[activeClient] ?? []).map((b, i) => (
                  <li key={i} className="logro-proyecto ms-[30px] leading-[1.3]">{b}</li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
        <div
          className="cta-ver-proyectos flex items-center justify-between overflow-hidden relative w-full text-foreground hover:text-background transition-colors duration-300"
          style={{ cursor: "pointer", borderRadius: 8, padding: "clamp(16px, 2vw, 24px) clamp(16px, 2.4vw, 32px)", border: "1px solid var(--border-medium)" }}
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
        >
          <div
            className="fondo-hover-cta absolute inset-0"
            style={{
              backgroundColor: "var(--foreground)",
              transform: ctaHovered ? "translateY(0)" : "translateY(101%)",
              transition: "transform 0.6s cubic-bezier(0.76,0,0.24,1)",
            }}
          />
          <p
            className="texto-cta-proyectos font-normal relative z-10 transition-colors duration-300"
            style={{
              fontSize: "clamp(32px, 4.8vw, 64px)",
              letterSpacing: "-0.03em",
              lineHeight: "0.9",
              maxWidth: 698,
              color: ctaHovered ? "var(--background)" : "var(--foreground)",
            }}
          >
            Ver todos
            <br />
            los proyectos
          </p>
          <div className="icono-flecha-cta overflow-hidden relative shrink-0 size-[160px] z-10 flex items-center justify-center transition-colors duration-300" style={{ color: ctaHovered ? "var(--background)" : "var(--foreground)" }}>
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M106.691 62.7614L49.3143 120.139L39.8862 110.711L97.2635 53.3333H46.6917V40H120.025V113.333H106.691V62.7614Z" fill="currentColor" />
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
      <div className="contenedor-about-imagen flex flex-col lg:flex-row items-start w-full gap-0 lg:gap-[4.167em] pb-[0em] lg:pb-[clamp(60px,8vw,120px)]" style={{ paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)", paddingTop: "clamp(40px, 6vw, 80px)" }}>
        <div className="columna-imagen-about w-full lg:w-1/2 shrink-0">
          <div className="contenedor-imagenes-superpuestas relative w-full" style={{ aspectRatio: "1/1" }}>
            <img alt="" className="imagen-about-base absolute max-w-none object-cover size-full has-hover-preview" src={imgImage} />
            <img alt="" className="imagen-about-overlay absolute max-w-none object-cover size-full opacity-60 has-hover-preview" src={imgImage1} />
          </div>
        </div>
        <div className="columna-texto-about flex flex-col gap-[44px] lg:gap-[160px] items-start justify-center w-full lg:w-1/2 pt-16 pb-[1em] lg:pb-16" style={{ maxWidth: 720 }}>
          <h3
            className="titulo-about-imagen font-medium text-foreground"
            style={{ fontSize: "clamp(28px, 3.5vw, 52px)", letterSpacing: "-0.03em", lineHeight: "1", maxWidth: 640 }}
          >
            Te ofrecemos soluciones reales para resultados comerciales reales
          </h3>
          <div className="descripcion-about flex flex-col gap-[63px] items-start w-full">
            <p className="texto-descripcion-about font-normal text-foreground text-[22px] tracking-[-0.0125em] leading-[1.35]">
              Con años de trayectoria impulsando marcas competitivas, en Jacidi no solo pensamos, ¡ejecutamos! Entendemos que el objetivo de cada marca es alcanzar la máxima rentabilidad, por lo que integramos nuestra experiencia técnica con una visión comercial para apoyar cualquier objetivo que te plantees.
            </p>
            <p
              className="llamada-accion-about font-medium text-foreground whitespace-nowrap"
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
  const { setIsDark } = useOutletContext<{ setIsDark: (val: boolean) => void }>();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const isScrollingUp = currentScrollY < lastScrollY;
      lastScrollY = currentScrollY;

      const serv = document.querySelector(".contenedor-servicios");
      const enf = document.querySelector(".seccion-enfoque");

      if (serv && enf) {
        const servRect = serv.getBoundingClientRect();
        const enfRect = enf.getBoundingClientRect();

        const servInView = servRect.top < window.innerHeight * 0.65;
        const enfInView = enfRect.bottom > window.innerHeight * 0.35 && enfRect.top < window.innerHeight;

        if (isScrollingDown && servInView) {
          setIsDark(true);
        } else if (isScrollingUp && enfInView) {
          setIsDark(false);
        } else if (currentScrollY <= 50) {
          setIsDark(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Evaluamos al montar
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setIsDark(false);
    };
  }, [setIsDark]);

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
