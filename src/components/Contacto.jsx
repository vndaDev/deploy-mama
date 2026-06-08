import React from 'react'
import { motion } from 'framer-motion'
import { WA } from '../config'
import { Icons } from './Icons'
import styles from './Contacto.module.css'

export default function Contacto() {
  return (
    <section className={styles.section} id="contacto">
      <div className={styles.bgText} aria-hidden="true">Mírate</div>

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow" style={{ marginBottom: '1.5rem', display: 'block' }}>
            Da el primer paso
          </span>

          <h2 className={styles.title}>
            Es hora de volverte<br />a <em>mirar</em>
          </h2>

          <p className={styles.sub}>
            Agenda una consulta sin compromiso. Cuéntanos tu historia y comenzamos juntas el camino hacia reconocerte.
          </p>

          <div className={styles.actions}>
            <a
              href={WA.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <Icons.WhatsApp />
              Escribir por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
