import moment from 'moment'
import React from 'react'

import { Event } from '@lib/api'

type EventHeaderProps = {
  date: Event['date']
  title: Event['title']
  meetupId: Event['meetupId']
}

const EventHeader: React.FC<EventHeaderProps> = ({ date, title, meetupId }) => {
  return (
    <div>
      <div>{moment(date).format('DD')}</div>
      <div>{moment(date).format('MMM')}</div>
      <div>{moment(date).format('YYYY')}</div>
      <h1>{title}</h1>
      <a
        href={`https://www.meetup.com/GraphQL-Texas/events/${meetupId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Make your reservation
      </a>
    </div>
  )
}

export default EventHeader
