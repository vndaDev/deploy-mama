import { useState, useEffect, useRef } from 'react'

/**
 * Tracks how far the user has scrolled through a given element,
 * returning a value from 0 (top of element) to 1 (bottom of element).
 */
export function useScrollProgress(offset = 0) {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight
      // Start when top of element hits bottom of viewport
      // End when bottom of element hits top of viewport
      const total = rect.height + windowH
      const current = windowH - rect.top + offset
      const raw = current / total
      setProgress(Math.min(1, Math.max(0, raw)))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // init
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return { ref, progress }
}

/**
 * Simple intersection observer hook for entrance animations.
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(el)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}
