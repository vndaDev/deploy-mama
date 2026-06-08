import React from 'react'
import { motion } from 'framer-motion'
import LogoMark from './LogoMark'
import styles from './Significado.module.css'

const LAYERS = [
  {
    key: 'orbit', label: 'La órbita punteada',
    description: 'El círculo que rodea el símbolo — el espacio sagrado que te contiene mientras te reconstruyes.',
    color: 'var(--c-accent-md)',
    progressOrbit: 1, progressEye: 0, progressIris: 0, progressPupil: 0, progressLashes: 0, progressSeno: 0,
  },
  {
    key: 'eye', label: 'El ojo que mira',
    description: 'La forma almendrada del ojo — tierno, presente. Que te ve tal como eres, sin juicio, con ternura.',
    color: 'var(--c-deep)',
    progressOrbit: 1, progressEye: 1, progressIris: 0, progressPupil: 0, progressLashes: 0, progressSeno: 0,
  },
  {
    key: 'cicatriz', label: 'La cicatriz',
    description: 'Las líneas que coronan el ojo. No solo un párpado — son la marca de lo que fuiste capaz de enfrentar. Tu cicatriz de guerra, ganada con valentía.',
    color: 'var(--c-deep-2)',
    progressOrbit: 1, progressEye: 1, progressIris: 0, progressPupil: 0, progressLashes: 1, progressSeno: 0,
  },
  {
    key: 'seno', label: 'El seno que renace',
    description: 'La curva inferior evoca el seno — ese contorno que te pertenece, que está volviendo a ser tuyo.',
    color: 'var(--c-accent)',
    progressOrbit: 1, progressEye: 1, progressIris: 0, progressPupil: 0, progressLashes: 1, progressSeno: 1,
  },
  {
    key: 'areola', label: 'La areola y el pezón',
    description: 'El gran círculo interior y su centro — la areola y el pezón que tantas mujeres han perdido y están recuperando. Visible, presente, sin vergüenza.',
    color: 'var(--c-accent)',
    progressOrbit: 1, progressEye: 1, progressIris: 1, progressPupil: 1, progressLashes: 1, progressSeno: 1,
  },
]

export default function Significado() {
  const [active, setActive] = React.useState(null)
  const current = active !== null ? LAYERS[active] : LAYERS[4]

  return (
    <section className={styles.section} id="significado">
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">El significado</span>
          <h2 className={styles.title}>Todo en un<br /><em>solo símbolo</em></h2>
          <p className={styles.intro}>
            Tocá cada elemento para descubrir su significado.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.logoDisplay}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.logoGlow} />
            <LogoMark
              size={280}
              progressOrbit={current.progressOrbit}
              progressEye={current.progressEye}
              progressIris={current.progressIris}
              progressPupil={current.progressPupil}
              progressLashes={current.progressLashes}
              progressSeno={current.progressSeno}
            />
          </motion.div>

          <div className={styles.layers}>
            {LAYERS.map((layer, i) => (
              <motion.div
                key={layer.key}
                className={`${styles.layer} ${active === i ? styles.layerActive : ''}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onTouchStart={() => setActive(v => v === i ? null : i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                role="button"
                aria-label={`Ver capa: ${layer.label}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.layerDot} style={{ background: layer.color }} />
                <div className={styles.layerContent}>
                  <p className={styles.layerLabel}>{layer.label}</p>
                  <motion.p
                    className={styles.layerDesc}
                    animate={{ height: active === i ? 'auto' : 0, opacity: active === i ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {layer.description}
                  </motion.p>
                </div>
                <motion.div
                  className={styles.layerArrow}
                  animate={{ rotate: active === i ? 90 : 0, opacity: active === i ? 1 : 0.35 }}
                  transition={{ duration: 0.25 }}
                >›</motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
