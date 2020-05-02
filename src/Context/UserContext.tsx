import React, {useContext, createContext} from 'react'
import { useAuth0 } from "../Hooks/useAuth"
import Loading from "../Components/Loading"
import LineItemProps from "../Interfaces/LineItemProps";
import GET_USER_DATA from "../Executables/Queries/GET_USER_DATA"
import { useQuery } from "@apollo/client"

type ContextProps ={
    user?: object;
    userID?: string,
    loading: boolean;
    error: false;
    children: React.ReactChild[];
    userBudget?: LineItemProps[],
}

const UserContext = createContext({
    user: null,
    userID: "",
    loading: false,
    error: false,
    userBudget: []
})
export default UserContext

export const UserProvider =(props: ContextProps)=>{

    const {user, error, loading} = useAuth0()
    let userBudget = []
    let userID: string

    const { data } = useQuery(GET_USER_DATA, {
        variables: {user: user.email},
        pollInterval: 500,
    });

    userBudget = data.users[0].lineItems
    userID = data.users[0].id
    
    if (loading) return <Loading/>

    return (
        <UserContext.Provider
        value={{user, userID, loading, error, userBudget}}>
            {props.children}
        </UserContext.Provider>
    )
    
    


}