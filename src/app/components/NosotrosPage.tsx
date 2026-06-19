const imgImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop";
const imgImage1 = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop";
const imgIntroductionImage = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop";
// ── Icon data from svg-tit1qnmguo.ts ──────────────────────────────────────────

const icons = {
  innovation: {
    path: "M21.0866 33.9988C19.8792 36.8942 17.5622 39.2114 14.6667 40.4188C11.7711 39.2114 9.45412 36.8942 8.24663 33.9988H12.3887C12.987 34.8946 13.7594 35.6714 14.6667 36.278C15.574 35.6714 16.3464 34.8946 16.9446 33.9988H21.0866ZM25.6667 24.4741L29.3333 28.6325V32.1655H0V28.6325L3.66667 24.4741V13.8321C3.66667 7.44616 8.2581 2.01342 14.6667 0C21.0753 2.01342 25.6667 7.44616 25.6667 13.8321V24.4741ZM24.3269 28.4988L22 25.8597V13.8321C22 9.58274 19.1202 5.70959 14.6667 3.89372C10.2131 5.70959 7.33333 9.58274 7.33333 13.8321V25.8597L5.00639 28.4988H24.3269ZM14.6667 17.4988C12.6416 17.4988 11 15.8571 11 13.8321C11 11.8071 12.6416 10.1654 14.6667 10.1654C16.6918 10.1654 18.3333 11.8071 18.3333 13.8321C18.3333 15.8571 16.6918 17.4988 14.6667 17.4988Z",
    viewBox: "0 0 29.3333 40.4188",
    top: "6.08%", right: "16.67%", bottom: "2.06%", left: "16.67%",
  },
  excellence: {
    path: "M3.49031 3.49032C7.93422 -0.953593 15.0147 -1.15398 19.6964 2.88917C24.375 -1.15398 31.4556 -0.953593 35.8994 3.49032C40.3353 7.92627 40.5428 14.9894 36.5222 19.6712L22.2876 33.9549C20.9207 35.3217 18.7432 35.3838 17.3028 34.1412L17.1022 33.9549L2.86749 19.6712C-1.15324 14.9894 -0.945637 7.92627 3.49031 3.49032ZM6.08303 6.08303C2.95325 9.21281 2.86384 14.2315 5.81478 17.4694L6.08303 17.7503L19.6949 31.362L29.4163 21.638L22.9357 15.1576L20.9913 17.1022C18.8433 19.2499 15.3609 19.2499 13.213 17.1022C11.0651 14.9542 11.0651 11.4718 13.213 9.32395L17.0652 5.46936C13.9253 2.95568 9.37463 3.07081 6.36401 5.81476L6.08303 6.08303ZM21.6393 11.2685C22.3553 10.5525 23.5161 10.5525 24.232 11.2685L32.009 19.0453L33.3067 17.7503C36.5284 14.5285 36.5284 9.30486 33.3067 6.08303C30.1768 2.95326 25.1581 2.86385 21.9204 5.81476L21.6393 6.08303L15.8057 11.9167C15.1409 12.5815 15.0934 13.6299 15.6633 14.3494L15.8057 14.5095C16.4706 15.1742 17.5189 15.2217 18.2385 14.6519L18.3986 14.5095L21.6393 11.2685Z",
    viewBox: "0 0 39.3896 35.0288",
    top: "10.69%", right: "5.24%", bottom: "9.7%", left: "5.24%",
  },
  commitment: {
    path: "M18.3333 16.5C23.3959 16.5 27.5 20.6041 27.5 25.6667V36.6667H23.8333V25.6667C23.8333 22.7376 21.5437 20.3432 18.6566 20.176L18.3333 20.1667C15.4042 20.1667 13.01 22.4563 12.8427 25.3435L12.8333 25.6667V36.6667H9.16667V25.6667C9.16667 20.6041 13.2707 16.5 18.3333 16.5ZM6.41667 22C6.92789 22 7.42517 22.0598 7.90185 22.1727C7.5937 23.089 7.40434 24.057 7.34976 25.0604L7.33333 25.6667L7.33462 25.8236C7.12721 25.7503 6.90839 25.701 6.68151 25.6793L6.41667 25.6667C4.98722 25.6667 3.81251 26.7573 3.67926 28.1517L3.66667 28.4167V36.6667H0V28.4167C0 24.8728 2.87283 22 6.41667 22ZM30.25 22C33.7938 22 36.6667 24.8728 36.6667 28.4167V36.6667H33V28.4167C33 26.9872 31.9094 25.8126 30.5149 25.6793L30.25 25.6667C29.9288 25.6667 29.6204 25.7217 29.3339 25.8229L29.3333 25.6667C29.3333 24.4462 29.1346 23.2723 28.7678 22.1753C29.2415 22.0598 29.7387 22 30.25 22ZM6.41667 11C8.94797 11 11 13.052 11 15.5833C11 18.1146 8.94797 20.1667 6.41667 20.1667C3.88537 20.1667 1.83333 18.1146 1.83333 15.5833C1.83333 13.052 3.88537 11 6.41667 11ZM30.25 11C32.7813 11 34.8333 13.052 34.8333 15.5833C34.8333 18.1146 32.7813 20.1667 30.25 20.1667C27.7187 20.1667 25.6667 18.1146 25.6667 15.5833C25.6667 13.052 27.7187 11 30.25 11ZM6.41667 14.6667C5.91041 14.6667 5.5 15.0772 5.5 15.5833C5.5 16.0895 5.91041 16.5 6.41667 16.5C6.92292 16.5 7.33333 16.0895 7.33333 15.5833C7.33333 15.0772 6.92292 14.6667 6.41667 14.6667ZM30.25 14.6667C29.7438 14.6667 29.3333 15.0772 29.3333 15.5833C29.3333 16.0895 29.7438 16.5 30.25 16.5C30.7562 16.5 31.1667 16.0895 31.1667 15.5833C31.1667 15.0772 30.7562 14.6667 30.25 14.6667ZM18.3333 0C22.3834 0 25.6667 3.28324 25.6667 7.33333C25.6667 11.3834 22.3834 14.6667 18.3333 14.6667C14.2832 14.6667 11 11.3834 11 7.33333C11 3.28324 14.2832 0 18.3333 0ZM18.3333 3.66667C16.3082 3.66667 14.6667 5.30829 14.6667 7.33333C14.6667 9.35838 16.3082 11 18.3333 11C20.3584 11 22 9.35838 22 7.33333C22 5.30829 20.3584 3.66667 18.3333 3.66667Z",
    viewBox: "0 0 36.6667 36.6667",
    top: "8.33%", right: "8.33%", bottom: "8.33%", left: "8.33%",
  },
};

const values = [
  {
    icon: icons.innovation,
    title: "Innovación Constante",
    description: "Transformamos desafíos complejos en oportunidades estratégicas mediante la creatividad",
  },
  {
    icon: icons.excellence,
    title: "Excelencia con Propósito",
    description: "Buscamos generar un impacto positivo y valor real en cada proyecto que tocamos",
  },
  {
    icon: icons.commitment,
    title: "Compromiso Humano",
    description: "Construimos relaciones duraderas basadas en la integridad, la honestidad y la confianza mutua",
  },
];

// ── Section 1: Intro ──────────────────────────────────────────────────────────

function NosotrosIntroSection() {
  return (
    <div className="seccion-intro-nosotros flex flex-col gap-[65px] items-start pt-[44px] w-full" style={{ paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)", paddingBottom: "clamp(40px, 6vw, 80px)" }}>
      <div className="encabezado-intro-nosotros flex flex-col gap-[52px] items-start w-full">
        <p
          className="titulo-intro-nosotros font-medium text-foreground"
          style={{ fontSize: "clamp(48px, 4.5vw, 72px)", letterSpacing: "-0.04em", lineHeight: "0.9" }}
        >
          Nuestra Esencia
        </p>
        <div className="contenedor-imagen-intro-nosotros relative w-full h-[565px]">
          <div className="fondo-imagen-intro absolute bg-[#909090] inset-0" />
          <img
            alt="Nuestra Esencia"
            className="imagen-intro-nosotros absolute max-w-none object-cover size-full"
            src={imgIntroductionImage}
          />
        </div>
      </div>
      <p
        className="descripcion-intro-nosotros font-normal text-foreground"
        style={{ fontSize: "clamp(22px, 2.5vw, 40px)", letterSpacing: "-0.0125em", lineHeight: "1.15", maxWidth: 960 }}
      >
        No somos solo una consultora digital; somos agentes de cambio. En Jacidi, creemos que el mundo puede ser mejor a través de Outstanding Ideas que transforman marcas en sus mejores versiones.
      </p>
    </div>
  );
}

// ── Section 2: Values ─────────────────────────────────────────────────────────

function NosotrosValuesSection() {
  return (
    <div className="seccion-valores-nosotros w-full" style={{ paddingTop: "clamp(20px, 3vw, 40px)", paddingBottom: "clamp(40px, 6vw, 80px)", paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)" }}>
      <div className="contenedor-valores flex flex-col lg:flex-row items-start py-8 w-full" style={{ gap: "clamp(32px, 6vw, 80px)" }}>
        {values.map((v, index) => (
          <div key={v.title} className={`tarjeta-valor tarjeta-valor-${index + 1} flex-1 min-w-px relative`}>
            <div className="borde-superior-valor absolute border-t border-[rgba(32,32,31,0.2)] inset-0 pointer-events-none" />
            <div className="contenido-valor flex flex-col items-start pb-6 pt-8 px-6 w-full" style={{ gap: "clamp(60px, 12vw, 160px)" }}>
              <div className="contenedor-icono-valor overflow-clip relative shrink-0 size-[44px]">
                <div
                  className="posicion-icono-valor absolute"
                  style={{ top: v.icon.top, right: v.icon.right, bottom: v.icon.bottom, left: v.icon.left }}
                >
                  <svg
                    className="icono-valor-svg absolute block inset-0 size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox={v.icon.viewBox}
                  >
                    <path d={v.icon.path} fill="#F26B2D" />
                  </svg>
                </div>
              </div>
              <div className="texto-valor flex flex-col gap-8 items-start w-full">
                <p className="titulo-valor font-semibold text-foreground text-[32px] tracking-[-0.03em]">{v.title}</p>
                <p className="descripcion-valor font-normal text-muted-foreground text-[22px] tracking-[-0.0125em] leading-[1.5]">{v.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section 3: About text + image ─────────────────────────────────────────────

function NosotrosAboutSection() {
  return (
    <div className="seccion-about-nosotros flex flex-col lg:flex-row items-start w-full" style={{ gap: "clamp(40px, 8vw, 100px)", paddingTop: "clamp(40px, 6vw, 80px)", paddingBottom: "clamp(40px, 6vw, 80px)", paddingLeft: "clamp(16px, 4.5vw, 80px)", paddingRight: "clamp(16px, 4.5vw, 80px)" }}>
      {/* Left — text */}
      <div className="columna-texto-nosotros flex-1 min-w-px flex flex-col justify-center pr-0 lg:pr-[88px]" style={{ paddingTop: "clamp(20px, 3vw, 40px)", paddingBottom: "clamp(20px, 3vw, 40px)" }}>
        <div className="contenido-texto-nosotros flex flex-col items-start" style={{ gap: "clamp(40px, 7vw, 94px)" }}>
          <p
            className="titulo-about-nosotros font-medium text-foreground"
            style={{ fontSize: "clamp(36px, 3.2vw, 52px)", letterSpacing: "-0.03em", lineHeight: "1" }}
          >
            Jacidi nació para
          </p>
          <div className="descripcion-about-nosotros flex flex-col gap-[63px] items-start w-full">
            <p className="texto-about-nosotros font-normal text-foreground text-[22px] tracking-[-0.0125em] leading-[1.5]">
              Con años de trayectoria impulsando marcas competitivas, en Jacidi no solo pensamos, ¡ejecutamos! Entendemos que el objetivo de cada marca es alcanzar la máxima rentabilidad, por lo que integramos nuestra experiencia técnica con una visión comercial para apoyar cualquier objetivo que te plantees.
            </p>
            <p
              className="cta-lets-talk-nosotros font-semibold text-foreground underline decoration-solid cursor-pointer"
              style={{ fontSize: 32, letterSpacing: "-0.03em" }}
            >
              Let's talk
            </p>
          </div>
        </div>
      </div>
      {/* Right — image */}
      <div className="columna-imagen-nosotros flex-1 min-w-px relative" style={{ height: 745 }}>
        <img alt="" className="imagen-about-nosotros-base absolute max-w-none object-cover size-full" src={imgImage} />
        <img alt="" className="imagen-about-nosotros-overlay absolute max-w-none object-cover size-full" src={imgImage1} />
      </div>
    </div>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────

export function NosotrosPage() {
  return (
    <>
      <NosotrosIntroSection />
      <NosotrosValuesSection />
      <NosotrosAboutSection />
    </>
  );
}
