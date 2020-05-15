import React, { useContext } from 'react';
import Search from "./Search"
import LinkedUser from "./LinkedUser"
import UserContext from "../Context/UserContext"
import Loading from "./Loading"

const Profile =()=>{

    const { linkedUserEmail, loading } = useContext(UserContext)

    if (loading) return <Loading/>

    return(
        <div>
            {!linkedUserEmail && <Search/>}
            {linkedUserEmail && <LinkedUser/>}      
        </div>
    )

}

export default Profile