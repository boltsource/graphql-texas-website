import React from 'react'

const ChevronDownIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, svgRef) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" ref={svgRef} {...props}>
      <path
        fill="currentColor"
        d="M15.175 10.12a.5.5 0 01.65.76l-3.5 3a.5.5 0 01-.65 0l-3.5-3a.5.5 0 01.65-.76L12 12.841l3.175-2.72z"
      />
    </svg>
  )
})

ChevronDownIcon.displayName = 'ChevronDownIcon'

export default ChevronDownIcon
