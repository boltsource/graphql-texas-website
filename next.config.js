/* eslint-disable @typescript-eslint/no-var-requires */
const { request } = require('graphql-request')
const moment = require('moment')

const UPCOMING_EVENTS = `
  query getUpcomingEvents($date: Date!) {
    events(where: { date_gte: $date }) {
      slug
    }
  }
`

module.exports = {
  async redirects() {
    const { events } = await request(
      process.env.GRAPHCMS_ENDPOINT,
      UPCOMING_EVENTS,
      {
        date: moment().format(),
      }
    )

    if (!events) {
      return []
    }

    return [
      {
        source: '/',
        destination: `/events/${events[0].slug}`,
        permanent: false,
      },
    ]
  },
}
