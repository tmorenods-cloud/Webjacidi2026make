import { useState, useRef } from "react";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Tab = "servicio" | "vacante";

// ─── Campo base ───────────────────────────────────────────────────────────────

function Campo({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div className="campo-input relative w-full">
      <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
      <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
        <input
          type={type}
          placeholder={label}
          className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[0.9] outline-none"
          style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
        />
      </div>
    </div>
  );
}

function CampoFila({ labels }: { labels: [string, string] }) {
  return (
    <div className="fila-campos flex gap-4 items-start w-full flex-wrap">
      {labels.map((label) => (
        <div key={label} className="campo-input flex-1 min-w-[180px] relative">
          <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
          <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
            <input
              type="text"
              placeholder={label}
              className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[0.9] outline-none"
              style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Campo CV / Portafolio ─────────────────────────────────────────────────────

function CampoCV() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [linkValue, setLinkValue] = useState("");

  return (
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
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 13V4M10 4L7 7M10 4L13 7" stroke="currentColor" className="text-muted-text" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 14v1a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="currentColor" className="text-muted-text" strokeWidth="1.5" strokeLinecap="round" />
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
            className="ml-auto text-muted-text hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setFileName(null); if (fileRef.current) fileRef.current.value = ""; }}
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
            value={linkValue}
            onChange={(e) => setLinkValue(e.target.value)}
            className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[0.9] outline-none"
            style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
          />
        </div>
      </div>

      {/* Preview enlace */}
      {linkValue && (
        <div className="preview-link flex items-center gap-2 px-3 py-2 bg-surface-light rounded-[6px]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-foreground">
            <path d="M6 8a3 3 0 004.243 0l1.414-1.414a3 3 0 00-4.243-4.243L6.586 3.76" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M8 6a3 3 0 00-4.243 0L2.343 7.414a3 3 0 004.243 4.243L7.414 10.24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <a href={linkValue} target="_blank" rel="noopener noreferrer" className="text-foreground text-[13px] underline truncate tracking-[-0.0125em]">
            {linkValue}
          </a>
        </div>
      )}
    </div>
  );
}

// ─── Desplegable servicios ────────────────────────────────────────────────────

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

function SelectServicio() {
  return (
    <div className="campo-input relative w-full">
      <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
      <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
        <select
          className="w-full bg-transparent font-normal text-foreground dark:text-foreground tracking-[-0.0125em] leading-[0.9] outline-none appearance-none cursor-pointer"
          style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
          defaultValue=""
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
  );
}

// ─── Tab Servicio ─────────────────────────────────────────────────────────────

function TabServicio() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <CampoFila labels={["Nombre y apellido", "Correo electrónico"]} />
      <CampoFila labels={["Número de teléfono", "Ciudad"]} />
      <SelectServicio />
      <div className="campo-input relative w-full">
        <div className="borde-campo absolute border-b border-border-medium inset-0 pointer-events-none" />
        <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
          <textarea
            placeholder="Mensaje"
            rows={3}
            className="w-full bg-transparent font-normal text-foreground placeholder:text-muted-text tracking-[-0.0125em] leading-[1.4] outline-none resize-none"
            style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Tab Vacante ──────────────────────────────────────────────────────────────

function TabVacante() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <CampoFila labels={["Nombre y apellido", "Teléfono"]} />
      <CampoFila labels={["Correo electrónico", "Ciudad"]} />
      <CampoCV />
    </div>
  );
}

// ─── Botón CTA lineal ─────────────────────────────────────────────────────────

function BotonEnviar() {
  return (
    <button
      className="boton-enviar-cta group flex items-center gap-3 font-semibold text-foreground underline decoration-solid underline-offset-4 transition-colors duration-300 hover:text-accent-orange-hover cursor-pointer"
      style={{ fontSize: "clamp(15px, 2.2vw, 24px)", letterSpacing: "-0.0125em" }}
    >
      Enviar mensaje
      <svg
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        width="18" height="18" viewBox="0 0 18 18" fill="none"
      >
        <path d="M4 14L14 4M14 4H7M14 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

// ─── Section Contact ───────────────────────────────────────────────────────────

export function SectionContact() {
  const [activeTab, setActiveTab] = useState<Tab>("servicio");

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
            <p
              className="email-contacto font-semibold underline decoration-solid transition-colors duration-300 cursor-pointer text-muted-text hover:text-accent-orange-hover"
              style={{ fontSize: "clamp(22px, 4vw, 64px)", letterSpacing: "-0.04em", lineHeight: "1" }}
            >
              info@jacidi.com
            </p>
          </div>

          {/* Formulario: alineado izquierda */}
          <div className="formulario-contacto flex flex-col gap-8 items-start flex-1 min-w-[280px]" style={{ maxWidth: 710 }}>

            {/* Tabs */}
            <div className="tabs-contacto flex gap-8 items-end border-b border-border-light w-full">
              <button style={tabStyle("servicio")} onClick={() => setActiveTab("servicio")}>
                Solicitar Servicio
              </button>
              <button style={tabStyle("vacante")} onClick={() => setActiveTab("vacante")}>
                Vacantes
              </button>
            </div>

            {/* Contenido del tab */}
            <div className="tab-content w-full">
              {activeTab === "servicio" ? <TabServicio /> : <TabVacante />}
            </div>

            {/* CTA lineal */}
            <BotonEnviar />
          </div>
        </div>
      </div>
    </div>
  );
}
