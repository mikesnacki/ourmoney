import React, { FC, useState } from 'react'
import { useMutation } from "@apollo/client"
import { css } from "emotion"
import NewUserProps from "../Interfaces/NewUserProps"
import CREATE_NEW_USER from "../Executables/Mutations/CREATE_NEW_USER"
import Loading from "../Components/Loading"

const SignUp: FC<NewUserProps> =({ user })=> {

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