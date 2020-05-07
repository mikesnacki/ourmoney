import { gql } from "@apollo/client"

const ADD_REQUESTED_USER = gql`
mutation addRequestedUser($where: UserWhereUniqueInput!, $data: LinkedUserUpdateOneWithoutLinkedUserInput) {
    updateUser(
      where: $where, 
      data: {
        $data
      }
    ) {
      id
    }
  }
`

export default ADD_REQUESTED_USER