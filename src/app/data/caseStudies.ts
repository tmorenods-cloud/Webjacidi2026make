// ─── Case Study Data ───────────────────────────────────────────────────────────

import imgNavicuHero from "@/imports/CaseStudy/9249e5057a24c153b07287f7f65477c6e06a63c5.png";
import imgNavicuImg1 from "@/imports/CaseStudy/66b381c88d7442b6d6fca575946066896a67f6db.png";
import imgNavicuImg2 from "@/imports/CaseStudy/9e7b46c63fdba6029bb6b0c5dcbad267af6872c3.png";
import imgNavicuImg3 from "@/imports/CaseStudy/5f13ab3a3ff74801724cf7df07cb6e319f7d172b.png";
import imgNavicuImg4 from "@/imports/CaseStudy/d20450c1482411a33f137fb6cfa8f3d5f8b9d22b.png";
import imgNavicuImg5 from "@/imports/CaseStudy/46b4059ae7c44eb9d6289c0001726e236e172cae.png";
import imgNavicuImg6 from "@/imports/CaseStudy/6cf4fcea852e1ca1101ec3481dbf18e1adc99b16.png";
import imgNavicuThumb1 from "@/imports/CaseStudy/695b352afdca68e345698611f5c1cf7c0ca8ca6a.png";
import imgNavicuThumb2 from "@/imports/CaseStudy/a5c29d5aa98abcf3f657c27901d2abbe55dec97c.png";
import imgNavicuThumb3 from "@/imports/CaseStudy/5865a5dbc3a18e7ea9e2a2fe6916a3068f547ead.png";

export interface RelatedProject {
  slug: string;
  title: string;
  tags: string;
  year: string;
  image: string;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  client: string;
  tags: string;
  year: string;
  siteUrl?: string;
  heroImage: string;
  intro: {
    h2: string;
    text: string;
    bullets: string[];
    leftImage: string;
    rightImage: string;
  };
  branding: {
    h2: string;
    text: string;
    fullImage: string;
  };
  solution: {
    h2: string;
    text: string;
    leftImage: string;
    rightImage: string;
    wideImage: string;
  };
  relatedProjects: RelatedProject[];
}

// ─── Unsplash images reutilizadas de ProyectosPage ────────────────────────────

const U = {
  p1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=900&fit=crop",
  p2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop",
  p3: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop",
  p4: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=900&fit=crop",
  p5: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop",
  p6: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop",
  p7: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=900&fit=crop",
  p8: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=900&fit=crop",
  p9: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=900&fit=crop",
  wide1: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=1800&h=700&fit=crop",
  wide2: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=1800&h=700&fit=crop",
  wide3: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1800&h=700&fit=crop",
};

// ─── Projects data ─────────────────────────────────────────────────────────────

export const caseStudies: CaseStudyData[] = [
  {
    slug: "navicu",
    title: "Navicu.com",
    client: "Navicu.com / Turismo",
    tags: "Marketing 360, UX/UI, Brand",
    year: "2025",
    siteUrl: "https://navicu.com",
    heroImage: imgNavicuHero as unknown as string,
    intro: {
      h2: "Estrategia & Branding",
      text: "Navicu.com es una empresa con más de 8 años en el mercado nacional e internacional mayorista que cuenta con alianzas y contratos de comercialización para más de 800 propiedades hoteleras en el país y con las principales aerolíneas nacionales.",
      bullets: ["10 Años de gestión", "+175.000 Followers en Instagram", "+6.000 Leads mensuales"],
      leftImage: imgNavicuImg1 as unknown as string,
      rightImage: imgNavicuImg2 as unknown as string,
    },
    branding: {
      h2: "Identidad Visual",
      text: "Para Navicu.com nos encontramos con el reto de crear un branding que permita representar el espíritu del viajero en cualquier lugar. Se escogieron colores que le dieran sentido a cada destino dentro y fuera de Venezuela, de esa forma los viajeros sienten una profunda seguridad y satisfacción a la hora de viajar. Para navicu.com no hay nada más importante que brindar una experiencia de primera calidad y ofreciendo mejores opciones para un mejor viaje.",
      fullImage: imgNavicuImg3 as unknown as string,
    },
    solution: {
      h2: "Solución Digital",
      text: "Desarrollamos una plataforma digital robusta que centraliza la búsqueda y reserva de paquetes turísticos, integrando vuelos, hoteles y servicios complementarios en una experiencia de usuario fluida y confiable, optimizada para maximizar las conversiones.",
      leftImage: imgNavicuImg4 as unknown as string,
      rightImage: imgNavicuImg5 as unknown as string,
      wideImage: imgNavicuImg6 as unknown as string,
    },
    relatedProjects: [
      { slug: "grand-hyatt", title: "Grand Hyatt", tags: "Marketing 360, UX/UI", year: "2025", image: U.p2 },
      { slug: "barok", title: "Barok", tags: "Brand Identity, Motion", year: "2025", image: U.p6 },
      { slug: "mas-oliu", title: "Mas Oliu", tags: "Web Design, Development", year: "2025", image: U.p7 },
    ],
  },
  {
    slug: "grand-hyatt",
    title: "Grand Hyatt",
    client: "Grand Hyatt / Hospitality",
    tags: "Marketing 360, UX/UI, Brand",
    year: "2025",
    heroImage: U.p2,
    intro: {
      h2: "Estrategia & Posicionamiento",
      text: "Grand Hyatt es una cadena hotelera de lujo con presencia global. Nuestro trabajo abarcó una estrategia de marketing integral para elevar su presencia digital en 5 mercados de América Latina, aumentando la ocupación directa y el reconocimiento de marca.",
      bullets: ["Estrategia de lujo para 5 países LATAM", "+85.000 impresiones mensuales en paid", "NPS aumentado de 62 a 88 puntos"],
      leftImage: U.p1,
      rightImage: U.p3,
    },
    branding: {
      h2: "Experiencia de Marca",
      text: "Rediseñamos la experiencia digital del Grand Hyatt para reflejar su estándar de excelencia. Cada punto de contacto fue cuidadosamente diseñado para comunicar lujo y confianza, desde la landing page hasta las campañas de retargeting y los materiales de comunicación interna.",
      fullImage: U.wide1,
    },
    solution: {
      h2: "Plataforma & Campañas",
      text: "Implementamos un ecosistema digital integrado que unifica la gestión de campañas de paid media, CRM y reservas directas, reduciendo la dependencia de OTAs y aumentando el margen operativo del hotel de forma sostenible.",
      leftImage: U.p4,
      rightImage: U.p5,
      wideImage: U.wide2,
    },
    relatedProjects: [
      { slug: "navicu", title: "Navicu.com", tags: "Marketing 360, UX/UI, Brand", year: "2025", image: imgNavicuThumb1 as unknown as string },
      { slug: "hesperia", title: "Hesperia World", tags: "Marketing Digital, Paid Media", year: "2025", image: U.p9 },
      { slug: "metropolitan", title: "Metropolitan", tags: "Branding, Photography", year: "2025", image: U.p9 },
    ],
  },
  {
    slug: "morrocoy",
    title: "Morrocoy",
    client: "Morrocoy / Turismo",
    tags: "Marketing 360, UX/UI, Brand",
    year: "2025",
    heroImage: U.p3,
    intro: {
      h2: "Branding & Identidad",
      text: "Morrocoy es uno de los destinos turísticos más emblemáticos de Venezuela. Desarrollamos una identidad visual y estrategia de contenidos que captura la esencia natural del parque y lo posiciona como destino preferente para viajeros nacionales e internacionales.",
      bullets: ["Campaña 360° en 3 mercados", "52% de incremento en reservas", "ROI publicitario de 4.2x"],
      leftImage: U.p1,
      rightImage: U.p2,
    },
    branding: {
      h2: "Diseño Visual",
      text: "La paleta de colores, tipografía y sistema de imágenes fueron diseñados para evocar el mar Caribe, la biodiversidad y la calidez local. Cada pieza de comunicación refuerza una narrativa coherente y aspiracional que conecta emocionalmente con el viajero.",
      fullImage: U.wide3,
    },
    solution: {
      h2: "Campaña Digital",
      text: "Ejecutamos campañas en Meta Ads y Google Ads segmentadas por intereses de viaje y comportamiento, complementadas con contenido orgánico en redes sociales y alianzas con influencers del sector turismo para maximizar el alcance y la conversión.",
      leftImage: U.p6,
      rightImage: U.p7,
      wideImage: U.wide1,
    },
    relatedProjects: [
      { slug: "navicu", title: "Navicu.com", tags: "Marketing 360, UX/UI, Brand", year: "2025", image: imgNavicuThumb1 as unknown as string },
      { slug: "grand-hyatt", title: "Grand Hyatt", tags: "Marketing 360, UX/UI", year: "2025", image: U.p2 },
      { slug: "mas-oliu", title: "Mas Oliu", tags: "Web Design, Development", year: "2025", image: U.p7 },
    ],
  },
  {
    slug: "heyba",
    title: "Heyba",
    client: "Heyba / Retail",
    tags: "Branding, Web design",
    year: "2025",
    heroImage: U.p4,
    intro: {
      h2: "Identidad & Web",
      text: "Heyba es una marca de moda emergente que necesitaba una identidad visual sólida y una presencia digital que comunicara su propuesta de valor diferenciada. Creamos desde cero su sistema de identidad y su tienda online.",
      bullets: ["Identidad visual completa", "E-commerce implementado", "+40% conversión online"],
      leftImage: U.p5,
      rightImage: U.p6,
    },
    branding: {
      h2: "Sistema de Marca",
      text: "Diseñamos un sistema visual completo que incluye logotipo, paleta cromática, tipografía, fotografía de producto y guías de aplicación para todos los canales. La identidad refleja modernidad, accesibilidad y diferenciación en el mercado de moda.",
      fullImage: U.wide2,
    },
    solution: {
      h2: "Tienda Online",
      text: "Desarrollamos la tienda en Shopify con una experiencia de usuario optimizada para la conversión, integrando sistema de pagos, gestión de inventario y herramientas de email marketing para fidelización de clientes.",
      leftImage: U.p7,
      rightImage: U.p8,
      wideImage: U.wide3,
    },
    relatedProjects: [
      { slug: "barok", title: "Barok", tags: "Brand Identity, Motion", year: "2025", image: U.p6 },
      { slug: "castro-suite", title: "Castro Suite", tags: "Marketing Digital, SEO", year: "2025", image: U.p5 },
      { slug: "metropolitan", title: "Metropolitan", tags: "Branding, Photography", year: "2025", image: U.p9 },
    ],
  },
  {
    slug: "castro-suite",
    title: "Castro Suites",
    client: "Castro Suites / Hospitality",
    tags: "Marketing Digital, SEO",
    year: "2025",
    heroImage: U.p5,
    intro: {
      h2: "Posicionamiento Digital",
      text: "Castro Suites es un boutique hotel que buscaba aumentar su visibilidad online y reducir su dependencia de plataformas de reserva de terceros. Implementamos una estrategia SEO y de marketing digital integral.",
      bullets: ["Reducción del 30% en coste por adquisición", "+200 propiedades gestionadas", "Top 3 en búsquedas locales"],
      leftImage: U.p4,
      rightImage: U.p6,
    },
    branding: {
      h2: "Comunicación & Contenido",
      text: "Desarrollamos una estrategia de contenidos que posiciona a Castro Suites como referente de hospitalidad boutique, con artículos SEO, guías de la ciudad y contenido visual que inspira y convierte a los visitantes.",
      fullImage: U.wide1,
    },
    solution: {
      h2: "SEO & Reservas Directas",
      text: "Optimizamos el sitio web para búsquedas locales e internacionales, implementamos Google Hotel Ads y configuramos un motor de reservas directo que elimina comisiones de intermediarios y mejora la rentabilidad del negocio.",
      leftImage: U.p7,
      rightImage: U.p8,
      wideImage: U.wide2,
    },
    relatedProjects: [
      { slug: "grand-hyatt", title: "Grand Hyatt", tags: "Marketing 360, UX/UI", year: "2025", image: U.p2 },
      { slug: "navicu", title: "Navicu.com", tags: "Marketing 360, UX/UI, Brand", year: "2025", image: imgNavicuThumb1 as unknown as string },
      { slug: "eroom-suite", title: "eRoom Suite", tags: "UX/UI, App Design", year: "2025", image: U.p8 },
    ],
  },
  {
    slug: "barok",
    title: "Barok",
    client: "Barok / Gastronomía",
    tags: "Brand Identity, Motion",
    year: "2025",
    heroImage: U.p6,
    intro: {
      h2: "Identidad & Motion",
      text: "Barok es un restaurante de alta cocina que necesitaba una identidad visual sofisticada y piezas audiovisuales que comunicaran la excelencia de su propuesta gastronómica. Desarrollamos su sistema de marca completo y producción de contenido.",
      bullets: ["Campaña 360° en 3 mercados", "52% de incremento en reservas", "Engagement rate del 8.4% en RRSS"],
      leftImage: U.p5,
      rightImage: U.p7,
    },
    branding: {
      h2: "Diseño & Producción",
      text: "Creamos una identidad visual que mezcla elegancia clásica con toques modernos. La producción fotográfica y de video captura la experiencia sensorial del restaurante, generando contenido de alto impacto para redes sociales y materiales impresos.",
      fullImage: U.wide3,
    },
    solution: {
      h2: "Campañas & Contenido",
      text: "Producimos 12 piezas audiovisuales mensuales y gestionamos las redes sociales de Barok, construyendo una comunidad engaged que se traduce en reservas directas y posicionamiento como restaurante top en su categoría.",
      leftImage: U.p8,
      rightImage: U.p9,
      wideImage: U.wide1,
    },
    relatedProjects: [
      { slug: "heyba", title: "Heyba", tags: "Branding, Web design", year: "2025", image: U.p4 },
      { slug: "metropolitan", title: "Metropolitan", tags: "Branding, Photography", year: "2025", image: U.p9 },
      { slug: "mas-oliu", title: "Mas Oliu", tags: "Web Design, Development", year: "2025", image: U.p7 },
    ],
  },
  {
    slug: "mas-oliu",
    title: "Mas Oliu",
    client: "Mas Oliu / Agroturismo",
    tags: "Web Design, Development",
    year: "2025",
    heroImage: U.p7,
    intro: {
      h2: "Web & Experiencia Digital",
      text: "Mas Oliu es una masía de agroturismo en Cataluña que buscaba una presencia digital que reflejara la autenticidad y la belleza de su entorno. Diseñamos y desarrollamos su sitio web con foco en la experiencia de usuario y la conversión.",
      bullets: ["Incremento del 38% en ventas online", "Rediseño de identidad visual completa", "+12.000 visitas únicas al mes"],
      leftImage: U.p6,
      rightImage: U.p8,
    },
    branding: {
      h2: "Diseño Web",
      text: "El diseño web de Mas Oliu fue concebido para transmitir paz, autenticidad y conexión con la naturaleza. Utilizamos fotografía de gran formato, tipografías orgánicas y una paleta de colores terrosos que invita al visitante a vivir la experiencia.",
      fullImage: U.wide2,
    },
    solution: {
      h2: "Desarrollo & CMS",
      text: "Desarrollamos el sitio en WordPress con un CMS a medida que permite al equipo de Mas Oliu gestionar reservas, publicar contenido y actualizar el catálogo de experiencias de forma autónoma, sin necesidad de conocimientos técnicos.",
      leftImage: U.p1,
      rightImage: U.p2,
      wideImage: U.wide3,
    },
    relatedProjects: [
      { slug: "navicu", title: "Navicu.com", tags: "Marketing 360, UX/UI, Brand", year: "2025", image: imgNavicuThumb2 as unknown as string },
      { slug: "heyba", title: "Heyba", tags: "Branding, Web design", year: "2025", image: U.p4 },
      { slug: "eroom-suite", title: "eRoom Suite", tags: "UX/UI, App Design", year: "2025", image: U.p8 },
    ],
  },
  {
    slug: "eroom-suite",
    title: "eRoom Suite",
    client: "eRoom Suite / PropTech",
    tags: "UX/UI, App Design",
    year: "2025",
    heroImage: U.p8,
    intro: {
      h2: "UX/UI & Producto Digital",
      text: "eRoom Suite es una plataforma de gestión de propiedades que necesitaba una interfaz más intuitiva y moderna para mejorar la adopción entre sus usuarios y reducir la curva de aprendizaje del producto.",
      bullets: ["Integración con canal de reservas propio", "+200 propiedades gestionadas", "Reducción del 30% en coste por adquisición"],
      leftImage: U.p7,
      rightImage: U.p9,
    },
    branding: {
      h2: "Diseño de Interfaz",
      text: "Rediseñamos completamente la interfaz de eRoom Suite siguiendo principios de diseño centrado en el usuario. El nuevo sistema de componentes mejora la consistencia visual y reduce el tiempo necesario para completar las tareas más frecuentes.",
      fullImage: U.wide1,
    },
    solution: {
      h2: "Producto & Desarrollo",
      text: "Implementamos el nuevo diseño en colaboración con el equipo de desarrollo de eRoom, integrando el sistema de diseño en el stack tecnológico existente y asegurando una transición fluida sin interrupciones para los usuarios activos.",
      leftImage: U.p1,
      rightImage: U.p3,
      wideImage: U.wide2,
    },
    relatedProjects: [
      { slug: "heyba", title: "Heyba", tags: "Branding, Web design", year: "2025", image: U.p4 },
      { slug: "mas-oliu", title: "Mas Oliu", tags: "Web Design, Development", year: "2025", image: U.p7 },
      { slug: "navicu", title: "Navicu.com", tags: "Marketing 360, UX/UI, Brand", year: "2025", image: imgNavicuThumb3 as unknown as string },
    ],
  },
  {
    slug: "metropolitan",
    title: "Club Metropolitan",
    client: "Club Metropolitan / Fitness",
    tags: "Branding, Photography",
    year: "2025",
    heroImage: U.p9,
    intro: {
      h2: "Branding & Fotografía",
      text: "Club Metropolitan es una cadena de centros deportivos premium que buscaba renovar su imagen de marca y elevar la calidad de su comunicación visual para atraer a un segmento de mayor poder adquisitivo.",
      bullets: ["Campaña de membresías con +3.200 nuevos socios", "Producción audiovisual de 12 piezas/mes", "Engagement rate del 8.4% en RRSS"],
      leftImage: U.p8,
      rightImage: U.p1,
    },
    branding: {
      h2: "Sistema Visual",
      text: "Renovamos el sistema de identidad visual de Metropolitan, incluyendo logotipo, tipografía, fotografía de estilo de vida y guías de marca. La nueva identidad comunica energía, exclusividad y comunidad, conectando con las aspiraciones de su público objetivo.",
      fullImage: U.wide3,
    },
    solution: {
      h2: "Producción & Campaña",
      text: "Ejecutamos una campaña de membresías con producción fotográfica y de video en los centros deportivos, complementada con una estrategia de paid media en Meta y Google que generó más de 3.200 nuevos socios en 90 días.",
      leftImage: U.p2,
      rightImage: U.p4,
      wideImage: U.wide1,
    },
    relatedProjects: [
      { slug: "barok", title: "Barok", tags: "Brand Identity, Motion", year: "2025", image: U.p6 },
      { slug: "heyba", title: "Heyba", tags: "Branding, Web design", year: "2025", image: U.p4 },
      { slug: "grand-hyatt", title: "Grand Hyatt", tags: "Marketing 360, UX/UI", year: "2025", image: U.p2 },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudies.find((p) => p.slug === slug);
}
