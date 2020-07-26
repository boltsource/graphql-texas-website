import moment from 'moment'
import React from 'react'

import Grid from '@components/ui/grid'
import { Event } from '@lib/api'

type EventHeaderProps = {
  date: Event['date']
  title: Event['title']
  meetupId: Event['meetupId']
}

const EventHeader: React.FC<EventHeaderProps> = ({ date, title, meetupId }) => {
  return (
    <Grid className="min-h-screen items-center py-header">
      <div className="col-start-1 col-end-7 md:col-start-2 md:col-end-12 flex flex-col">
        <div className="flex items-center flex-col md:flex-row">
          <div className="flex-shrink-0 flex md:flex-col items-center text-cinder-alpha-50">
            <span className="md:text-xl">{moment(date).format('DD')}</span>
            <span className="ml-xs md:ml-none md:text-lg uppercase">
              {moment(date).format('MMM')}
            </span>
            <span className="ml-xs md:ml-none md:mt-xs">
              {moment(date).format('YYYY')}
            </span>
          </div>

          <h1 className="mt-md md:mt-none md:ml-lg typography-hero text-center md:text-left">
            {title}
          </h1>
        </div>

        <a
          href={`https://www.meetup.com/GraphQL-Texas/events/${meetupId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-lg mx-auto md:mr-none btn-cta"
        >
          Make your reservation
        </a>
      </div>
    </Grid>
  )
}

export default EventHeader
