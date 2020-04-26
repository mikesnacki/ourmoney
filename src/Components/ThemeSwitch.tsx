import React, { useContext } from 'react'
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';
import ThemeContext from "../Context/ThemeContext"
import { css } from 'emotion'



const ThemeSwitch =()=>{
    const {dark, toggle} = useContext(ThemeContext)
    
    const checked = dark ? 
    {
        travel: "0px", backgroundColor: "#333333", svgColor: "#f2ed6f"
    } 
    : {
        travel: "30px", backgroundColor: "white", svgColor: "#cf7500"
    }

    const svg = `
                position: absolute;
                cursor: pointer;
                background-color: ${checked.backgroundColor};
                transition: .4s;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                left: 4px;
                top: 4px;
                color: ${checked.svgColor};
                -webkit-transition: .4s;
                transition: .4s;
                -webkit-transform: translateX(${checked.travel});
                -ms-transform: translateX(${checked.travel});
                transform: translateX(${checked.travel});
                `   
    
    return (
    <label 
        className={css`
        position: fixed;
        bottom: 5vh;
        left: 2vw;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 30px;
        `}>
        <button
            className={css`
            background-color: transparent;
            align-items: center;
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
            height: 48px;
            width: 80px;
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