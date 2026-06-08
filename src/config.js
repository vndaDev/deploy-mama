/* ═══════════════════════════════════════════════════════
   CONFIGURACIÓN CENTRAL — Mírate Otra Vez
   ═══════════════════════════════════════════════════════
   Cambiá valores ACÁ y se actualiza en TODA la página.
   ═══════════════════════════════════════════════════════ */

export const SITE = {
  name: 'Mírate Otra Vez',
  shortName: 'Mírate',
  tagline: 'Porque cada mujer merece volver a reconocerse.',
  description: 'Prótesis mamarias de silicona grado médico personalizadas. Patricia Nava, Estética Paramédica & Oncológica.',
  url: 'https://deploy-mama.vercel.app',
  location: 'Caracas, Venezuela',
  year: new Date().getFullYear(),
}

/* ─── WhatsApp ──────────────────────────────────────── */
export const WA = {
  number: '584125663003',
  message: '¡Hola! Quisiera agendar una consulta.',
  get url() {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`
  },
}

/* ─── Redes sociales ────────────────────────────────── */
export const SOCIAL = {
  instagram: {
    handle: 'mirateotravez',
    enabled: true,
    url: 'https://instagram.com/mirateotravez',
    label: 'Instagram',
    comingSoon: true,
  },
}

/* ─── Navegación ──────────────────────────────────────
   Agregá/quitá/reordená links acá.                    */
export const NAV_LINKS = [
  { label: 'El símbolo',   href: '#simbolo',      section: 'simbolo' },
  { label: 'Significado',  href: '#significado',   section: 'significado' },
  { label: 'Patricia',     href: '#patricia',      section: 'patricia' },
  { label: 'Contacto',     href: '#contacto',      section: 'contacto' },
]

/* ─── Orden de secciones ──────────────────────────────
   Reordená esta lista para cambiar el orden en la
   página sin tocar nada más.                          */
export const SECTIONS = [
  'Hero',
  'Manifiesto',
  'Significado',
  'FAQ',
  'Patricia',
  'Contacto',
]

/* ─── Temas (modo claro/oscuro) ──────────────────────
   Si querés personalizar colores, editá globals.css
   en las variables `:root` y `[data-theme="dark"]`.   */
