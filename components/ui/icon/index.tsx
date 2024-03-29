import React from 'react'

const icons = {
  'calendar-month': require('./calendar-month'),
  'chevron-down': require('./chevron-down'),
  close: require('./close'),
  'close-circle': require('./close-circle'),
  'hamburger-menu': require('./hamburger-menu'),
  'info-circle': require('./info-circle'),
  'macbook-pro': require('./macbook-pro'),
  microphone: require('./microphone'),
  users: require('./users'),
}

export type IconVariant = keyof typeof icons

interface IconProps extends React.SVGProps<SVGSVGElement> {
  variant: IconVariant
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ variant, ...props }, ref) => {
    const Component = icons[variant].default as React.ElementType<
      React.SVGProps<SVGSVGElement>
    >

    return <Component ref={ref} {...props} />
  }
)

Icon.displayName = 'Icon'

export default Icon
