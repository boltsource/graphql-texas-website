import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/dist/client/router'
import dynamic from 'next/dynamic'
import React from 'react'
import { Any } from 'ts-toolbelt'

import EventHeader from '@components/events/event-header'
import EventHost from '@components/events/event-host'
import EventSchedule from '@components/events/event-schedule'
import EventSpeakers from '@components/events/event-speakers'
import SEO from '@components/seo'
import FullScreenMessage from '@components/ui/full-screen-message'
import Layout from '@components/ui/layout'
import { getEventBySlug } from '@lib/api'

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
      <Layout isLoading isPreview={preview}>
        <SEO />
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
        { icon: 'users', title: 'Speakers', anchor: 'speakers' },
        { icon: 'calendar-month', title: 'Schedule', anchor: 'schedule' },
        { icon: 'microphone', title: 'Host', anchor: 'host' },
      ]}
    >
      <SEO
        slug={`events/${event.slug}`}
        title={event.title}
        description={event.description}
        image={`api/og-image/events/${event.slug}`}
      />
      <EventHeader
        date={event.date}
        title={event.title}
        meetupId={event.meetupId}
      />
      <EventSpeakers isComplete={event.isComplete} speakers={event.speakers} />
      <EventSchedule isComplete={event.isComplete} talks={event.schedule} />
      <EventHost description={event.description} host={event.host} />
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
  event: Any.PromiseOf<ReturnType<typeof getEventBySlug>>
}> = async (req) => {
  const preview = Boolean(req.preview)
  const slug = req.params!.slug as string
  const event = await getEventBySlug({ slug }, preview)

  return {
    revalidate: 1,
    props: {
      preview,
      event,
    },
  }
}

export default EventPage
