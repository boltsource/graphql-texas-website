import React from 'react'
import { Union } from 'ts-toolbelt'

import Grid from '@components/ui/grid'
import { Speaker, Company, Event } from '@lib/api'

export type EventSpeaker = {
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
  isComplete: Event['isComplete']
  speakers: EventSpeaker[]
}

const EventSpeakers: React.FC<EventSpeakersProps> = ({
  isComplete,
  speakers,
}) => {
  return (
    <div
      id="speakers"
      className="min-h-screen-minus-header bg-royal-blue text-white py-xl lg:py-2xl relative overflow-hidden flex items-center"
    >
      <svg
        width="299"
        height="326"
        viewBox="0 0 299 326"
        fill="none"
        className="w-half-screen h-auto absolute top-0 left-0"
      >
        <rect
          x="47.5"
          y="58.5"
          width="195"
          height="195"
          stroke="black"
          strokeOpacity="0.03"
          strokeWidth="25"
        />
        <rect
          x="157.5"
          y="184.5"
          width="129"
          height="129"
          stroke="black"
          strokeOpacity="0.03"
          strokeWidth="25"
        />
        <rect
          x="-19.5"
          y="-35.5"
          width="167"
          height="167"
          stroke="black"
          strokeOpacity="0.03"
          strokeWidth="25"
        />
      </svg>

      <Grid className="relative z-10">
        <div className="col-start-2 col-end-6 lg:col-start-3 lg:col-end-11 flex flex-col items-center">
          <h2 className="typography-section-title text-center">Speakers</h2>

          {speakers.length ? (
            <ul className="mt-xl lg:mt-2xl lg:self-stretch">
              {speakers.map((speaker, i) => (
                <li
                  key={speaker.id}
                  className={[
                    'flex flex-col items-center text-center',
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
                    i !== 0 && 'mt-xl',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {speaker.picture ? (
                    <img
                      src={speaker.picture.url}
                      title={speaker.name}
                      className="w-avatar-small lg:w-avatar-big h-avatar-small lg:h-avatar-big rounded-full"
                    />
                  ) : null}
                  <div
                    className={[
                      'mt-sm lg:mt-none flex flex-col items-center',
                      i % 2 === 0
                        ? 'lg:items-start lg:ml-lg'
                        : 'lg:items-end lg:mr-lg',
                    ].join(' ')}
                  >
                    <h3 className="typography-subtitle">{speaker.name}</h3>
                    <p className="mt-md lg:mt-xs leading-normal">
                      {speaker.role}
                      {speaker.company ? (
                        <React.Fragment>
                          {' '}
                          at{' '}
                          <a
                            href={speaker.company.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="typography-link-contrast"
                          >
                            {speaker.company.name}
                          </a>
                        </React.Fragment>
                      ) : null}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-lg lg:mt-xl text-center">To be announced</p>
          )}

          {speakers.length && !isComplete ? (
            <p className="mt-xl lg:mt-2xl lg:self-end typography-small text-center">
              + More speakers to be announced
            </p>
          ) : null}
        </div>
      </Grid>
    </div>
  )
}

export default EventSpeakers
