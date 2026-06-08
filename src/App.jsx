import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Manifiesto from './components/Manifiesto'
import Significado from './components/Significado'
import FAQ from './components/FAQ'
import Patricia from './components/Patricia'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import { SECTIONS } from './config'

/* ═══════════════════════════════════════════════════════
   SECCIONES — Reordenalas editando SECTIONS en
   src/config.js. El orden de acá se mantiene solo
   para importación; el renderizado sigue SECTIONS.
   ═══════════════════════════════════════════════════════ */

const SECTION_MAP = {
  Hero, Manifiesto, Significado, FAQ, Patricia, Contacto,
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mot-theme')
      if (saved) return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('mot-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        {SECTIONS.map(name => {
          const Component = SECTION_MAP[name]
          return Component ? <Component key={name} /> : null
        })}
      </main>
      <WhatsAppFab />
      <Footer />
    </>
  )
}
