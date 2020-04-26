import React, {useState} from 'react';
import ILineItem from "../Interfaces/ILineItem"
import { useMutation } from "@apollo/client"
import DELETE_LINE_ITEM from "../Executables/Mutations/DELETE_LINE_ITEM"
import { faTrash, faExchangeAlt, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LineItem =({lineItem } :{lineItem: ILineItem})=> {

    const [editMode, setEditMode] = useState<boolean>(false)

    const currFormat = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency: "USD",
        maximumFractionDigits: 2
    })

    const [deleteLineItem, {error, data}] = useMutation(
        DELETE_LINE_ITEM, 
        {
            variables: {
                where: { 
                    id: lineItem.id
                }
            }
        },
    )

    return (
        <div
        className="lineItem">
            <div
            className="flex-row space-around">
                <input className="item capitalize text-start" defaultValue={lineItem.name}/>
                <input className="item text-end" defaultValue={currFormat.format(lineItem.amount)}/>
                <div className="lineItem-options">
                <FontAwesomeIcon 
                onClick={()=>setEditMode(!editMode)}
                    className="addItemButton changesItemButton" 
                    icon={faEllipsisH} 
                />
                </div>
            </div>
            {editMode && 
                <div className="flex-row space-around">
                    <FontAwesomeIcon className="addItemButton changesItemButton" icon={faExchangeAlt} />
                    <FontAwesomeIcon onClick={()=> deleteLineItem()} className="addItemButton changesItemButton" icon={faTrash}/>
                </div>
            }
        </div>
    )
}

export default LineItem