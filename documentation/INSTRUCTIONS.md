# Instrucciones del Proyecto: Web Jacidi 2026

Este archivo contiene toda la información de arquitectura, flujos de trabajo e instrucciones críticas para que cualquier asistente de IA que trabaje en este repositorio pueda continuar el desarrollo sin fricciones.

---

## 📌 Resumen del Proyecto
* **Tecnologías**: React, Vite, Tailwind CSS v4.
* **Integración**: Los diseños se exportan directamente desde **Figma Make** hacia la rama `main` en GitHub.
* **Problema de Assets**: Figma Make exporta archivos de imágenes locales muy grandes que superan el límite de 50MB de GitHub. Esto causa que las imágenes PNG no se suban, resultando en importaciones rotas (`import "@/imports/Home-1/..."`) dentro de `src/app/App.tsx` y provocando fallos de compilación en Vite/Vercel.

---

## ⚙️ Arquitectura de Ramas y Estrategia de Sincronización
Manejamos tres ramas en el repositorio para evitar que Figma Make sobrescriba nuestros scripts y archivos personalizados:

```mermaid
graph TD
    A[Figma Make] -- Sobrescribe y sube --> B(Rama 'main' en GitHub)
    B -- Pull & Merge local --> C(Rama local 'staging')
    Note over C: Resolvemos conflictos locales y mantenemos script, workflow y custom assets
    C -- Realiza Push --> D(Rama remota 'staging' en GitHub)
    D -- Dispara Action --> E[GitHub Action]
    E -- Limpia imports rotos --> F[clean-imports.cjs]
    F -- Force-push automático --> G(Rama remota 'production' en GitHub)
    G -- Despliega en vivo --> H[Vercel Live Production]
```

### Roles de cada Rama:
* **Rama `main`**: Contiene únicamente el código fuente en crudo directamente exportado por el bot de Figma Make. **Nunca** debes modificar o crear archivos directamente en `main` porque el bot los borrará en el siguiente export.
* **Rama `staging`**: Es nuestra rama de desarrollo e integración. Aquí vive el script de limpieza (`scripts/clean-imports.cjs`), el workflow `.github` y las imágenes/videos personalizados.
* **Rama `production`**: Contiene el código 100% limpio y compilable, generado de forma automatizada por la GitHub Action a partir de `staging`.
* **Vercel**: Está conectado directamente a la rama **`production`** para servir el sitio web en vivo.

### Flujo de Sincronización ante actualizaciones de Figma:
1. Asegurarse de estar en la rama de integración: `git checkout staging`.
2. Traer las novedades de Figma Make: `git pull origin main` (o `git pull --no-rebase origin main`).
3. Resolver los conflictos reteniendo siempre nuestros assets personalizados (como `video-hero-prueba.mp4` y el Isotipo en el Footer) y preservando los archivos de configuración y scripts (`.gitignore`, `scripts/`, `.github/`, `INSTRUCTIONS.md` y `pre-lunch-todo.md`).
4. Ejecutar el script localmente para validar: `node scripts/clean-imports.cjs`.
5. Subir los cambios a GitHub: `git push origin staging`.
6. Esto activará la GitHub Action que actualizará la rama `production` y disparará el despliegue automático en Vercel.

> [!TIP]
> **Sincronización Manual de Emergencia**: Si el GitHub Action tarda en ejecutarse o falla por problemas de permisos en el repositorio, puedes sincronizar y desplegar `production` ejecutando localmente:
> ```bash
> git checkout production
> git merge staging --ff-only
> git push origin production
> git checkout staging
> ```

---

## 🛠️ Script de Limpieza (`scripts/clean-imports.cjs`)
El script en `scripts/clean-imports.cjs` está escrito en CommonJS. Debe ejecutarse automáticamente en cada build/push de integración continua para mantener la compilación funcional.

### Funcionalidad del Script:
1. Escanea de forma recursiva todos los archivos `.tsx` y `.ts` dentro de `src/app/`.
2. Busca mediante expresiones regulares flexibles las importaciones rotas de `@/imports/.../*.png` que superan los 50MB y no existen localmente.
3. Las reemplaza en caliente por **URLs de imágenes premium y estables de Unsplash** que se adaptan a la paleta de colores minimalista de Jacidi (`#20201f`, `#909090`, `#f26b2d`).
4. **Mantenimiento ante nuevos assets**: Si Figma Make añade nuevas imágenes que causan errores por superar los 50MB (como al agregar nuevas páginas o secciones), se deben registrar sus correspondientes variables, nombres de archivo PNG exportados y URLs de reemplazo de Unsplash dentro del array `imageReplacements` en `scripts/clean-imports.cjs`.

---

## 📸 Reglas para incorporar Imágenes y Videos
* **Imágenes locales**: **NO** subir archivos de imágenes pesados que superen los 50MB a GitHub.
* **Sustitución**: Siempre que figma exporte imágenes rotas, usar URLs estables y curadas de Unsplash u otros servicios CDN rápidos.
* **Excepción**: La única regla para incorporar nuevas imágenes y videos reales locales en el código principal es que estén organizados dentro de un **módulo nuevo**, o que el usuario dé la instrucción explícita.

---

## 🚀 Comandos Útiles

### Iniciar servidor de desarrollo local:
```bash
npm run dev
```

### Ejecutar limpieza de imports localmente:
```bash
node scripts/clean-imports.cjs
```

---

*Nota para el Asistente: Si se realizan cambios locales, asegúrate de mantener intacto el archivo `clean-imports.cjs` y las configuraciones de flujos en `.github/workflows/sync-to-production.yml`.*
