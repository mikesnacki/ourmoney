import React, { useState } from 'react'
import { useMutation, gql } from "@apollo/client"
import  ILineItem from "../Interfaces/ILineItem"

const CreateBudgetItem = ()=> {
const user:string = "ck9e8smlh000s07914dw7ff5w"

const CREATE_NEW_LINE_ITEM = gql`
mutation createLineItem($data: LineItemCreateInput!){
    createLineItem(data: $data)
    {
      name
      amount
      type
    }
  }
`

    const [newLineItem, setNewLineItem] = useState<ILineItem>({
                                            type: "INCOME",
                                            amount: 0,
                                            deleted: false,
                                            name: "",
                                            user: {connect:{id:user}}
    })

    const [createLineItem, {error, data}] = useMutation<{data: ILineItem}>(CREATE_NEW_LINE_ITEM, {
        variables: {
            data: { 
                amount: +newLineItem.amount, 
                deleted: newLineItem.deleted,
                name: newLineItem.name,
                user: newLineItem.user,
                type: newLineItem.type
            }
        }
    })

    const handleChange=(e: any)=> {
        const name = e.target.name;
        const defaultValue = e.target.value;
        setNewLineItem((prevState:any)=>({
            ...prevState,
            [name]:defaultValue,
            })
        )

        console.log(newLineItem)
    }

    return (
        <div>
            <h2>New Budget Item</h2>
                <input
                className="newItemInput"
                name="name"
                placeholder="Budget Item Name"
                defaultValue={newLineItem.name}
                onChange={handleChange}
                ></input>
                <input
                className="newItemInput"
                name="amount"
                placeholder="Budget Item Amount"
                defaultValue={+newLineItem.amount}
                onChange={handleChange}
                />
                <select
                onChange={handleChange}
                >
                    <option value="INCOME">Income</option>
                    <option value="EXPENSE">Expense</option>
                </select>
            <button
                onClick={()=>createLineItem()}>
                Submit
            </button>
        </div>
    )
}

export default CreateBudgetItem