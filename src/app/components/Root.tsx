import { useState, useEffect } from "react";
import { Outlet, Link, ScrollRestoration, useNavigate, useLocation } from "react-router";
import { SectionContact } from "./global/SectionContact";
import { Footer } from "./global/Footer";

// ─── Logo corporativo (wordmark) ──────────────────────────────────────────────
function LogoCorporativo({ height = 44, orange = false }: { height?: number; orange?: boolean }) {
  const w = Math.round(height * (429 / 158));
  const orangeColor = "#f26b2d";
  return (
    <svg width={w} height={height} viewBox="0 0 429 158" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M239.656 24.6646V76.4443H225.776V69.8438C223.992 72.3252 221.47 74.2996 218.209 75.7668C214.947 77.2341 211.382 77.9677 207.515 77.9677C202.698 77.9677 198.422 76.8475 194.687 74.6113C190.952 72.3751 188.04 69.2162 185.955 65.1345C183.869 61.0549 182.825 56.306 182.825 50.8922C182.825 45.364 183.907 40.4864 186.068 36.255C188.229 32.0237 191.291 28.7525 195.255 26.4415C199.219 24.1284 203.721 22.9729 208.766 22.9729C212.635 22.9729 216.086 23.6213 219.121 24.9181C222.154 26.215 224.619 28.1062 226.516 30.5876L227.654 24.6646H239.656ZM221.252 60.9052C223.812 58.2534 225.092 54.7286 225.092 50.329C225.092 45.9293 223.83 42.4046 221.309 39.7527C218.785 37.1009 215.459 35.777 211.325 35.777C207.116 35.777 203.777 37.1217 201.312 39.8109C198.848 42.5002 197.615 46.0062 197.615 50.3311C197.615 54.6559 198.875 58.1619 201.398 60.8512C203.92 63.5405 207.192 64.8851 211.212 64.8851C215.346 64.8809 218.693 63.5571 221.252 60.9052Z" fill={orange ? orangeColor : "#D55D26"}/>
      <path d="M253.735 36.0306C256.068 31.8761 259.349 28.6611 263.576 26.3854C267.804 24.1118 272.669 22.9729 278.169 22.9729C285.564 22.9729 291.67 24.8994 296.487 28.7546C301.303 32.6098 304.014 37.7701 304.621 44.2376H289.832C289.148 41.4548 287.754 39.3308 285.65 37.8636C283.546 36.3963 280.976 35.6648 277.941 35.6648C274.071 35.6648 270.952 37.0094 268.582 39.6987C266.211 42.388 265.027 46.0083 265.027 50.5576C265.027 55.0321 266.192 58.615 268.525 61.3022C270.858 63.9914 273.996 65.336 277.941 65.336C281.049 65.336 283.678 64.5463 285.82 62.9668C287.962 61.3874 289.299 59.3382 289.832 56.8194H304.621C303.938 63.1373 301.169 68.2414 296.315 72.134C291.46 76.0266 285.411 77.9718 278.167 77.9718C272.667 77.9718 267.804 76.835 263.574 74.5593C259.344 72.2857 256.064 69.0707 253.733 64.9142C251.4 60.7597 250.235 55.9361 250.235 50.4454C250.237 44.9899 251.404 40.185 253.735 36.0306Z" fill={orange ? orangeColor : "#D55D26"}/>
      <path d="M315.43 24.6641H329.88V76.4438H315.43V24.6641Z" fill={orange ? orangeColor : "#D55D26"}/>
      <path d="M397.407 4.68604V76.4461H385.403L384.493 69.5089C382.709 72.0672 380.188 74.1164 376.926 75.6564C373.665 77.1984 370.081 77.9695 366.173 77.9695C361.204 77.9695 356.777 76.8327 352.891 74.557C349.002 72.2834 345.978 69.0496 343.817 64.8557C341.656 60.6638 340.574 55.8589 340.574 50.4451C340.574 45.0686 341.656 40.2824 343.817 36.0906C345.978 31.8987 349.002 28.6649 352.891 26.3893C356.777 24.1156 361.206 22.9768 366.173 22.9768C369.814 22.9768 373.095 23.5317 376.014 24.6414C378.934 25.7512 381.286 27.3411 383.07 29.4069V4.68604H397.407ZM379.003 60.9049C381.563 58.2531 382.843 54.7283 382.843 50.3287C382.843 45.929 381.582 42.4043 379.06 39.7524C376.536 37.1006 373.21 35.7767 369.076 35.7767C364.868 35.7767 361.529 37.1214 359.064 39.8106C356.599 42.4999 355.366 46.0059 355.366 50.3308C355.366 54.6556 356.626 58.1616 359.15 60.8509C361.671 63.5402 364.943 64.8848 368.963 64.8848C373.097 64.8806 376.444 63.5568 379.003 60.9049Z" fill={orange ? orangeColor : "#D55D26"}/>
      <path d="M410.55 24.6641H425V76.4438H410.55V24.6641Z" fill={orange ? orangeColor : "#D55D26"}/>
      <path d="M145.907 92.1889V79.0128H151.722C154.807 79.0128 157.061 76.5417 157.061 72.6595V24.6643H172.129V74.4261C172.129 84.4245 163.586 92.1889 153.621 92.1889C150.416 92.1889 145.907 92.1889 145.907 92.1889Z" fill={orange ? orangeColor : "#D55D26"}/>
      <path d="M100.735 64.492L88.1588 55.1648C82.8369 51.3948 77.8021 47.2072 73.1803 42.6786C71.0088 40.5484 68.896 38.3205 66.8753 36.0137C66.2067 36.899 65.7602 37.4913 65.6764 37.6015C63.2575 40.8061 60.671 43.909 57.9566 46.8996C57.879 46.9952 57.8287 47.0554 57.8162 47.07C61.0483 50.6238 64.5382 54.0301 68.1351 57.2243C70.9815 59.7245 74.0774 61.9171 77.0496 64.3382L78.8627 65.8242C83.56 69.3468 88.4606 72.8695 92.1036 75.6294C97.7503 79.5739 98.3414 87.9763 93.4723 92.6524C90.3009 95.7968 85.6875 96.7777 81.4346 95.2107C79.3616 94.448 77.5254 93.0057 76.1253 91.0417L69.2984 81.4714L60.2497 93.1034C65.3997 100.539 69.2607 106.336 78.3429 108.979C95.1974 113.896 112.243 100.373 110.884 82.9137C110.356 75.5982 106.657 68.8854 100.735 64.492Z" fill={orange ? orangeColor : "#D55D26"}/>
      <path d="M57.7519 66.9071C54.4799 63.3096 50.9774 59.8763 47.3345 56.6509C44.27 53.9907 37.2901 48.5997 36.6299 48.0905C31.9682 44.597 27.1158 41.1076 23.5022 38.3705C17.8554 34.426 17.2644 26.0236 22.1335 21.3476C26.923 16.4159 35.5902 17.1495 39.4826 22.9582L46.6092 32.142C46.6092 32.142 54.7021 22.2121 55.0689 21.2852L55.3582 20.8966C50.2082 13.4606 46.3472 7.66432 37.265 5.02078C20.4105 0.103624 3.36536 13.6268 4.72361 31.0863C5.25181 38.3996 8.95136 45.1145 14.8727 49.5058L27.4491 58.833C32.771 62.603 37.8058 66.7907 42.4276 71.3192C44.5886 73.439 46.691 75.6565 48.7011 77.9509C49.3781 77.0552 49.8309 76.4546 49.9168 76.3423C52.3734 73.0857 54.9956 69.9372 57.7519 66.9071Z" fill={orange ? orangeColor : "#D55D26"}/>
      <path d="M84.2645 4.08369C69.374 5.29115 64.8654 15.7572 56.7306 26.0176C50.7799 34.314 44.2339 41.4985 36.5728 48.0471L36.6294 48.0907C37.2896 48.5999 44.2695 53.9909 47.3339 56.6511C47.4786 56.7758 47.6169 56.8984 47.7427 57.0106C51.3186 53.8371 54.7309 50.4496 57.9568 46.8999C60.6712 43.9114 63.2577 40.8065 65.6766 37.6018C65.7604 37.4916 66.2069 36.8993 66.8755 36.014C69.6843 32.2918 76.4441 23.3304 77.0268 22.5594C81.2461 17.0312 89.012 16.5657 94.1076 21.3685C99.0249 26.107 98.2829 34.607 92.6194 38.4372L82.4744 45.5511C82.4744 45.5511 93.6108 53.9161 93.942 54.153L94.334 54.4336C101.888 49.2712 107.86 45.4617 110.553 36.3507C115.569 19.6602 101.727 2.66839 84.2645 4.08369Z" fill={orange ? orangeColor : "#002E82"}/>
      <path d="M78.8658 65.8241L77.0527 64.3381C74.0784 61.9191 70.9846 59.7244 68.1381 57.2243C68.0333 57.1328 67.9264 57.0414 67.8216 56.95C64.2939 60.0798 60.9339 63.4133 57.7542 66.9089C54.5535 70.442 51.5541 74.1392 48.7516 78.0089L48.7013 77.9528C45.8842 81.6874 39.1475 90.6177 38.5669 91.3866C34.3475 96.9148 26.5816 97.3803 21.486 92.5775C16.5687 87.8391 17.3107 79.339 22.9742 75.5088L33.1192 68.3949C30.1616 65.8615 22.1212 60.1401 21.2597 59.5124C13.7055 64.6748 7.73377 68.4843 5.04033 77.5953C0.0223539 94.2858 13.8669 111.278 31.3271 109.862C46.2175 108.655 50.7261 98.1888 58.8609 87.9284C64.8117 79.632 71.3241 72.4724 78.9852 65.9239L78.8658 65.8241Z" fill={orange ? orangeColor : "#002E82"}/>
    </svg>
  );
}

// ─── Isotipo corporativo ──────────────────────────────────────────────────────
function IsotipoCorporativo({ size = 40, orange = false }: { size?: number; orange?: boolean }) {
  const fillOrange = orange ? "#f26b2d" : "#D55D26";
  const fillBlue = orange ? "#f26b2d" : "#002E82";
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.5693 22.4031L29.5951 19.4114C27.9133 18.2021 26.3223 16.8589 24.8618 15.4064C24.1756 14.7231 23.5079 14.0085 22.8694 13.2686C22.6581 13.5525 22.517 13.7425 22.4905 13.7778C21.7261 14.8058 20.9087 15.801 20.051 16.7603C20.0265 16.7909 20.0106 16.8103 20.0066 16.8149C21.028 17.9548 22.1308 19.0474 23.2674 20.072C24.1669 20.8739 25.1453 21.5772 26.0845 22.3538L26.6575 22.8304C28.1418 23.9603 29.6905 25.0903 30.8417 25.9755C32.6261 27.2407 32.8129 29.9359 31.2742 31.4357C30.272 32.4443 28.8142 32.759 27.4702 32.2563C26.8151 32.0117 26.2349 31.5491 25.7924 30.9191L23.6351 27.8494L20.7756 31.5804C22.4031 33.9655 23.6231 35.8247 26.4932 36.6726C31.8193 38.2498 37.2057 33.9122 36.7765 28.312C36.6096 25.9655 35.4405 23.8124 33.5693 22.4031Z" fill={fillOrange}/>
      <path d="M19.986 23.1778C18.952 22.0239 17.8452 20.9226 16.694 19.8881C15.7256 19.0348 13.5199 17.3056 13.3113 17.1423C11.8382 16.0217 10.3048 14.9025 9.16284 14.0245C7.37841 12.7593 7.19162 10.0642 8.73031 8.56432C10.2438 6.98245 12.9827 7.21777 14.2128 9.08095L16.4648 12.0267C16.4648 12.0267 19.0222 8.84163 19.1382 8.54432L19.2296 8.41967C17.6021 6.03453 16.382 4.17535 13.512 3.32742C8.18584 1.75022 2.79944 6.08786 3.22865 11.6881C3.39557 14.0339 4.56466 16.1877 6.43586 17.5962L10.4101 20.588C12.0918 21.7972 13.6829 23.1405 15.1434 24.593C15.8263 25.2729 16.4907 25.9842 17.1259 26.7202C17.3398 26.4329 17.4829 26.2402 17.5101 26.2042C18.2864 25.1596 19.115 24.1497 19.986 23.1778Z" fill={fillOrange}/>
      <path d="M28.3639 3.02702C23.6584 3.41432 22.2337 6.77138 19.663 10.0624C17.7825 12.7236 15.7139 15.028 13.293 17.1285L13.3109 17.1425C13.5195 17.3058 15.7252 19.035 16.6936 19.8883C16.7393 19.9283 16.783 19.9676 16.8227 20.0036C17.9528 18.9857 19.0311 17.8991 20.0505 16.7606C20.9083 15.802 21.7256 14.806 22.49 13.7781C22.5165 13.7428 22.6576 13.5528 22.8689 13.2688C23.7565 12.0749 25.8926 9.20051 26.0767 8.9532C27.4101 7.18001 29.8642 7.03069 31.4744 8.57123C33.0283 10.0911 32.7939 12.8175 31.0041 14.0461L27.7983 16.3279C27.7983 16.3279 31.3174 19.011 31.4221 19.087L31.5459 19.177C33.9331 17.5212 35.8202 16.2993 36.6714 13.3768C38.2564 8.02327 33.8821 2.57306 28.3639 3.02702Z" fill={fillBlue}/>
      <path d="M26.6582 22.8306L26.0852 22.3539C25.1453 21.578 24.1676 20.8741 23.2681 20.0721C23.235 20.0428 23.2012 20.0135 23.1681 19.9841C22.0533 20.988 20.9916 22.0573 19.9867 23.1785C18.9753 24.3118 18.0274 25.4977 17.1419 26.7389L17.126 26.7209C16.2357 27.9188 14.1069 30.7832 13.9234 31.0299C12.59 32.8031 10.1359 32.9524 8.52572 31.4119C6.9718 29.892 7.20628 27.1655 8.99601 25.937L12.2019 23.6552C11.2673 22.8426 8.72642 21.0074 8.45419 20.8061C6.067 22.4619 4.1799 23.6838 3.32875 26.6063C1.74303 31.9598 6.118 37.41 11.6356 36.9561C16.341 36.5688 17.7658 33.2117 20.3365 29.9206C22.2169 27.2595 24.2749 24.9631 26.6959 22.8626L26.6582 22.8306Z" fill={fillBlue}/>
    </svg>
  );
}

// ─── Anchor scroll helper ──────────────────────────────────────────────────────

function useAnchorNav() {
  const navigate = useNavigate();
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    navigate("/");
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 120);
  };
  return scrollTo;
}

// ─── Static Header (desktop only) ─────────────────────────────────────────────

function StaticHeader({ visible, isDark }: { visible: boolean; isDark: boolean }) {
  const scrollTo = useAnchorNav();
  return (
    <div
      className="header-estatico bg-background relative shrink-0 w-full hidden md:block"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-20px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="contenedor-header-estatico flex flex-row items-center size-full">
        <div className="contenido-header-estatico flex items-center justify-between pb-8 pt-7 px-20 w-full">
          <Link to="/" className="logo-header-estatico shrink-0">
            <LogoCorporativo height={44} orange={isDark} />
          </Link>
          <div className="nav-header-estatico flex gap-6 items-center">
            <Link to="/" className="nav-link-inicio font-medium text-foreground text-[18px] tracking-[-0.54px]">Inicio</Link>
            <span onClick={() => scrollTo("servicios")} className="nav-link-servicios font-medium text-foreground text-[18px] tracking-[-0.54px] cursor-pointer">Servicios</span>
            <Link to="/nosotros" className="nav-link-nosotros font-medium text-foreground text-[18px] tracking-[-0.54px]">Nosotros</Link>
            <Link to="/proyectos" className="nav-link-proyectos font-medium text-foreground text-[18px] tracking-[-0.54px]">Proyectos</Link>
            <button onClick={() => scrollTo("contacto")} className="boton-contacto-header bg-[#20201f] dark:bg-[#f5f5f4] flex items-center justify-center px-4 py-[10px] rounded-[29px] cursor-pointer">
              <span className="texto-boton-contacto font-medium text-white dark:text-[#161615] text-[18px] tracking-[-0.54px]">Contacto</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sticky Header Pill (desktop only) ────────────────────────────────────────

function StickyHeaderPill({ visible, isDark }: { visible: boolean; isDark: boolean }) {
  const scrollTo = useAnchorNav();
  return (
    <div
      className="header-sticky-pill fixed top-6 left-1/2 z-50 hidden md:flex items-center justify-between pl-[18px] pr-3 py-[10px] rounded-[64px]"
      style={{
        width: 524,
        backdropFilter: "blur(16px) saturate(1.5) contrast(1.25)",
        WebkitBackdropFilter: "blur(16px) saturate(1.5) contrast(1.25)",
        backgroundColor: isDark ? "rgba(22, 22, 21, 0.55)" : "rgba(255, 255, 255, 0.55)",
        border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(32,32,31,0.2)",
        transform: `translateX(-50%) translateY(${visible ? "0" : "-120%"})`,
        opacity: visible ? 1 : 0,
        transition: "transform 0.5s cubic-bezier(0.76,0,0.24,1), opacity 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <Link to="/" className="logo-sticky-pill shrink-0">
        <IsotipoCorporativo size={36} orange={isDark} />
      </Link>
      <div className="nav-sticky-container flex gap-5 items-center">
        <div className="nav-sticky-links flex gap-[11px] items-center font-medium text-foreground text-[14px] tracking-[-0.42px]">
          <Link to="/" className="nav-link-sticky-inicio cursor-pointer">Inicio</Link>
          <span onClick={() => scrollTo("servicios")} className="nav-link-sticky-servicios cursor-pointer">Servicios</span>
          <Link to="/nosotros" className="nav-link-sticky-nosotros cursor-pointer">Nosotros</Link>
          <Link to="/proyectos" className="nav-link-sticky-proyectos cursor-pointer">Proyectos</Link>
        </div>
        <button onClick={() => scrollTo("contacto")} className="boton-sticky-contacto bg-[#20201f] dark:bg-[#f5f5f4] flex items-center justify-center px-4 py-2 rounded-[29px] cursor-pointer">
          <span className="texto-boton-sticky font-medium text-white dark:text-[#161615] text-[14px] tracking-[-0.42px]">Contacto</span>
        </button>
      </div>
    </div>
  );
}

// ─── Mobile Header Pill ────────────────────────────────────────────────────────

const navLinks: { label: string; to: string | null; anchor?: string }[] = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: null, anchor: "servicios" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Contacto", to: null, anchor: "contacto" },
];

function MobileHeader({ isDark }: { isDark: boolean }) {
  const [open, setOpen] = useState(false);
  const scrollTo = useAnchorNav();

  const glassStyle: React.CSSProperties = {
    backdropFilter: "blur(16px) saturate(1.5) contrast(1.25)",
    WebkitBackdropFilter: "blur(16px) saturate(1.5) contrast(1.25)",
    backgroundColor: isDark ? "rgba(22, 22, 21, 0.55)" : "rgba(255, 255, 255, 0.55)",
    border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(32,32,31,0.15)",
  };

  return (
    <div className="header-mobile fixed top-4 left-0 right-0 z-50 flex flex-col items-center px-4 md:hidden">
      {/* Pill principal */}
      <div
        className="pill-header-mobile flex items-center justify-between w-full rounded-[64px] px-4 py-3"
        style={glassStyle}
      >
        {/* Logo icono */}
        <Link to="/" onClick={() => setOpen(false)} className="logo-mobile shrink-0">
          <IsotipoCorporativo size={32} orange={isDark} />
        </Link>

        {/* Burger — dos líneas minimalistas */}
        <button
          className="burger-mobile flex flex-col justify-center items-end gap-[6px] w-8 h-8 shrink-0 cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          <span
            className="burger-line block bg-foreground rounded-full"
            style={{
              height: "1.5px",
              width: open ? "20px" : "20px",
              transform: open ? "translateY(3.75px) rotate(45deg)" : "none",
              transition: "transform 0.4s cubic-bezier(0.76,0,0.24,1), width 0.3s ease",
            }}
          />
          <span
            className="burger-line block bg-foreground rounded-full"
            style={{
              height: "1.5px",
              width: open ? "20px" : "14px",
              transform: open ? "translateY(-3.75px) rotate(-45deg)" : "none",
              transition: "transform 0.4s cubic-bezier(0.76,0,0.24,1), width 0.3s ease",
            }}
          />
        </button>
      </div>

      {/* Pill menú expandible */}
      <div
        className="pill-menu-mobile w-full rounded-[24px] overflow-hidden mt-2"
        style={{
          ...glassStyle,
          maxHeight: open ? "400px" : "0px",
          opacity: open ? 1 : 0,
          transition: "max-height 0.5s cubic-bezier(0.76,0,0.24,1), opacity 0.35s ease",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <nav className="flex flex-col px-6 py-5 gap-1">
          {navLinks.map(({ label, to, anchor }, i) => (
            <div
              key={label}
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s cubic-bezier(0.76,0,0.24,1) ${i * 60}ms`,
              }}
            >
              {to ? (
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
                  className="nav-link-mobile block font-medium text-foreground py-3 border-b border-[rgba(32,32,31,0.08)] dark:border-[rgba(255,255,255,0.08)] last:border-0"
                  style={{ fontSize: "18px", letterSpacing: "-0.03em" }}
                >
                  {label}
                </Link>
              ) : (
                <span
                  className="nav-link-mobile block font-medium text-foreground py-3 border-b border-[rgba(32,32,31,0.08)] dark:border-[rgba(255,255,255,0.08)] cursor-pointer"
                  style={{ fontSize: "18px", letterSpacing: "-0.03em" }}
                  onClick={() => { setOpen(false); if (anchor) scrollTo(anchor); }}
                >
                  {label}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

// ─── Root Layout ───────────────────────────────────────────────────────────────


function DarkModeToggle({ isDark, onChange }: { isDark: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full border shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: isDark ? "rgba(22, 22, 21, 0.7)" : "rgba(255, 255, 255, 0.7)",
        borderColor: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(32, 32, 31, 0.15)",
        color: isDark ? "#ff7e42" : "#f26b2d",
      }}
      aria-label="Alternar modo oscuro"
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-[spin_10s_linear_infinite]"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hover:-rotate-12 transition-transform duration-300"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}

export function Root() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="root-layout bg-background text-foreground flex flex-col gap-[60px] items-start relative w-full min-h-screen overflow-x-hidden">
      <ScrollRestoration />
      {/* Desktop headers */}
      <StickyHeaderPill visible={scrolled} isDark={isDark} />
      <StaticHeader visible={!scrolled} isDark={isDark} />
      {/* Mobile header — siempre visible, sin estados de scroll */}
      <MobileHeader isDark={isDark} />
      <div className="page-content w-full">
        <Outlet context={{ isDark, setIsDark }} />
      </div>
      <SectionContact />
      <Footer />
      {/* Botón flotante Dark Mode (sólo fuera del Home) */}
      {!isHome && <DarkModeToggle isDark={isDark} onChange={() => setIsDark((prev) => !prev)} />}
    </div>
  );
}
