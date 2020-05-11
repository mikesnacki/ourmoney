import { gql } from "@apollo/client"

const CREATE_REQUESTED_USER = gql`
mutation createRequestedUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
    updateUser( where: $where, data: $data) {
      id
    }
  }
`

export default CREATE_REQUESTED_USER