import React, { useContext } from 'react'
import { useAuth0 } from "../Hooks/useAuth"
import GET_USER_DATA from "../Executables/Queries/GET_USER_DATA"
import DELETE_LINKED_USER from "../Executables/Mutations/DELETE_LINKED_USER"
import { useQuery } from "@apollo/client"
import Loading from "./Loading"
import UserContext from "../Context/UserContext"

const LinkedUser =()=> {

    const { linkedUserEmail, loading } = useContext(UserContext)

    if (loading) return <Loading/>

    return(
        <div>
            Linked user: {linkedUserEmail}
            <button>Delete Linked User</button>
        </div>
    )
}

export default LinkedUser