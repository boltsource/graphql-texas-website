import { motion, AnimatePresence } from 'framer-motion'
import moment from 'moment-timezone'
import React from 'react'
import Markdown from 'react-markdown'
import { Union } from 'ts-toolbelt'

import Grid from '@components/ui/grid'
import Icon from '@components/ui/icon'
import { Event, Talk, Speaker } from '@lib/api'

type EventTalk = {
  id: Talk['id']
  time: Talk['time']
  title: Talk['title']
  description: Talk['description']
  speaker?: Union.Nullable<{
    name: Speaker['name']
  }>
}

type EventScheduleProps = {
  isComplete: Event['isComplete']
  talks: EventTalk[]
}

const EventSchedule: React.FC<EventScheduleProps> = ({ isComplete, talks }) => {
  const [expandedTalk, setExpandedTalk] = React.useState<string | null>(null)

  const handleTalkClick = React.useCallback(
    (id: string) => {
      setExpandedTalk(expandedTalk === id ? null : id)
    },
    [expandedTalk]
  )

  return (
    <div
      id="schedule"
      className="min-h-screen-minus-header py-xl lg:py-2xl flex items-center"
    >
      <Grid>
        <div className="col-start-1 col-end-7 lg:col-start-3 lg:col-end-11 flex flex-col items-center">
          <h2 className="typography-section-title text-center">Schedule</h2>

          {talks.length ? (
            <div className="mt-xl lg:mt-2xl self-stretch">
              {talks.map((talk, i) => (
                <React.Fragment key={talk.id}>
                  <div
                    className="group flex items-center cursor-pointer py-sm lg:py-md"
                    onClick={() => handleTalkClick(talk.id)}
                  >
                    <span className="flex-shrink-0  text-cinder-alpha-50">
                      {moment(talk.time).tz('CST6CDT').format('hh:mm a')}
                    </span>
                    <div className="flex-auto ml-md lg:ml-lg">
                      <h3 className="typography-subtitle">{talk.title}</h3>
                      {talk.speaker ? (
                        <h4 className="mt-xs text-cinder-alpha-50">
                          {talk.speaker.name}
                        </h4>
                      ) : null}
                    </div>
                    <button
                      type="button"
                      className={[
                        'flex-shrink-0 text-cinder-alpha-25 group-hover:text-cinder-alpha-75 transition ease-in duration-200 w-icon-small h-icon-small lg:w-icon lg:h-icon',
                        expandedTalk === talk.id && 'transform rotate-180',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <Icon variant="chevron-down" className="w-full h-full" />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {expandedTalk === talk.id ? (
                      <motion.div
                        key="content"
                        className="overflow-hidden"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: 'auto' },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >
                        <Markdown className="mb-sm lg:mb-md text-cinder-alpha-75 typography-markdown">
                          {talk.description}
                        </Markdown>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  {i !== talks.length - 1 ? (
                    <hr className="border-cinder-alpha-10" />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p className="mt-lg lg:mt-xl text-cinder-alpha-50 text-center">
              To be announced
            </p>
          )}

          {talks.length && !isComplete ? (
            <p className="mt-xl lg:mt-2xl self-end typography-small text-cinder-alpha-50 text-right">
              + More talks to be announced
            </p>
          ) : null}
        </div>
      </Grid>
    </div>
  )
}

export default EventSchedule
