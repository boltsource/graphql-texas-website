import React from 'react'

const MicrophoneIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, svgRef) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" ref={svgRef} {...props}>
      <path
        fill="currentColor"
        d="M9 6.008v6.023a3.008 3.008 0 106.015 0V6.008a3.008 3.008 0 10-6.015 0zM11 21h2v-2.07a7.06 7.06 0 01-2 0V21zm-1 0v-2.29c-2.891-.86-5-3.539-5-6.71v-.5a.5.5 0 111 0v.5a6 6 0 1012 0v-.5a.5.5 0 111 0v.5a7.003 7.003 0 01-5 6.71V21h2.5a.5.5 0 110 1h-9a.5.5 0 110-1H10zM8 6.008a4.008 4.008 0 018.015 0v6.023a4.008 4.008 0 11-8.015 0V6.008z"
      />
    </svg>
  )
})

MicrophoneIcon.displayName = 'MicrophoneIcon'

export default MicrophoneIcon
