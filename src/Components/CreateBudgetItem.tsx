import React, { useState } from 'react'
import { useMutation } from "@apollo/client"
import  LineItemProps from "../Interfaces/LineItemProps"
import  CreateItemProps from "../Interfaces/CreateItemProps"
import DataProps from "../Interfaces/UserProps"
import { css } from "emotion"
import CREATE_NEW_LINE_ITEM from "../Executables/Mutations/CREATE_NEW_LINE_ITEM"
import GET_USER_DATA from "../Executables/Queries/GET_USER_DATA"

const CreateBudgetItem = ({newItemDisplayed , setNewItemDisplayed}: CreateItemProps)=> {
    const user:string = "ck9e8smlh000s07914dw7ff5w"

    const initialState = {
        type: "INCOME",
        amount: 0,
        deleted: false,
        name: "",
        user: {connect:{id:user}}
    }

    const [newLineItem, setNewLineItem] = useState<LineItemProps>(initialState)

    const [ createLineItem ] = useMutation(
        CREATE_NEW_LINE_ITEM, 
        {
            update(cache, { data: { createLineItem } }) {
                let lineItems: any
                lineItems = cache.readQuery<DataProps[]>({ query: GET_USER_DATA });
                cache.writeQuery({
                query: GET_USER_DATA,
                data: { lineItems: lineItems.concat([createLineItem])},
              });
            }
        }
    )

    const handleChange=(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=> {
        const name: string = e.target.name;
        const defaultValue: string  = e.target.value 
        setNewLineItem((prevState:any)=>({
            ...prevState,
            [name]:defaultValue,
            })
        )
    }

    const submitNewLineItem =()=>{
        createLineItem({variables: {
            data: {
                type: newLineItem.type, 
                amount: +newLineItem.amount, 
                name: newLineItem.name,
                user: newLineItem.user,
            }
        }})
        setNewLineItem(initialState)
        setNewItemDisplayed(false)
    }

    return (
        <div className={`modal display-block-${newItemDisplayed}`}>
            <div className={css`
            margin: 30vh auto; 
            display: flex; 
            flex-direction: row; 
            flex-wrap: wrap;
            max-width: 450px;
            box-shadow: 1px 2px 2px 2px hsla(0, 0%,0%, 0.2);
            border-radius: 5px;`
            }>
            <h2 className={css`
            align-items: center;
            margin: auto;
            `}>New Budget Item</h2>
            <button
            className="modal-button-close"
            onClick={()=>setNewItemDisplayed(false)}
            >×</button>
            <div className={css`
                margin: auto; 
                display: flex; 
                flex-direction: row; 
                flex-wrap: wrap;
                justify-content: center;
            `}>
                <input
                className="newItemInput"
                name="name"
                placeholder="Budget Item"
                defaultValue={newLineItem.name}
                onChange={handleChange}
                ></input>
                <input
                className="newItemInput"
                name="amount"
                placeholder="Budget Item Amount"
                defaultValue={newLineItem.amount}
                onChange={handleChange}
                />
                <select
                name="type"
                className="newItemInput"
                onChange={handleChange}
                defaultValue={newLineItem.amount}
                >
                    <option value="INCOME">Income</option>
                    <option value="EXPENSE">Expense</option>
                </select>

            </div>
            <button
                className=" display-block newItemButton"
                onClick={()=>submitNewLineItem()}>
                Submit
            </button>
            </div>
        </div>
    )
}

export default CreateBudgetItem