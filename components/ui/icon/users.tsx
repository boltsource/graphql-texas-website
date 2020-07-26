import React from 'react'

const UsersIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, svgRef) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" ref={svgRef} {...props}>
      <path
        fill="currentColor"
        d="M7.869 11.299l-4.056 2.087A1.5 1.5 0 003 14.72v.78A1.5 1.5 0 004.5 17a.5.5 0 110 1A2.5 2.5 0 012 15.5v-.78a2.5 2.5 0 011.356-2.223l3.358-1.728a5 5 0 117.424-6.576.5.5 0 11-.827.562 4 4 0 10-5.39 5.663.5.5 0 01-.052.88zm4.092 4.268L7.88 17.422A1.5 1.5 0 007 18.788v.712A1.5 1.5 0 008.5 21h11a1.5 1.5 0 001.5-1.5v-.712a1.5 1.5 0 00-.88-1.366l-4.081-1.855A4.982 4.982 0 0114 16a4.982 4.982 0 01-2.039-.433zm-1.039-.626a5 5 0 116.156 0l3.457 1.57A2.5 2.5 0 0122 18.789v.712a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 016 19.5v-.712a2.5 2.5 0 011.465-2.276l3.457-1.571zM14 15a4 4 0 100-8 4 4 0 000 8z"
      />
    </svg>
  )
})

UsersIcon.displayName = 'UsersIcon'

export default UsersIcon
