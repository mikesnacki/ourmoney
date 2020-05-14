import React, { createContext } from 'react'
import { useAuth0 } from "../Hooks/useAuth"
import Loading from "../Components/Loading"
import LineItemProps from "../Interfaces/LineItemProps";
import GET_USER_DATA from "../Executables/Queries/GET_USER_DATA"
import { useQuery } from "@apollo/client"

type ContextProps ={
    userData?: object,
    userID?: string,
    userEmail?: string,
    loading?: boolean;
    children: React.ReactChild | React.ReactChild[];
    userBudget?: LineItemProps[],
}

const UserContext = createContext({
    userData: {},
    userEmail: "",
    userID: "",
    loading: false,
    userBudget: []
})
export default UserContext

export const UserProvider =(props: ContextProps)=>{

    const { user } = useAuth0()
    let userBudget = []
    let userID: string
    let userEmail: string
    let userData: object

    const { data, loading } = useQuery(GET_USER_DATA, {
        variables: {user: user.email},
        pollInterval: 500,
    });

    if (loading) return <Loading/>

    userBudget = data.users[0].lineItems
    userID = data.users[0].id
    userEmail = data.users[0].email
    userData = user

    return (
        <UserContext.Provider
        value={{userData, userEmail, userID, loading, userBudget}}>
            {props.children}
        </UserContext.Provider>
    )
    
    


}