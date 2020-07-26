import moment from 'moment'
import React from 'react'

import { Talk } from '@lib/api'

type EventScheduleProps = {
  talks: Pick<Talk, 'id' | 'time' | 'title' | 'description'>[]
}

const EventSchedule: React.FC<EventScheduleProps> = ({ talks }) => {
  return (
    <div id="schedule">
      <h2>Schedule</h2>
      {talks.length ? (
        <div>
          {talks.map((talk) => (
            <div key={talk.id}>
              <span>{moment(talk.time).format('hh:mm a')}</span>
              <h3>{talk.title}</h3>
              <p>{talk.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>To be announced</p>
      )}
    </div>
  )
}

export default EventSchedule
