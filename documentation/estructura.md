# Estructura del Proyecto: Web Jacidi 2026

A continuación se detalla la lista de todos los componentes y elementos del DOM del proyecto, separados por páginas. Se identifican los textos, encabezados, imágenes y listas, así como su naturaleza: **Global**, **Estático** o **Dinámico**.

---

## 🌍 Elementos Globales (Renderizados en todas las páginas vía `Root.tsx`)

Estos elementos persisten en la navegación de toda la web.

### Headers / Navegación
- **StaticHeader** (Estático/Dinámico - visibilidad basada en scroll, Desktop):
  - Imagen: Logo corporativo (`LogoCorporativo`).
  - Textos (Links): "Inicio", "Servicios", "Nosotros", "Proyectos".
  - Botón (CTA): "Contacto".
- **StickyHeaderPill** (Dinámico - aparece al hacer scroll, Desktop):
  - Imagen: Isotipo corporativo (`IsotipoCorporativo`).
  - Textos (Links): "Inicio", "Servicios", "Nosotros", "Proyectos".
  - Botón (CTA): "Contacto".
- **MobileHeader** (Dinámico - Menú tipo burger, Mobile):
  - Imagen: Isotipo corporativo (`IsotipoCorporativo`).
  - Menú desplegable: "Inicio", "Servicios", "Nosotros", "Proyectos", "Contacto".
- **DarkModeToggle** (Dinámico - Cambia estado y animaciones, oculto en HomePage):
  - Iconos SVG de Sol/Luna que rotan.

### Sección Footer / Contacto (Al final de cada página)
- **SectionContact**:
  - H2 (Display): "Let's Talk" (Estático).
  - Textos descriptivos: "Tu idea merece algo mejor. ¡Contáctanos!" (Estático).
  - Link de correo: "info@jacidi.com" (Estático).
  - Tabs interactivos: "Solicitar Servicio" / "Vacantes" (Dinámico).
  - Formulario de Contacto (Dinámico):
    - Inputs de texto: Nombre, Correo, Teléfono, Ciudad.
    - Select desplegable: Lista de servicios.
    - Textarea: Mensaje.
    - Componente de subida de archivo (CV/Portafolio) y campo para URL.
  - Botón: "Enviar mensaje" con icono SVG.
- **Footer**:
  - H2/Display: "Hacemos grande tu marca" (Estático).
  - Imagen: Isotipo grande en SVG (Estático).
  - Textos/Links: Correo electrónico, "Instagram", "LinkedIn", "Jacidi, 2026", "Política de cookies" (Estático).

---

## 🏠 HomePage (`/`)

### 1. HeroSection
- **H1 (Display XL)**: "Hacemos grande tu marca" (Estático).
- **Media**: Video de fondo auto-reproducible (Estático).

### 2. IntroAndDetailsSection
- **Texto (Lead XL)**: "Innovación y creatividad es nuestro ADN..." (Estático).
- **Marquesina Superior** (Dinámico - movimiento infinito): Imágenes de mockups (`MockupCard`).
- **Lista (Estadísticas)** (Estático):
  - "+10 Años de Know-How (España & Latam)"
  - "+90 Proyectos Ejecutados"
  - "+70 Profesionales Especializados"
  - "52% ROI Promedio..."
  - "1M$ invertidos en Paid Media"
- **Botón (CTA)**: "Let's talk" (Estático).
- **Marquesina Inferior** (Dinámico - movimiento infinito): Imágenes de mockups.

### 3. SectionAbout
- **H2**: "Nuestro enfoque creativo" (Estático).
- **Grid de textos** (Estático): 4 bloques de texto describiendo metodologías ("Innovamos el mercado con strategies", etc.).

### 4. SectionServices
- **H2**: "Lo que hacemos por ti" (Estático).
- **Lista de Servicios** (Estático/Mapeado de array): 4 bloques iterados.
  - **H4 / Número**: "01", "02", "03", "04".
  - **H3**: Nombre del servicio (Marketing, Diseño, Desarrollo, Consultoría).
  - **Texto (Subtítulo)**: Descripción del servicio.
  - **Lista (Bullets)**: Lista `<ul>` con las características de cada área.

### 5. SectionClientsLogos
- **H2**: "Nuestros Clientes" (Estático).
- **Marquesinas de Logos** (Dinámico): 2 filas con tarjetas (`LogoCard`) y nombres de clientes (`LogoText`).

### 6. SectionProyects
- **H2**: "Esto es lo que hacemos" (Estático).
- **Texto (Subtítulo)**: "Conoce nuestra experiencia a través de nuestros clientes" (Estático).
- **Lista interactiva de proyectos** (Dinámico):
  - Textos con los nombres de proyectos ("Navicu.com", "Mas Oliu", etc.) que reaccionan al hover.
  - Imagen principal que cambia dinámicamente (`activeClient`) con transiciones.
  - Lista de logros superpuesta (bullets) que cambia según el proyecto activo.
- **Botón gigante (CTA)**: "Ver todos los proyectos" (Animado/Dinámico al hacer hover).

### 7. SectionAboutImage
- **Imágenes**: Imágen fotográficas (Estático).
- **H3**: "Te ofrecemos soluciones reales para resultados comerciales reales" (Estático).
- **Textos**: Párrafo descriptivo de la trayectoria de Jacidi y frase CTA "¡Haz grande tu marca hoy!" (Estático).

---

## 👥 NosotrosPage (`/nosotros`)

### 1. NosotrosIntroSection
- **H1 (Alt)**: "Nuestra Esencia" (Estático).
- **Imagen**: Imagen hero introductoria (Estático).
- **Texto (Lead LG)**: "No somos solo una consultora digital; somos agentes de cambio..." (Estático).

### 2. NosotrosValuesSection
- **Grid de Valores** (Estático/Mapeado): 3 tarjetas.
  - **Imágenes (Iconos SVG)**: Innovación, Excelencia, Compromiso.
  - **H3 (Card)**: Títulos de valores ("Innovación Constante", etc.).
  - **Texto**: Descripción de cada valor.

### 3. NosotrosAboutSection
- **H2/H3**: "Jacidi nació para" (Estático).
- **Texto**: Descripción corporativa (Estático).
- **Botón (CTA)**: "Let's talk" (Estático).
- **Imágenes**: 2 Imágenes fotográficas superpuestas (Estático).

---

## 📁 ProyectosPage (`/proyectos`)

### 1. Encabezado
- **H1**: "Nuestros casos de éxito" (Estático).

### 2. Grid de Proyectos
- **Tarjetas de Proyectos** (Dinámicas - responden a hover y dirigen a URL dinámica):
  - Tipos: `ProjectCardLarge`, `ProjectCardNormal`, `ProjectCardSmall`.
  - **Imagen**: Miniatura del proyecto con efecto de zoom (Dinámico).
  - **Etiqueta (Badge)**: Año del proyecto (Estático por tarjeta).
  - **H4 (Card title)**: Nombre del proyecto (Navicu.com, Grand Hyatt, etc.).
  - **Texto (Tags)**: Categorías (Marketing 360, Branding, etc.), reveladas con animación (Dinámico).
  - **Icono SVG**: `ArrowIcon` animada al hover (Dinámico).

---

## 📄 CaseStudyPage (`/proyectos/:slug` - Plantilla Dinámica)

Todos los elementos de esta página son **Dinámicos**, ya que su contenido (textos e imágenes) depende del caso de estudio (`slug`) cargado de la base de datos local.

### 1. HeroSection
- **Imagen**: Imagen principal a pantalla completa.
- **H1/Display**: Nombre del cliente.
- **Botón/Link**: "Visitar sitio" con icono de flecha diagonal.

### 2. IntroSection
- **H2**: Título introductorio.
- **Texto**: Párrafos explicativos del proyecto.
- **Lista**: Viñetas (`<ul>`) con detalles del proyecto.
- **Imágenes**: 2 Imágenes cuadradas de apoyo visual.

### 3. BrandingSection
- **H2**: Título de sección de branding.
- **Texto**: Descripción del branding.
- **Imagen**: Imagen fotográfica ancha (full width).

### 4. SolutionSection
- **H2**: Título explicativo de la solución.
- **Texto**: Párrafo de detalle de la solución aportada.
- **Imágenes**: Grid con 2 imágenes pequeñas y 1 imagen ancha en la parte inferior.

### 5. RelatedProjectsSection
- **H2/H3**: "Proyectos más recientes".
- **Grid de Proyectos**: 3 Tarjetas (`RelatedProjectCard`) con imagen, badge de fecha, título y tags de servicios.

---

## 🎨 DesignSystemPage (`/design-system` - Página de Documentación Interna)

Página **Estática** creada para visualizar la guía de estilos del proyecto, con un pequeño módulo **Dinámico** interactivo.

- **Encabezados Globales**: H1 "Jacidi · Design System", H2 y H3 de separación de secciones.
- **Textos de Documentación**: Variedad de etiquetas descriptivas (`Label`) y nombres de variables CSS.
- **Tipografía**: Muestra jerárquica de textos desde `Display XL` hasta `Small / Etiquetas` y `CTA`.
- **Colores**: Swatches interactivos de colores (Sólidos y con canal Alpha).
- **Espaciados**: Muestras visuales de Padding, Gaps y Border Radius.
- **Animaciones**: Lista de easing y tiempos de transición.
- **Clases nemotécnicas**: Tabla con clases de utilidades propias.
- **Paleta Inversa (Modo Oscuro)**: 
  - Tabla de tokens (Estática).
  - **Componente Dinámico**: Vista previa interactiva de una tarjeta que permite intercambiar entre modo claro y oscuro a través de un botón.

---

## 🔗 Relaciones y Flujo de Datos entre Componentes

Este apartado describe desde una perspectiva general cómo se conectan y relacionan lógicamente los componentes a lo largo del proyecto:

1. **Datos de Proyectos y Clientes (Eje Transversal)**:
   - La información de los clientes conecta tres áreas clave de la web. En el **HomePage** (`SectionProyects`), se exhibe una lista curada de clientes cuyas interacciones derivan al usuario hacia el caso de estudio correspondiente.
   - En **ProyectosPage**, un grid exhaustivo recoge todo el portafolio. Cada tarjeta actúa como un portal individual (utilizando un identificador o `slug` en la URL) hacia la página **CaseStudyPage**.
   - Adicionalmente, las marquesinas (ribbons) animadas en el **HomePage** exhiben los logotipos y mockups de estos mismos clientes, retroalimentando la identidad visual global.

2. **Diferenciación de Portadas (Hero Sections)**:
   - Existe una clara separación funcional entre la portada global del inicio y las portadas de los proyectos. 
   - El **HomePage** utiliza un recurso estático (un video de fondo o `videoHero`) que transmite la identidad genérica y el eslogan de la agencia de forma única.
   - Por el contrario, cada **CaseStudyPage** implementa una portada (`heroImage`) totalmente dinámica y exclusiva, dictada por la base de datos (e.g. `caseStudies.ts`), adaptando así la cabecera al contexto específico del cliente visualizado.

3. **Arquitectura Envolvente (Root.tsx)**:
   - El componente `Root.tsx` actúa como un estado global o "cascarón". Mantiene montados persistentemente los elementos compartidos como los Headers (`StaticHeader`, `StickyHeaderPill`), el `Footer` y la `SectionContact` (incluyendo su formulario). 
   - Gracias a esto, el usuario puede saltar entre el HomePage, Nosotros y los Proyectos sin que estas áreas de contacto deban recargarse.
   - Además, gestiona el estado global visual como el **Modo Oscuro**. En componentes específicos (como la sección de servicios del HomePage), un trigger en el scroll invierte el esquema de color (oscuro/claro) que repercute en cadena tanto en el menú de navegación como en el fondo global, probando que los componentes hijos pueden dictar el estado del padre.

4. **Coherencia mediante el Sistema de Diseño**:
   - Para mantener una identidad visual uniforme, elementos interactivos inconexos acuden al mismo lenguaje descrito en el **DesignSystemPage**. 
   - Por ejemplo, las llamadas a la acción (CTAs) repetidas en `NosotrosPage`, `HomePage` y `SectionContact` mantienen un formato estandarizado, al igual que los `ArrowIcon` interactivos que comparten exactamente las mismas curvas de transición (ej. `cubic-bezier` de 300ms a 500ms) sin importar si están en el listado, en un grid, o en el interior del caso de estudio.
