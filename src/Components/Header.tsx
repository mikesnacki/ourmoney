import React from 'react'
import Menu from "./Menu"
import { css } from 'emotion'

const Header =()=>{
    return(
        <header className={css`
            display: flex;
            flex-direction: row;
            margin: auto 4vw;
            justify-content: space-between;
            align-items: center;
        `}>
            <h2>our<span className={css`color: #29c7ac;`}>$</span>Money</h2>
            <Menu/>
        </header>
    )
}

export default Header