import React from 'react';
import { css } from "emotion"
import ILineItem from "../Interfaces/ILineItem"

const LineItem =({lineItem } :{lineItem: ILineItem})=> {

    const currFormat = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency: "USD",
        maximumFractionDigits: 2
    })


    return (
        <div 
        onClick={()=>console.log(lineItem.id)}
        className="lineItem">
            <input className="item capitalize text-start" defaultValue={lineItem.name}/>
            <input className="item text-end" defaultValue={currFormat.format(lineItem.amount)}/>
        </div>
    )
}

export default LineItem