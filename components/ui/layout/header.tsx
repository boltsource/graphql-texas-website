import Link from 'next/link'
import React from 'react'

import Grid from '../grid'
import Logo from './logo'
import Nav from './nav'

type HeaderProps = {
  isLoading?: boolean
  isScrolling: boolean
  navItems?: React.ComponentProps<typeof Nav>['items']
}

const Header: React.FC<HeaderProps> = ({
  isLoading,
  isScrolling,
  navItems,
}) => {
  return (
    <header
      className={[
        'fixed w-full flex items-center z-20 transition-all ease-in duration-200',
        isScrolling ? 'h-header-collapsed bg-white shadow-lg' : 'h-header',
      ].join(' ')}
    >
      <Grid className="items-center">
        <Link href="/">
          <a>
            <Logo
              className={[
                'col-start-1 col-end-4 w-auto transition-all ease-in duration-200',
                isScrolling ? 'h-logo-collapsed' : 'h-logo',
              ].join(' ')}
            />
          </a>
        </Link>
        <Nav isLoading={isLoading} items={navItems} />
      </Grid>
    </header>
  )
}

export default Header
