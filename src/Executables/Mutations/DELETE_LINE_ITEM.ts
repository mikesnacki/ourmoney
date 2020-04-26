import { gql } from "@apollo/client"

const DELETE_LINE_ITEM = gql`
mutation deleteLineItem ($where: LineItemWhereUniqueInput!){
    deleteLineItem (where: $where) {
      name
    }
  }`

export default DELETE_LINE_ITEM