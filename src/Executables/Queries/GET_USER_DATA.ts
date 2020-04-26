import { gql } from "@apollo/client";

const GET_USER_DATA = gql`
            query getUserData($user: ID!) {
                    users(where:{id: $user}) {
                    id
                    name
                    email
                    lineItems(orderBy: type_DESC) {
                        id
                        name
                        amount
                        type
                        deleted
                    }
                }
            }
    `

export default GET_USER_DATA