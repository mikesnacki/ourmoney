import React, { useState, useContext } from 'react';
import { css } from "emotion";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineItemProps from "../Interfaces/LineItemProps";
import LineItem from "./LineItem";
import Loading from "./Loading";
import CreateBudgetItem from "./CreateBudgetItem";
import SignUp from "./Signup"
import UserContext from "../Context/UserContext"
import calculateLineItem from "../Utils/CalculateLineItem"
import filterLineItemsByType from "../Utils/FilterLineItemsByType"

const Budget =()=> {

    const [newItemDisplayed, setNewItemDisplayed] = useState<boolean>(false)
    const { userID, loading, userBudget } = useContext(UserContext)

    if (loading) return <Loading/>

    if (!userID){
        return (
            <SignUp/>
        )
    }

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
                filterLineItemsByType(userBudget, "type", "INCOME").map((lineItem : LineItemProps, key: number)=> (
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
                filterLineItemsByType(userBudget, "type", "EXPENSE").map((lineItem : LineItemProps, key: number)=> (
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
            userID={userID}
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