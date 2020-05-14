import React from 'react'
import { useAuth0 } from "../Hooks/useAuth"
import GET_USER_DATA from "../Executables/Queries/GET_USER_DATA"
import DELETE_LINKED_USER from "../Executables/Mutations/DELETE_LINKED_USER"
import { useQuery } from "@apollo/client"
import Loading from "./Loading"

const LinkedUser =()=> {

    const { user } = useAuth0();

    const { data, loading } = useQuery(GET_USER_DATA, {
        variables: {user: user.email},
        pollInterval: 500,
    });

    if (loading) return <Loading/>

    return(
        <div>
            Linked user: {data.users[0].linkedUser.linkedUser.email}
            <button>Delete Linked User</button>
        </div>
    )
}

export default LinkedUser