import React from 'react'
import { useAuth0 } from "../Hooks/useAuth"
import GET_USER_DATA from "../Executables/Queries/GET_USER_DATA"
import { useQuery } from "@apollo/client"

const LinkedUser =()=> {

    const { user } = useAuth0();

    const { data } = useQuery(GET_USER_DATA, {
        variables: {user: user.email},
        pollInterval: 500,
    });

    return(
        <div>
            hi
        </div>
    )
}

export default LinkedUser