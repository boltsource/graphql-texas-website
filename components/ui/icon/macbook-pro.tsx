import React from 'react'

const MacbookProIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, svgRef) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" ref={svgRef} {...props}>
      <path
        fill="currentColor"
        d="M22 17h-7.085a1.5 1.5 0 01-1.415 1h-3a1.5 1.5 0 01-1.415-1H2v1.5a.5.5 0 00.5.5h19a.5.5 0 00.5-.5V17zM3 16V5.49a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.5 1.5V16h1.5a.5.5 0 01.5.5v2a1.5 1.5 0 01-1.5 1.5h-19A1.5 1.5 0 011 18.5v-2a.5.5 0 01.5-.5H3zm1 0h5.5a.5.5 0 01.5.5.5.5 0 00.5.5h3a.5.5 0 00.5-.5.5.5 0 01.5-.5H20V5.49a.5.5 0 00-.5-.5h-15a.5.5 0 00-.5.5V16z"
      />
    </svg>
  )
})

MacbookProIcon.displayName = 'MacbookProIcon'

export default MacbookProIcon
