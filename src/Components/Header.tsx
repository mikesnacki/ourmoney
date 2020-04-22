import React from 'react'
import ThemeSwitch from "./ThemeSwitch"
import { css } from 'emotion'

const Header =()=>{
    return(
        <header>
            <h2>
                our<span className={css`color: #29c7ac;`}>$</span>Money
            </h2>
            <ThemeSwitch/>
        </header>
    )
}

export default Header