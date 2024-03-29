import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/dist/client/router'
import dynamic from 'next/dynamic'
import React from 'react'
import { Any } from 'ts-toolbelt'

import EventHeader from '@components/events/event-header'
import EventInfo from '@components/events/event-info'
import EventSchedule from '@components/events/event-schedule'
import EventSpeakers, { EventSpeaker } from '@components/events/event-speakers'
import SEO from '@components/seo'
import FullScreenMessage from '@components/ui/full-screen-message'
import Layout from '@components/ui/layout'
import { getEventForEventPage } from '@lib/api'

const EventShare = dynamic(() => import('@components/events/event-share'), {
  ssr: false,
})

const EventPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  preview,
  event,
}) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return (
      <Layout isPreview={preview} navItems={[null, null, null]}>
        <SEO />
        <EventHeader isLoading />
      </Layout>
    )
  }

  if (!event) {
    return (
      <Layout isPreview={preview}>
        <SEO
          title="Event not found"
          description="The event you are looking for does not exist."
        />
        <FullScreenMessage message="The event you are looking for does not exist." />
      </Layout>
    )
  }

  return (
    <Layout
      isPreview={preview}
      navItems={[
        { icon: 'info-circle', title: 'Info', anchor: 'info' },
        { icon: 'microphone', title: 'Speakers', anchor: 'speakers' },
        { icon: 'calendar-month', title: 'Schedule', anchor: 'schedule' },
      ]}
    >
      <SEO
        slug={`events/${event.slug}`}
        title={event.title}
        description={event.description}
        image={`api/og-image/events/${event.id}`}
      />
      <EventHeader
        date={event.date}
        title={event.title}
        meetupId={event.meetupId}
      />
      <EventInfo description={event.description} />
      <EventSpeakers
        isComplete={event.isComplete}
        speakers={
          event.schedule.map((s) => s.speaker).filter(Boolean) as EventSpeaker[]
        }
      />
      <EventSchedule isComplete={event.isComplete} talks={event.schedule} />
      <EventShare />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: true,
    paths: [],
  }
}

export const getStaticProps: GetStaticProps<{
  preview: boolean
  event: Any.PromiseOf<ReturnType<typeof getEventForEventPage>>
}> = async (req) => {
  const preview = Boolean(req.preview)
  const slug = req.params!.slug as string
  const event = await getEventForEventPage({ slug }, preview)

  return {
    revalidate: 1,
    props: {
      preview,
      event,
    },
  }
}

export default EventPage
