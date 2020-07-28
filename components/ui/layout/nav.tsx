import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import Icon, { IconVariant } from '../icon'

type NavItem = {
  icon: IconVariant
  title: string
  anchor: string
}

type NavProps = {
  isLoading?: boolean
  items?: NavItem[]
}

const Nav: React.FC<NavProps> = ({ isLoading, items }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleItemClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()

      const target = document.getElementById(
        e.currentTarget.hash.replace('#', '')
      )

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth',
        })

        setIsMenuOpen(false)
      }
    },
    []
  )

  const menu = items?.map((item) => (
    <a
      key={JSON.stringify(item)}
      href={`#${item.anchor}`}
      className="mt-md md:mt-none flex items-center text-cinder-alpha-50 hover:text-cinder-alpha-75 text-lg md:text-md transition ease-in duration-200"
      onClick={handleItemClick}
    >
      <Icon
        variant={item.icon}
        className="flex-shrink-0 w-icon h-icon text-cinder-alpha-25 mr-md"
      />
      {item.title}
    </a>
  ))

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="skeleton w-icon h-icon col-start-6" />
      ) : (
        <button
          type="button"
          className="md:hidden w-icon h-icon col-start-6"
          onClick={() => setIsMenuOpen(true)}
        >
          <Icon
            variant="hamburger-menu"
            className="w-full h-full text-cinder-alpha-25"
          />
        </button>
      )}

      <AnimatePresence>
        {isMenuOpen ? (
          <React.Fragment>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed z-40 top-0 left-0 right-0 bottom-0 bg-cinder-alpha-75"
            />

            <motion.div
              initial={{ right: -300 }}
              animate={{ right: 0 }}
              exit={{ right: -300 }}
              transition={{ duration: 0.2 }}
              className="fixed z-50 w-menu h-full top-0 right-0 bg-white shadow-2xl flex flex-col justify-center p-md"
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
              {menu}
            </motion.div>
          </React.Fragment>
        ) : null}
      </AnimatePresence>

      {/* {isMenuOpen ? (
        <React.Fragment>
          
        </React.Fragment>
      ) : null} */}

      {/* {isMenuOpen ? (
        <React.Fragment>
          <div className="fixed top-0 right-0 bottom-0 left-0 bg-cinder-alpha-75 flex flex-col items-end z-40" />

          
        </React.Fragment>
      ) : null} */}

      <nav className="hidden col-start-8 col-end-13 md:flex justify-between items-center">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="skeleton w-1/4 h-icon" />
            ))
          : menu}
      </nav>
    </React.Fragment>
  )
}

export default Nav
