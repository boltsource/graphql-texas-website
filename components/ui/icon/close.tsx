import React from 'react'

const CloseIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, svgRef) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" ref={svgRef} {...props}>
      <path
        fill="currentColor"
        d="M12 11.293l4.146-4.147a.5.5 0 01.708.708L12.707 12l4.147 4.146a.5.5 0 01-.708.708L12 12.707l-4.146 4.147a.5.5 0 01-.708-.708L11.293 12 7.146 7.854a.5.5 0 11.708-.708L12 11.293z"
      />
    </svg>
  )
})

CloseIcon.displayName = 'CloseIcon'

export default CloseIcon
