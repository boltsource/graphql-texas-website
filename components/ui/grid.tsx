import React from 'react'

type GridProps = {
  className?: string
}

const Grid: React.FC<GridProps> = ({ className, children }) => {
  return (
    <div
      className={[
        'mx-auto container grid grid-cols-6 lg:grid-cols-12 gap-md p-md',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

export default Grid
