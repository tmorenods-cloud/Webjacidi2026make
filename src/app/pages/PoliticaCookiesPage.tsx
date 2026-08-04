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
        Política de Cookies
      </p>
      <p
        className="fecha-actualizacion-cookies font-normal text-muted-text"
        style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
      >
        Última actualización: Agosto 2026
      </p>
      <p
        className="intro-cookies font-normal text-foreground"
        style={{ fontSize: "clamp(20px, 2.2vw, 32px)", letterSpacing: "-0.0125em", lineHeight: "1.3", maxWidth: 900 }}
      >
        En <strong>Jacidi.com</strong> utilizamos cookies técnicas y tecnologías similares estrictamente necesarias para garantizar el funcionamiento seguro de nuestro sitio web y protegerlo contra el spam y el abuso. A continuación, explicamos qué son las cookies y cómo las implementamos.
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
      <div className="contenedor-cookies flex flex-col gap-8 w-full font-normal text-muted-foreground" style={{ maxWidth: 900, fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: "1.6", letterSpacing: "-0.0125em" }}>
        
        <div className="bloque-cookie relative w-full pt-8 border-t border-border-medium">
          <h2 className="font-semibold text-foreground mb-4" style={{ fontSize: "clamp(24px, 2.2vw, 32px)", letterSpacing: "-0.03em" }}>1. ¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo (ordenador, tableta o teléfono móvil) cuando los visita. Se utilizan ampliamente para que los sitios web funcionen de manera eficiente, así como para proporcionar información técnica y de seguridad a los propietarios del sitio.</p>
        </div>

        <div className="bloque-cookie relative w-full pt-8 border-t border-border-medium">
          <h2 className="font-semibold text-foreground mb-4" style={{ fontSize: "clamp(24px, 2.2vw, 32px)", letterSpacing: "-0.03em" }}>2. ¿Qué tipos de cookies utilizamos?</h2>
          <p className="mb-4">En Jacidi.com <strong>no utilizamos cookies de rastreo comercial, publicidad o análisis (como Google Analytics o Meta Pixel)</strong>. Únicamente utilizamos cookies técnicas y de seguridad que son indispensables para el funcionamiento y la protección de la plataforma.</p>

          <h3 className="font-semibold text-foreground mt-6 mb-2" style={{ fontSize: "clamp(20px, 1.8vw, 24px)" }}>Cookies de Seguridad: Google reCAPTCHA</h3>
          <p className="mb-4">Utilizamos el servicio Google reCAPTCHA (proporcionado por Google LLC) para proteger los formularios de nuestro sitio web contra el spam, el fraude y el abuso por parte de bots automatizados.</p>
          <ul className="list-disc pl-6 mb-4 flex flex-col gap-2">
              <li><strong>Nombre de la cookie:</strong> <code>_GRECAPTCHA</code></li>
              <li><strong>Propósito:</strong> Determinar si el usuario es un ser humano o un bot automatizado para garantizar la integridad y seguridad del sitio.</li>
              <li><strong>Datos procesados:</strong> Dirección IP del usuario, información del navegador y del dispositivo, cookies previas de Google activas en el navegador y patrones de interacción (como los movimientos del ratón o de escritura).</li>
              <li><strong>Base legal:</strong> Al tratarse de una cookie de seguridad con el único propósito de proteger la web contra abusos, se considera una "Cookie estrictamente necesaria". Por lo tanto, está exenta del requisito de consentimiento previo según normativas vigentes como el RGPD.</li>
          </ul>
          <p>El uso de este servicio está sujeto a la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Política de Privacidad</a> y los <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Términos de Servicio</a> de Google.</p>
        </div>

        <div className="bloque-cookie relative w-full pt-8 border-t border-border-medium">
          <h2 className="font-semibold text-foreground mb-4" style={{ fontSize: "clamp(24px, 2.2vw, 32px)", letterSpacing: "-0.03em" }}>3. Formularios de Contacto y EmailJS</h2>
          <p>Para la gestión y envío de los mensajes a través de nuestros formularios, utilizamos la tecnología de EmailJS. Este servicio se ejecuta a nivel de navegador para procesar la petición HTTP, pero <strong>no coloca cookies de rastreo</strong> en el dispositivo del visitante. Los datos personales introducidos en el formulario (como nombre y correo electrónico) son procesados de forma temporal y exclusiva para poder dar respuesta a su solicitud.</p>
        </div>

        <div className="bloque-cookie relative w-full pt-8 border-t border-border-medium">
          <h2 className="font-semibold text-foreground mb-4" style={{ fontSize: "clamp(24px, 2.2vw, 32px)", letterSpacing: "-0.03em" }}>4. ¿Cómo gestionar o deshabilitar las cookies?</h2>
          <p className="mb-4">Aunque la cookie de seguridad que utilizamos es esencial para enviar mensajes a través de nuestro sitio, usted puede configurar su navegador en cualquier momento para bloquear o eliminar las cookies. Tenga en cuenta que si bloquea las cookies de Google reCAPTCHA, el formulario de contacto no funcionará correctamente por motivos de seguridad.</p>
          <p className="mb-4">Puede gestionar las cookies desde la configuración de su navegador web:</p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Microsoft Edge</a></li>
          </ul>
        </div>

        <div className="bloque-cookie relative w-full pt-8 border-t border-border-medium border-b pb-8">
          <h2 className="font-semibold text-foreground mb-4" style={{ fontSize: "clamp(24px, 2.2vw, 32px)", letterSpacing: "-0.03em" }}>5. Actualizaciones de esta política</h2>
          <p>Es posible que actualicemos esta Política de Cookies periódicamente para reflejar cambios en nuestra web o por exigencias legales y reglamentarias. Le recomendamos revisar esta página de forma regular. Si tiene alguna duda sobre cómo procesamos los datos o la seguridad del sitio, puede contactarnos a través de nuestro formulario.</p>
        </div>

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
