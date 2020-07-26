import React from 'react'
import { Union } from 'ts-toolbelt'

import { Speaker, Company, Event } from '@lib/api'

type EventHostProps = {
  description: Event['description']
  host?: Union.Nullable<{
    name: Speaker['name']
    role: Speaker['role']
    company?: Union.Nullable<{
      name: Company['name']
      url: Company['url']
    }>
    picture: {
      url: Speaker['picture']['url']
    }
  }>
}

const EventHost: React.FC<EventHostProps> = ({ description, host }) => {
  return (
    <div id="host">
      <h2>Meet the Host</h2>
      {host ? (
        <React.Fragment>
          <p>{description}</p>

          <p>
            {host.name}, {host.role}
            {host.company ? (
              <React.Fragment>
                {' '}
                at{' '}
                <a
                  href={host.company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {host.company.name}
                </a>
              </React.Fragment>
            ) : null}
          </p>

          <img src={host.picture.url} title={host.name} />
        </React.Fragment>
      ) : (
        <p>To be announced</p>
      )}
    </div>
  )
}

export default EventHost
