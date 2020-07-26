import React from 'react'

import Grid from './grid'

type ErrorMessageProps = {
  title: string
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ title, message }) => {
  return (
    <Grid className="my-auto">
      <div className="col-start-4 col-end-10 text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-md text-cinder-alpha-75">{message}</p>
      </div>
    </Grid>
  )
}

export default ErrorMessage
