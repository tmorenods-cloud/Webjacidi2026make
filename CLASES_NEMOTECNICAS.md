# Clases Nemotécnicas del Proyecto Jacidi

Este documento contiene todas las clases nemotécnicas asignadas a los componentes del proyecto para facilitar su identificación y manipulación.

## Componentes Globales

### Root Layout (`src/app/components/Root.tsx`)
- `root-layout` - Layout principal de la aplicación
- `page-content` - Contenedor del contenido de las páginas

#### Header Estático
- `header-estatico` - Header estático principal
- `contenedor-header-estatico` - Contenedor del header estático
- `contenido-header-estatico` - Contenido interno del header
- `logo-header-estatico` - Logo Jacidi en header estático
- `svg-logo-jacidi-grande` - SVG del logo grande
- `nav-header-estatico` - Navegación del header estático
- `nav-link-inicio` - Link de navegación "Inicio"
- `nav-link-servicios` - Link de navegación "Servicios"
- `nav-link-nosotros` - Link de navegación "Nosotros"
- `nav-link-proyectos` - Link de navegación "Proyectos"
- `boton-contacto-header` - Botón CTA de contacto
- `texto-boton-contacto` - Texto del botón de contacto

#### Header Sticky Pill
- `header-sticky-pill` - Header flotante tipo píldora
- `logo-sticky-pill` - Logo en header sticky
- `svg-logo-jacidi-pequeno` - SVG del logo pequeño
- `nav-sticky-container` - Contenedor de navegación sticky
- `nav-sticky-links` - Links de navegación sticky
- `nav-link-sticky-inicio` - Link "Inicio" en sticky
- `nav-link-sticky-servicios` - Link "Servicios" en sticky
- `nav-link-sticky-nosotros` - Link "Nosotros" en sticky
- `nav-link-sticky-proyectos` - Link "Proyectos" en sticky
- `boton-sticky-contacto` - Botón de contacto en sticky
- `texto-boton-sticky` - Texto del botón sticky

### Sección de Contacto (`src/app/components/global/SectionContact.tsx`)
- `seccion-contacto` - Sección completa de contacto
- `contenedor-contacto` - Contenedor principal
- `encabezado-contacto` - Encabezado de la sección
- `titulo-lets-talk` - Título "Let's Talk"
- `contenido-contacto` - Contenido principal
- `info-contacto` - Columna de información
- `descripcion-contacto` - Texto descriptivo
- `email-contacto` - Email con hover
- `formulario-contacto` - Formulario de contacto
- `campos-formulario` - Contenedor de campos
- `fila-campos` - Fila de campos del formulario
- `campo-input` - Campo individual
- `borde-campo` - Borde decorativo del campo
- `contenido-campo` - Contenido del campo
- `label-campo` - Label del campo
- `boton-enviar` - Botón de envío
- `texto-boton-enviar` - Texto del botón

### Footer (`src/app/components/global/Footer.tsx`)
- `seccion-footer` - Sección completa del footer
- `contenedor-footer` - Contenedor principal
- `footer-inner` - Tarjeta negra del footer
- `contenido-footer` - Contenido del footer
- `footer-top` - Parte superior del footer
- `columna-slogan` - Columna con el slogan
- `texto-slogan` - Texto del slogan
- `columna-logo` - Columna con logo
- `logo-footer-jacidi` - Logo SVG del footer
- `columna-info` - Columna de información
- `info-contacto-footer` - Información de contacto
- `email-footer` - Email en footer
- `icono-email` - Icono de email
- `texto-email-footer` - Texto del email
- `redes-sociales` - Links de redes sociales
- `link-instagram` - Link a Instagram
- `link-linkedin` - Link a LinkedIn
- `footer-bottom` - Parte inferior del footer
- `copyright-footer` - Copyright
- `politica-cookies` - Link de política de cookies

## Página Home (`src/app/pages/HomePage.tsx`)

### Sección Hero
- `seccion-hero` - Sección hero completa
- `titulo-hero` - Título principal del hero
- `contenedor-imagen-hero` - Contenedor de la imagen
- `imagen-hero` - Imagen principal del hero

### Sección Intro y Detalles
- `seccion-intro-detalles` - Sección completa
- `contenedor-texto-intro` - Contenedor del texto
- `texto-intro` - Texto introductorio
- `marquesina-mockups-superior` - Marquesina superior
- `marquesina-mockups-inferior` - Marquesina inferior
- `contenedor-estadisticas` - Contenedor de estadísticas
- `lista-estadisticas` - Lista de estadísticas
- `item-estadistica` - Item individual de estadística
- `texto-estadistica` - Texto de la estadística
- `boton-lets-talk` - Botón "Let's talk"

### Componentes de Marquesina
- `contenedor-marquesina` - Contenedor general de marquesina
- `marquesina-izq` - Marquesina dirección izquierda
- `marquesina-der` - Marquesina dirección derecha
- `track-marquesina` - Track animado de la marquesina

### Tarjetas de Logo
- `tarjeta-logo-cliente` - Tarjeta individual de logo
- `contenido-tarjeta-logo` - Contenido de la tarjeta
- `borde-tarjeta-logo` - Borde decorativo
- `texto-nombre-cliente` - Nombre del cliente
- `fila-logos-1` - Primera fila de logos
- `fila-logos-2` - Segunda fila de logos

### Tarjetas de Mockup
- `tarjeta-mockup` - Tarjeta de mockup
- `contenedor-imagen-mockup` - Contenedor de imagen
- `fondo-mockup` - Fondo de la tarjeta
- `imagen-mockup` - Imagen del mockup
- `contenido-marquesina-mockups-1` - Contenido marquesina 1
- `contenido-marquesina-mockups-2` - Contenido marquesina 2

### Sección de Enfoque Creativo
- `seccion-enfoque` - Sección completa
- `contenedor-enfoque` - Contenedor principal
- `titulo-enfoque` - Título de la sección
- `grid-enfoque` - Grid de columnas
- `columna-enfoque` - Columna individual
- `columna-enfoque-1` a `columna-enfoque-4` - Columnas numeradas
- `contenido-columna-enfoque` - Contenido de columna
- `texto-enfoque` - Texto de la columna
- `espaciador-superior` - Espaciador superior
- `espaciador-inferior` - Espaciador inferior

### Sección de Servicios
- `seccion-servicios` - Sección completa
- `contenedor-servicios` - Contenedor principal
- `tarjeta-servicios` - Tarjeta negra de servicios
- `contenido-servicios` - Contenido de servicios
- `titulo-servicios` - Título "Lo que hacemos por ti"
- `lista-servicios` - Lista de servicios
- `item-servicio` - Item individual de servicio
- `item-servicio-01` a `item-servicio-04` - Items numerados
- `separador-servicio` - Separador del servicio
- `linea-separador` - Línea decorativa
- `numero-servicio` - Número del servicio
- `detalles-servicio` - Detalles del servicio
- `nombre-servicio` - Nombre del servicio
- `descripcion-servicio` - Descripción del servicio
- `subtitulo-servicio` - Subtítulo
- `lista-items-servicio` - Lista de items
- `item-lista-servicio` - Item de la lista

### Sección de Clientes (Logos)
- `seccion-clientes-logos` - Sección completa
- `contenedor-titulo-clientes` - Contenedor del título
- `titulo-clientes` - Título "Nuestros Clientes"
- `contenedor-marquesinas-logos` - Contenedor de marquesinas
- `fade-izquierdo` - Gradiente izquierdo
- `fade-derecho` - Gradiente derecho
- `marquesina-logos-row1` - Primera fila de logos
- `marquesina-logos-row2` - Segunda fila de logos

### Sección de Proyectos
- `seccion-proyectos` - Sección completa
- `contenedor-proyectos` - Contenedor principal
- `encabezado-proyectos` - Encabezado de proyectos
- `titulo-proyectos` - Título de la sección
- `subtitulo-proyectos` - Subtítulo
- `contenido-proyectos` - Contenido principal
- `lista-proyectos` - Lista de proyectos
- `item-proyecto` - Item individual
- `item-proyecto-1` a `item-proyecto-7` - Items numerados
- `nombre-proyecto` - Nombre del proyecto
- `indicador-proyecto` - Indicador visual
- `linea-indicador` - Línea naranja del indicador
- `preview-proyecto` - Preview del proyecto
- `contenedor-imagen-proyecto` - Contenedor de imagen
- `imagen-preview-proyecto` - Imagen del preview
- `tarjeta-info-proyecto` - Tarjeta de información
- `lista-logros-proyecto` - Lista de logros
- `logro-proyecto` - Logro individual
- `imagen-placeholder-proyecto` - Imagen placeholder
- `cta-ver-proyectos` - CTA "Ver todos los proyectos"
- `fondo-hover-cta` - Fondo animado del CTA
- `texto-cta-proyectos` - Texto del CTA
- `icono-flecha-cta` - Icono de flecha

### Sección About con Imagen
- `seccion-about-imagen` - Sección completa
- `contenedor-about-imagen` - Contenedor principal
- `columna-imagen-about` - Columna de imagen
- `contenedor-imagenes-superpuestas` - Contenedor de imágenes
- `imagen-about-base` - Imagen base
- `imagen-about-overlay` - Imagen superpuesta
- `columna-texto-about` - Columna de texto
- `titulo-about-imagen` - Título de la sección
- `descripcion-about` - Descripción
- `texto-descripcion-about` - Texto descriptivo
- `llamada-accion-about` - Llamada a la acción

## Página Nosotros (`src/app/components/NosotrosPage.tsx`)

### Sección Intro
- `seccion-intro-nosotros` - Sección completa
- `encabezado-intro-nosotros` - Encabezado
- `titulo-intro-nosotros` - Título "Nuestra Esencia"
- `contenedor-imagen-intro-nosotros` - Contenedor de imagen
- `fondo-imagen-intro` - Fondo gris
- `imagen-intro-nosotros` - Imagen principal
- `descripcion-intro-nosotros` - Descripción

### Sección de Valores
- `seccion-valores-nosotros` - Sección completa
- `contenedor-valores` - Contenedor de valores
- `tarjeta-valor` - Tarjeta individual
- `tarjeta-valor-1` a `tarjeta-valor-3` - Tarjetas numeradas
- `borde-superior-valor` - Borde decorativo
- `contenido-valor` - Contenido de la tarjeta
- `contenedor-icono-valor` - Contenedor del icono
- `posicion-icono-valor` - Posición del icono
- `icono-valor-svg` - SVG del icono
- `texto-valor` - Texto del valor
- `titulo-valor` - Título del valor
- `descripcion-valor` - Descripción del valor

### Sección About
- `seccion-about-nosotros` - Sección completa
- `columna-texto-nosotros` - Columna de texto
- `contenido-texto-nosotros` - Contenido del texto
- `titulo-about-nosotros` - Título "Jacidi nació para"
- `descripcion-about-nosotros` - Descripción
- `texto-about-nosotros` - Texto descriptivo
- `cta-lets-talk-nosotros` - CTA "Let's talk"
- `columna-imagen-nosotros` - Columna de imagen
- `imagen-about-nosotros-base` - Imagen base
- `imagen-about-nosotros-overlay` - Imagen superpuesta

## Notas de Uso

- Todas las clases siguen una nomenclatura en español descriptiva
- Las clases están organizadas jerárquicamente (sección > contenedor > elemento)
- Los elementos repetidos tienen sufijos numerados (ej: `item-servicio-01`, `item-servicio-02`)
- Las clases de estado o variante incluyen el modificador (ej: `marquesina-izq`, `marquesina-der`)

## Página Proyectos (`src/app/pages/ProyectosPage.tsx`)

### Estructura General
- `pagina-proyectos` - Página completa de proyectos
- `encabezado-proyectos` - Encabezado de la página
- `titulo-pagina-proyectos` - Título "Nuestros casos de éxito"
- `contenedor-grid-proyectos` - Contenedor principal del grid
- `fila-proyectos-1` - Primera fila (7 columnas)
- `fila-proyectos-2` - Segunda fila (3 columnas)
- `fila-proyectos-3` - Tercera fila (3 columnas)

### Tarjeta de Proyecto Grande
- `tarjeta-proyecto` - Tarjeta de proyecto completa
- `tarjeta-proyecto-grande` - Modificador para tarjeta grande
- `tarjeta-proyecto-normal` - Modificador para tarjeta normal
- `contenedor-imagen-proyecto` - Contenedor de imagen con overflow
- `fondo-gradiente-proyecto` - Fondo con gradiente
- `contenedor-zoom-imagen` - Contenedor para efecto zoom
- `imagen-proyecto` - Imagen con efecto zoom al hover
- `badge-año` - Badge del año del proyecto
- `info-proyecto` - Contenedor de información del proyecto
- `titulo-proyecto` - Título del proyecto
- `contenedor-tags-flecha` - Contenedor de tags y flecha
- `contenedor-tags` - Contenedor con overflow para tags
- `tags-texto` - Texto de tags con animación slide-up

### Tarjeta de Proyecto Pequeña
- `tarjeta-proyecto-small` - Tarjeta pequeña de proyecto
- `contenedor-imagen-proyecto-small` - Contenedor de imagen pequeño
- `imagen-proyecto-small` - Imagen pequeña
- `badge-año-small` - Badge año para tarjeta pequeña
- `info-proyecto-small` - Info para tarjeta pequeña
- `titulo-proyecto-small` - Título de proyecto pequeño
- `contenedor-tags-flecha-small` - Contenedor tags/flecha pequeño
- `contenedor-tags-small` - Contenedor tags pequeño
- `tags-texto-small` - Texto tags pequeño

### Componente Flecha
- `contenedor-flecha-proyecto` - Contenedor de la flecha SVG
- `svg-flecha-proyecto` - SVG de la flecha
- `path-flecha-visible` - Path visible por defecto (se mueve diagonal)
- `path-flecha-oculta` - Path oculto por defecto (aparece al hover)

### Interacciones
- Todas las tarjetas tienen hover states que activan:
  - Zoom 12% en la imagen (0.5s cubic-bezier(0.76, 0, 0.24, 1))
  - Slide-up de tags desde translateY(100%)
  - Animación diagonal de flechas (intercambio de paths)

## Próximos Pasos

Este sistema de clases nemotécnicas facilita:
- Búsqueda rápida de elementos en el DOM
- Aplicación de animaciones GSAP
- Debugging y desarrollo
- Documentación y mantenimiento del código
