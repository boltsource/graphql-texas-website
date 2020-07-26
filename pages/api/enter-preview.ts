import { NextApiHandler } from 'next'

const enterPreviewApi: NextApiHandler = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(401).json({ message: 'Only POST allowed.' })
  }

  const { secret } = JSON.parse(req.body)

  if (secret !== process.env.PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid secret code.' })
  }

  res.setPreviewData({})
  res.json({ ok: true })
}

export default enterPreviewApi
