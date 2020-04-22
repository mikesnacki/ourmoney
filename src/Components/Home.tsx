import React from 'react'
import {css} from 'emotion'

const Home = ()=> {
    return (
        <div className={css`
        margin: auto 3vw;`}>
            <h2>Hello. This is an application to help you manage money with your partner.</h2>
            <h3>The idea is simple. Login with your favorite social application, create your budget, and invite your significant other to do the same.</h3>
            <h2 className={css`color: #29c7ac;`}>Honesty is key. Be honest to yourself about what you spend each month.</h2>
        </div>
    )
}

export default Home