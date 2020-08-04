import { NextApiHandler } from 'next'

import OgImage from '@components/og-image'
import { getTalkForOgImage } from '@lib/api'
import generate from '@lib/og-generator'

const talkOgImage: NextApiHandler = async (req, res) => {
  const preview = Boolean(req.preview)
  const id = req.query.id as string
  const talk = await getTalkForOgImage({ id }, preview)

  if (!talk) {
    return res.status(401).json({ message: 'Talk not found' })
  }

  if (!talk.speaker) {
    return res.status(401).json({ message: 'Speaker not found' })
  }

  await generate(
    OgImage,
    {
      alt: true,
      image: talk.speaker.picture.url,
      subtitle: talk.speaker.name,
      title: talk.title,
    },
    req,
    res
  )
}

export default talkOgImage
