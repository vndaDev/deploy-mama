import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './FAQ.module.css'

const FAQ_ITEMS = [
  {
    q: '¿Qué son las prótesis mamarias de silicona grado médico?',
    a: 'Son prótesis externas diseñadas con silicona de grado médico, elaboradas artesanalmente para adaptarse a la anatomía de cada mujer. Se colocan sin cirugía, directamente sobre la piel o dentro del sostén, y están indicadas tanto para quienes han tenido una mastectomía como para quienes desean realzar su silueta de forma no invasiva.',
    highlight: 'Sin cirugía · Hechas a la medida · Grado médico',
  },
  {
    q: '¿Duele usarlas? ¿Se sienten pesadas?',
    a: 'Para nada. Están diseñadas para ser cómodas y livianas. El peso se distribuye de forma natural y, una vez colocadas dentro del sostén, no se siente carga adicional. Muchas mujeres me dicen que se olvidan de que las están usando.',
    highlight: 'Livianas · Cómodas · Uso diario',
  },
  {
    q: '¿Necesito cirugía para colocármelas?',
    a: 'No. Son prótesis externas. Se colocan como un accesorio más: se posan sobre el pecho y se sujetan con el sostén o con adhesivo hipoalergénico, según el caso. No hay bisturí, no hay recuperación, no hay riesgos quirúrgicos.',
    highlight: '0 cirugía · 0 recuperación · Colocación inmediata',
  },
  {
    q: '¿Puedo usarlas si tuve una mastectomía?',
    a: 'Sí, están especialmente pensadas para eso. De hecho, gran parte de mi trabajo es acompañar a mujeres que han pasado por una mastectomía parcial o total. La prótesis se adapta a tu cuerpo, respetando tu cicatriz y tu anatomía actual.',
    highlight: 'Post-mastectomía · Post-lumpectomía · Post-reconstrucción',
  },
  {
    q: '¿Cuánto duran? ¿Necesitan mantenimiento?',
    a: 'Con los cuidados básicos — limpieza suave, guardarlas en su estuche, evitar calor extremo — pueden durar varios años. La silicona de grado médico no se deteriora con el uso normal. Si en el futuro tu cuerpo cambia (peso, tono muscular), se pueden ajustar o rehacer.',
    highlight: 'Varios años de duración · Mantenimiento mínimo · Ajustables',
  },
  {
    q: '¿Cómo es el proceso para obtener una?',
    a: 'Primero agendamos una consulta personalizada — presencial o por videollamada. Hablamos de tu historia, tomamos medidas, elegimos forma, tamaño y color. Luego yo misma elaboro tu prótesis a mano. En días la tienes lista. Todo es contigo, a tu ritmo.',
    highlight: 'Consulta personalizada · Hecha a mano · A tu ritmo',
  },
  {
    q: '¿Cuánto cuesta? ¿Hay financiamiento?',
    a: 'Los precios varían según el tipo de prótesis y el nivel de personalización. Lo mejor es escribirme por WhatsApp para conversar tu caso. Te doy toda la información sin compromiso y, si te parece bien, coordinamos el pago en las condiciones que mejor te queden.',
    highlight: 'Consulta sin compromiso · Te explico todo · Plan flexible',
  },
]

function AccordionItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        className={styles.trigger}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className={styles.question}>{item.q}</span>
        <motion.span
          className={styles.icon}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          aria-hidden="true"
        >+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className={styles.answerWrap}>
              <p className={styles.answer}>{item.a}</p>
              {item.highlight && (
                <span className={styles.highlight}>{item.highlight}</span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(v => v === i ? null : i)

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className={styles.title}>Todo lo que necesitás<br /><em>saber</em></h2>
          <p className={styles.intro}>
            Respondo las dudas más comunes para que llegues tranquila a tu consulta.
          </p>
        </motion.div>

        <div className={styles.list}>
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
