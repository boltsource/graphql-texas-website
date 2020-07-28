import React from 'react'

import Header from './header'
import Nav from './nav'
import PreviewMode from './preview-mode'

type LayoutProps = {
  isLoading?: boolean
  isPreview?: boolean
  navItems?: React.ComponentProps<typeof Nav>['items']
  className?: string
}

const Layout: React.FC<LayoutProps> = ({
  isLoading,
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
      <Header
        isLoading={isLoading}
        isScrolling={isScrolling}
        navItems={navItems}
      />
      <main className={className}>{children}</main>
      {isPreview !== undefined ? <PreviewMode isActive={isPreview} /> : null}
    </React.Fragment>
  )
}

export default Layout
