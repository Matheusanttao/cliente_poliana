type BranchProps = {
  className?: string
  flip?: boolean
}

/** Ramos decorativos finos no estilo da referência. */
export function BranchDecoration({ className = '', flip = false }: BranchProps) {
  return (
    <svg
      className={`${className} ${flip ? '-scale-x-100' : ''}`}
      viewBox="0 0 160 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 88c36-10 58-34 68-62"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M52 58c10-14 24-22 40-26"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M70 42c6-3 12-3 18 0M64 52c8-4 15-4 22 2M82 30c5-6 12-9 20-7"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.75"
      />
      <ellipse
        cx="92"
        cy="20"
        rx="7"
        ry="12"
        stroke="currentColor"
        strokeWidth="1"
        transform="rotate(-28 92 20)"
      />
      <ellipse
        cx="112"
        cy="26"
        rx="6.5"
        ry="11"
        stroke="currentColor"
        strokeWidth="1"
        transform="rotate(18 112 26)"
      />
      <ellipse
        cx="100"
        cy="40"
        rx="6"
        ry="10"
        stroke="currentColor"
        strokeWidth="1"
        transform="rotate(-8 100 40)"
      />
      <ellipse
        cx="78"
        cy="48"
        rx="5"
        ry="8.5"
        stroke="currentColor"
        strokeWidth="1"
        transform="rotate(-40 78 48)"
      />
    </svg>
  )
}
