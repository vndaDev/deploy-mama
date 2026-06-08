import React from 'react'
import LogoMark from './LogoMark'
import { SITE, WA, SOCIAL, NAV_LINKS } from '../config'
import { Icons } from './Icons'
import styles from './Footer.module.css'

export default function Footer() {
  const ig = SOCIAL.instagram

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <LogoMark size={50} />
          <div>
            <p className={styles.brandName}>{SITE.name}</p>
            <p className={styles.brandSub}>Patricia Nava · Estética Paramédica & Oncológica</p>
          </div>
        </div>

        <nav aria-label="Pie de página">
          <p className={styles.navTitle}>Secciones</p>
          <ul className={styles.navList}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <p className={styles.navTitle}>Contacto</p>
          <a href={WA.url} target="_blank" rel="noopener noreferrer" className={styles.waLink}>
            <Icons.WhatsApp />
            WhatsApp
          </a>
          {ig.enabled && (
            <a
              href={ig.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.igLink}
              title={ig.comingSoon ? 'Instagram' : ig.label}
            >
              <Icons.Instagram />
              {ig.comingSoon ? 'Instagram' : ig.label}
            </a>
          )}
          <p className={styles.location}>
            <Icons.Location />
            {SITE.location}
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.tagline}>"{SITE.tagline}" 🤍</p>
          <p className={styles.copy}>© {SITE.year} {SITE.name}</p>
        </div>
      </div>
    </footer>
  )
}
