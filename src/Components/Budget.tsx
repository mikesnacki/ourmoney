import React, { useState } from 'react';
import Loading from "./Loading";
import { css } from "emotion";
import { useQuery, gql } from "@apollo/client";
import ILineItem from "../Interfaces/ILineItem";
import LineItem from "./LineItem";
import CreateBudgetItem from "./CreateBudgetItem";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Budget =()=> {

    const user:string = "ck9e8smlh000s07914dw7ff5w"

    const [newItemDisplayed, setNewItemDisplayed] = useState<boolean>(false)

    const GET_USER_DATA = gql`
                query getUserData($user: ID!) {
                        users(where:{id: $user})
                        {
                        id
                        name
                        email
                        lineItems(orderBy: type_DESC) {
                            id
                            name
                            amount
                            type
                            deleted
                        }
                    }
                }
            `

    const { loading, error, data } = useQuery(GET_USER_DATA, {
        variables: {user: user},
        pollInterval: 300,
    });

    if (loading) {return <Loading/> }
    if (error) {return <p>Error</p>} 

    return(
        <div className={css`
            margin: auto 3vw;`}>
            {data.users[0].lineItems.map((lineItem : ILineItem, key: number)=> (
                <LineItem
                    key={key}
                    lineItem={lineItem}
                />
            ))}
        <CreateBudgetItem
            newItemDisplayed={newItemDisplayed} 
            setNewItemDisplayed={setNewItemDisplayed} 
        />
        <button
            className={css`
            position: fixed;
            bottom: 5vh;
            right: 2vw;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            `}
            onClick={()=>setNewItemDisplayed(!newItemDisplayed)}
        >
            <FontAwesomeIcon className="addItemButton" icon={faPlusCircle} />
        </button>
        </div>
    )
}

export default Budget