import React from 'react'

import Header from './header'
import { NavProps } from './nav'
import PreviewMode from './preview-mode'

type LayoutProps = {
  isPreview?: boolean
  navItems?: NavProps['items']
  className?: string
}

const Layout: React.FC<LayoutProps> = ({
  isPreview,
  navItems,
  className,
  children,
}) => {
  const [isScrolling, setIsScrolling] = React.useState(false)

  const handleScroll = React.useCallback(() => {
    setIsScrolling(window.scrollY > 0 ? true : false)
  }, [])

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <React.Fragment>
      <Header isScrolling={isScrolling} navItems={navItems} />
      <main className={className}>{children}</main>
      {isPreview !== undefined ? <PreviewMode isActive={isPreview} /> : null}
    </React.Fragment>
  )
}

export default Layout
