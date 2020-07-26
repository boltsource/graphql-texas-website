import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { Union } from 'ts-toolbelt'

import { Event } from '@lib/api'

type UpcomingEventProps = {
  event?: Union.Nullable<{
    date: Event['date']
    title: Event['title']
    slug: Event['slug']
  }>
}

const UpcomingEvent: React.FC<UpcomingEventProps> = ({ event }) => {
  if (!event) {
    return <p>We don&apos;t have any upcoming events. Stay tuned!</p>
  }

  return (
    <div>
      <div>{moment(event.date).format('DD')}</div>
      <div>{moment(event.date).format('MMM')}</div>
      <div>{moment(event.date).format('YYYY')}</div>
      <Link href="/events/[slug]" as={`/events/${event.slug}`}>
        <a>
          <h1>{event.title}</h1>
        </a>
      </Link>
    </div>
  )
}

export default UpcomingEvent
