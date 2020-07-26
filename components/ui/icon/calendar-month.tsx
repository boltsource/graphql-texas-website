import React from 'react'

const CalendarMonthIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, svgRef) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" ref={svgRef} {...props}>
      <path
        fill="currentColor"
        d="M19 10.5v7a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 17.5v-7a.5.5 0 01.5-.5h13a.5.5 0 01.5.5zM18 17H6v.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V17zm0-1v-1H6v1h12zM6 14h12v-1H6v1zm12-2v-1H6v1h12zm-2-8H8v.5a.5.5 0 01-1 0V4H5.5A1.5 1.5 0 004 5.5V8h16V5.5A1.5 1.5 0 0018.5 4H17v.5a.5.5 0 11-1 0V4zm1-1h1.5A2.5 2.5 0 0121 5.5v13.007a2.5 2.5 0 01-2.5 2.5h-13a2.5 2.5 0 01-2.5-2.5V5.5A2.5 2.5 0 015.5 3H7v-.5a.5.5 0 011 0V3h8v-.5a.5.5 0 111 0V3zm3 6H4v9.507a1.5 1.5 0 001.5 1.5h13a1.5 1.5 0 001.5-1.5V9z"
      />
    </svg>
  )
})

CalendarMonthIcon.displayName = 'CalendarMonthIcon'

export default CalendarMonthIcon
