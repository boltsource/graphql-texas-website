import React from 'react'
import { Union } from 'ts-toolbelt'

import Grid from '@components/ui/grid'
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
    <div
      id="host"
      className="relative min-h-screen-minus-header bg-cinder text-white py-xl md:py-2xl flex items-center"
    >
      <Grid>
        <div className="col-start-1 col-end-7 md:col-start-3 md:col-end-11 flex flex-col">
          <h2 className="typography-section-title self-center text-center md:self-start md:text-left">
            Meet the host
          </h2>

          {host ? (
            <div className="mt-xl md:mt-2xl flex flex-col md:flex-row-reverse items-center">
              <img
                src={host.picture.url}
                title={host.name}
                className="flex-shrink-0 w-avatar-small md:w-avatar-big h-avatar-small md:h-avatar-big rounded-full"
              />

              <div className="mt-lg md:mt-none md:flex-auto md:mr-2xl">
                <p className="font-light leading-normal text-md text-center md:text-left">
                  {description}
                </p>

                <p className="mt-lg md:mt-xl text-center md:text-right font-medium leading-normal">
                  {host.name}, {host.role}
                  {host.company ? (
                    <React.Fragment>
                      {' '}
                      at{' '}
                      <a
                        href={host.company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="typography-link-contrast"
                      >
                        {host.company.name}
                      </a>
                    </React.Fragment>
                  ) : null}
                </p>
              </div>
            </div>
          ) : (
            <p>To be announced</p>
          )}
        </div>
      </Grid>

      <svg
        width="821"
        height="680"
        viewBox="0 0 821 680"
        fill="none"
        className="w-half-screen h-auto absolute bottom-0 right-0"
      >
        <path
          d="M641.473 649.719L477.053 238.858L915.079 301.897L641.473 649.719Z"
          stroke="white"
          strokeOpacity="0.03"
          strokeWidth="50"
        />
        <path
          d="M367.293 752.481L202.873 341.62L640.899 404.659L367.293 752.481Z"
          stroke="white"
          strokeOpacity="0.03"
          strokeWidth="50"
        />
      </svg>
    </div>
  )
}

export default EventHost
