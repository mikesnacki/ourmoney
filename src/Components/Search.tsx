import React, { useState } from 'react';
import { useLazyQuery } from "@apollo/client"
import SEARCH_FOR_USER from "../Executables/Queries/SEARCH_FOR_USER"
import SearchProps from "../Interfaces/SearchProps"
import Loading from "./Loading"

const Search = () => {

    const [ search, setSearch ] = useState<SearchProps>({
        userSearched: "",
        searchResult: {
            email: "",
            id: ""
        },
        searched: false,
        error: false,
    })

    const [searchForUser, { loading, error }] = useLazyQuery(SEARCH_FOR_USER, {
        variables: {user: search.userSearched},
        onCompleted: data=>{
            console.log(data)
            setSearch((prevState:any)=>({
                ...prevState,
                seached: true,
                searchResult:{
                    id: data.users[0].id,
                    email: data.users[0].email
                }
                })
            )
    }})

    console.log(search)

    if (loading) { return <Loading/>}
    if (error) {return <p>Error</p>}

    return (
        <div>
            <input type="email" onChange={e=>setSearch({userSearched: e.target.value})}></input>
            <button type="submit" onClick={()=>searchForUser()}>Search</button>
        </div>
    )

}

export default Search