import React from 'react'
import { Union } from 'ts-toolbelt'

import { Speaker, Company } from '@lib/api'

type EventSpeaker = {
  id: Speaker['id']
  picture: Union.Nullable<{
    url: Speaker['picture']['url']
  }>
  name: Speaker['name']
  role: Speaker['role']
  company?: Union.Nullable<{
    name: Company['name']
    url: Company['url']
  }>
}

type EventSpeakersProps = {
  speakers: EventSpeaker[]
}

const EventSpeakers: React.FC<EventSpeakersProps> = ({ speakers }) => {
  return (
    <div id="speakers">
      <h2>Speakers</h2>
      {speakers.length ? (
        <ul>
          {speakers.map((speaker) => (
            <li key={speaker.id}>
              {speaker.picture ? (
                <img src={speaker.picture.url} title={speaker.name} />
              ) : null}
              <h3>{speaker.name}</h3>
              <p>
                {speaker.role}
                {speaker.company ? (
                  <React.Fragment>
                    {' '}
                    at{' '}
                    <a
                      href={speaker.company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {speaker.company.name}
                    </a>
                  </React.Fragment>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>To be announced</p>
      )}
    </div>
  )
}

export default EventSpeakers
