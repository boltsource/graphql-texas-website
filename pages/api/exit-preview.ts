import { NextApiHandler } from 'next'

const exitPreviewApi: NextApiHandler = (_, res) => {
  res.clearPreviewData()
  res.json({ ok: true })
}

export default exitPreviewApi
