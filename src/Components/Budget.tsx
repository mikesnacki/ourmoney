import React from 'react'
import Loading from "./Loading"
import { css } from "emotion"
import { useQuery, gql } from "@apollo/client"

const Budget =()=> {

    const { loading, error, data } = useQuery(gql`
    {
        users {
            name
            email
          }
    }
  `);

    console.log(loading, error, data)

    if (loading) {return <Loading/> }

    return(
        <div className={css`
        margin: auto 3vw;`}>
            <p>this is a budget</p>
        </div>
    )
}

export default Budget