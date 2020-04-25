import React from 'react';
import { css } from "emotion"
import ILineItem from "../Interfaces/ILineItem"

const LineItem =({lineItem} :{lineItem: ILineItem})=> {

    const currFormat = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency: "USD",
        maximumFractionDigits: 2
    })


    return (
        <div 
        onClick={()=>console.log(lineItem.id)}
        className="lineItem">
            <p className={css`text-transform: capitalize;`}>{lineItem.name}</p>
            <p>{lineItem.amount !== undefined && currFormat.format(lineItem.amount)}</p>
        </div>
    )
}

export default LineItem