import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import Icon, { IconVariant } from '../icon'

export type NavProps = {
  items: ({
    icon: IconVariant
    title: string
    anchor: string
  } | null)[]
}

const Nav: React.FC<NavProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleOpenMenu = React.useCallback(() => {
    setIsMenuOpen(true)
  }, [])

  const handleCloseMenu = React.useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <React.Fragment>
      {items.every((i) => !i) ? (
        <div className="lg:hidden col-start-6 flex justify-end">
          <div className="skeleton w-icon h-icon" />
        </div>
      ) : (
        <div className="lg:hidden col-start-6 flex justify-end">
          <button
            type="button"
            className="w-icon h-icon"
            onClick={handleOpenMenu}
          >
            <Icon
              variant="hamburger-menu"
              className="w-full h-full text-cinder-alpha-25"
            />
          </button>
        </div>
      )}

      <AnimatePresence>
        {isMenuOpen ? (
          <React.Fragment>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed z-40 top-0 left-0 right-0 bottom-0 bg-cinder-alpha-75"
            />

            <motion.div
              initial={{ right: -300 }}
              animate={{ right: 0 }}
              exit={{ right: -300 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed z-50 w-menu h-full top-0 right-0 bg-white shadow-2xl flex flex-col justify-center p-md"
            >
              <button
                type="button"
                className="absolute top-sm right-sm w-icon h-icon"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon
                  variant="close"
                  bg-white
                  className="w-full h-full text-cinder-alpha-25"
                />
              </button>

              <NavMenu isMobile items={items} closeMenu={handleCloseMenu} />
            </motion.div>
          </React.Fragment>
        ) : null}
      </AnimatePresence>

      <NavMenu items={items} closeMenu={handleCloseMenu} />
    </React.Fragment>
  )
}

type NavMenuProps = NavProps & {
  isMobile?: boolean
  closeMenu: () => void
}

const NavMenu: React.FC<NavMenuProps> = ({ isMobile, items, closeMenu }) => {
  const handleItemClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()

      const target = document.getElementById(
        e.currentTarget.hash.replace('#', '')
      )

      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
        closeMenu()
      }
    },
    [closeMenu]
  )

  return (
    <nav
      className={classNames(
        isMobile ? 'grid' : 'hidden',
        'grid-flow-row gap-md',
        'lg:grid lg:col-start-7 lg:col-end-13 lg:grid-flow-col lg:gap-lg'
      )}
    >
      {items.map((item, i) =>
        item ? (
          <a
            key={JSON.stringify(item)}
            href={`#${item.anchor}`}
            className="flex items-center lg:justify-end text-cinder-alpha-50 hover:text-cinder-alpha-75 text-md transition ease-in duration-200"
            onClick={handleItemClick}
          >
            <Icon
              variant={item.icon}
              className="flex-shrink-0 w-icon h-icon text-cinder-alpha-25 mr-md"
            />
            {item.title}
          </a>
        ) : (
          <div key={i} className="skeleton h-icon" />
        )
      )}
    </nav>
  )
}

export default Nav
