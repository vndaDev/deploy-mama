# Mírate Otra Vez — Sitio Web

Landing page para Patricia Nava | Estética Paramédica & Oncológica.

**Stack:** React 18 · Vite · Framer Motion · CSS Modules

---

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

---

## Publicar en Vercel (recomendado)

### Opción A — Desde GitHub (más fácil)

1. Sube esta carpeta a un repositorio en GitHub
2. Ve a [vercel.com](https://vercel.com) → **Add New Project**
3. Conecta el repositorio
4. Vercel detecta Vite automáticamente → **Deploy**
5. Listo. Obtienes una URL tipo `mirate-otra-vez.vercel.app`

### Opción B — Desde la terminal

```bash
npm install -g vercel
vercel
```

Sigue las instrucciones en pantalla.

---

## Publicar en GitHub Pages

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx / .module.css      # Navegación sticky con menú mobile
│   ├── Hero.jsx / .module.css        # Portada con logo flotante
│   ├── Manifiesto.jsx / .module.css  # Scrollytelling — logo se dibuja con scroll
│   ├── Significado.jsx / .module.css # Capas del logo interactivas (hover)
│   ├── Patricia.jsx / .module.css    # Sección de la especialista
│   ├── Contacto.jsx / .module.css    # CTA final
│   ├── Footer.jsx / .module.css      # Pie de página
│   └── LogoMark.jsx                  # SVG del logo animable por props
├── hooks/
│   └── useScrollProgress.js          # Hooks de scroll e intersección
├── styles/
│   └── globals.css                   # Variables, reset, tipografía global
├── App.jsx
└── main.jsx
```

---

## Personalización

- **Número de WhatsApp:** busca `584141337716` en los archivos y reemplaza con el número definitivo
- **Colores:** edita las variables CSS en `src/styles/globals.css`
- **Fotos reales:** cuando Patricia tenga sus propias imágenes, agregar una sección de galería entre `Significado` y `Patricia`
