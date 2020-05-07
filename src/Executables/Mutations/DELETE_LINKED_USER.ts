import { gql } from "@apollo/client"

const DELETE_LINKED_USER_ITEM = gql`
mutation deleteLinkedUser (data:{linkedUser:{delete:true}},  $where: LineItemWhereUniqueInput!){
    updateUser(data: $data, where: $where)
    {
      linkedUser{
        id
        linkedUser {
            lineItems {
            name
            amount
          }
        }
      }
    }
  }
`

export default DELETE_LINKED_USER_ITEM