import React, {useState} from 'react';
import { useMutation } from "@apollo/client"
import { faTrash, faExchangeAlt, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineItemProps from "../Interfaces/LineItemProps"
import DELETE_LINE_ITEM from "../Executables/Mutations/DELETE_LINE_ITEM"
import UPDATE_LINE_ITEM from "../Executables/Mutations/UPDATE_LINE_ITEM"

const LineItem =({lineItem } :{lineItem: LineItemProps})=> {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [item, setItem] = useState<LineItemProps>({
                            type: lineItem.type,
                            amount: lineItem.amount,
                            name: lineItem.name,
                            id: lineItem.id,
                        })

    const currFormat = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency: "USD",
        maximumFractionDigits: 2
    })

    const [ deleteLineItem ] = useMutation(
        DELETE_LINE_ITEM, 
        {
            variables: {
                where: { 
                    id: lineItem.id
                }
            }
        },
    )

    const [ updateLineItem ] = useMutation(
        UPDATE_LINE_ITEM, 
        {
            variables: {
                data: {
                    name: item.name,
                    amount: +item.amount,
                },
                where: { 
                    id: item.id
                }
            }
        }
    )

    const handleChange=(e: any)=> {
        const name = e.target.name;
        const defaultValue = e.target.value.toString().replace("$", '')
        setItem((prevState:any)=>({
            ...prevState,
            [name]:defaultValue,
            })
        )
    }

    return (
        <div
        className="lineItem">
            <div
            className="flex-row space-around">
                <input
                    name="name" 
                    className="item capitalize text-start" 
                    defaultValue={lineItem.name}
                    onChange={handleChange}/>
                <input
                    name="amount" 
                    className="item text-end" 
                    defaultValue={currFormat.format(lineItem.amount)}
                    onChange={handleChange}/>
                <div className="lineItem-options">
                <FontAwesomeIcon 
                onClick={()=>setEditMode(!editMode)}
                    className={`addItemButton changesItemButton-${!lineItem.name.includes("Total") ? "true" : "false"}`} 
                    icon={faEllipsisH} 
                />
                </div>
            </div>
            {editMode && !lineItem.name.includes("Total") &&
                <div className="flex-row space-around">
                    <FontAwesomeIcon onClick={()=>updateLineItem()} className="addItemButton changesItemButton" icon={faExchangeAlt} />
                    <FontAwesomeIcon onClick={()=> deleteLineItem()} className="addItemButton changesItemButton" icon={faTrash}/>
                </div>
            }
        </div>
    )
}

export default LineItem