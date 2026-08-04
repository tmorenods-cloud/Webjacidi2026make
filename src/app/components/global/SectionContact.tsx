import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { EmailLink } from "./EmailLink";
import ReCAPTCHA from "react-google-recaptcha";

// ─── EmailJS Config ────────────────────────────────────────────────────────────

const EMAILJS_SERVICE_ID = "smtp_web_jacidi_info";
const EMAILJS_TEMPLATE_INFO = "contacto_form";
const EMAILJS_TEMPLATE_VACANTE = "vacantes_form";
const EMAILJS_PUBLIC_KEY = "adFb-NTzLBahOzsa8";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Tab = "servicio" | "vacante";

const SERVICIOS = [
  "Diseño Gráfico",
  "Social Media",
  "Marketing 360",
  "Branding",
  "Página Web",
  "Asesoría",
  "Desarrollo de Aplicación Móvil",
  "iDempiere",
  "Otro",
];

// ─── Section Contact ───────────────────────────────────────────────────────────

export function SectionContact() {
  const [activeTab, setActiveTab] = useState<Tab>("servicio");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Form State - Servicio
  const [servicioData, setServicioData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    message: "",
  });

  // Form State - Vacante
  const [vacanteData, setVacanteData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    link: "",
  });

  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const tabStyle = (tab: Tab): React.CSSProperties => ({
    fontSize: "clamp(14px, 1.8vw, 18px)",
    letterSpacing: "-0.0125em",
    paddingBottom: "10px",
    color: activeTab === tab ? "var(--foreground)" : "var(--muted-text)",
    transition: "color 0.3s ease, border-color 0.3s ease",
    cursor: "pointer",
    fontWeight: 500,
    background: "none",
    border: "none",
    borderBottom: activeTab === tab ? "2px solid var(--foreground)" : "2px solid transparent",
  });

  const handleTabChange = (newTab: Tab) => {
    setActiveTab(newTab);
    setStatusMessage(null);
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      if (!captchaToken) {
        toast.error("Por favor completa el captcha ('No soy un robot').");
        setStatusMessage({ type: "error", text: "Por favor marca la casilla de verificación 'No soy un robot'." });
        setIsSubmitting(false);
        return;
      }

      if (activeTab === "servicio") {
        if (!servicioData.name || !servicioData.email) {
          toast.error("Por favor completa los campos obligatorios (Nombre y Correo).");
          setStatusMessage({ type: "error", text: "Por favor completa Nombre y Correo electrónico." });
          setIsSubmitting(false);
          return;
        }

          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_INFO,
            {
              name: servicioData.name,
              email: servicioData.email,
              phone: servicioData.phone || "No especificado",
              city: servicioData.city || "No especificada",
              service: servicioData.service || "No especificado",
              message: servicioData.message || "Sin mensaje adicional",
              "g-recaptcha-response": captchaToken,
            },
            EMAILJS_PUBLIC_KEY
          );

          setServicioData({ name: "", email: "", phone: "", city: "", service: "", message: "" });
      } else {
        if (!vacanteData.name || !vacanteData.email) {
          toast.error("Por favor completa los campos obligatorios (Nombre y Correo).");
          setStatusMessage({ type: "error", text: "Por favor completa Nombre y Correo electrónico." });
          setIsSubmitting(false);
          return;
        }

          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_VACANTE,
            {
              name: vacanteData.name,
              phone: vacanteData.phone || "No especificado",
              email: vacanteData.email,
              city: vacanteData.city || "No especificada",
              link: vacanteData.link || "No proporcionado",
              file_name: fileName ? fileName : "No adjuntó archivo",
              "g-recaptcha-response": captchaToken,
            },
            EMAILJS_PUBLIC_KEY
          );

          setVacanteData({ name: "", phone: "", email: "", city: "", link: "" });
        setFileName(null);
        if (fileRef.current) fileRef.current.value = "";
      }

      toast.success("¡Mensaje enviado con éxito! Te contactaremos pronto.");
      setStatusMessage({ type: "success", text: "¡Mensaje enviado con éxito! Te contactaremos pronto." });
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast.error("Error al enviar el mensaje. Inténtalo de nuevo más tarde.");
      setStatusMessage({ type: "error", text: "Ocurrió un error al enviar tu mensaje. Por favor intenta más tarde." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contacto" className="seccion-contacto relative w-full" data-name="Section - Contact">
      <div
        className="contenedor-contacto flex flex-col gap-8 items-start w-full pt-0 md:pt-[clamp(40px,6vw,80px)]"
        style={{ paddingBottom: "clamp(40px, 6vw, 80px)", paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)" }}
      >
        {/* Título */}
        <p
          className="titulo-lets-talk font-medium text-foreground"
          style={{ fontSize: "clamp(40px, 8vw, 120px)", letterSpacing: "-0.04em", lineHeight: "0.9" }}
        >
          {"Let's Talk"}
        </p>

        {/* Contenido: info izquierda + formulario */}
        <div className="contenido-contacto flex items-start justify-between w-full gap-16 flex-wrap">

          {/* Columna izquierda: descripción + email */}
          <div className="info-contacto flex flex-col gap-12 items-start justify-center" style={{ maxWidth: 614 }}>
            <p
              className="descripcion-contacto font-normal text-foreground leading-[1.1]"
              style={{ fontSize: "clamp(18px, 3vw, 40px)", letterSpacing: "-0.0125em" }}
            >
              Tu idea merece algo mejor.<br />¡Contáctanos!
            </p>
            <EmailLink
              className="email-contacto font-semibold underline decoration-solid transition-colors duration-300 cursor-pointer text-muted-text hover:text-accent-orange-hover"
              style={{ fontSize: "clamp(22px, 4vw, 64px)", letterSpacing: "-0.04em", lineHeight: "1" }}
            />
          </div>

          {/* Formulario: alineado izquierda */}
          <form onSubmit={handleSubmit} className="formulario-contacto flex flex-col gap-8 items-start flex-1 min-w-[280px]" style={{ maxWidth: 710 }}>

            {/* Tabs */}
            <div className="tabs-contacto flex gap-8 items-end border-b border-border-light w-full">
              <button type="button" style={tabStyle("servicio")} onClick={() => handleTabChange("servicio")}>
                Solicitar Servicio
              </button>
              <button type="button" style={tabStyle("vacante")} onClick={() => handleTabChange("vacante")}>
                Vacantes
              </button>
            </div>

            {/* Contenido del tab */}
            <div className="tab-content w-full">
              {activeTab === "servicio" ? (
                <div className="flex flex-col gap-4 w-full">
                  {/* Fila 1 */}
                  <div className="fila-campos flex gap-4 items-start w-full flex-wrap">
                    <div className="campo-input flex-1 min-w-[180px] relative">
                      <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
                      <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                        <input
                          type="text"
                          required
                          placeholder="Nombre y apellido *"
                          value={servicioData.name}
                          onChange={(e) => setServicioData({ ...servicioData, name: e.target.value })}
                          className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[0.9] outline-none"
                          style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                        />
                      </div>
                    </div>

                    <div className="campo-input flex-1 min-w-[180px] relative">
                      <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
                      <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                        <input
                          type="email"
                          required
                          placeholder="Correo electrónico *"
                          value={servicioData.email}
                          onChange={(e) => setServicioData({ ...servicioData, email: e.target.value })}
                          className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[0.9] outline-none"
                          style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Fila 2 */}
                  <div className="fila-campos flex gap-4 items-start w-full flex-wrap">
                    <div className="campo-input flex-1 min-w-[180px] relative">
                      <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
                      <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                        <input
                          type="tel"
                          placeholder="Número de teléfono"
                          value={servicioData.phone}
                          onChange={(e) => setServicioData({ ...servicioData, phone: e.target.value })}
                          className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[0.9] outline-none"
                          style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                        />
                      </div>
                    </div>

                    <div className="campo-input flex-1 min-w-[180px] relative">
                      <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
                      <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                        <input
                          type="text"
                          placeholder="Ciudad"
                          value={servicioData.city}
                          onChange={(e) => setServicioData({ ...servicioData, city: e.target.value })}
                          className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[0.9] outline-none"
                          style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Select Servicio */}
                  <div className="campo-input relative w-full">
                    <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
                    <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                      <select
                        className="w-full bg-transparent font-normal text-foreground dark:text-foreground tracking-[-0.0125em] leading-[0.9] outline-none appearance-none cursor-pointer"
                        style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                        value={servicioData.service}
                        onChange={(e) => setServicioData({ ...servicioData, service: e.target.value })}
                      >
                        <option value="" disabled className="bg-background text-muted-text">Servicio requerido</option>
                        {SERVICIOS.map((s) => (
                          <option key={s} value={s} className="bg-background text-foreground">{s}</option>
                        ))}
                      </select>
                      <svg className="shrink-0 ml-2 mt-1 pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" className="text-muted-text" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="campo-input relative w-full">
                    <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
                    <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                      <textarea
                        placeholder="Mensaje"
                        rows={3}
                        value={servicioData.message}
                        onChange={(e) => setServicioData({ ...servicioData, message: e.target.value })}
                        className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[1.4] outline-none resize-none"
                        style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4 w-full">
                  {/* Fila 1 */}
                  <div className="fila-campos flex gap-4 items-start w-full flex-wrap">
                    <div className="campo-input flex-1 min-w-[180px] relative">
                      <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
                      <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                        <input
                          type="text"
                          required
                          placeholder="Nombre y apellido *"
                          value={vacanteData.name}
                          onChange={(e) => setVacanteData({ ...vacanteData, name: e.target.value })}
                          className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[0.9] outline-none"
                          style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                        />
                      </div>
                    </div>

                    <div className="campo-input flex-1 min-w-[180px] relative">
                      <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
                      <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                        <input
                          type="tel"
                          placeholder="Teléfono"
                          value={vacanteData.phone}
                          onChange={(e) => setVacanteData({ ...vacanteData, phone: e.target.value })}
                          className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[0.9] outline-none"
                          style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Fila 2 */}
                  <div className="fila-campos flex gap-4 items-start w-full flex-wrap">
                    <div className="campo-input flex-1 min-w-[180px] relative">
                      <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
                      <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                        <input
                          type="email"
                          required
                          placeholder="Correo electrónico *"
                          value={vacanteData.email}
                          onChange={(e) => setVacanteData({ ...vacanteData, email: e.target.value })}
                          className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[0.9] outline-none"
                          style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                        />
                      </div>
                    </div>

                    <div className="campo-input flex-1 min-w-[180px] relative">
                      <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
                      <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                        <input
                          type="text"
                          placeholder="Ciudad"
                          value={vacanteData.city}
                          onChange={(e) => setVacanteData({ ...vacanteData, city: e.target.value })}
                          className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[0.9] outline-none"
                          style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Campo CV / Portafolio */}
                  <div className="campo-cv flex flex-col gap-3 w-full">
                    <p className="font-normal text-muted-text tracking-[-0.0125em]" style={{ fontSize: "clamp(12px, 1.5vw, 14px)" }}>
                      CV / Portafolio
                    </p>

                    {/* Zona adjuntar archivo */}
                    <div
                      className="zona-archivo border border-dashed border-border-medium rounded-[8px] px-4 py-4 flex items-center gap-3 cursor-pointer hover:border-foreground transition-colors duration-300"
                      onClick={() => fileRef.current?.click()}
                    >
                      <input
                        ref={fileRef}
                        type="file"
                        accept=".pdf,.doc,.docx,.png,.jpg,.zip"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setFileName(file.name);
                          }
                        }}
                      />
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 13V4M10 4L7 7M10 4L13 7" stroke="currentColor" className="text-muted-text" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 14v1a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <p className="font-normal text-muted-text tracking-[-0.0125em] truncate" style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}>
                        {fileName ?? "Adjuntar archivo (.pdf, .doc, .png…)"}
                      </p>
                    </div>

                    {/* Preview nombre archivo */}
                    {fileName && (
                      <div className="preview-archivo flex items-center gap-2 px-3 py-2 bg-surface-light rounded-[6px]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-foreground">
                          <rect x="2" y="1" width="10" height="13" rx="1" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M5 5h5M5 8h5M5 11h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                        <p className="font-normal text-foreground tracking-[-0.0125em] truncate text-[13px]">{fileName}</p>
                        <button
                          type="button"
                          className="ml-auto text-muted-text hover:text-foreground transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFileName(null);
                            if (fileRef.current) fileRef.current.value = "";
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    )}

                    {/* Campo enlace */}
                    <div className="campo-input relative w-full">
                      <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
                      <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                        <input
                          type="url"
                          placeholder="Enlace a portafolio o LinkedIn"
                          value={vacanteData.link}
                          onChange={(e) => setVacanteData({ ...vacanteData, link: e.target.value })}
                          className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[0.9] outline-none"
                          style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mensaje de estado */}
            {statusMessage && (
              <p
                className={`text-sm font-medium ${
                  statusMessage.type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {statusMessage.text}
              </p>
            )}

            {/* Widget reCAPTCHA v2 */}
            <div className="my-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdLaXUtAAAAAM7T1nCEI8ZLdBHeQF6A9EHA7cYo"
                onChange={(token) => setCaptchaToken(token)}
                onExpired={() => setCaptchaToken(null)}
              />
            </div>

            {/* CTA lineal */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="boton-enviar-cta group flex items-center gap-3 font-semibold text-foreground underline decoration-solid underline-offset-4 transition-colors duration-300 hover:text-accent-orange-hover cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontSize: "clamp(15px, 2.2vw, 24px)", letterSpacing: "-0.0125em" }}
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              <svg
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                width="18" height="18" viewBox="0 0 18 18" fill="none"
              >
                <path d="M4 14L14 4M14 4H7M14 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

