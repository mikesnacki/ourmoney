import { gql } from "@apollo/client";

const GET_USER_DATA = gql`
            query getUserData($user: String!) {
                    users(where:{email: $user}) {
                        id
                        email
                        linkedUser {
                          inviteSent
                          inviteAccepted
                          invitedUserName
                          linkedUser {
                            email
                            lineItems{
                              id
                              name
                              amount
                              type
                            }
                          }
                        }
                        lineItems {
                          id
                          name
                          amount
                          type
                        }
                      }
            }
    `

export default GET_USER_DATA