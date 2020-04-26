import React,  {useState} from 'react'
import Menu from "./Menu"
import { css } from 'emotion'

const Header =()=>{

    const [navDisplay, activateNavDisplay] = useState<boolean>(false)
    return(
        <header className={css`
            display: flex;
            flex-direction: row;
            margin: auto 3vw;
            justify-content: space-between;
            align-items: center;
        `}>
            <h2>our<span className={css`color: #29c7ac;`}>$</span>Money</h2>
            <Menu
            navDisplay={navDisplay}
            activateNavDisplay={activateNavDisplay}
            />
        </header>
    )
}

export default Header