import React, { useState } from 'react';
import Loading from "./Loading";
import { css } from "emotion";
import { useQuery } from "@apollo/client";
import LineItemProps from "../Interfaces/LineItemProps";
import LineItem from "./LineItem";
import CreateBudgetItem from "./CreateBudgetItem";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GET_USER_DATA from "../Executables/Queries/GET_USER_DATA"
import { useAuth0 } from "../Hooks/useAuth"

const calculateLineItem = (inputArray: Array<any>, param: string, type: string, sumField:string) => {
    return inputArray.filter(inputItem=> inputItem[param] === type)
                     .reduce((sum, lineItem)=> sum + lineItem[sumField], 0)
}

const Budget =()=> {

    const { user } = useAuth0();

    const [newItemDisplayed, setNewItemDisplayed] = useState<boolean>(false)

    let userBudget: LineItemProps[] = []

    const { loading, error, data } = useQuery(GET_USER_DATA, {
        variables: {user: user.email},
        pollInterval: 500,
    });

    if (loading || !user ) {return <Loading/> }
    if (error) {return <p>Error</p>} 

    userBudget = data.users[0].lineItems
    const userIncomesObject: LineItemProps = {
        name: "Total Income",
        type: "INCOME",
        amount: calculateLineItem(userBudget, "type", "INCOME", "amount"),
    }
    
    const userExpensesObject: LineItemProps = {
        name: "Total Expenses",
        type: "EXPENSE",
        amount: calculateLineItem(userBudget, "type", "EXPENSE", "amount"),
    }

    const userNetIncome: LineItemProps = {
        name: "Total Net Income",
        type: "INCOME",
        amount: userIncomesObject.amount - userExpensesObject.amount,
    }


    return(
        <div className={css`
            margin: auto 3vw;`}>
            <h2 className={css`text-align: center;`}>Income</h2>
            {
                userBudget.filter((lineItem: LineItemProps)=>lineItem.type==="INCOME").map((lineItem : LineItemProps, key: number)=> (
                    <LineItem
                    key={key}
                        lineItem={lineItem}
                    />
                ))
            }
            {
                <LineItem
                    lineItem={userIncomesObject}
                />
            }
            <h2 className={css`text-align: center;`}>Expense</h2>
            {
                userBudget.filter((lineItem: LineItemProps)=>lineItem.type==="EXPENSE").map((lineItem : LineItemProps, key: number)=> (
                    <LineItem
                        key={key}
                        lineItem={lineItem}
                    />
                ))
            }
            {
                <LineItem
                    lineItem={userExpensesObject}
                />
            }
            {
                <LineItem
                    lineItem={userNetIncome}
                />
            }
        <CreateBudgetItem
            newItemDisplayed={newItemDisplayed} 
            setNewItemDisplayed={setNewItemDisplayed} 
        />
        <button
            className={css`
            position: fixed;
            bottom: 8vh;
            right: 2vw;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            `}
            onClick={()=>setNewItemDisplayed(!newItemDisplayed)}
        >
            <FontAwesomeIcon className="addItemButton circle-radius" icon={faPlusCircle} />
        </button>
        </div>
    )
}

export default Budget