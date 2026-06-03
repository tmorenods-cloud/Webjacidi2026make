import { useState, useRef } from "react";
import imgClientLogo from "@/imports/Home-1/b7b5eced762fc65fe3bd76a4742c9db6ad95a62d.png";
import imgClientLogo1 from "@/imports/Home-1/c0277f15dd06af820ab8d7faefbd135cf318a958.png";
import imgClientLogo2 from "@/imports/Home-1/0a2e79bcd47a4aacb95357549ff5939bc54d20c9.png";
import imgClientLogo3 from "@/imports/Home-1/ca17513dda698dffd51ce63384294861c38ef6f9.png";
import imgClientLogo4 from "@/imports/Home-1/49323ca07b7b9e5a4dd41cc31534a5a142a1f7bd.png";
import imgClientLogo5 from "@/imports/Home-1/b327c2ebc988cb10d48418f8c40002212dd2ae59.png";
import imgClientLogo6 from "@/imports/Home-1/9424d751efc36ee0a920f89ac42d391784837c2a.png";
import imgClientLogo7 from "@/imports/Home-1/4cdad886271045d8c1cdc9da83383af6b1080c60.png";
import imgClientLogo8 from "@/imports/Home-1/4c2426829019e5977540fd18b894ac50ee3c374e.png";
import imgColumn from "@/imports/Home-1/46b4059ae7c44eb9d6289c0001726e236e172cae.png";
import imgColumn1 from "@/imports/Home-1/9249e5057a24c153b07287f7f65477c6e06a63c5.png";
import imgImage from "@/imports/Home-1/70ba5425a7dc220227b68ba509e823370c72311e.png";
import imgImage1 from "@/imports/Home-1/a56b2ff5ab4dfbbad342e0ca02ad65a24d06e42d.png";

const HERO_IMG =
  "https://images.unsplash.com/photo-1742540531234-146d41a8833b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMGZhc2hpb24lMjBtb2RlbCUyMGRyYW1hdGljJTIwcG9ydHJhaXQlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzc5ODEyMjA3fDA&ixlib=rb-4.1.0&q=80&w=1080";

// ─── Client Logo Cards ─────────────────────────────────────────────────────────

function LogoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[rgba(32,32,31,0.04)] h-[160px] relative rounded-[16px] shrink-0 w-[288px] flex-none">
      <div className="flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        {children}
      </div>
      <div className="absolute border border-[rgba(32,32,31,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function LogoText({ name }: { name: string }) {
  return (
    <span
      className="font-semibold text-[#20201f] tracking-tight select-none"
      style={{ fontSize: 18, opacity: 0.7, fontFamily: "Inter, sans-serif", letterSpacing: "-0.5px" }}
    >
      {name}
    </span>
  );
}

const row1Logos = ["Castro Suites", "Testis Suite", "Navicu", "Hyatt", "Metropolitan", "Barok", "eRoom"];
const row2Logos = ["Hesperia", "Mas Oliu", "Grand Hyatt", "Odoo", "iDempiere", "Jacidi Pro", "MediaHub"];

function LogoRibbonRow1() {
  return (
    <div className="flex gap-[6px] items-center flex-none mx-[3px] my-[0px]">
      {row1Logos.map((name) => (
        <LogoCard key={name}><LogoText name={name} /></LogoCard>
      ))}
    </div>
  );
}

function LogoRibbonRow2() {
  return (
    <div className="flex gap-[6px] items-center flex-none mx-[3px] my-[0px]">
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
  return (
    <div className="overflow-hidden w-full relative">
      <div
        ref={trackRef}
        className="flex w-max"
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
    <div className="h-[267px] relative rounded-[25px] shrink-0 w-[400px] flex-none has-hover-preview">
      <div className="absolute inset-0 pointer-events-none rounded-[25px]">
        <div className="absolute bg-[#909090] inset-0 rounded-[25px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[25px] size-full" src={src} />
      </div>
    </div>
  );
}

function MockupRibbonContent() {
  return (
    <div className="flex gap-[40px] items-center flex-none px-5">
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
    <div className="flex gap-[40px] items-center flex-none px-5">
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
    <div className="w-full">
      <p
        className="font-medium text-[#20201f] px-[80px] pt-[0px] pb-[24px]"
        style={{ fontSize: "clamp(64px, 8vw, 120px)", letterSpacing: "-6px", lineHeight: "0.83" }}
      >
        Hacemos<br />grande tu marca
      </p>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          alt="Hero"
          src={HERO_IMG}
          className="absolute inset-0 w-full h-full object-cover object-top mx-[0px] mt-[-10px] mb-[0px]"
        />
      </div>
    </div>
  );
}

// ─── Intro + Details ──────────────────────────────────────────────────────────

function IntroAndDetailsSection() {
  return (
    <div className="flex flex-col gap-[160px] items-center py-20 w-full">
      <div className="w-full px-20">
        <p
          className="font-normal text-[#20201f]"
          style={{ fontSize: "clamp(32px, 3.5vw, 52px)", letterSpacing: "-2.08px", lineHeight: "1.05", maxWidth: 882 }}
        >
          Innovación y creatividad es nuestro ADN. Diseñamos soluciones que impulsan tu proyecto
        </p>
      </div>
      <div className="h-[267px] overflow-hidden w-full">
        <Marquee direction="left" duration={35}>
          <MockupRibbonContent />
        </Marquee>
      </div>
      <div className="flex flex-col gap-[52px] items-center w-full">
        <div className="flex flex-col gap-[16px] items-center w-full overflow-hidden">
          {[
            "+10 Años de Know-How (España & Latam)",
            "+90 Proyectos Ejecutados",
            "+70 Profesionales Especializados",
            "52% ROI Promedio (Elevamos la rentabilidad y el Love Brand)",
            "1M$ invertidos en Paid Media",
          ].map((text) => (
            <div key={text} className="flex flex-col items-center w-full">
              <p
                className="font-semibold text-[#909090] text-center whitespace-nowrap transition-colors duration-300 hover:text-[#20201f] cursor-default"
                style={{ fontSize: "clamp(24px, 3vw, 44px)", letterSpacing: "-2.2px", lineHeight: "1.05" }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
        <button
          className="font-semibold text-[#20201f] text-center underline decoration-solid underline-offset-4"
          style={{ fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-2.2px", lineHeight: "0.9" }}
        >
          {"Let's talk"}
        </button>
      </div>
      <div className="h-[267px] overflow-hidden w-full">
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
    <div className="relative w-full">
      <div className="flex flex-col gap-20 items-start px-20 py-10 w-full">
        <p
          className="font-medium text-[#20201f]"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-3.6px", lineHeight: "0.9", maxWidth: 578 }}
        >
          Nuestro enfoque creativo
        </p>
        <div className="flex flex-wrap gap-px h-auto lg:h-[508px] items-start w-full">
          {[
            { text: "Innovamos el mercado con estrategias" },
            { text: "Construimos una relación duradera entre marcas y consumidores" },
            { text: "Maximizamos el retorno de inversión a través de campañas efectivas" },
            { text: "Inspiramos confianza y credibilidad en cada proyecto" },
          ].map(({ text }, i) => (
            <div key={i} className="flex-1 min-w-[220px] h-full relative border-r border-[rgba(32,32,31,0.2)] last:border-r-0">
              <div className="flex flex-col px-5 py-3 h-full">
                {i > 0 && <div style={{ flex: i }} />}
                <p
                  className="font-normal text-[#20201f]"
                  style={{ fontSize: "clamp(20px, 2.2vw, 32px)", letterSpacing: "-1.28px", lineHeight: "1.05" }}
                >
                  {text}
                </p>
                {i < 3 && <div style={{ flex: 3 - i }} />}
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
    <div className="bg-white relative w-full">
      <div className="flex flex-col items-start pb-[120px] pt-20 px-20 w-full">
        <div className="bg-[#20201f] relative rounded-[16px] w-full">
          <div className="flex flex-col gap-[88px] items-start p-20 w-full">
            <p
              className="font-medium text-white"
              style={{ fontSize: "clamp(40px, 5vw, 68px)", letterSpacing: "-4.08px", lineHeight: "0.9", maxWidth: 480 }}
            >
              Lo que hacemos por ti
            </p>
            <div className="flex flex-col gap-16 items-start w-full">
              {services.map((s) => (
                <div key={s.index} className="flex flex-col gap-6 items-start w-full">
                  <div className="flex items-start pt-4 w-full relative">
                    <div className="absolute border-t border-[rgba(255,255,255,0.2)] inset-0 pointer-events-none" />
                    <span className="font-normal text-[#f26b2d] text-[24px] tracking-[-0.48px]">{s.index}</span>
                  </div>
                  <div className="flex items-start justify-between w-full gap-8">
                    <p
                      className="font-medium text-white w-1/2"
                      style={{ fontSize: "clamp(36px, 5vw, 68px)", letterSpacing: "-4.08px" }}
                    >
                      {s.name}
                    </p>
                    <div className="flex flex-col gap-8 items-start pt-[10px] w-1/2">
                      <p className="font-medium text-white text-[28px] tracking-[-1.68px] leading-normal max-w-[410px]">{s.subtitle}</p>
                      <ul className="list-disc font-normal text-[#909090] text-[22px] tracking-[-0.88px]">
                        {s.items.map((item) => (
                          <li key={item} className="ms-[33px] mb-1 leading-[1.65]">{item}</li>
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
    <div className="flex flex-col gap-[52px] items-start overflow-hidden py-20 w-full">
      <div className="px-20 w-full">
        <p
          className="font-medium text-[#20201f]"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-3.6px", lineHeight: "1.1" }}
        >
          Nuestros Clientes
        </p>
      </div>
      <div className="flex flex-col gap-[6px] items-start w-full relative">
        <div
          className="absolute left-0 top-0 h-full w-40 z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(90deg, white 0%, white 50%, rgba(255,255,255,0) 100%)" }}
        />
        <div
          className="absolute right-0 top-0 h-full w-40 z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(270deg, white 0%, white 50%, rgba(255,255,255,0) 100%)" }}
        />
        <div className="w-full overflow-hidden">
          <Marquee direction="left" duration={45}>
            <LogoRibbonRow1 />
          </Marquee>
        </div>
        <div className="w-full overflow-hidden">
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
  const [activeClient, setActiveClient] = useState<number | null>(null);
  const [displayedClient, setDisplayedClient] = useState<number | null>(null);
  const [revealing, setRevealing] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  const handleClientEnter = (i: number) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setActiveClient(i);
      setDisplayedClient(i);
      setRevealing(true);
      setTimeout(() => setRevealing(false), 500);
    }, 50);
  };

  const handleClientLeave = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setActiveClient(null);
    }, 120);
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
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-col gap-20 items-start px-20 py-[120px] w-full">
        <div className="flex flex-col gap-6 items-start max-w-[864px]">
          <p
            className="font-medium text-[#20201f]"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-3.6px", lineHeight: "0.9" }}
          >
            Esto es lo<br />que hacemos
          </p>
          <p
            className="font-normal text-[#20201f]"
            style={{ fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-2.4px", lineHeight: "1.1", maxWidth: 614 }}
          >
            Conoce nuestra experiencia a través de nuestros clientes
          </p>
        </div>
        <div className="flex gap-5 items-start justify-end pb-10 w-full">
          <div className="flex flex-col items-end flex-1 max-w-[1043px]">
            {clientList.map((client, i) => (
              <div
                key={client.name}
                className="flex items-end justify-end w-full"
                onMouseEnter={() => handleClientEnter(i)}
                onMouseLeave={handleClientLeave}
                style={{ cursor: "pointer" }}
              >
                <p
                  className="font-medium text-right transition-colors duration-300 whitespace-nowrap"
                  style={{
                    fontSize: "clamp(32px, 4.5vw, 64px)",
                    letterSpacing: "-2.56px",
                    lineHeight: "1.1",
                    color: activeClient === i ? "rgb(32,32,31)" : "rgba(32,32,31,0.2)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {client.name}
                </p>
                <div className="flex items-center justify-center ml-2">
                  <div
                    className="bg-[#f26b2d] h-[3px] transition-all duration-300"
                    style={{ width: activeClient === i ? 32 : 0 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[10px] h-[751px] items-start justify-end relative shrink-0 w-[600px] overflow-hidden">
            {displayedClient !== null ? (
              <>
                <div className="flex-1 min-h-0 relative w-full overflow-hidden">
                  <img
                    key={displayedClient}
                    alt={clientList[displayedClient].name}
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full has-hover-preview"
                    src={clientList[displayedClient].preview}
                    style={{ animation: revealing ? "revealFromRight 0.5s cubic-bezier(0.76,0,0.24,1) forwards" : "none" }}
                  />
                </div>
                <div
                  className="absolute backdrop-blur-[16px] bg-[rgba(0,0,0,0.8)] flex items-center left-[17px] overflow-hidden px-6 py-[23px] rounded-[12px] w-[566px]"
                  style={{ bottom: 40 }}
                >
                  <ul className="font-medium text-white text-[20px] tracking-[-0.6px] list-disc whitespace-nowrap">
                    {(clientBullets[displayedClient] ?? []).map((b, i) => (
                      <li key={i} className="ms-[30px] leading-[1.3]">{b}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div className="flex-1 w-full relative">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgColumn1}
                  style={{ opacity: 0.3 }}
                />
              </div>
            )}
          </div>
        </div>
        <div
          className="flex items-start justify-between overflow-hidden px-10 py-16 relative w-full"
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          style={{ cursor: "pointer", borderRadius: 8 }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#20201f",
              transform: ctaHovered ? "translateY(0)" : "translateY(101%)",
              transition: "transform 0.6s cubic-bezier(0.76,0,0.24,1)",
            }}
          />
          <p
            className="font-normal relative z-10"
            style={{
              fontSize: "clamp(40px, 6vw, 90px)",
              letterSpacing: "-4.5px",
              lineHeight: "0.9",
              maxWidth: 698,
              color: ctaHovered ? "white" : "#20201f",
              transition: "color 0.5s ease 200ms",
            }}
          >
            Ver todos los proyectos
          </p>
          <div className="overflow-hidden relative shrink-0 size-[160px] z-10 flex items-center justify-center">
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M106.691 62.7614L49.3143 120.139L39.8862 110.711L97.2635 53.3333H46.6917V40H120.025V113.333H106.691V62.7614Z" fill="white"/>
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
    <div className="relative w-full">
      <div className="flex flex-col lg:flex-row items-start pb-[120px] pt-20 px-20 w-full" style={{ gap: "4.167em" }}>
        <div className="w-full lg:w-1/2 shrink-0">
          <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
            <img alt="" className="absolute max-w-none object-cover size-full has-hover-preview" src={imgImage} />
            <img alt="" className="absolute max-w-none object-cover size-full opacity-60 has-hover-preview" src={imgImage1} />
          </div>
        </div>
        <div className="flex flex-col gap-[160px] items-start justify-center w-full lg:w-1/2 py-16" style={{ maxWidth: 720 }}>
          <p
            className="font-medium text-[#20201f]"
            style={{ fontSize: "clamp(28px, 3.5vw, 52px)", letterSpacing: "-2.6px", lineHeight: "1", maxWidth: 640 }}
          >
            Te ofrecemos soluciones reales para resultados comerciales reales
          </p>
          <div className="flex flex-col gap-[63px] items-start w-full">
            <p className="font-normal text-[#20201f] text-[22px] tracking-[-0.44px] leading-[1.35]">
              Con años de trayectoria impulsando marcas competitivas, en Jacidi no solo pensamos, ¡ejecutamos! Entendemos que el objetivo de cada marca es alcanzar la máxima rentabilidad, por lo que integramos nuestra experiencia técnica con una visión comercial para apoyar cualquier objetivo que te plantees.
            </p>
            <p
              className="font-medium text-[#20201f] whitespace-nowrap"
              style={{ fontSize: "clamp(24px, 2.8vw, 40px)", letterSpacing: "-2.4px" }}
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
