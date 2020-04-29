import React, { useState } from 'react'
import { useMutation } from "@apollo/client"
import { Link } from "react-router-dom"
import NewUserProps from "../Interfaces/NewUserProps"
import CREATE_NEW_USER from "../Executables/Mutations/CREATE_NEW_USER"
import Loading from "../Components/Loading"

const SignUp =( { user } : { user: NewUserProps })=> {

    const [isSignedUp, setIsSignedUp] = useState<boolean>(false)

    const [createNewUser, { loading, error }] = useMutation(CREATE_NEW_USER,
        {
            variables: {
                data: {email: user.email}
            }
        }
    )

    const signUpUser =() =>{
        createNewUser()
        if (loading) return <Loading/>
        if (error) return <p>Error</p>
        setIsSignedUp(true)
    }

    if (loading) return (<Loading/>)

    return (
        <div>
            {
                !isSignedUp ?
                <button onClick={()=> signUpUser()}>
                    Click to sign up
                </button>
                :
                <button>
                    <Link key={2} className="nav-links" to="/budget">Our Budget</Link>
                </button>
            }

        </div>
    )
}

export default SignUp