import React, { useState } from 'react';
import { useLazyQuery } from "@apollo/client"
import SEARCH_FOR_USER from "../Executables/Queries/SEARCH_FOR_USER"
import Loading from "./Loading"

const Search = () => {

    const [ userSearched, setUserSearched ] = useState<string>("")

    const [searchForUser, { loading, data, error }] = useLazyQuery(SEARCH_FOR_USER, {
        variables: {user: userSearched},
    })
    if (loading) return <Loading/>

    console.log(userSearched, data, error)

    return (
        <div>
            <input type="email" onChange={e=>setUserSearched(e.target.value)}></input>
            <button onClick={()=>searchForUser()}>Search</button>
        </div>
    )

}

export default Search