/* eslint-disable import/namespace */
import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import * as Fields from '@components/ui/forms'
import Grid from '@components/ui/grid'
import { Event } from '@lib/api'

type EventCFPProps = {
  form: Event['form']
}

const EventCFP: React.FC<EventCFPProps> = ({ form }) => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const methods = useForm()

  if (!form) return null
  const { id, fields } = form
  if (!fields) return null

  return (
    <div
      id="CFP"
      className="relative min-h-screen-minus-header bg-cinder text-white py-xl lg:py-2xl flex items-center"
    >
      <Grid className="relative z-10">
        <div className="col-start-1 col-end-7 lg:col-start-3 lg:col-end-11 flex flex-col items-center">
          <h2 className="typography-section-title text-center">CFP</h2>
          {success ? (
            <p>Form submitted. We'll be in touch!</p>
          ) : (
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                {fields.map(({ __typename, ...field }, index) => {
                  if (!__typename) return null
                  const Field = Fields[__typename]
                  if (!Field) return null
                  return <Field key={index} {...field} />
                })}
                <button
                  className="mt-xl lg:mt-xl mx-auto lg:mr-none btn-cta"
                  type="submit"
                >
                  Submit
                </button>
                {error && <span>{error}</span>}
              </form>
            </FormProvider>
          )}
        </div>
      </Grid>
    </div>
  )
  async function onSubmit(values: any) {
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify({ id, ...values }),
      })
      if (!response.ok)
        throw new Error(`Something went wrong submitting the form.`)
      setSuccess(true)
    } catch (err) {
      setError(err.message)
    }
  }
}

export default EventCFP
