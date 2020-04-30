import { gql } from "@apollo/client"

const SEARCH_FOR_USER = gql`
  query serchForUser($user: String!) {
    users(where:{email: $user}) {
      id
      email
    }
  }
`

export default SEARCH_FOR_USER