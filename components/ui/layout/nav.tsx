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
  const handleItemClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()

      const target = document.querySelector(e.currentTarget.hash)

      window.scrollTo({
        top: (target?.getBoundingClientRect().top ?? 0) - 80,
        behavior: 'smooth',
      })
    },
    []
  )

  return (
    <nav className="col-start-8 col-end-13 flex justify-between items-center">
      {isLoading
        ? Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="skeleton w-1/4 h-icon" />
          ))
        : items?.map((item) => (
            <a
              key={JSON.stringify(item)}
              href={`#${item.anchor}`}
              className="flex items-center text-cinder-alpha-50 hover:text-cinder-alpha-75 transition ease-in duration-200"
              onClick={handleItemClick}
            >
              <Icon
                variant={item.icon}
                className="flex-shrink-0 w-icon h-icon text-cinder-alpha-25 mr-md"
              />
              {item.title}
            </a>
          ))}
    </nav>
  )
}

export default Nav
