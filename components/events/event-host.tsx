import React from 'react'
import Markdown from 'react-markdown'
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
      className="relative min-h-screen-minus-header bg-cinder text-white py-xl lg:py-2xl flex items-center"
    >
      <Grid className="relative z-10">
        <div className="col-start-1 col-end-7 lg:col-start-3 lg:col-end-11 flex flex-col">
          <h2 className="typography-section-title self-center text-center lg:self-start lg:text-left">
            Meet the host
          </h2>

          {host ? (
            <div className="mt-lg lg:mt-xl flex-auto">
              <div className="mt-lg lg:mt-none lg:flex-auto flex flex-col lg:flex-row-reverse items-center">
                <img
                  src={host.picture.url}
                  title={host.name}
                  className="flex-shrink-0 w-avatar-small lg:w-avatar-big h-avatar-small lg:h-avatar-big rounded-full"
                />

                <Markdown
                  source={description}
                  className="lg:mr-xl mt-xl lg:mt-none typography-markdown text-center lg:text-left lg:flex-auto"
                />
              </div>

              <p className="mt-lg lg:mt-xl text-center lg:text-right font-medium leading-normal">
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
