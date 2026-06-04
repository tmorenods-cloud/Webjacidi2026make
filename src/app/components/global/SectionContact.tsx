// ─── Section Contact ───────────────────────────────────────────────────────────

export function SectionContact() {
  return (
    <div className="seccion-contacto relative w-full" data-name="Section - Contact">
      <div className="contenedor-contacto flex flex-col gap-8 items-start p-20 w-full">
        <div className="encabezado-contacto flex items-center justify-start w-full">
          <p
            className="titulo-lets-talk font-medium text-[#20201f]"
            style={{ fontSize: "clamp(56px, 8vw, 120px)", letterSpacing: "-6px", lineHeight: "0.9", maxWidth: 691 }}
          >
            {"Let's Talk"}
          </p>
        </div>
        <div className="contenido-contacto flex items-start justify-between w-full gap-20 flex-wrap">
          <div className="info-contacto flex flex-col gap-20 items-start justify-center max-w-[614px]">
            <p
              className="descripcion-contacto font-normal text-[#20201f] leading-[1.1] mx-[0px] mt-[-16px] mb-[0px]"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-2.4px" }}
            >
              Tu idea merece algo mejor.<br />¡Contáctanos!
            </p>
            <p
              className="email-contacto font-semibold underline decoration-solid transition-colors duration-300 cursor-pointer"
              style={{ fontSize: "clamp(40px, 5vw, 80px)", letterSpacing: "-4.8px", lineHeight: "1", color: "#909090" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D55D26")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#909090")}
            >
              info@jacidi.com
            </p>
          </div>
          <div className="formulario-contacto flex flex-col gap-10 items-end max-w-[710px] flex-1 min-w-[280px]">
            <div className="campos-formulario flex flex-col gap-4 items-start w-full">
              <div className="fila-campos flex gap-4 items-start w-full flex-wrap">
                {["Nombre y apellido", "Correo electrónico"].map((label) => (
                  <div key={label} className="campo-input flex-1 min-w-[200px] relative">
                    <div className="borde-campo absolute border-b border-[rgba(32,32,31,0.2)] inset-0 pointer-events-none" />
                    <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                      <p className="label-campo font-normal text-[#404040] text-[20px] tracking-[-1px] leading-[0.9] whitespace-nowrap">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="fila-campos flex gap-4 items-start w-full flex-wrap">
                {["Número de teléfono", "Ciudad"].map((label) => (
                  <div key={label} className="campo-input flex-1 min-w-[200px] relative">
                    <div className="borde-campo absolute border-b border-[rgba(32,32,31,0.2)] inset-0 pointer-events-none" />
                    <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                      <p className="label-campo font-normal text-[#404040] text-[20px] tracking-[-1px] leading-[0.9] whitespace-nowrap">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
              {["Servicio requerido", "CV (Vacantes)"].map((label) => (
                <div key={label} className="campo-input relative w-full">
                  <div className="borde-campo absolute border-b border-[rgba(32,32,31,0.2)] inset-0 pointer-events-none" />
                  <div className="contenido-campo flex items-start pb-4 pl-[14px] pr-2 pt-5">
                    <p className="label-campo font-normal text-[#404040] text-[20px] tracking-[-1px] leading-[0.9] whitespace-nowrap">{label}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="boton-enviar bg-[#20201f] flex items-center justify-center pl-[14px] pr-2 py-4 rounded-[6px] w-[195px]">
              <p className="texto-boton-enviar font-normal text-white text-[20px] tracking-[-1px] leading-[0.9] whitespace-nowrap">Enviar</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
