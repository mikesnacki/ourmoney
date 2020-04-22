import React, { useState } from 'react'
import { css } from 'emotion'

const Menu =()=>{

    const [menuOut, setMenuOut] = useState<boolean>(false)

    return(
        <>
            <button className={css`
            height: 50px;
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
                 <h2>hi</h2>
            </div>
        </>
    )
}

export default Menu