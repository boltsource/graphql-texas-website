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
