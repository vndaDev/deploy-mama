import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LogoMark from './LogoMark'
import styles from './Manifiesto.module.css'

const PARAGRAPHS = [
  {
    id: 'p0', type: 'opener',
    text: '¿Ves un ojo… o ves algo más?',
    subtext: 'Nuestro símbolo esconde un secreto que solo quienes lo viven de verdad pueden entender del todo.',
  },
  {
    id: 'p1', type: 'body',
    text: 'A primera vista parece una mirada —',
    subtext: 'Tierna. Presente. Que te ve.',
  },
  {
    id: 'p2', type: 'reveal', label: 'La areola',
    text: 'En su centro hay una areola.',
    subtext: 'Ese pequeño círculo que tantas mujeres han perdido, transformado, o están recuperando en su camino.',
  },
  {
    id: 'p3', type: 'highlight', label: 'La cicatriz',
    text: 'Y esa línea suave que lo corona…',
    subtext: 'No es solo un párpado.',
    emphasis: 'Es la cicatriz.',
  },
  {
    id: 'p4', type: 'body',
    text: 'Esa marca que quedó.',
    subtext: 'Esa historia que no se puede borrar — y que tampoco queremos olvidar. Una cicatriz de guerra, sí. Pero tuya. Ganada con valentía.',
  },
  {
    id: 'p5', type: 'reveal', label: 'El seno',
    text: 'La curva de abajo evoca el seno —',
    subtext: 'Ese contorno que te pertenece, que está volviendo a ser... tuyo.',
  },
  {
    id: 'p6', type: 'closing',
    text: 'El ojo que mira. La cicatriz que honra. El seno que renace.',
    subtext: 'Todo en un solo símbolo. Porque de eso se trata Mírate Otra Vez.',
    heart: true,
  },
]

function useParagraphInView() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const refs = useRef([])

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i)
        },
        { threshold: 0.45, rootMargin: '0px 0px -10% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return { activeIndex, refs }
}

function getLogoProgress(activeIndex) {
  return {
    progressOrbit:  activeIndex >= 0 ? 1 : 0,
    progressEye:    activeIndex >= 1 ? 1 : 0,
    progressIris:   activeIndex >= 2 ? 1 : 0,
    progressPupil:  activeIndex >= 2 ? 1 : 0,
    progressLashes: activeIndex >= 3 ? 1 : 0,
    progressSeno:   activeIndex >= 5 ? 1 : 0,
  }
}

function lerp(a, b, t) { return a + (b - a) * t }

function useSmoothedProgress(target) {
  const [value, setValue] = useState(0)
  const raf = useRef(null)
  const current = useRef(0)
  const speed = 0.08

  useEffect(() => {
    const animate = () => {
      current.current = lerp(current.current, target, speed)
      setValue(current.current)
      if (Math.abs(current.current - target) > 0.001) {
        raf.current = requestAnimationFrame(animate)
      } else {
        current.current = target
        setValue(target)
      }
    }
    raf.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf.current)
  }, [target])

  return value
}

function SmoothedLogoMark({ activeIndex, size }) {
  const raw = getLogoProgress(activeIndex)
  const orbit   = useSmoothedProgress(raw.progressOrbit)
  const eye     = useSmoothedProgress(raw.progressEye)
  const iris    = useSmoothedProgress(raw.progressIris)
  const pupil   = useSmoothedProgress(raw.progressPupil)
  const lashes  = useSmoothedProgress(raw.progressLashes)
  const seno    = useSmoothedProgress(raw.progressSeno)

  return (
    <LogoMark
      size={size}
      progressOrbit={orbit}
      progressEye={eye}
      progressIris={iris}
      progressPupil={pupil}
      progressLashes={lashes}
      progressSeno={seno}
    />
  )
}

export default function Manifiesto() {
  const { activeIndex, refs } = useParagraphInView()

  return (
    <section className={styles.section} id="simbolo">
      <div className={styles.inner}>
        <div className={styles.stickyCol} aria-hidden="true">
          <div className={styles.stickyLogo}>
            <SmoothedLogoMark activeIndex={activeIndex} size={300} />

            <div className={styles.layerLabels}>
              <motion.span
                className={styles.layerLabel}
                style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}
                animate={{ opacity: activeIndex >= 0 ? 0.6 : 0 }}
                transition={{ duration: 0.6 }}
              >La órbita</motion.span>
              <motion.span
                className={styles.layerLabel}
                style={{ top: '50%', left: '-8%' }}
                animate={{ opacity: activeIndex >= 1 ? 0.6 : 0 }}
                transition={{ duration: 0.6 }}
              >El ojo</motion.span>
              <motion.span
                className={styles.layerLabel}
                style={{ top: '40%', right: '-12%' }}
                animate={{ opacity: activeIndex >= 2 ? 0.6 : 0 }}
                transition={{ duration: 0.6 }}
              >La areola</motion.span>
              <motion.span
                className={styles.layerLabel}
                style={{ top: '26%', right: '-14%' }}
                animate={{ opacity: activeIndex >= 3 ? 0.6 : 0 }}
                transition={{ duration: 0.6 }}
              >La cicatriz</motion.span>
              <motion.span
                className={styles.layerLabel}
                style={{ bottom: '18%', left: '50%', transform: 'translateX(-50%)' }}
                animate={{ opacity: activeIndex >= 5 ? 0.6 : 0 }}
                transition={{ duration: 0.6 }}
              >El seno</motion.span>
            </div>

            <motion.div
              className={styles.completionGlow}
              animate={{ opacity: activeIndex >= 6 ? 1 : 0, scale: activeIndex >= 6 ? 1 : 0.8 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        <div className={styles.scrollCol}>
          <span className="eyebrow" style={{ marginBottom: '3rem', display: 'block' }}>
            El símbolo
          </span>

          {PARAGRAPHS.map((p, i) => (
            <motion.div
              key={p.id}
              ref={el => (refs.current[i] = el)}
              className={`${styles.para} ${styles[`type_${p.type}`]} ${activeIndex === i ? styles.active : ''}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {p.label && (
                <span className={styles.paraLabel}>{p.label}</span>
              )}

              {p.type === 'opener' ? (
                <h2 className={styles.opener}>{p.text}</h2>
              ) : p.type === 'closing' ? (
                <p className={styles.closing}>
                  {p.text}
                  {p.heart && <span className={styles.heart}> 🤍</span>}
                </p>
              ) : p.type === 'highlight' ? (
                <div className={styles.highlightBlock}>
                  <p className={styles.highlightMain}>{p.text}</p>
                  <p className={styles.highlightSub}>{p.subtext}</p>
                  {p.emphasis && (
                    <p className={styles.emphasis}>{p.emphasis}</p>
                  )}
                </div>
              ) : (
                <p className={styles.bodyText}>{p.text}</p>
              )}

              {p.subtext && p.type !== 'highlight' && (
                <p className={styles.subtext}>{p.subtext}</p>
              )}

              <motion.div
                className={styles.activeDot}
                animate={{ scale: activeIndex === i ? 1 : 0, opacity: activeIndex === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
