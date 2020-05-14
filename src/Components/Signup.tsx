import React, { useState, useContext } from 'react'
import { useMutation } from "@apollo/client"
import { css } from "emotion"
import CREATE_NEW_USER from "../Executables/Mutations/CREATE_NEW_USER"
import Loading from "../Components/Loading"
import UserContext from "../Context/UserContext"

const SignUp =()=> {

    const [isSignedUp, setIsSignedUp] = useState<boolean>(false)
    const { userEmail, loading } = useContext(UserContext)

    const [createNewUser, { error }] = useMutation(CREATE_NEW_USER,
        {
            variables: {
                data: {email: userEmail}
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
        <div className={css`
        margin-top: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
        `}>
            {
                !isSignedUp &&
                <button  
                    className="newItemButton"
                    onClick={()=> signUpUser()}>
                    Click to Sign Up
                </button>
            }

        </div>
    )
}

export default SignUp