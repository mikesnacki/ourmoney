import React from 'react'
import { css } from "emotion"


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