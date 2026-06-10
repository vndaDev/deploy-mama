import React from 'react'

/**
 * The Mírate Otra Vez logo mark.
 * Faithfully replicates the "Rosa Viejo" version from the brand assets:
 * - Outer dashed orbit circle
 * - Filled iris (areola)
 * - Filled pupil (pezón)
 * - Eye almond shape (outline only, no fill — reveals background)
 * - Upper lash curves (la cicatriz)
 * - Lower seno curve
 *
 * Each path has a named `data-part` so the scroll-drawing animation
 * can target individual layers.
 */
export default function LogoMark({
  size = 200,
  className = '',
  style = {},
  // Drawing progress per layer [0..1]
  progressOrbit = 1,
  progressIris = 1,
  progressPupil = 1,
  progressEye = 1,
  progressLashes = 1,
  progressSeno = 1,
}) {
  // SVG viewport is 200×200, centered at (100,100)

  // ── Circumferences for stroke-dasharray animation ─────────────────
  // Outer dashed circle r=86 → C = 2π×86 ≈ 540
  const orbitC = 2 * Math.PI * 86
  // Eye almond: approximate arc length of the two quadratic beziers.
  // Upper arc: M30,100 Q100,38 170,100  ≈ 158; lower ≈ same → total ≈ 316
  const eyeC = 316
  // Cicatriz upper lash line (shorter arc): ≈ 115
  const lashC = 115
  // Seno lower curve: ≈ 130
  const senoC = 130

  const orbitDash = progressOrbit * orbitC
  const eyeDash   = progressEye   * eyeC
  const lashDash  = progressLashes * lashC
  const senoDash  = progressSeno  * senoC

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo de Mírate Otra Vez"
      role="img"
    >
      {/* ── 1. Glow / atmosphere ─────────────────────────── */}
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#D4A49E" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#D4A49E" stopOpacity="0" />
        </radialGradient>
        <filter id="softBlur">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>
      <circle cx="100" cy="100" r="96" fill="url(#glow)" />

      {/* ── 2. Outer dashed orbit ────────────────────────── */}
      <circle
        data-part="orbit"
        cx="100" cy="100" r="86"
        fill="none"
        stroke="#A67775"
        strokeWidth="1.2"
        strokeDasharray={`4 3.5`}
        strokeDashoffset={orbitC - orbitDash}
        strokeLinecap="round"
        opacity={0.55}
        style={{ transition: 'stroke-dashoffset 0.05s linear' }}
      />

      {/* ── 3. Iris fill (areola) ─────────────────────────── */}
      <circle
        data-part="iris"
        cx="100" cy="100" r="64"
        fill="#B2656B"
        opacity={progressIris * 0.88}
        style={{ transition: 'opacity 0.1s ease' }}
      />
      {/* Subtle inner tone ring */}
      <circle
        cx="100" cy="100" r="64"
        fill="none"
        stroke="#A67775"
        strokeWidth="0.6"
        opacity={progressIris * 0.3}
      />

      {/* ── 4. Pupil (pezón) ──────────────────────────────── */}
      <circle
        data-part="pupil"
        cx="100" cy="100" r="26"
        fill="#6B4143"
        opacity={progressPupil}
        style={{ transition: 'opacity 0.1s ease' }}
      />
      <circle
        cx="100" cy="100" r="26"
        fill="none"
        stroke="#6B4143"
        strokeWidth="0.5"
        opacity={progressPupil * 0.5}
      />

      {/* ── 5. Eye almond outline ─────────────────────────── */}
      {/*
          The eye shape is TWO paths drawn in sequence so we can
          animate the stroke from left-to-right:
          Upper curve: left corner → top → right corner
          Lower curve: right corner → bottom → left corner
      */}
      <path
        data-part="eye-upper"
        d="M 14 100 Q 100 32 186 100"
        fill="none"
        stroke="#6B4143"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray={`${eyeC / 2} ${eyeC}`}
        strokeDashoffset={(eyeC / 2) * (1 - progressEye)}
        style={{ transition: 'stroke-dashoffset 0.05s linear' }}
      />
      <path
        data-part="eye-lower"
        d="M 186 100 Q 100 168 14 100"
        fill="none"
        stroke="#6B4143"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray={`${eyeC / 2} ${eyeC}`}
        strokeDashoffset={(eyeC / 2) * (1 - progressEye)}
        style={{ transition: 'stroke-dashoffset 0.05s linear' }}
      />

      {/* ── 6. Upper lash lines / cicatriz ───────────────── */}
      {/* Left lash */}
      <path
        data-part="lash-left"
        d="M 34 92 Q 58 76 82 88"
        fill="none"
        stroke="#A67775"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray={`${lashC / 2} ${lashC}`}
        strokeDashoffset={(lashC / 2) * (1 - progressLashes)}
        opacity={0.65}
        style={{ transition: 'stroke-dashoffset 0.05s linear' }}
      />
      {/* Right lash */}
      <path
        data-part="lash-right"
        d="M 118 88 Q 142 76 166 92"
        fill="none"
        stroke="#A67775"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray={`${lashC / 2} ${lashC}`}
        strokeDashoffset={(lashC / 2) * (1 - progressLashes)}
        opacity={0.65}
        style={{ transition: 'stroke-dashoffset 0.05s linear' }}
      />

      {/* ── 7. Lower seno curve ───────────────────────────── */}
      <path
        data-part="seno"
        d="M 30 122 Q 100 166 170 122"
        fill="none"
        stroke="#A67775"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray={`${senoC} ${senoC * 2}`}
        strokeDashoffset={senoC * (1 - progressSeno)}
        opacity={0.7}
        style={{ transition: 'stroke-dashoffset 0.05s linear' }}
      />
    </svg>
  )
}
