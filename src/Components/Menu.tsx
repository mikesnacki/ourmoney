import React from 'react'
import { css } from 'emotion'
import { Link } from "react-router-dom"
// import {useAuth0} from "../Hooks/useAuth"

type DisplayProps = {
    navDisplay: boolean, 
    activateNavDisplay: (navDisplay: boolean) => void
}

const Menu =(Props: DisplayProps)=>{

    // const { isAuthenticated, loginWithRedirect, logout} = useAuth0();

    const links:(JSX.Element | boolean)[] = [
        <Link key={1} className="nav-links" to="/" onClick={()=>Props.activateNavDisplay(!Props.navDisplay)}>Home</Link>,
        <Link key={2} className="nav-links" to="/budget" onClick={()=>Props.activateNavDisplay(!Props.navDisplay)}>Our Budget </Link>,
        // !isAuthenticated && <span key={3} className="nav-links" onClick={()=>loginWithRedirect({})}>Login</span>,
        // isAuthenticated && <span key={4} className="nav-links"onClick={()=>logout()}>Logout</span>,
    ]

    return(
        <>
            <button className={css`
            height: 50px;
            width: 50px;
            display:flex;
            flex-direction: column; 
            justify-content: center
            z-index: 2;
            right: 3vw;
            top: 3vh;
            padding: 0;
            overflow: hidden;
            `}
            onClick={()=>Props.activateNavDisplay(!Props.navDisplay)}
            >
                <div className={`lines line1-${Props.navDisplay}`}></div>
                <div className={`lines line2-${Props.navDisplay}`}></div>
                <div className={`lines line3-${Props.navDisplay}`}></div>
            </button>
            <div className= {`menu menu-${Props.navDisplay}`}>
                <ul
                className={css`
                    display:flex;
                    flex-direction: column; 
                    justify-content: center;
                    margin-top: 30vh;
                    `}>
                    {links}
                </ul>
            </div>
        </>
    )
}

export default Menu