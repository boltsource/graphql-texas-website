import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'
import { Any } from 'ts-toolbelt'

import PastEvents from '@components/events/past-events'
import UpcomingEvent from '@components/events/upcoming-event'
import SEO from '@components/seo'
import Layout from '@components/ui/layout'
import { getUpcomingEvent, getPastEvents } from '@lib/api'

const HomePage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  preview,
  upcomingEvent,
  pastEvents,
}) => {
  return (
    <Layout isPreview={preview} className="py-header">
      <SEO />
      <UpcomingEvent event={upcomingEvent} />
      {pastEvents.length ? <PastEvents events={pastEvents} /> : null}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<{
  preview: boolean
  upcomingEvent: Any.PromiseOf<ReturnType<typeof getUpcomingEvent>>
  pastEvents: Any.PromiseOf<ReturnType<typeof getPastEvents>>
}> = async (req) => {
  const preview = Boolean(req.preview)
  const upcomingEvent = await getUpcomingEvent(preview)
  const pastEvents = await getPastEvents(preview)

  return {
    revalidate: 1,
    props: {
      preview,
      upcomingEvent,
      pastEvents,
    },
  }
}

export default HomePage
