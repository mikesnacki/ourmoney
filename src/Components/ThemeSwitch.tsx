import React, { useContext } from 'react'
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';
import ThemeContext from "../Context/ThemeContext"
import { css, keyframes } from 'emotion'



const ThemeSwitch =()=>{
    const {dark, toggle} = useContext(ThemeContext)
    
    const checked = dark ? 
    {
        travel: "0px", backgroundColor: "#333333", svgColor: "#f2ed6f"
    } 
    : {
        travel: "20px", backgroundColor: "white", svgColor: "#cf7500"
    }

    const svg = `
                position: absolute;
                cursor: pointer;
                background-color: ${checked.backgroundColor};
                -webkit-transition: .4s;
                transition: .4s;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                left: 4px;
                bottom: 4px;
                color: ${checked.svgColor};
                -webkit-transition: .4s;
                transition: .4s;
                -webkit-transform: translateX(${checked.travel});
                -ms-transform: translateX(${checked.travel});
                transform: translateX(${checked.travel});
                `   
    
    return (
    <label className="switch">
        <button
            className={css`
            background-color: transparent
            `}
            onClick={()=>toggle()}
        />
        <span 
        className={css`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: ${checked.backgroundColor};
            border-radius: 20px;
            height: 28px;
            box-shadow: 1px 2px 6px 2px hsla(0, 0%,0%, 0.2);
        `}
        ></span>
            {
            dark ? 
            <Moon
                className={css`${svg}`}
            /> :
            <Sun
                className={css`${svg}`}
            /> 
            }
    </label>
    )
}

export default ThemeSwitch