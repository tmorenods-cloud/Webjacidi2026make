import { useState, useEffect, useRef } from "react";
import videoHero from "@/assets/video/video-hero-prueba.mp4";
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
  "https://images.unsplash.com/photo-1742540531234-146d41a8833b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMGZhc2hpb24lMjBtb2RlbCUyMGRyYW1hdGljJTIwcG9ydHJhaXQlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzc5ODEyMjA3fDA&ixlib=rb-4.1.0&q=80&w=1080";

// ─── Logo Components ───────────────────────────────────────────────────────────

function JacidiLogoFull() {
  return (
    <div className="flex items-center gap-2 h-[52px] shrink-0">
      <div className="w-[34px] h-[34px] bg-[#20201f] rounded-[4px]" />
      <span
        className="font-semibold text-[#20201f] tracking-[-1px]"
        style={{ fontSize: 22, fontFamily: "Inter, sans-serif" }}
      >
        jacidi
      </span>
    </div>
  );
}

function JacidiIsotipo() {
  return (
    <div className="w-[34px] h-[34px] bg-[#20201f] rounded-[4px] shrink-0" />
  );
}

function JacidiIsotipoWhite() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[34px] h-[34px] bg-white rounded-[4px] opacity-90" />
      <span
        className="font-semibold text-white tracking-[-1px]"
        style={{ fontSize: 22, fontFamily: "Inter, sans-serif" }}
      >
        jacidi
      </span>
    </div>
  );
}

// ─── Client Logo Cards for Ribbon ─────────────────────────────────────────────

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

// ─── Marquee Component ─────────────────────────────────────────────────────────

interface MarqueeProps {
  direction: "left" | "right";
  duration?: number;
  children: React.ReactNode;
}

function Marquee({ direction, duration = 40, children }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animName = direction === "left" ? "marqueeLeft" : "marqueeRight";

  return (
    <div className="overflow-hidden w-full relative" data-marquee-direction={direction}>
      <div
        ref={trackRef}
        className="flex w-max"
        data-marquee-track
        style={{ animation: `${animName} ${duration}s linear infinite` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

// ─── Mockup Ribbon Items ───────────────────────────────────────────────────────

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

// ─── Custom Cursor ─────────────────────────────────────────────────────────────

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const posRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          el.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`;
          rafRef.current = null;
        });
      }
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(".has-hover-preview")) setHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(".has-hover-preview")) setHovering(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full"
      style={{
        width: hovering ? 120 : 20,
        height: hovering ? 120 : 20,
        backgroundColor: hovering ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.8)",
        backdropFilter: hovering ? "blur(24px)" : "blur(12px)",
        transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease",
        willChange: "transform",
      }}
    >
      {hovering && (
        <span
          style={{
            color: "white",
            fontSize: 13,
            fontWeight: 500,
            fontFamily: "Inter, sans-serif",
            letterSpacing: "-0.3px",
          }}
        >
          Ver Más
        </span>
      )}
    </div>
  );
}

// ─── Header Components ─────────────────────────────────────────────────────────

function StaticHeader({ visible }: { visible: boolean }) {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-20px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="flex flex-row items-center size-full">
        <div className="flex items-center justify-between pb-8 pt-7 px-20 w-full">
          <svg width="185" height="52" viewBox="0 0 185 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M103.178 12.0797V34.3707H97.2862V31.5292C96.5291 32.5974 95.4588 33.4474 94.0745 34.079C92.6901 34.7107 91.1768 35.0265 89.5353 35.0265C87.4909 35.0265 85.676 34.5443 84.0906 33.5816C82.5052 32.6189 81.2694 31.259 80.3842 29.5018C79.499 27.7456 79.0559 25.7012 79.0559 23.3706C79.0559 20.9907 79.515 18.8909 80.4322 17.0693C81.3495 15.2478 82.6493 13.8395 84.3317 12.8447C86.014 11.8489 87.925 11.3514 90.0665 11.3514C91.7088 11.3514 93.1732 11.6306 94.4615 12.1889C95.7488 12.7471 96.7951 13.5613 97.6002 14.6296L98.0833 12.0797H103.178ZM95.3662 27.6812C96.4525 26.5396 96.9961 25.0222 96.9961 23.1281C96.9961 21.2341 96.4605 19.7167 95.3903 18.5751C94.3191 17.4335 92.9072 16.8636 91.1528 16.8636C89.3663 16.8636 87.9491 17.4424 86.9028 18.6001C85.8566 19.7579 85.3334 21.2672 85.3334 23.129C85.3334 24.9909 85.8681 26.5002 86.9393 27.6579C88.0096 28.8156 89.3983 29.3945 91.1047 29.3945C92.8592 29.3927 94.28 28.8228 95.3662 27.6812Z" fill="#20201F"/>
          <path d="M109.153 16.9727C110.144 15.1843 111.536 13.8002 113.33 12.8205C115.125 11.8417 117.19 11.3514 119.524 11.3514C122.663 11.3514 125.255 12.1808 127.299 13.8404C129.344 15.5001 130.494 17.7216 130.752 20.5058H124.475C124.184 19.3078 123.593 18.3935 122.7 17.7618C121.806 17.1302 120.716 16.8153 119.427 16.8153C117.785 16.8153 116.461 17.3941 115.455 18.5518C114.449 19.7096 113.946 21.2681 113.946 23.2265C113.946 25.1528 114.441 26.6952 115.431 27.852C116.421 29.0098 117.753 29.5886 119.427 29.5886C120.747 29.5886 121.862 29.2486 122.772 28.5687C123.681 27.8887 124.249 27.0066 124.475 25.9222H130.752C130.462 28.642 129.287 30.8394 127.226 32.5151C125.166 34.1909 122.598 35.0283 119.523 35.0283C117.189 35.0283 115.125 34.5389 113.33 33.5592C111.534 32.5804 110.142 31.1964 109.153 29.407C108.162 27.6185 107.668 25.542 107.668 23.1782C107.669 20.8297 108.164 18.7612 109.153 16.9727Z" fill="#20201F"/>
          <path d="M135.34 12.0796H141.473V34.3706H135.34V12.0796Z" fill="#20201F"/>
          <path d="M170.135 3.47913V34.3716H165.04L164.653 31.3851C163.896 32.4865 162.826 33.3686 161.442 34.0316C160.057 34.6955 158.536 35.0274 156.878 35.0274C154.768 35.0274 152.889 34.538 151.24 33.5583C149.59 32.5795 148.306 31.1874 147.389 29.3819C146.471 27.5774 146.012 25.5089 146.012 23.1782C146.012 20.8637 146.471 18.8032 147.389 16.9987C148.306 15.1941 149.59 13.802 151.24 12.8223C152.889 11.8435 154.769 11.3532 156.878 11.3532C158.423 11.3532 159.815 11.5921 161.055 12.0699C162.294 12.5476 163.292 13.232 164.049 14.1214V3.47913H170.135ZM162.323 27.6812C163.41 26.5395 163.953 25.0222 163.953 23.1281C163.953 21.2341 163.418 19.7167 162.347 18.5751C161.276 17.4335 159.864 16.8636 158.11 16.8636C156.323 16.8636 154.906 17.4424 153.86 18.6001C152.814 19.7579 152.291 21.2672 152.291 23.129C152.291 24.9908 152.825 26.5002 153.896 27.6579C154.967 28.8156 156.356 29.3945 158.062 29.3945C159.816 29.3927 161.237 28.8228 162.323 27.6812Z" fill="#20201F"/>
          <path d="M175.713 12.0796H181.847V34.3706H175.713V12.0796Z" fill="#20201F"/>
          <path d="M63.3862 41.1487V35.4764H65.8542C67.1638 35.4764 68.1202 34.4126 68.1202 32.7414V12.0796H74.516V33.5018C74.516 37.8061 70.8897 41.1487 66.6602 41.1487C65.2999 41.1487 63.3862 41.1487 63.3862 41.1487Z" fill="#20201F"/>
          <path d="M44.2128 29.2253L38.8747 25.2099C36.6159 23.587 34.4789 21.7842 32.5171 19.8347C31.5954 18.9176 30.6987 17.9586 29.841 16.9655C29.5572 17.3466 29.3677 17.6016 29.3321 17.649C28.3054 19.0286 27.2076 20.3643 26.0555 21.6518C26.0225 21.693 26.0012 21.7189 25.9958 21.7252C27.3677 23.2551 28.849 24.7214 30.3757 26.0966C31.5839 27.1729 32.8979 28.1168 34.1595 29.1591L34.929 29.7988C36.9228 31.3153 39.0028 32.8317 40.5491 34.0199C42.9459 35.718 43.1968 39.3352 41.13 41.3482C39.784 42.7019 37.8258 43.1242 36.0207 42.4496C35.1408 42.1212 34.3614 41.5003 33.7671 40.6548L30.8695 36.5348L27.0288 41.5424C29.2147 44.7435 30.8535 47.2388 34.7084 48.3768C41.8622 50.4936 49.0971 44.6719 48.5205 37.1557C48.2963 34.0065 46.7261 31.1166 44.2128 29.2253Z" fill="#20201F"/>
          <path d="M25.9686 30.265C24.5798 28.7163 23.0932 27.2383 21.5469 25.8497C20.2462 24.7045 17.2836 22.3837 17.0034 22.1645C15.0247 20.6606 12.9651 19.1584 11.4314 17.9801C9.03458 16.282 8.78369 12.6648 10.8504 10.6518C12.8833 8.52869 16.5621 8.84452 18.2142 11.3452L21.2391 15.2987C21.2391 15.2987 24.6741 11.024 24.8298 10.6249L24.9526 10.4576C22.7667 7.25646 21.1279 4.76119 17.2729 3.62316C10.1191 1.50634 2.88428 7.32803 3.46079 14.8442C3.68498 17.9926 5.25525 20.8834 7.76857 22.7738L13.1066 26.7891C15.3655 28.4121 17.5025 30.2149 19.4642 32.1644C20.3814 33.077 21.2738 34.0316 22.127 35.0193C22.4143 34.6337 22.6065 34.3751 22.643 34.3268C23.6857 32.9249 24.7987 31.5694 25.9686 30.265Z" fill="#20201F"/>
          <path d="M37.2217 3.21981C30.9015 3.73962 28.9878 8.24523 25.535 12.6623C23.0092 16.2338 20.2308 19.3268 16.979 22.1459L17.003 22.1647C17.2833 22.3839 20.2459 24.7047 21.5466 25.8499C21.608 25.9036 21.6667 25.9563 21.7201 26.0047C23.2378 24.6385 24.6862 23.1801 26.0554 21.652C27.2076 20.3655 28.3054 19.0288 29.3321 17.6492C29.3677 17.6018 29.5572 17.3468 29.841 16.9657C31.0331 15.3633 33.9023 11.5055 34.1497 11.1735C35.9406 8.79367 39.2368 8.59327 41.3996 10.6609C43.4868 12.7007 43.1718 16.36 40.7679 18.0089L36.4619 21.0714C36.4619 21.0714 41.1887 24.6725 41.3293 24.7745L41.4957 24.8953C44.702 22.6729 47.2367 21.0329 48.38 17.1106C50.5089 9.92544 44.6335 2.61053 37.2217 3.21981Z" fill="#20201F"/>
          <path d="M34.9302 29.7989L34.1607 29.1592C32.8982 28.1178 31.5851 27.173 30.3769 26.0967C30.3324 26.0574 30.2871 26.018 30.2426 25.9786C28.7453 27.326 27.3191 28.7611 25.9695 30.266C24.6109 31.7869 23.3378 33.3785 22.1483 35.0444L22.127 35.0203C20.9313 36.628 18.0719 40.4725 17.8254 40.8035C16.0345 43.1834 12.7383 43.3838 10.5755 41.3162C8.48832 39.2763 8.80327 35.617 11.2072 33.9681L15.5132 30.9056C14.2578 29.815 10.8451 27.352 10.4794 27.0818C7.27303 29.3042 4.73836 30.9441 3.59513 34.8664C1.46526 42.0516 7.34154 49.3665 14.7525 48.7572C21.0727 48.2374 22.9864 43.7318 26.4392 39.3148C28.965 35.7432 31.7292 32.661 34.981 29.8419L34.9302 29.7989Z" fill="#20201F"/>
        </svg>
          <div className="flex gap-6 items-center">
            <span className="font-medium text-[#20201f] text-[18px] tracking-[-0.54px] cursor-pointer">Inicio</span>
            <span className="font-medium text-[#20201f] text-[18px] tracking-[-0.54px] cursor-pointer">Servicios</span>
            <span className="font-medium text-[#20201f] text-[18px] tracking-[-0.54px] cursor-pointer">Proyectos</span>
            <button className="bg-[#20201f] flex items-center justify-center px-4 py-[10px] rounded-[29px]">
              <span className="font-medium text-white text-[18px] tracking-[-0.54px]">Contacto</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StickyHeaderPill({ visible }: { visible: boolean }) {
  return (
    <div
      className="fixed top-6 left-1/2 z-50 flex items-center justify-between pl-[18px] pr-3 py-[10px] rounded-[64px]"
      style={{
        width: 524,
        backdropFilter: "blur(22px)",
        backgroundColor: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(32,32,31,0.2)",
        transform: `translateX(-50%) translateY(${visible ? "0" : "-120%"})`,
        opacity: visible ? 1 : 0,
        transition: "transform 0.5s cubic-bezier(0.76,0,0.24,1), opacity 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.5312 22.3923L29.5719 19.4141C27.8965 18.2103 26.3115 16.8732 24.8564 15.4272C24.1728 14.747 23.5076 14.0357 22.8715 13.2991C22.661 13.5818 22.5205 13.7709 22.4941 13.8061C21.7326 14.8293 20.9183 15.8201 20.0637 16.775C20.0393 16.8055 20.0235 16.8247 20.0195 16.8294C21.0371 17.9641 22.1358 19.0518 23.2681 20.0717C24.1642 20.87 25.1389 21.5701 26.0746 22.3432L26.6454 22.8177C28.1242 23.9425 29.6669 25.0672 30.8138 25.9485C32.5915 27.208 32.7776 29.8909 31.2447 31.384C30.2463 32.388 28.7939 32.7012 27.455 32.2009C26.8024 31.9573 26.2244 31.4968 25.7836 30.8697L23.6343 27.8139L20.7857 31.528C22.407 33.9023 23.6225 35.7531 26.4817 36.5972C31.7878 38.1673 37.1539 33.8493 36.7263 28.2744C36.56 25.9385 35.3953 23.7951 33.5312 22.3923Z" fill="#20201F"/>
        <path d="M19.9995 23.1633C18.9694 22.0147 17.8667 20.9184 16.7199 19.8885C15.7551 19.0391 13.5577 17.3177 13.3499 17.1552C11.8823 16.0397 10.3547 14.9255 9.21707 14.0515C7.43936 12.792 7.25327 10.1091 8.78617 8.61604C10.294 7.04133 13.0226 7.27558 14.248 9.13032L16.4916 12.0627C16.4916 12.0627 19.0394 8.89209 19.1548 8.59613L19.2459 8.47204C17.6246 6.0977 16.4091 4.24693 13.5498 3.40284C8.24375 1.83278 2.87762 6.15078 3.30522 11.7256C3.47151 14.0608 4.6362 16.2049 6.50035 17.6071L10.4596 20.5853C12.135 21.789 13.7201 23.1262 15.1751 24.5722C15.8554 25.249 16.5173 25.9571 17.1501 26.6897C17.3633 26.4037 17.5058 26.2119 17.5328 26.1761C18.3062 25.1362 19.1317 24.1309 19.9995 23.1633Z" fill="#20201F"/>
        <path d="M28.3457 3.1038C23.658 3.48935 22.2386 6.83121 19.6776 10.1074C17.8042 12.7564 15.7434 15.0505 13.3315 17.1415L13.3494 17.1554C13.5572 17.318 15.7546 19.0393 16.7194 19.8887C16.7649 19.9286 16.8084 19.9677 16.848 20.0035C17.9738 18.9902 19.0481 17.9086 20.0636 16.7752C20.9182 15.8209 21.7324 14.8295 22.4939 13.8062C22.5203 13.7711 22.6609 13.5819 22.8714 13.2993C23.7556 12.1108 25.8837 9.24934 26.0672 9.00315C27.3955 7.23799 29.8404 7.08935 31.4445 8.62291C32.9926 10.1359 32.759 12.85 30.976 14.073L27.7822 16.3445C27.7822 16.3445 31.2881 19.0155 31.3924 19.0911L31.5158 19.1807C33.894 17.5323 35.774 16.316 36.6219 13.4068C38.201 8.07744 33.8432 2.65189 28.3457 3.1038Z" fill="#20201F"/>
        <path d="M26.6462 22.8177L26.0754 22.3432C25.1391 21.5708 24.1651 20.87 23.269 20.0717C23.236 20.0425 23.2023 20.0133 23.1693 19.9841C22.0588 20.9835 21.001 22.0479 19.9999 23.1641C18.9923 24.2922 18.048 25.4727 17.1658 26.7083L17.1499 26.6904C16.263 27.8829 14.1422 30.7344 13.9594 30.9799C12.6311 32.745 10.1862 32.8937 8.58207 31.3601C7.03399 29.8471 7.26759 27.133 9.05058 25.91L12.2444 23.6385C11.3133 22.8296 8.78201 21.0027 8.5108 20.8023C6.1326 22.4507 4.25261 23.6671 3.40466 26.5763C1.82491 31.9056 6.18341 37.3311 11.6802 36.8792C16.368 36.4937 17.7874 33.1518 20.3483 29.8757C22.2217 27.2266 24.272 24.9405 26.6838 22.8495L26.6462 22.8177Z" fill="#20201F"/>
      </svg>
      <div className="flex gap-5 items-center">
        <div className="flex gap-[11px] items-center font-medium text-[#20201f] text-[14px] tracking-[-0.42px]">
          <span className="cursor-pointer">Inicio</span>
          <span className="cursor-pointer">Servicios</span>
          <span className="cursor-pointer">Nosotros</span>
          <span className="cursor-pointer">Proyectos</span>
        </div>
        <button className="bg-[#20201f] flex items-center justify-center px-4 py-2 rounded-[29px]">
          <span className="font-medium text-white text-[14px] tracking-[-0.42px]">Contacto</span>
        </button>
      </div>
    </div>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <div className="w-full" data-name="Hero Section">
      <p
        className="font-medium text-[#20201f] px-[80px] pt-[0px] pb-[24px]"
        style={{
          fontSize: "clamp(64px, 8vw, 120px)",
          letterSpacing: "-6px",
          lineHeight: "0.83",
        }}
        data-name="Hero Content"
      >
        Hacemos<br />grande tu marca
      </p>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top"
          src={videoHero}
        />
      </div>
    </div>
  );
}

// ─── Intro + Details Section ───────────────────────────────────────────────────

function IntroAndDetailsSection() {
  return (
    <div className="flex flex-col gap-[160px] items-center py-20 w-full" data-name="Section">
      {/* Intro text */}
      <div className="w-full px-20">
        <p
          className="font-normal text-[#20201f]"
          style={{ fontSize: "clamp(32px, 3.5vw, 52px)", letterSpacing: "-2.08px", lineHeight: "1.05", maxWidth: 882 }}
        >
          Innovación y creatividad es nuestro ADN. Diseñamos soluciones que impulsan tu proyecto
        </p>
      </div>

      {/* Client mockups ribbon-to-left */}
      <div className="h-[267px] overflow-hidden w-full" data-name="Client mockups ribbon-to-left" data-marquee="true">
        <Marquee direction="left" duration={35}>
          <MockupRibbonContent />
        </Marquee>
      </div>

      {/* Achievements */}
      <div className="flex flex-col gap-[52px] items-center w-full" data-name="Achievements Section">
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
        <button className="font-semibold text-[#20201f] text-center underline decoration-solid underline-offset-4"
          style={{ fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-2.2px", lineHeight: "0.9" }}>
          {"Let's talk"}
        </button>
      </div>

      {/* Client mockups ribbon-to-right */}
      <div className="h-[267px] overflow-hidden w-full" data-name="Client mockups ribbon-to-righ" data-marquee="true">
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
    <div className="relative w-full" data-name="Section - About">
      <div className="flex flex-col gap-20 items-start px-20 py-10 w-full">
        <p
          className="font-medium text-[#20201f]"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-3.6px", lineHeight: "0.9", maxWidth: 578 }}
        >
          Nuestro enfoque creativo
        </p>
        <div className="flex flex-wrap gap-px h-auto lg:h-[508px] items-start w-full">
          {[
            { text: "Innovamos el mercado con estrategias", pt: "pt-5" },
            { text: "Construimos una relación duradera entre marcas y consumidores", pt: "pt-[125px]" },
            { text: "Maximizamos el retorno de inversión a través de campañas efectivas", pt: "pt-5", pb: "pb-[125px]", align: "items-end" },
            { text: "Inspiramos confianza y credibilidad en cada proyecto", pt: "pt-5", pb: "pb-5", align: "items-end" },
          ].map(({ text, pt, pb, align }, i) => (
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
    <div className="bg-white relative w-full" data-name="Section - Services">
      <div className="flex flex-col items-start pb-[120px] pt-20 px-20 w-full">
        <div className="bg-[#20201f] relative rounded-[16px] w-full">
          <div className="flex flex-col gap-[88px] items-start p-20 w-full">
            <div className="flex items-center justify-center">
              <p
                className="font-medium text-white"
                style={{ fontSize: "clamp(40px, 5vw, 68px)", letterSpacing: "-4.08px", lineHeight: "0.9", maxWidth: 480 }}
              >
                Lo que hacemos por ti
              </p>
            </div>
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

// ─── Section Clients (Logo Ribbons) ────────────────────────────────────────────

function SectionClientsLogos() {
  return (
    <div className="flex flex-col gap-[52px] items-start overflow-hidden py-20 w-full" data-name="Section - Clients">
      <div className="px-20 w-full">
        <p
          className="font-medium text-[#20201f]"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-3.6px", lineHeight: "1.1" }}
        >
          Nuestros Clientes
        </p>
      </div>
      <div className="flex flex-col gap-[6px] items-start w-full relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 h-full w-40 z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(90deg, white 0%, white 50%, rgba(255,255,255,0) 100%)" }} />
        <div className="absolute right-0 top-0 h-full w-40 z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(270deg, white 0%, white 50%, rgba(255,255,255,0) 100%)" }} />

        {/* Moving ribbon to the left */}
        <div data-name="Moving ribbon to the left" data-marquee="true" className="w-full overflow-hidden">
          <Marquee direction="left" duration={45}>
            <LogoRibbonRow1 />
          </Marquee>
        </div>

        {/* Moving ribbon to the right */}
        <div data-name="Moving ribbon to the right" data-marquee="true" className="w-full overflow-hidden">
          <Marquee direction="right" duration={45}>
            <LogoRibbonRow2 />
          </Marquee>
        </div>
      </div>
    </div>
  );
}

// ─── Section Projects (Interactive Client List) ────────────────────────────────

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

  return (
    <div className="flex flex-col items-start w-full" data-name="Section - Proyects">
      <div className="flex flex-col gap-20 items-start px-20 py-[120px] w-full">
        {/* Header */}
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

        {/* Client list + Preview */}
        <div className="flex gap-5 items-start justify-end pb-10 w-full">
          {/* Client list */}
          <div className="flex flex-col items-end flex-1 max-w-[1043px]">
            {clientList.map((client, i) => (
              <div
                key={client.name}
                className="flex items-end justify-end w-full group client-container"
                data-name="Client Container"
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

          {/* Preview panel */}
          <div
            className="flex flex-col gap-[10px] h-[751px] items-start justify-end relative shrink-0 w-[600px] overflow-hidden"
            data-name="Column"
          >
            {displayedClient !== null && (
              <>
                <div className="flex-1 min-h-0 relative w-full overflow-hidden" data-name="Client - Preview">
                  <img
                    key={displayedClient}
                    alt={clientList[displayedClient].name}
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full has-hover-preview"
                    src={clientList[displayedClient].preview}
                    style={{
                      animation: revealing ? "revealFromRight 0.5s cubic-bezier(0.76,0,0.24,1) forwards" : "none",
                    }}
                  />
                </div>
                <div
                  className="absolute backdrop-blur-[16px] bg-[rgba(0,0,0,0.8)] flex items-center left-[17px] overflow-hidden px-6 py-[23px] rounded-[12px] w-[566px]"
                  style={{ bottom: 40 }}
                >
                  {(() => {
                    const clientBullets: Record<number, string[]> = {
                      0: ["10 años de gestión digital", "+175.000 Followers en Instagram", "+6.000 Leads mensuales"],
                      1: ["Incremento del 38% en ventas online", "Rediseño de identidad visual completa", "+12.000 visitas únicas al mes"],
                      2: ["Campaña 360° en 3 mercados", "52% de incremento en reservas", "ROI publicitario de 4.2x"],
                      3: ["Integración con canal de reservas propio", "+200 propiedades gestionadas", "Reducción del 30% en coste por adquisición"],
                      4: ["Estrategia de lujo para 5 países LATAM", "+85.000 impresiones mensuales en paid", "NPS aumentado de 62 a 88 puntos"],
                      5: ["Campaña de membresías con +3.200 nuevos socios", "Producción audiovisual de 12 piezas/mes", "Engagement rate del 8.4% en RRSS"],
                      6: ["Presencia en 8 mercados internacionales", "Gestión de +1M$ en Paid Media anual", "Incremento del 67% en ocupación directa"],
                    };
                    const bullets = displayedClient !== null ? (clientBullets[displayedClient] ?? []) : [];
                    return (
                      <ul className="font-medium text-white text-[20px] tracking-[-0.6px] list-disc whitespace-nowrap">
                        {bullets.map((b, i) => (
                          <li key={i} className={`ms-[30px] leading-[1.3]${i < bullets.length - 1 ? " mb-0" : ""}`}>{b}</li>
                        ))}
                      </ul>
                    );
                  })()}
                </div>
              </>
            )}
            {displayedClient === null && (
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

        {/* CTA Button */}
        <div
          className="flex items-start justify-between overflow-hidden px-10 py-16 relative w-full"
          data-name="cta-proyectos"
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
          <div className="overflow-hidden relative shrink-0 size-[160px] z-10 flex items-center justify-center" data-name="link-arrow">
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M106.691 62.7614L49.3143 120.139L39.8862 110.711L97.2635 53.3333H46.6917V40H120.025V113.333H106.691V62.7614Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section About Image ────────────────────────────────────────────────────────

function SectionAboutImage() {
  return (
    <div className="relative w-full" data-name="section">
      <div className="flex flex-col lg:flex-row items-start pb-[120px] pt-20 px-20 w-full" style={{ gap: "4.167em" }}>
        {/* Image column — 50%, 1:1, left-aligned */}
        <div className="w-full lg:w-1/2 shrink-0" data-name="Image">
          <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
            <img alt="" className="absolute max-w-none object-cover size-full has-hover-preview" src={imgImage} />
            <img alt="" className="absolute max-w-none object-cover size-full opacity-60 has-hover-preview" src={imgImage1} />
          </div>
        </div>
        {/* Text column — 50%, max-width 720px */}
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

// ─── Section Contact ────────────────────────────────────────────────────────────

function SectionContact() {
  return (
    <div className="relative w-full" data-name="Section - Contact">
      <div className="flex flex-col gap-8 items-start p-20 w-full">
        <div className="flex items-center justify-start w-full">
          <p
            className="font-medium text-[#20201f]"
            style={{ fontSize: "clamp(56px, 8vw, 120px)", letterSpacing: "-6px", lineHeight: "0.9", maxWidth: 691 }}
          >
            {"Let's Talk"}
          </p>
        </div>
        <div className="flex items-start justify-between w-full gap-20 flex-wrap">
          <div className="flex flex-col gap-20 items-start justify-center max-w-[614px]">
            <p className="font-normal text-[#20201f] leading-[1.1] mx-[0px] mt-[-16px] mb-[0px]"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-2.4px" }}>
              Tu idea merece algo mejor.<br />¡Contáctanos!
            </p>
            <p className="font-semibold underline decoration-solid transition-colors duration-300 cursor-pointer"
              style={{ fontSize: "clamp(40px, 5vw, 80px)", letterSpacing: "-4.8px", lineHeight: "1", color: "#909090" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#D55D26")}
              onMouseLeave={e => (e.currentTarget.style.color = "#909090")}
            >
              info@jacidi.com
            </p>
          </div>
          <div className="flex flex-col gap-10 items-end max-w-[710px] flex-1 min-w-[280px]">
            {/* Form fields */}
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex gap-4 items-start w-full flex-wrap">
                {["Nombre y apellido", "Correo electrónico"].map((label) => (
                  <div key={label} className="flex-1 min-w-[200px] relative">
                    <div className="absolute border-b border-[rgba(32,32,31,0.2)] inset-0 pointer-events-none" />
                    <div className="flex items-start pb-4 pl-[14px] pr-2 pt-5">
                      <p className="font-normal text-[#404040] text-[20px] tracking-[-1px] leading-[0.9] whitespace-nowrap">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 items-start w-full flex-wrap">
                {["Número de teléfono", "Ciudad"].map((label) => (
                  <div key={label} className="flex-1 min-w-[200px] relative">
                    <div className="absolute border-b border-[rgba(32,32,31,0.2)] inset-0 pointer-events-none" />
                    <div className="flex items-start pb-4 pl-[14px] pr-2 pt-5">
                      <p className="font-normal text-[#404040] text-[20px] tracking-[-1px] leading-[0.9] whitespace-nowrap">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
              {["Servicio requerido", "CV (Vacantes)"].map((label) => (
                <div key={label} className="relative w-full">
                  <div className="absolute border-b border-[rgba(32,32,31,0.2)] inset-0 pointer-events-none" />
                  <div className="flex items-start pb-4 pl-[14px] pr-2 pt-5">
                    <p className="font-normal text-[#404040] text-[20px] tracking-[-1px] leading-[0.9] whitespace-nowrap">{label}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-[#20201f] flex items-center justify-center pl-[14px] pr-2 py-4 rounded-[6px] w-[195px]">
              <p className="font-normal text-white text-[20px] tracking-[-1px] leading-[0.9] whitespace-nowrap">Enviar</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <div className="relative w-full" data-name="Footer">
      <div className="flex flex-col items-start p-20 w-full">
        <div className="bg-[#20201f] relative rounded-[16px] w-full">
          <div className="flex flex-col items-end px-16 py-11 gap-[112px] w-full">
            <div className="flex gap-3 items-start justify-end w-full">
              {/* Tagline */}
              <div className="flex flex-col flex-1 items-start min-w-0">
                <p
                  className="font-medium text-white"
                  style={{ fontSize: "clamp(28px, 3.5vw, 52px)", letterSpacing: "-2.6px", lineHeight: "0.9", maxWidth: 393 }}
                >
                  Hacemos grande tu marca
                </p>
              </div>
              {/* Logo white */}
              <div className="flex flex-col flex-1 items-center min-w-0 overflow-hidden">
                <svg width="156" height="52" viewBox="0 0 156 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M52.4012 11.8725V42.6435H44.6428V38.721C43.6458 40.1956 42.2364 41.3689 40.4133 42.2409C38.5903 43.1128 36.5974 43.5488 34.4358 43.5488C31.7435 43.5488 29.3534 42.8831 27.2656 41.5542C25.1778 40.2253 23.5504 38.348 22.3847 35.9224C21.219 33.498 20.6355 30.676 20.6355 27.4587C20.6355 24.1735 21.24 21.2749 22.448 18.7603C23.6559 16.2458 25.3676 14.3018 27.5831 12.9285C29.7986 11.5539 32.3152 10.8672 35.1353 10.8672C37.298 10.8672 39.2265 11.2525 40.923 12.0232C42.6183 12.7938 43.9961 13.9177 45.0564 15.3924L45.6926 11.8725H52.4012ZM42.1145 33.4091C43.545 31.8332 44.2609 29.7386 44.2609 27.124C44.2609 24.5094 43.5556 22.4148 42.1461 20.8389C40.7355 19.263 38.8762 18.4763 36.5658 18.4763C34.2132 18.4763 32.3469 19.2753 30.9691 20.8735C29.5912 22.4716 28.9023 24.5551 28.9023 27.1252C28.9023 29.6953 29.6065 31.7789 31.0171 33.377C32.4265 34.9751 34.2554 35.7742 36.5025 35.7742C38.8129 35.7717 40.684 34.985 42.1145 33.4091Z" fill="white"/>
                  <path d="M60.271 18.6269C61.575 16.1581 63.4086 14.2475 65.7717 12.8951C68.1348 11.544 70.8541 10.8672 73.9284 10.8672C78.0618 10.8672 81.4747 12.0121 84.1671 14.3031C86.8594 16.5941 88.3743 19.6607 88.7141 23.5041H80.4472C80.0653 21.8504 79.2862 20.5882 78.1099 19.7162C76.9336 18.8443 75.4972 18.4096 73.8007 18.4096C71.6379 18.4096 69.8946 19.2086 68.5695 20.8068C67.2444 22.4049 66.5825 24.5564 66.5825 27.2598C66.5825 29.9189 67.2339 32.0481 68.5379 33.645C69.8419 35.2431 71.5958 36.0422 73.8007 36.0422C75.5382 36.0422 77.0074 35.5729 78.2048 34.6343C79.4022 33.6956 80.1496 32.4779 80.4472 30.981H88.7141C88.3321 34.7355 86.7844 37.7688 84.071 40.082C81.3576 42.3952 77.9763 43.5512 73.9272 43.5512C70.853 43.5512 68.1348 42.8757 65.7705 41.5233C63.4062 40.1722 61.5727 38.2616 60.2699 35.7915C58.9659 33.3226 58.3145 30.4561 58.3145 27.1932C58.3156 23.9512 58.9682 21.0958 60.271 18.6269Z" fill="white"/>
                  <path d="M94.7559 11.8721H102.833V42.6431H94.7559V11.8721Z" fill="white"/>
                  <path d="M140.577 0V42.6446H133.867L133.359 38.5221C132.362 40.0424 130.952 41.2602 129.129 42.1753C127.306 43.0917 125.303 43.5499 123.119 43.5499C120.341 43.5499 117.867 42.8744 115.695 41.522C113.521 40.1709 111.831 38.2491 110.623 35.7568C109.415 33.2658 108.81 30.4104 108.81 27.1931C108.81 23.998 109.415 21.1537 110.623 18.6627C111.831 16.1716 113.521 14.2499 115.695 12.8975C117.867 11.5464 120.342 10.8696 123.119 10.8696C125.154 10.8696 126.988 11.1993 128.62 11.8588C130.252 12.5184 131.566 13.4632 132.563 14.6908V0H140.577ZM130.29 33.409C131.721 31.8331 132.437 29.7385 132.437 27.1239C132.437 24.5093 131.732 22.4147 130.322 20.8388C128.912 19.2629 127.052 18.4762 124.742 18.4762C122.389 18.4762 120.523 19.2752 119.145 20.8734C117.767 22.4715 117.078 24.555 117.078 27.1252C117.078 29.6953 117.782 31.7788 119.193 33.3769C120.602 34.9751 122.431 35.7741 124.679 35.7741C126.989 35.7717 128.86 34.9849 130.29 33.409Z" fill="white"/>
                  <path d="M147.923 11.8721H156V42.6431H147.923V11.8721Z" fill="white"/>
                  <path d="M0 51.9997V44.1696H3.25003C4.97463 44.1696 6.23411 42.7011 6.23411 40.394V11.8721H14.6568V41.4438C14.6568 47.3856 9.88131 51.9997 4.31151 51.9997C2.52013 51.9997 0 51.9997 0 51.9997Z" fill="white"/>
                </svg>
              </div>
              {/* Contact */}
              <div className="flex flex-col flex-1 items-end min-w-0">
                <div className="flex flex-col gap-[18px] items-start">
                  <div className="flex gap-[6px] items-center">
                    <div className="relative shrink-0 size-[28px] flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.5312 22.3923L29.5719 19.4141C27.8965 18.2103 26.3115 16.8732 24.8564 15.4272C24.1728 14.747 23.5076 14.0357 22.8715 13.2991C22.661 13.5818 22.5205 13.7709 22.4941 13.8061C21.7326 14.8293 20.9183 15.8201 20.0637 16.775C20.0393 16.8055 20.0235 16.8247 20.0195 16.8294C21.0371 17.9641 22.1358 19.0518 23.2681 20.0717C24.1642 20.87 25.1389 21.5701 26.0746 22.3432L26.6454 22.8177C28.1242 23.9425 29.6669 25.0672 30.8138 25.9485C32.5915 27.208 32.7776 29.8909 31.2447 31.384C30.2463 32.388 28.7939 32.7012 27.455 32.2009C26.8024 31.9573 26.2244 31.4968 25.7836 30.8697L23.6343 27.8139L20.7857 31.528C22.407 33.9023 23.6225 35.7531 26.4817 36.5972C31.7878 38.1673 37.1539 33.8493 36.7263 28.2744C36.56 25.9385 35.3953 23.7951 33.5312 22.3923Z" fill="#909090"/>
                        <path d="M19.9995 23.1633C18.9694 22.0147 17.8667 20.9184 16.7199 19.8885C15.7551 19.0391 13.5577 17.1552 11.8823 16.0397 10.3547 14.9255 9.21707 14.0515C7.43936 12.792 7.25327 10.1091 8.78617 8.61604C10.294 7.04133 13.0226 7.27558 14.248 9.13032L16.4916 12.0627C16.4916 12.0627 19.0394 8.89209 19.1548 8.59613L19.2459 8.47204C17.6246 6.0977 16.4091 4.24693 13.5498 3.40284C8.24375 1.83278 2.87762 6.15078 3.30522 11.7256C3.47151 14.0608 4.6362 16.2049 6.50035 17.6071L10.4596 20.5853C12.135 21.789 13.7201 23.1262 15.1751 24.5722C15.8554 25.249 16.5173 25.9571 17.1501 26.6897C17.3633 26.4037 17.5058 26.2119 17.5328 26.1761C18.3062 25.1362 19.1317 24.1309 19.9995 23.1633Z" fill="#909090"/>
                        <path d="M28.3457 3.1038C23.658 3.48935 22.2386 6.83121 19.6776 10.1074C17.8042 12.7564 15.7434 15.0505 13.3315 17.1415L13.3494 17.1554C13.5572 17.318 15.7546 19.0393 16.7194 19.8887C16.7649 19.9286 16.8084 19.9677 16.848 20.0035C17.9738 18.9902 19.0481 17.9086 20.0636 16.7752C20.9182 15.8209 21.7324 14.8295 22.4939 13.8062C22.5203 13.7711 22.6609 13.5819 22.8714 13.2993C23.7556 12.1108 25.8837 9.24934 26.0672 9.00315C27.3955 7.23799 29.8404 7.08935 31.4445 8.62291C32.9926 10.1359 32.759 12.85 30.976 14.073L27.7822 16.3445C27.7822 16.3445 31.2881 19.0155 31.3924 19.0911L31.5158 19.1807C33.894 17.5323 35.774 16.316 36.6219 13.4068C38.201 8.07744 33.8432 2.65189 28.3457 3.1038Z" fill="#909090"/>
                        <path d="M26.6462 22.8177L26.0754 22.3432C25.1391 21.5708 24.1651 20.87 23.269 20.0717C23.236 20.0425 23.2023 20.0133 23.1693 19.9841C22.0588 20.9835 21.001 22.0479 19.9999 23.1641C18.9923 24.2922 18.048 25.4727 17.1658 26.7083L17.1499 26.6904C16.263 27.8829 14.1422 30.7344 13.9594 30.9799C12.6311 32.745 10.1862 32.8937 8.58207 31.3601C7.03399 29.8471 7.26759 27.133 9.05058 25.91L12.2444 23.6385C11.3133 22.8296 8.78201 21.0027 8.5108 20.8023C6.1326 22.4507 4.25261 23.6671 3.40466 26.5763C1.82491 31.9056 6.18341 37.3311 11.6802 36.8792C16.368 36.4937 17.7874 33.1518 20.3483 29.8757C22.2217 27.2266 24.272 24.9405 26.6838 22.8495L26.6462 22.8177Z" fill="#909090"/>
                      </svg>
                    </div>
                    <p className="font-semibold text-[#909090] text-[24px] tracking-[-0.96px] whitespace-nowrap">info@jacidi.com</p>
                  </div>
                  <div className="flex gap-[18px] items-start font-normal text-white text-[16px] tracking-[-0.64px] whitespace-nowrap">
                    <span>Instagram</span>
                    <span>LinkedIn</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom */}
            <div className="flex items-center justify-between w-full font-normal text-white text-[16px] tracking-[-0.64px] whitespace-nowrap">
              <span>Jacidi C.A, 2026</span>
              <span>Política de cookies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="bg-white flex flex-col gap-[60px] items-start relative w-full min-h-screen overflow-x-hidden"
      data-name="Home"
    >
      {/* Custom cursor — disabled temporarily; re-enable by uncommenting the next line and adding style={{ cursor: "none" }} to this div */}
      {/* <CustomCursor /> */}

      {/* Sticky pill header */}
      <StickyHeaderPill visible={scrolled} />

      {/* Static header */}
      <StaticHeader visible={!scrolled} />

      {/* Page sections */}
      <HeroSection />
      <IntroAndDetailsSection />
      <SectionAbout />
      <SectionServices />
      <SectionClientsLogos />
      <SectionProyects />
      <SectionAboutImage />
      <SectionContact />
      <Footer />
    </div>
  );
}
