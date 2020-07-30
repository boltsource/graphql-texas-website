import React from 'react'

import Grid from '../grid'
import Logo from './logo'
import Nav, { NavProps } from './nav'

type HeaderProps = {
  isScrolling: boolean
  navItems?: NavProps['items']
}

const Header: React.FC<HeaderProps> = ({ isScrolling, navItems }) => {
  return (
    <header
      className={[
        'fixed w-full flex items-center z-20 transition-all ease-in duration-200',
        isScrolling ? 'h-header-collapsed bg-white shadow-lg' : 'h-header',
      ].join(' ')}
    >
      <Grid className="items-center">
        <Logo
          className={[
            'col-start-1 col-end-4 w-auto transition-all ease-in duration-200',
            isScrolling ? 'h-logo-collapsed' : 'h-logo',
          ].join(' ')}
        />

        {navItems ? <Nav items={navItems} /> : null}
      </Grid>
    </header>
  )
}

export default Header
