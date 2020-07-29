import { motion, AnimatePresence } from 'framer-motion'
import moment from 'moment-timezone'
import React from 'react'
import Markdown from 'react-markdown'

import Grid from '@components/ui/grid'
import Icon from '@components/ui/icon'
import { Event, Talk } from '@lib/api'

type EventScheduleProps = {
  isComplete: Event['isComplete']
  talks: Pick<Talk, 'id' | 'time' | 'title' | 'description'>[]
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
      className="min-h-screen-minus-header py-xl md:py-2xl flex items-center"
    >
      <Grid>
        <div className="col-start-1 col-end-7 md:col-start-3 md:col-end-11 flex flex-col items-center">
          <h2 className="typography-section-title text-center">Schedule</h2>

          {talks.length ? (
            <div className="mt-xl md:mt-2xl md:self-stretch">
              {talks.map((talk, i) => (
                <React.Fragment key={talk.id}>
                  <div
                    className="group flex items-center cursor-pointer py-sm md:py-md"
                    onClick={() => handleTalkClick(talk.id)}
                  >
                    <span className="flex-shrink-0  text-cinder-alpha-50">
                      {moment(talk.time).tz('CST6CDT').format('hh:mm a')}
                    </span>
                    <div className="flex-auto ml-md md:ml-lg">
                      <h3 className="typography-subtitle">{talk.title}</h3>
                    </div>
                    <button
                      type="button"
                      className={[
                        'flex-shrink-0 text-cinder-alpha-25 group-hover:text-cinder-alpha-75 transition ease-in duration-200 w-icon-small h-icon-small md:w-icon md:h-icon',
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
                        <Markdown className="mb-sm md:mb-md text-cinder-alpha-75 typography-markdown">
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
            <p className="mt-lg md:mt-xl text-cinder-alpha-50 text-center">
              To be announced
            </p>
          )}

          {talks.length && !isComplete ? (
            <p className="mt-xl md:mt-2xl self-end typography-small text-cinder-alpha-50 text-right">
              + More talks to be announced
            </p>
          ) : null}
        </div>
      </Grid>
    </div>
  )
}

export default EventSchedule
