import * as prismic from '@prismicio/client'
import sm from '../../sm.json'

export const getPrismicClient = () => {
  const client = prismic.createClient(sm.apiEndpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });

  return client
}
