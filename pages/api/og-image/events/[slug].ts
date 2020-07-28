import { NextApiHandler } from 'next'

import EventOgImage from '@components/events/event-og-image'
import { getEventBySlug } from '@lib/api'
import generate from '@lib/og-generator'

const eventOgImage: NextApiHandler = async (req, res) => {
  const preview = Boolean(req.preview)
  const slug = req.query.slug as string
  const event = await getEventBySlug({ slug }, preview)

  if (!event) {
    return res.status(401).json({ message: 'Event not found' })
  }

  await generate(EventOgImage, { title: event.title }, req, res)
}

export default eventOgImage
