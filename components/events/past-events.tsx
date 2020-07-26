import moment from 'moment'
import Link from 'next/link'
import React from 'react'

import { Event } from '@lib/api'

type PastEventsProps = {
  events: Pick<Event, 'id' | 'date' | 'slug' | 'title'>[]
}

const PastEvents: React.FC<PastEventsProps> = ({ events }) => {
  return (
    <div id="past-events">
      <h2>Past events</h2>

      {events.length
        ? events.map((event) => (
            <div key={event.title}>
              <div>{moment(event.date).format('DD')}</div>
              <div>{moment(event.date).format('MMM')}</div>
              <div>{moment(event.date).format('YYYY')}</div>
              <Link href="/events/[slug]" as={`/events/${event.slug}`}>
                <a>
                  <h1>{event.title}</h1>
                </a>
              </Link>
            </div>
          ))
        : null}
    </div>
  )
}

export default PastEvents
