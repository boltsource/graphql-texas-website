import React from 'react'

const InfoCircleIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, svgRef) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" ref={svgRef} {...props}>
      <path
        fill="currentColor"
        d="M13 16h1.5a.5.5 0 110 1h-4a.5.5 0 110-1H12v-5h-1.5a.5.5 0 110-1h2a.5.5 0 01.5.5V16zm-1 6C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1a9 9 0 100-18 9 9 0 000 18zm-.5-14h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5z"
      />
    </svg>
  )
})

InfoCircleIcon.displayName = 'InfoCircleIcon'

export default InfoCircleIcon
