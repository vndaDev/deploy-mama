import React from 'react'
import { motion } from 'framer-motion'
import { WA } from '../config'
import { Icons } from './Icons'
import styles from './Patricia.module.css'

export default function Patricia() {
  return (
    <section className={styles.section} id="patricia">
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow" style={{ color: 'rgba(232,196,191,0.65)', marginBottom: '1.8rem', display: 'block' }}>
            Quién te acompaña
          </span>

          <h2 className={styles.name}>Patricia Nava</h2>
          <p className={styles.title}>Especialista en Estética Paramédica & Oncológica</p>

          <div className={styles.divider} aria-hidden="true" />

          <p className={styles.bio}>
            Patricia Nava es especialista en estética paramédica y oncológica, dedicada a acompañar a mujeres en su proceso de reconstrucción con la más alta calidad técnica y la sensibilidad humana que cada historia merece.
          </p>
          <p className={styles.bio}>
            Para conocer más sobre su formación, experiencia y el proceso de atención personalizada, te invitamos a escribirle directamente.
          </p>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <Icons.Location />
              Caracas, Venezuela
            </span>
            <span className={styles.metaItem}>
              <Icons.Play />
              Estética Paramédica & Oncológica
            </span>
          </div>

          <a
            href={WA.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <Icons.WhatsApp />
            Hablar con Patricia
          </a>
        </motion.div>

        <motion.div
          className={styles.watermark}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="320" height="320">
            <circle cx="100" cy="100" r="86" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" strokeDasharray="4 3.5"/>
            <circle cx="100" cy="100" r="64" fill="rgba(255,255,255,0.07)"/>
            <circle cx="100" cy="100" r="26" fill="rgba(255,255,255,0.1)"/>
            <path d="M14 100 Q100 32 186 100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M186 100 Q100 168 14 100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M30 122 Q100 166 170 122" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
