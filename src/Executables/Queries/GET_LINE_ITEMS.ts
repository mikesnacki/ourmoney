import {gql} from "@apollo/client"

const GET_LINE_ITEMS = gql`query{
    lineItems  (where:{user:{email:"mikesnacki@gmail.com"}})
   {
     id
     name
     amount
     type
   }
 }
 `
export default GET_LINE_ITEMS