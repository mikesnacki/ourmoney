import { gql } from "@apollo/client"

const CREATE_NEW_LINE_ITEM = gql`
    mutation createLineItem($data: LineItemCreateInput!){
        createLineItem(data: $data) {
            id
            name
            amount
            type
        }
    }
`
export default CREATE_NEW_LINE_ITEM