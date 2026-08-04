// ─── Contenido (texto de ejemplo — reemplazar por el definitivo) ─────────────

const secciones = [
  {
    titulo: "¿Qué son las cookies?",
    texto:
      "Las cookies son pequeños archivos de texto que un sitio web instala en tu ordenador o dispositivo móvil cuando lo visitas. Permiten que la web recuerde tus acciones y preferencias durante un periodo de tiempo, para que no tengas que volver a introducirlas cada vez que navegas por la página o pasas de una página a otra.",
  },
  {
    titulo: "¿Qué tipos de cookies utilizamos?",
    texto:
      "En jacidi.com utilizamos cookies técnicas, necesarias para el correcto funcionamiento del sitio; cookies analíticas, que nos ayudan a entender cómo interactúan las personas usuarias con la web; y cookies de personalización, que recuerdan tus preferencias como el modo claro u oscuro.",
  },
  {
    titulo: "Cookies de terceros",
    texto:
      "Algunas cookies son gestionadas por terceros, como herramientas de analítica web, que nos permiten medir el tráfico y las visitas al sitio con fines estadísticos. Estas cookies solo se instalan tras obtener tu consentimiento.",
  },
  {
    titulo: "¿Cómo puedes gestionar las cookies?",
    texto:
      "Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador que utilices. Ten en cuenta que, si desactivas las cookies, es posible que algunas funcionalidades del sitio dejen de estar disponibles.",
  },
  {
    titulo: "Cambios en esta política",
    texto:
      "Jacidi puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la autoridad competente. Por ello, se aconseja a las personas usuarias que la visiten periódicamente.",
  },
];

// ─── Hero ───────────────────────────────────────────────────────────────────

function PoliticaCookiesHero() {
  return (
    <div
      className="seccion-hero-cookies flex flex-col gap-6 items-start w-full pt-[44px]"
      style={{ paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)", paddingBottom: "clamp(40px, 6vw, 80px)" }}
    >
      <p
        className="titulo-cookies font-medium text-foreground"
        style={{ fontSize: "clamp(48px, 4.5vw, 72px)", letterSpacing: "-0.04em", lineHeight: "0.9" }}
      >
        Política de cookies
      </p>
      <p
        className="fecha-actualizacion-cookies font-normal text-muted-text"
        style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
      >
        Última actualización: agosto 2026
      </p>
      <p
        className="intro-cookies font-normal text-foreground"
        style={{ fontSize: "clamp(20px, 2.2vw, 32px)", letterSpacing: "-0.0125em", lineHeight: "1.3", maxWidth: 900 }}
      >
        Este texto es un ejemplo de referencia. En jacidi.com utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación, analizar el uso del sitio y personalizar contenido. A continuación te explicamos qué son, para qué las usamos y cómo puedes gestionarlas.
      </p>
    </div>
  );
}

// ─── Secciones de contenido ────────────────────────────────────────────────

function PoliticaCookiesContenido() {
  return (
    <div
      className="seccion-contenido-cookies w-full"
      style={{ paddingTop: "clamp(20px, 3vw, 40px)", paddingBottom: "clamp(40px, 6vw, 80px)", paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)" }}
    >
      <div className="contenedor-cookies flex flex-col w-full" style={{ maxWidth: 900 }}>
        {secciones.map((s) => (
          <div key={s.titulo} className="bloque-cookie relative w-full">
            <div className="borde-superior-cookie border-t border-border-medium w-full" />
            <div className="contenido-bloque-cookie flex flex-col gap-4 items-start py-8 w-full">
              <p
                className="titulo-bloque-cookie font-semibold text-foreground"
                style={{ fontSize: "clamp(24px, 2.2vw, 32px)", letterSpacing: "-0.03em" }}
              >
                {s.titulo}
              </p>
              <p
                className="texto-bloque-cookie font-normal text-muted-foreground"
                style={{ fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: "1.6", letterSpacing: "-0.0125em" }}
              >
                {s.texto}
              </p>
            </div>
          </div>
        ))}
        <div className="borde-inferior-cookie border-t border-border-medium w-full" />
      </div>
    </div>
  );
}

// ─── Export ────────────────────────────────────────────────────────────────

export function PoliticaCookiesPage() {
  return (
    <>
      <PoliticaCookiesHero />
      <PoliticaCookiesContenido />
    </>
  );
}
