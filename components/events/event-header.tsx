import classNames from 'classnames'
import moment from 'moment'
import React from 'react'

import Grid from '@components/ui/grid'
import { Event } from '@lib/api'

type EventHeaderProps = {
  isLoading?: boolean
  date?: Event['date']
  title?: Event['title']
  meetupId?: Event['meetupId']
}

const EventHeader: React.FC<EventHeaderProps> = ({
  isLoading,
  date,
  title,
  meetupId,
}) => {
  return (
    <div className="min-h-screen py-xl md:py-2xl flex items-center">
      <Grid>
        <div className="col-start-1 col-end-7 md:col-start-2 md:col-end-12 flex flex-col">
          <div className="flex items-center flex-col md:flex-row">
            <div className="flex-shrink-0 flex md:flex-col items-center text-cinder-alpha-50 leading-none">
              <span
                className={classNames(
                  'md:text-xl',
                  isLoading && 'skeleton h-text-sm w-lg md:h-text-xl md:w-xl'
                )}
              >
                {!isLoading ? moment(date).format('DD') : null}
              </span>
              <span
                className={classNames(
                  'ml-sm md:ml-none md:text-lg md:mt-xs uppercase',
                  isLoading && 'skeleton h-text-sm w-lg md:h-text-lg md:w-xl'
                )}
              >
                {!isLoading ? moment(date).format('MMM') : null}
              </span>
              <span
                className={classNames(
                  'ml-sm md:ml-none md:mt-xs',
                  isLoading && 'skeleton h-text-sm w-lg md:h-text-md md:w-xl'
                )}
              >
                {!isLoading ? moment(date).format('YYYY') : null}
              </span>
            </div>

            <div className="mt-lg md:mt-none md:ml-2xl flex-auto w-full">
              {isLoading ? (
                <React.Fragment>
                  <div className="md:hidden flex flex-col items-center">
                    <div className="skeleton h-text-xl w-8/12" />
                    <div className="skeleton h-text-xl w-10/12 mt-sm" />
                    <div className="skeleton h-text-xl w-9/12 mt-sm" />
                    <div className="skeleton h-text-xl w-11/12 mt-sm" />
                  </div>
                  <div className="hidden md:flex flex-col">
                    <div className="skeleton typography-hero text-center md:text-left" />
                    <div className="skeleton h-text-2xl w-8/12" />
                    <div className="skeleton h-text-2xl w-10/12 mt-md" />
                    <div className="skeleton h-text-2xl w-5/12 mt-md" />
                  </div>
                </React.Fragment>
              ) : (
                <h1 className="typography-hero text-center md:text-left">
                  {title}
                </h1>
              )}
            </div>
          </div>

          {!isLoading ? (
            <a
              href={`https://www.meetup.com/GraphQL-Texas/events/${meetupId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-xl md:mt-xl mx-auto md:mr-none btn-cta"
            >
              Make your reservation
            </a>
          ) : null}
        </div>
      </Grid>
    </div>
  )
}

export default EventHeader
