import moment from 'moment'
import { NextApiHandler } from 'next'

import OgImage from '@components/og-image'
import { getEventForOgImage } from '@lib/api'
import generate from '@lib/og-generator'

const eventOgImage: NextApiHandler = async (req, res) => {
  const preview = Boolean(req.preview)
  const id = req.query.id as string
  const event = await getEventForOgImage({ id }, preview)

  if (!event) {
    return res.status(401).json({ message: 'Event not found' })
  }

  await generate(
    OgImage,
    { subtitle: moment(event.date).format('MM.DD.YYYY'), title: event.title },
    req,
    res
  )
}

export default eventOgImage
