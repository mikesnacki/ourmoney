import React, {useState, createContext, useLayoutEffect } from 'react'

type ThemeProps = {
    dark?: boolean,
    toggle?: ()=> void,
    children: React.ReactChild[],
    setDark?: string,
    theme?:string,
}

const ThemeContext = createContext({
    dark: false, 
    toggle:()=>{}
})
export default ThemeContext

export const ThemeProvider =(props: ThemeProps)=> {
    const startTheme = window.localStorage.getItem("theme") === "lightTheme" ? false : true
    const [dark, setDark] = useState(startTheme)
    useLayoutEffect(()=> {
        if (dark){
            setDark(true)
            applyTheme(darkTheme)
        } else {
            setDark(false)
            applyTheme(lightTheme)
        }
    },[dark])

    const applyTheme = (theme: string[] ) => {
        const root = document.getElementsByTagName('html')[0];
        root.style.cssText = theme.join(';');
    }

    const toggle =()=>{
        const body = document.getElementsByTagName("body")[0]
        body.style.cssText = 'transition: background .3s ease';
        window.localStorage.setItem('theme', dark ? "lightTheme" : "darkTheme");
        setDark(!dark);
    }

    return (
        <ThemeContext.Provider 
            value={{ dark, toggle }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

const lightTheme = [
    '--border: rgba(0,0,0,.2)',
    '--shadow: #000',
    '--heading: #333333',
    '--main: #1d8f13',
    '--text: #000',
    '--textAlt: #fff',
    '--inactive: rgba(0,0,0,.3)',
    '--background: white',
    `--menu: #dbdbdb`,
  ];
  
  const darkTheme = [
    '--border: rgba(255,255,255,.1)',
    '--shadow: #000',
    '--heading: #ffffff',
    '--main: #79248f',
    '--text: rgb(255, 255, 255)',
    '--textAlt: #fff',
    '--inactive: rgba(255,255,255,.3)',
    '--background: #2D2D2D',
    `--menu: #363636`
  ];
