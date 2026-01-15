# 📸 Buscador de Imágenes

Buscador de imágenes rápido y moderno que utiliza la **API de Unsplash** para mostrar resultados basados en texto ingresado por el usuario.  
Construido con **React**, **TypeScript**, **Zustand**, **Tailwind CSS** y **React Hook Form**, este proyecto demuestra buenas prácticas en estado global, tipado fuerte y UI moderna.

---

##  Características principales

-  Búsqueda de imágenes con términos personalizados  
-  Visualización de resultados en grilla responsive  
-  Paginación avanzada con botones de grupo  
-  Manejo de estado global con **Zustand**  
-  UI elegante en modo oscuro  
-  Tipado completo con TypeScript  
-  Formularios validados con React Hook Form

---

## 🧪 Demo 

> https://buscadordeimagenes2026.netlify.app/

---

##  Tecnologías utilizadas

| Tipo | Herramienta |
|------|-------------|
| UI | React |
| Estado | Zustand |
| Estilos | Tailwind CSS |
| Formularios | React Hook Form |
| Peticiones | Axios |
| Bundler | Vite |
| Tipado | TypeScript |

---

## Estructura del proyecto

src/
├── components/
│ ├── FormularioBusqueda.tsx
│ ├── Resultados.tsx
│ ├── Paginacion.tsx
│ └── IconoLupa.tsx
├── store/
│ └── store.ts
├── types/
│ └── index.ts
├── App.tsx
└── main.tsx

---

## Instalación y uso

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Alejandro404-dev/buscadordeimagenes.git
2. Entra al proyecto

   cd buscadordeimagenes

3. Instala dependencias

   npm install


4. Agrega tus variables de entorno

   Crea un archivo .env en la raíz con:

   VITE_UNSPLASH_API=TU_API_KEY_DE_UNSPLASH


   Puedes obtener tu API Key en: https://unsplash.com/developers

5. Ejecuta en modo desarrollo

   npm run dev


6. Abre en el navegador

   http://localhost:5173

- Variables de entorno

   Recuerda no subir tu .env al repositorio.
   Asegúrate de que esté en tu .gitignore.

   Ejemplo de contenido de .env:

   VITE_UNSPLASH_API=TU_API_KEY_DE_UNSPLASH

- Cómo funciona

   El usuario ingresa un texto en el buscador.
   
   Se llama a la API de Unsplash con el término.
   
   Se renderiza un grid de imágenes.
   
   Se puede navegar entre páginas con los botones de paginación.
   
   Si no hay resultados, se muestra un mensaje adecuado.

- Paginación

   La paginación se muestra en grupos de 5 páginas.
   Puedes navegar hacia adelante, hacia atrás o saltar grupos con «» si existen más páginas.
   Esta lógica permite orden y usabilidad mejorada.

- Autor

   Alejandro Alfonso Teherán Guardó
   Estudiante de Ingeniería de Sistemas y Computación
