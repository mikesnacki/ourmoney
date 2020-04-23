import React from 'react'
import { css, keyframes } from "emotion"

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`


const Loading =() =>{

    return(
        <div className={css`
        margin: 15vh auto;
        `}>
            <h3 className={css`
            text-align: center;
            `}>
            Please wait...</h3>
            <div className="spinner"/>
        </div>
    )
}

export default Loading