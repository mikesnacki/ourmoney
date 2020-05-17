import React, { createContext } from 'react'
import { useAuth0 } from "../Hooks/useAuth"
import Loading from "../Components/Loading"
import LineItemProps from "../Interfaces/LineItemProps";
import GET_USER_DATA from "../Executables/Queries/GET_USER_DATA"
import { useQuery } from "@apollo/client"

type ContextProps ={
    userID?: string,
    userEmail?: string,
    loading?: boolean;
    children: React.ReactChild | React.ReactChild[];
    userBudget?: LineItemProps[],
    linkedUserEmail?: string,
    linkedUserBudget?: LineItemProps[],
}

const UserContext = createContext({
    userEmail: "",
    userID: "",
    loading: false,
    userBudget: [], 
    linkedUserEmail: "",
    linkedUserBudget: [],
})

export default UserContext

export const UserProvider =(props: ContextProps)=>{

    const { user } = useAuth0()

    const { data, loading } = useQuery(GET_USER_DATA, {
        variables: {user: user.email},
        pollInterval: 500,
    });

    if (loading) return <Loading/>

    let userBudget = data.users[0].lineItems
    let userID: string = data.users[0].id
    let userEmail: string = data.users[0].email
    let linkedUserEmail = data.users[0].linkedUser.linkedUser.email
    let linkedUserBudget = data.users[0].linkedUser.linkedUser.lineItems

    return (
        <UserContext.Provider
        value={{ userEmail, userID, loading, userBudget, linkedUserEmail, linkedUserBudget}}>
            {props.children}
        </UserContext.Provider>
    )
    
    


}