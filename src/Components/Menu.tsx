import React, { useState } from 'react'
import { css } from 'emotion'
import { Link } from "react-router-dom"

const Menu =()=>{

    const [menuOut, setMenuOut] = useState<boolean>(false)

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
            `}
            onClick={()=>setMenuOut(!menuOut)}
            >
                <div className={`lines line1-${menuOut}`}></div>
                <div className={`lines line2-${menuOut}`}></div>
                <div className={`lines line3-${menuOut}`}></div>
            </button>
            <div className= {`menu menu-${menuOut}`}>
                <Link to="/">Home</Link>
            </div>
        </>
    )
}

export default Menu