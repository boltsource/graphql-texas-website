import React from 'react'

const HamburgerMenuIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, svgRef) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" ref={svgRef} {...props}>
      <path
        fill="currentColor"
        d="M3.5 7a.5.5 0 010-1h17a.5.5 0 110 1h-17zm0 5a.5.5 0 110-1h17a.5.5 0 110 1h-17zm0 5a.5.5 0 110-1h17a.5.5 0 110 1h-17z"
      />
    </svg>
  )
})

HamburgerMenuIcon.displayName = 'HamburgerMenuIcon'

export default HamburgerMenuIcon
