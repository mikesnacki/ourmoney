import { gql } from "@apollo/client"

const UPDATE_LINE_ITEM = gql`
    mutation updateLineItem($data: LineItemUpdateInput!,  $where: LineItemWhereUniqueInput!) {
        updateLineItem(data: $data, where: $where) {
            id
            type
            name
            amount
    }
  }
`

export default UPDATE_LINE_ITEM