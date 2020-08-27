import { GraphQLClient } from 'graphql-request'

export default async ({ body }: any, res: any) => {
  const { id, ...data } = JSON.parse(body)

  const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT as string, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_MUTATION_TOKEN}`,
    },
  })

  try {
    const { createSubmission } = await graphcms.request(
      `
      mutation createSubmission($data: Json!, $id: ID!) {
        createSubmission(data: {formData: $data, form: {connect: {id: $id}}}) {
          id
        }
      }`,
      {
        data,
        id,
      }
    )

    res.status(201).json(createSubmission)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}
