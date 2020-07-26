import { GraphQLClient } from 'graphql-request'
import moment from 'moment'

import * as graphql from '@generated/graphql.gen'

const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT as string)
const sdk = graphql.getSdk(client)

export type Event = graphql.Event
export type Speaker = graphql.Speaker
export type Company = graphql.Company
export type Talk = graphql.Talk

const getStage = (isPreview: boolean): graphql.Stage =>
  isPreview ? graphql.Stage.Draft : graphql.Stage.Published

export const getUpcomingEvent = async (isPreview: boolean) => {
  const { events } = await sdk.getUpcomingEvents({
    stage: getStage(isPreview),
    date: moment().format(),
  })

  return events[0] ?? null
}

export const getPastEvents = async (isPreview: boolean) => {
  const { events } = await sdk.getPastEvents({
    stage: getStage(isPreview),
    date: moment().format(),
  })

  return events
}

export const getEventBySlug = async (
  { slug }: { slug: string },
  isPreview: boolean
) => {
  const { event } = await sdk.getEventBySlug({
    stage: getStage(isPreview),
    slug,
  })

  return event
}

export default sdk
