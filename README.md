# Guía Interactiva: Fundamentos de la IA

Este proyecto es una guía interactiva diseñada como un material de estudio sobre los "Fundamentos de la Inteligencia Artificial". La aplicación presenta el contenido de una manera estructurada y fácil de navegar, enriquecida con elementos interactivos para mejorar la experiencia de aprendizaje.

Fue creada utilizando React y TypeScript, y está estilizada con Tailwind CSS para un diseño moderno y responsivo.

## ✨ Características Principales

- **Contenido Estructurado:** El material está organizado en secciones claras y numeradas, desde la introducción hasta las referencias.
- **Navegación Dinámica:** Una barra lateral de navegación (índice) que permite saltar a cualquier sección del documento.
- **Scroll Spy Activo:** La sección actual que se está viendo se resalta automáticamente en el índice de la barra lateral.
- **Componentes Interactivos:**
    - **Acordeones:** Las subsecciones están dentro de elementos de acordeón expandibles para mantener la interfaz limpia.
    - **Tarjetas de Información:** Bloques de contenido estilizados (`idea-destacada`, `card-conexion`, `card-definicion`, etc.) para resaltar conceptos clave, definiciones y ejercicios prácticos.
- **Diseño Responsivo:** La interfaz se adapta a diferentes tamaños de pantalla, con una barra lateral plegable en dispositivos móviles.
- **Modal de Información:** Un botón flotante que abre una ventana modal con información sobre el recurso, el autor y la licencia.

## 🛠️ Tecnologías Utilizadas

- **React:** Biblioteca de JavaScript para construir la interfaz de usuario con componentes.
- **TypeScript:** Superset de JavaScript que añade tipado estático para un desarrollo más robusto.
- **React Hooks (`useState`, `useEffect`, `useRef`):** Para gestionar el estado de los componentes y los efectos secundarios (como la lógica de scroll y eventos).
- **Tailwind CSS:** Framework de CSS "utility-first" para un diseño rápido y personalizable.
- **HTML5 & CSS3:** Estructura semántica y estilos personalizados adicionales.

## 📂 Estructura del Proyecto

- `index.html`: El punto de entrada de la aplicación. Carga las fuentes, scripts de React y el archivo principal de la aplicación.
- `index.tsx`: Contiene todo el código de la aplicación React. Define los componentes (Sidebar, Section, AccordionItem, etc.) y la lógica de la aplicación principal (`App`).
- `index.css`: Hoja de estilos personalizada que define las variables de color, estilos base y clases de utilidad para los componentes interactivos.
- `metadata.json`: Metadatos de la aplicación.
- `README.md`: Este archivo.

## 🚀 Cómo Empezar

Para ejecutar esta aplicación, simplemente abre el archivo `index.html` en un navegador web moderno. No se requiere un proceso de compilación, ya que utiliza `esm.sh` para importar los módulos de React directamente en el navegador.

## 📄 Licencia

Este material se distribuye bajo una licencia **Creative Commons (CC BY-NC-SA 4.0)**. Puede ser compartido y adaptado para fines no comerciales, siempre que se otorgue el crédito apropiado al autor original.

**Autor:** Francisco Sereño
