import { gql } from "@apollo/client"

const CREATE_NEW_USER = gql`
mutation($data: UserCreateInput!) {
    createUser (data: $data)
    {
      id
      email
    }
  }
`

export default CREATE_NEW_USER