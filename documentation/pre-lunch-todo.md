# Pre-lunch To-Do: Plan de Acción y Tareas de Pulido

Este archivo contiene la lista de tareas de pulido estético y funcional de la web **Jacidi 2026**, junto con el plan de acción técnico detallado para cada una.

> [!IMPORTANT]
> **Preservación en Pulls**: Este archivo está comprometido en la rama `staging`. En cada `git pull origin main`, asegúrate de preservarlo y recuperarlo (junto con `.gitignore`, `scripts/` y `INSTRUCTIONS.md`) ejecutando:
> `git checkout HEAD -- pre-lunch-todo.md`

---

## 📋 Lista de Tareas (Checklist)

- [ ] **T-1: Ajuste de Letter-spacing**
  - [ ] Aplicar `-5%` (`tracking-[-0.05em]` / `-0.05em`) a todos los títulos.
  - [ ] Aplicar `-1.25%` (`tracking-[-0.0125em]` / `-0.0125em`) a todos los párrafos.
- [ ] **T-2: Reemplazo del Video Hero**
  - [ ] Cambiar la imagen del Hero en `HomePage.tsx` por el video local alojado en `src/assets/video/video-hero-prueba.mp4`.
- [ ] **T-3: Reemplazo de Imágenes de Portada**
  - [ ] Localizar y sustituir las imágenes principales del portafolio en `ProyectosPage.tsx` y `HomePage.tsx`.
- [ ] **T-4: Reemplazo de Imágenes de Clientes**
  - [ ] Sustituir los logos de clientes en la marquesina de logos en `HomePage.tsx`.
- [ ] **T-5: Reemplazo de Mockups en el Home**
  - [ ] Actualizar los mockups de la marquesina superior/inferior del Home.
- [ ] **T-6: Reemplazo del Icono de Contacto**
  - [ ] Sustituir el icono de contacto en la sección `SectionContact`.
- [ ] **T-7: Refactorización del "Image Reveal" (Sección Proyectos del Home)**
  - [ ] Mantener la imagen actual visible mientras se transiciona/revela la siguiente al hacer hover sobre los títulos de proyectos (evitando que desaparezca antes).
  - [ ] Mostrar una imagen por defecto cuando no se hace hover.
  - [ ] Implementar un carrusel automático con la misma animación que rote entre las imágenes de proyectos mientras no haya interacción del cursor.
  - [ ] Mantener fija la imagen del último título sobre el que se pasó el cursor al salir de la sección.

---

## 🛠️ Plan de Acción Técnico

### T-1: Ajuste de Letter-spacing (Tipografía)
*   **Archivos objetivo**: `src/styles/globals.css` u `src/styles/theme.css`.
*   **Plan**: 
    1. Para los títulos (`h1`, `h2`, `h3`, `h4`, `h5`, `h6` y clases de títulos customizados como `.titulo-hero`, `.titulo-proyectos`), añadir la regla:
       ```css
       letter-spacing: -0.05em; /* Equivalente al -5% */
       ```
    2. Para los párrafos (`p`, `span`, `li`), añadir:
       ```css
       letter-spacing: -0.0125em; /* Equivalente al -1.25% */
       ```
    3. Asegurarse de que no existan estilos inline en los componentes de Figma Make (como `style={{ letterSpacing: "..." }}`) que sobrescriban estas reglas, o usar `!important` si es necesario debido al código generado.

### T-2: Reemplazo del Video Hero
*   **Archivo objetivo**: [HomePage.tsx](file:///Users/tom/Documents/Web%20Jacidi%202026/Webjacidi2026make/src/app/pages/HomePage.tsx) (componente `HeroSection`).
*   **Plan**:
    1. Reemplazar la etiqueta `<img>` en `HeroSection` por una etiqueta `<video>` HTML5:
       ```tsx
       <video 
         src={videoHero} // Importar desde src/assets/video/video-hero-prueba.mp4
         autoPlay 
         loop 
         muted 
         playsInline 
         className="imagen-hero absolute inset-0 w-full h-full object-cover object-top mx-[0px] mt-[-10px] mb-[0px]"
       />
       ```
    2. Añadir la importación del video en la parte superior del archivo.

### T-3, T-4 y T-5: Reemplazo de Imágenes (Portadas, Clientes y Mockups)
*   **Plan**:
    1. Consolidar todas las nuevas imágenes físicas en el directorio `src/assets/` u organizar subcarpetas específicas (ej. `src/assets/clients/`, `src/assets/projects/`).
    2. Modificar el script de limpieza `scripts/clean-imports.cjs` o las constantes en `HomePage.tsx` / `ProyectosPage.tsx` para que apunten a los archivos locales correspondientes en lugar de las URLs temporales de Unsplash.

### T-6: Reemplazo del Icono de Contacto
*   **Archivo objetivo**: [SectionContact.tsx](file:///Users/tom/Documents/Web%20Jacidi%202026/Webjacidi2026make/src/app/components/global/SectionContact.tsx).
*   **Plan**:
    1. Ubicar el SVG actual de contacto o el marcador de icono en la sección.
    2. Reemplazar por el nuevo componente o archivo SVG correspondiente.

### T-7: Refactorización del "Image Reveal" (Home)
*   **Archivo objetivo**: [HomePage.tsx](file:///Users/tom/Documents/Web%20Jacidi%202026/Webjacidi2026make/src/app/pages/HomePage.tsx) (sección `SectionProyects`).
*   **Plan**:
    1. **Carrusel Automático (Sin Hover)**:
       - Configurar un `useEffect` con un `setInterval` que cambie el índice activo de proyecto (ej. cada 3 segundos) de forma automática.
       - Desactivar/pausar este temporizador en cuanto el usuario pase el cursor (`onMouseEnter`) por encima de cualquier título del listado.
    2. **Efecto de Transición "Reveal"**:
       - En lugar de renderizar una única etiqueta `<img>` que cambia su `src` dinámicamente (lo que causa que parpadee o desaparezca antes de cargar), renderizar todas las imágenes del portafolio superpuestas con posicionamiento absoluto.
       - Controlar la visibilidad de cada imagen utilizando opacidad (`opacity-0` / `opacity-100`) y `transition-opacity duration-500 ease-in-out` o mediante estados de Framer Motion.
       - Al cambiar de imagen, la imagen anterior se desvanece suavemente mientras la nueva se revela encima, evitando espacios vacíos.
    3. **Comportamiento al Salir del Hover (`onMouseLeave`)**:
       - Modificar `handleClientLeave` para que no devuelva el estado a `null` por defecto, sino que mantenga el índice del último proyecto seleccionado por el cursor.
