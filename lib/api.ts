import { GraphQLClient } from 'graphql-request'

import * as graphql from '@generated/graphql.gen'

const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT as string)
const sdk = graphql.getSdk(client)

export type Event = graphql.Event
export type Speaker = graphql.Speaker
export type Company = graphql.Company
export type Talk = graphql.Talk

const getStage = (isPreview: boolean): graphql.Stage =>
  isPreview ? graphql.Stage.Draft : graphql.Stage.Published

export const getEventForEventPage = async (
  { slug }: { slug: string },
  isPreview: boolean
) => {
  const { event } = await sdk.getEventForEventPage({
    stage: getStage(isPreview),
    slug,
  })

  return event
}

export const getEventForOgImage = async (
  { id }: { id: string },
  isPreview: boolean
) => {
  const { event } = await sdk.getEventForOgImage({
    stage: getStage(isPreview),
    id,
  })

  return event
}

export const getTalkForOgImage = async (
  { id }: { id: string },
  isPreview: boolean
) => {
  const { talk } = await sdk.getTalkForOgImage({
    stage: getStage(isPreview),
    id,
  })
  return talk
}

export default sdk
