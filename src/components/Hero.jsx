import React from 'react'
import { motion } from 'framer-motion'
import LogoMark from './LogoMark'
import { WA } from '../config'
import styles from './Hero.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
})

const WaIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.glowLeft}  aria-hidden="true" />
      <div className={styles.glowRight} aria-hidden="true" />

      <motion.div
        className={styles.logoWrap}
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className={styles.logoFloat}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <LogoMark size={190} />
        </motion.div>
      </motion.div>

      <motion.p className={`${styles.eyebrow} eyebrow`} {...fadeUp(0.3)}>
        Estética Paramédica & Oncológica
      </motion.p>

      <motion.h1 className={styles.title} {...fadeUp(0.5)}>
        Mírate<br /><em>Otra Vez</em>
      </motion.h1>

      <motion.p className={styles.subtitle} {...fadeUp(0.7)}>
        Patricia Nava · Caracas, Venezuela
      </motion.p>

      <motion.p className={styles.tagline} {...fadeUp(0.9)}>
        Porque cada mujer merece<br />volver a reconocerse.
      </motion.p>

      <motion.div className={styles.actions} {...fadeUp(1.1)}>
        <a
          href={WA.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnPrimary}
        >
          <WaIcon />
          Agendar consulta
        </a>
        <a href="#simbolo" className={styles.btnGhost}>
          Descubrir el símbolo
        </a>
      </motion.div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        aria-hidden="true"
      >
        <span className={styles.scrollLabel}>Descubrir</span>
        <motion.div
          className={styles.scrollLine}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originY: 'top' }}
        />
      </motion.div>

      <div className={styles.rule} aria-hidden="true">
        <div className={styles.ruleLine} />
        <div className={styles.ruleDot} />
        <div className={styles.ruleLine} />
      </div>
    </section>
  )
}
