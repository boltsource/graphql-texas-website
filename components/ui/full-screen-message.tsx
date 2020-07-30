import React from 'react'

import Grid from './grid'

type FullScreenMessage = {
  title?: string
  message: string
}

const FullScreenMessage: React.FC<FullScreenMessage> = ({ title, message }) => {
  return (
    <Grid className="min-h-screen items-center py-header">
      <div className="col-start-2 col-end-6 lg:col-start-4 lg:col-end-10 text-center">
        {title ? <h1 className="typography-hero">{title}</h1> : null}
        <p className="mt-md text-cinder-alpha-50">{message}</p>
      </div>
    </Grid>
  )
}

export default FullScreenMessage
