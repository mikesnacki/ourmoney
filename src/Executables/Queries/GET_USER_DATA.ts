import { gql } from "@apollo/client";

const GET_USER_DATA = gql`
            query getUserData($user: String!) {
                    users(where:{email: $user}) {
                    id
                    email
                    lineItems{
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