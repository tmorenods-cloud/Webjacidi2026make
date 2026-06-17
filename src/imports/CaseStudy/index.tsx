import svgPaths from "./svg-9nish3sntt";
import imgHeroImage from "./9249e5057a24c153b07287f7f65477c6e06a63c5.png";
import imgImage from "./66b381c88d7442b6d6fca575946066896a67f6db.png";
import imgImage1 from "./9e7b46c63fdba6029bb6b0c5dcbad267af6872c3.png";
import imgImage2 from "./5f13ab3a3ff74801724cf7df07cb6e319f7d172b.png";
import imgImage3 from "./d20450c1482411a33f137fb6cfa8f3d5f8b9d22b.png";
import imgImage4 from "./46b4059ae7c44eb9d6289c0001726e236e172cae.png";
import imgImage5 from "./6cf4fcea852e1ca1101ec3481dbf18e1adc99b16.png";
import imgProjectImage from "./695b352afdca68e345698611f5c1cf7c0ca8ca6a.png";
import imgProjectImage1 from "./a5c29d5aa98abcf3f657c27901d2abbe55dec97c.png";
import imgProjectImage2 from "./5865a5dbc3a18e7ea9e2a2fe6916a3068f547ead.png";
import imgProjectImage3 from "./e1d6367c35e99575cef39b4ce722be78da6770be.png";

function VisitLinkContainer() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="Visit Link Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#20201f] text-[28px] tracking-[-0.56px] whitespace-nowrap">Visitar sitio</p>
      <div className="overflow-clip relative shrink-0 size-[34px]" data-name="Arrow Icon">
        <div className="absolute bottom-[24.91%] left-[24.93%] right-[24.98%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0295 17.0295">
            <path d={svgPaths.p3fb4d700} fill="var(--fill-0, #20201F)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CallToActionRow() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Call to Action Row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0.83] not-italic relative shrink-0 text-[#20201f] text-[52px] tracking-[-2.6px] whitespace-nowrap">Titulo proyecto / Cliente</p>
      <VisitLinkContainer />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-0 pb-[80px] pt-[64px] px-[80px] top-[96px] w-[1920px]" data-name="Hero Section">
      <div className="aspect-[1760/565] relative shrink-0 w-full" data-name="Hero Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#909090] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroImage} />
        </div>
      </div>
      <CallToActionRow />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 text-[22px] tracking-[-0.66px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 w-[867px]">Navicu.com es una empresa con más de 8 años en el mercado nacional e internacional mayorista que cuenta con alianzas y contratos de comercialización para más de 800 propiedades hoteleras en el país y con las principales aerolíneas nacionales</p>
      <ul className="block font-['Inter:Medium',sans-serif] font-medium leading-[0] list-disc relative shrink-0 whitespace-nowrap">
        <li className="mb-0 ms-[33px]">
          <span className="leading-[1.5]">{`10 Años de gestión `}</span>
        </li>
        <li className="mb-0 ms-[33px]">
          <span className="leading-[1.5]">{`+175.000 Followers en instagram `}</span>
        </li>
        <li className="ms-[33px]">
          <span className="leading-[1.5]">+ 6.000 Leads mensuales</span>
        </li>
      </ul>
    </div>
  );
}

function TextBlock() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between not-italic relative shrink-0 text-[#20201f] w-full" data-name="Text Block">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[44px] tracking-[-2.2px] whitespace-nowrap">Titulo h2</p>
      <Frame2 />
    </div>
  );
}

function ImagesRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Images Row">
      <div className="h-[899px] relative shrink-0 w-[862px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="h-[899px] relative shrink-0 w-[862px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function IntroductionSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-0 p-[80px] top-[863px] w-[1920px]" data-name="Introduction Section">
      <TextBlock />
      <ImagesRow />
    </div>
  );
}

function TextBlock1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[34px] h-[315px] items-start not-italic relative shrink-0 text-[#20201f] w-full" data-name="Text Block">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[44px] tracking-[-2.2px] whitespace-nowrap">Titulo h2</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[22px] tracking-[-0.66px] w-[867px]">Para Navicu.com nos encontramos con el reto de crear un branding que permita representar el espíritu del viajero en cualquier lugar. Se escogieron colores que le dieran sentido a cada destino dentro y fuera de Venezuela, de esa forma los viajeros sienten una profunda seguridad y satisfacción a la hora de viajar. Para navicu.com no hay nada más importante que brindar una experiencia de primera calidad y ofreciendo mejores opciones para un mejor viaje</p>
    </div>
  );
}

function IntroductionSection1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-0 p-[80px] top-[2227px] w-[1920px]" data-name="Introduction Section">
      <TextBlock1 />
      <div className="aspect-[1760/767] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function TextBlock2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[34px] h-[315px] items-start not-italic relative shrink-0 text-[#20201f] w-full" data-name="Text Block">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[44px] tracking-[-2.2px] whitespace-nowrap">Titulo h2</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[22px] tracking-[-0.66px] w-[867px]">Para Navicu.com nos encontramos con el reto de crear un branding que permita representar el espíritu del viajero en cualquier lugar. Se escogieron colores que le dieran sentido a cada destino dentro y fuera de Venezuela, de esa forma los viajeros sienten una profunda seguridad y satisfacción a la hora de viajar. Para navicu.com no hay nada más importante que brindar una experiencia de primera calidad y ofreciendo mejores opciones para un mejor viaje</p>
    </div>
  );
}

function ImagesRow1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Images Row">
      <div className="h-[913px] relative shrink-0 w-[862px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="h-[913px] relative shrink-0 w-[862px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function SingleImageContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Single Image Container">
      <div className="aspect-[1744/565] flex-[1_0_0] min-w-px relative" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function SolutionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="Solution Content">
      <ImagesRow1 />
      <SingleImageContainer />
    </div>
  );
}

function SolutionSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-0 p-[80px] top-[3533px] w-[1920px]" data-name="Solution Section">
      <TextBlock2 />
      <SolutionContent />
    </div>
  );
}

function DateContainer() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(32,32,31,0.7)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Date Container">
      <div aria-hidden className="absolute border border-[rgba(32,32,31,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap">2025</p>
    </div>
  );
}

function ProjectImage() {
  return (
    <div className="aspect-[442.33331298828125/331.7499694824219] relative shrink-0 w-full" data-name="Project Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#909090] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgProjectImage} />
      </div>
      <div className="content-stretch flex items-start p-[20px] relative size-full">
        <DateContainer />
      </div>
    </div>
  );
}

function LabelsContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-end justify-between leading-[normal] not-italic relative shrink-0 text-[#20201f] w-full whitespace-nowrap" data-name="Labels Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px] tracking-[-0.48px]">navicu.com</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] tracking-[-0.4px]">Branding, Web design</p>
    </div>
  );
}

function ProjectItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Project Item">
      <ProjectImage />
      <LabelsContainer />
    </div>
  );
}

function DateContainer1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(32,32,31,0.7)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Date Container">
      <div aria-hidden className="absolute border border-[rgba(32,32,31,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap">2025</p>
    </div>
  );
}

function ProjectImage1() {
  return (
    <div className="aspect-[442.33331298828125/331.7499694824219] relative shrink-0 w-full" data-name="Project Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#909090] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgProjectImage1} />
      </div>
      <div className="content-stretch flex items-start p-[20px] relative size-full">
        <DateContainer1 />
      </div>
    </div>
  );
}

function LabelsContainer1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-end justify-between leading-[normal] not-italic relative shrink-0 text-[#20201f] w-full whitespace-nowrap" data-name="Labels Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px] tracking-[-0.48px]">navicu.com</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] tracking-[-0.4px]">Branding, Web design</p>
    </div>
  );
}

function ProjectItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Project Item">
      <ProjectImage1 />
      <LabelsContainer1 />
    </div>
  );
}

function DateContainer2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(32,32,31,0.7)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Date Container">
      <div aria-hidden className="absolute border border-[rgba(32,32,31,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap">2025</p>
    </div>
  );
}

function ProjectImage2() {
  return (
    <div className="aspect-[442.33331298828125/331.7499694824219] relative shrink-0 w-full" data-name="Project Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#909090] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgProjectImage2} />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[155.53%] left-[-17.5%] max-w-none top-[-0.05%] w-[138.74%]" src={imgProjectImage3} />
        </div>
      </div>
      <div className="content-stretch flex items-start p-[20px] relative size-full">
        <DateContainer2 />
      </div>
    </div>
  );
}

function LabelsContainer2() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-end justify-between leading-[normal] not-italic relative shrink-0 text-[#20201f] w-full whitespace-nowrap" data-name="Labels Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px] tracking-[-0.48px]">navicu.com</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] tracking-[-0.4px]">Branding, Web design</p>
    </div>
  );
}

function ProjectItem2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Project Item">
      <ProjectImage2 />
      <LabelsContainer2 />
    </div>
  );
}

function ProjectsContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Projects Container">
      <ProjectItem />
      <ProjectItem1 />
      <ProjectItem2 />
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[52px] items-start left-0 p-[80px] top-[5578px] w-[1920px]" data-name="Projects Section">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0.9] not-italic relative shrink-0 text-[#20201f] text-[68px] tracking-[-4.08px] w-[578px]">Proyectos más recientes</p>
      <ProjectsContainer />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0.9] not-italic relative shrink-0 text-[52px] text-white tracking-[-2.6px] w-[393px]">Hacemos grande tu marca</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <ContentContainer />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_0_16.25%_13.23%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135.365 43.5512">
        <g id="Group">
          <path d={svgPaths.p1054cc80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2724c000} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p10bdaf80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p16983e00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1c78a900} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[0_0_16.25%_13.23%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group1 />
      <div className="absolute inset-[22.83%_90.6%_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6568 40.1276">
          <path d={svgPaths.p3503c500} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="h-[52px] relative shrink-0 w-[156px]" data-name="Icon Container">
      <Group />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px overflow-clip relative" data-name="Container">
      <IconContainer />
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22.4px] top-1/2" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4 22.4">
        <g id="Group">
          <path d={svgPaths.p189e7b00} fill="var(--fill-0, #909090)" id="Vector" />
          <path d={svgPaths.p30480d70} fill="var(--fill-0, #909090)" id="Vector_2" />
          <path d={svgPaths.p2f83e100} fill="var(--fill-0, #909090)" id="Vector_3" />
          <path d={svgPaths.p3eb5980} fill="var(--fill-0, #909090)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2">
      <Group3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-0 size-[28px] top-0">
      <Group11 />
    </div>
  );
}

function Slot() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Slot">
      <Frame />
    </div>
  );
}

function SocialContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[18px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.64px] whitespace-nowrap" data-name="Social Container">
      <p className="relative shrink-0">Instagram</p>
      <p className="relative shrink-0">LinkedIn</p>
    </div>
  );
}

function ContactContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0" data-name="Contact Container">
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Email Container">
        <Slot />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#909090] text-[24px] text-right tracking-[-0.96px] whitespace-nowrap">info@jacidi.com</p>
      </div>
      <SocialContainer />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-name="Container">
      <ContactContainer />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-end relative shrink-0 w-full" data-name="row">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.64px] w-full whitespace-nowrap" data-name="Container">
      <p className="relative shrink-0">Jacidi C.A, 2026</p>
      <p className="relative shrink-0">Política de cookies</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="row">
      <Container3 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#20201f] relative rounded-[16px] shrink-0 w-full" data-name="section">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[112px] items-end px-[64px] py-[44px] relative size-full">
          <Row />
          <Row1 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 p-[80px] w-[1920px]" data-name="Footer">
      <Section />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[6.69%_1.7%_32.64%_42.73%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102.791 31.5492">
        <g id="Group">
          <path d={svgPaths.p326a9400} fill="var(--fill-0, #20201F)" id="Vector" />
          <path d={svgPaths.p6459b00} fill="var(--fill-0, #20201F)" id="Vector_2" />
          <path d={svgPaths.p1915c100} fill="var(--fill-0, #20201F)" id="Vector_3" />
          <path d={svgPaths.p392fe300} fill="var(--fill-0, #20201F)" id="Vector_4" />
          <path d={svgPaths.p2ffd1572} fill="var(--fill-0, #20201F)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[6.69%_1.7%_32.64%_42.73%]" data-name="Group">
      <Group7 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[6.69%_1.7%_20.87%_34.26%]" data-name="Group">
      <Group6 />
      <div className="absolute inset-[23.23%_59.72%_20.87%_34.26%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1298 29.0691">
          <path d={svgPaths.p284b06f2} fill="var(--fill-0, #20201F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[6.12%_73.61%_6.12%_1.7%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.6678 45.6326">
        <g id="Group">
          <path d={svgPaths.p19971f0} fill="var(--fill-0, #20201F)" id="Vector" />
          <path d={svgPaths.p12a60600} fill="var(--fill-0, #20201F)" id="Vector_2" />
          <path d={svgPaths.p21a113f2} fill="var(--fill-0, #20201F)" id="Vector_3" />
          <path d={svgPaths.p240a4c00} fill="var(--fill-0, #20201F)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[6.12%_1.7%]" data-name="Group">
      <Group5 />
      <Group8 />
    </div>
  );
}

function JacidiLogo() {
  return (
    <div className="h-[52px] relative shrink-0 w-[185px]" data-name="jacidi-logo">
      <Group4 />
    </div>
  );
}

function NavItemContainer() {
  return (
    <div className="bg-[#20201f] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[29px] shrink-0" data-name="Nav Item Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.54px] whitespace-nowrap">Contacto</p>
    </div>
  );
}

function NavigationContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Navigation Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#20201f] text-[18px] text-center tracking-[-0.54px] whitespace-nowrap">Inicio</p>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#20201f] text-[18px] text-center tracking-[-0.54px] whitespace-nowrap">Servicios</p>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#20201f] text-[18px] text-center tracking-[-0.54px] whitespace-nowrap">Proyectos</p>
      <NavItemContainer />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0.9] not-italic relative shrink-0 text-[#20201f] text-[120px] tracking-[-6px] w-[691px]">Let’s Talk</p>
    </div>
  );
}

function Column() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[80px] items-start justify-center not-italic relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#20201f] text-[40px] tracking-[-2.4px] w-[614px]">
        Tu idea merece algo mejor.
        <br aria-hidden />
        ¡Contáctanos!
      </p>
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none relative shrink-0 text-[#909090] text-[80px] tracking-[-4.8px] underline w-[614px]">info@jacidi.com</p>
    </div>
  );
}

function FieldContainer() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Field Container">
      <div aria-hidden className="absolute border-[rgba(32,32,31,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[16px] pl-[14px] pr-[8px] pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0.9] not-italic relative shrink-0 text-[#404040] text-[20px] tracking-[-1px] whitespace-nowrap">Nombre y apellido</p>
      </div>
    </div>
  );
}

function FieldContainer1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Field Container">
      <div aria-hidden className="absolute border-[rgba(32,32,31,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[16px] pl-[14px] pr-[8px] pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0.9] not-italic relative shrink-0 text-[#404040] text-[20px] tracking-[-1px] whitespace-nowrap">Correo electrónico</p>
      </div>
    </div>
  );
}

function FormRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Form Row">
      <FieldContainer />
      <FieldContainer1 />
    </div>
  );
}

function FieldContainer2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Field Container">
      <div aria-hidden className="absolute border-[rgba(32,32,31,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[16px] pl-[14px] pr-[8px] pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0.9] not-italic relative shrink-0 text-[#404040] text-[20px] tracking-[-1px] whitespace-nowrap">Número de teléfono</p>
      </div>
    </div>
  );
}

function FieldContainer3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Field Container">
      <div aria-hidden className="absolute border-[rgba(32,32,31,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[16px] pl-[14px] pr-[8px] pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0.9] not-italic relative shrink-0 text-[#404040] text-[20px] tracking-[-1px] whitespace-nowrap">Ciudad</p>
      </div>
    </div>
  );
}

function FormRow1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Form Row">
      <FieldContainer2 />
      <FieldContainer3 />
    </div>
  );
}

function FormRow2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form Row">
      <div aria-hidden className="absolute border-[rgba(32,32,31,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[16px] pl-[14px] pr-[8px] pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0.9] not-italic relative shrink-0 text-[#404040] text-[20px] tracking-[-1px] whitespace-nowrap">Servicio requerido</p>
      </div>
    </div>
  );
}

function FormRow3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form Row">
      <div aria-hidden className="absolute border-[rgba(32,32,31,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[16px] pl-[14px] pr-[8px] pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0.9] not-italic relative shrink-0 text-[#404040] text-[20px] tracking-[-1px] whitespace-nowrap">CV (Vacantes)</p>
      </div>
    </div>
  );
}

function FormFields() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Form Fields">
      <FormRow />
      <FormRow1 />
      <FormRow2 />
      <FormRow3 />
    </div>
  );
}

function SubmitButton() {
  return (
    <div className="bg-[#20201f] content-stretch flex items-center justify-center pl-[14px] pr-[8px] py-[16px] relative rounded-[6px] shrink-0 w-[195px]" data-name="Submit Button">
      <div aria-hidden className="absolute border border-[rgba(32,32,31,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0.9] not-italic relative shrink-0 text-[20px] text-white tracking-[-1px] whitespace-nowrap">Enviar</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end relative shrink-0 w-[710px]" data-name="Column">
      <FormFields />
      <SubmitButton />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1760px]" data-name="Row">
      <Column />
      <Column1 />
    </div>
  );
}

function SectionContact() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-0 p-[80px] top-[6387px] w-[1920px]" data-name="Section - Contact">
      <Row2 />
      <Row3 />
    </div>
  );
}

function Group10() {
  return (
    <div className="col-1 h-[33.846px] ml-0 mt-0 relative row-1 w-[33.872px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8722 33.8462">
        <g id="Group">
          <path d={svgPaths.p351c16b0} fill="var(--fill-0, #20201F)" id="Vector" />
          <path d={svgPaths.p3dece500} fill="var(--fill-0, #20201F)" id="Vector_2" />
          <path d={svgPaths.p3d1e9f00} fill="var(--fill-0, #20201F)" id="Vector_3" />
          <path d={svgPaths.p3a148440} fill="var(--fill-0, #20201F)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group10 />
    </div>
  );
}

function JacidiLogo1() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start p-[3.077px] relative shrink-0" data-name="jacidi-logo">
      <Group9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[11px] items-center leading-[normal] not-italic relative shrink-0 text-[#20201f] text-[14px] text-center tracking-[-0.42px] whitespace-nowrap">
      <p className="relative shrink-0">Inicio</p>
      <p className="relative shrink-0">Servicios</p>
      <p className="relative shrink-0">Nosotros</p>
      <p className="relative shrink-0">Proyectos</p>
    </div>
  );
}

function NavItemContainer1() {
  return (
    <div className="bg-[#20201f] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[29px] shrink-0" data-name="Nav Item Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.42px] whitespace-nowrap">Contacto</p>
    </div>
  );
}

function NavigationContainer1() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[20px] items-center relative shrink-0" data-name="Navigation Container">
      <Frame1 />
      <NavItemContainer1 />
    </button>
  );
}

export default function CaseStudy() {
  return (
    <div className="bg-white relative size-full" data-name="Case Study">
      <HeroSection />
      <IntroductionSection />
      <IntroductionSection1 />
      <SolutionSection />
      <ProjectsSection />
      <Footer />
      <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pb-[32px] pt-[28px] px-[80px] top-0 w-[1920px]" data-name="Non-Sticky Header">
        <JacidiLogo />
        <NavigationContainer />
      </div>
      <SectionContact />
      <div className="absolute backdrop-blur-[22px] bg-[rgba(255,255,255,0.85)] content-stretch flex items-center justify-between left-[calc(25%+264px)] pl-[18px] pr-[12px] py-[10px] rounded-[64px] top-[24px] w-[524px]" data-name="Sticky Header">
        <div aria-hidden className="absolute border border-[rgba(32,32,31,0.2)] border-solid inset-0 pointer-events-none rounded-[64px]" />
        <JacidiLogo1 />
        <NavigationContainer1 />
      </div>
    </div>
  );
}