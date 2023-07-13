import { gql } from '@/__generated__/gql';

const getQuery = gql(/* GraphQL */ `
  query Post($id: ID!) {
    post(where: { id: $id }) {
      title
      content {
        html
      }
      author {
        id
        name
        picture {
          url
        }
      }
      coverImage {
        url
      }
    }
  }
`);

export default getQuery;
