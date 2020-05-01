import React, { useState } from 'react';
import { css } from "emotion";
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
            if (data.users[0]){
            setSearch((prevState:any)=>({
                ...prevState,
                searched: true,
                searchResult:{
                    id: data.users[0].id,
                    email: data.users[0].email
                }
                })
            )}
    }})

    if (loading) { return <Loading/>}
    if (error) {return <p>Error</p>}

    return (
        <div className={css`
        margin: auto 3vw;`}>
            <h2 className={css`text-align: center;`}>Search for users to add them below.</h2>
            <input type="email" onChange={e=>setSearch({userSearched: e.target.value})}></input>
            <button className="" type="submit" onClick={()=>searchForUser()}>Search</button>
            {
                search.searched && search.searchResult !== undefined && 
                    <div>
                        <p>Do you want to request user {search.searchResult.email}?</p>
                        <button>Yes</button><button>No</button>
                    </div>
            }
            {
                search.searched && search.searchResult === undefined &&
                <div>
                    <p>We didn't find anyone for that email.</p>
                </div>
            }
        </div>
    )

}

export default Search