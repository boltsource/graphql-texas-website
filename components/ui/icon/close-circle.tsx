import React from 'react'

const CloseCircleIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, svgRef) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" ref={svgRef} {...props}>
      <path
        fill="currentColor"
        d="M12.5 11.793l2.646-2.647a.5.5 0 01.708.708L13.207 12.5l2.647 2.646a.5.5 0 01-.708.708L12.5 13.207l-2.646 2.647a.5.5 0 01-.708-.708l2.647-2.646-2.647-2.646a.5.5 0 11.708-.708l2.646 2.647zM12.5 23C6.701 23 2 18.299 2 12.5S6.701 2 12.5 2 23 6.701 23 12.5 18.299 23 12.5 23zm0-1a9.5 9.5 0 100-19 9.5 9.5 0 000 19z"
      />
    </svg>
  )
})

CloseCircleIcon.displayName = 'CloseCircleIcon'

export default CloseCircleIcon
