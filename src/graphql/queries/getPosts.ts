import { gql } from '@/__generated__/gql';

export default gql(/* GraphQL */ `
  query Posts {
    posts {
      id
      title
      slug
      stage
      tags
      excerpt
      createdBy {
        picture
      }
      coverImage {
        url
      }
    }
  }
`);
