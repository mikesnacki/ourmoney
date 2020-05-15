import LineItemProps from "../Interfaces/LineItemProps"
import filterLineItemsByType from "../Utils/FilterLineItemsByType"

let array = [
    {
      "id": "ck9if7klu05wb0791vhmearuj",
      "name": "HBO",
      "amount": 14.99,
      "type": "EXPENSE"
    },
    {
      "id": "ck9if9q2j060l07912q2r2ft8",
      "name": "Wages",
      "amount": 4274,
      "type": "INCOME"
    },
    {
      "id": "ck9ifa8f906250791rqp4ft78",
      "name": "Mortgage",
      "amount": 825,
      "type": "EXPENSE"
    },
    {
      "id": "ck9irx1cr0j640791nu3u79gi",
      "name": "Cable",
      "amount": 62,
      "type": "EXPENSE"
    },
    {
      "id": "ck9irxxrn0j8j0791et9swi2y",
      "name": "Cell Phone",
      "amount": 63,
      "type": "EXPENSE"
    },
    {
      "id": "ck9itxg1m0rjs0791owkzr269",
      "name": "Day Care",
      "amount": 204,
      "type": "EXPENSE"
    },
    {
      "id": "ck9iu7yna0st30791b09lsus0",
      "name": "Chewy",
      "amount": 32,
      "type": "EXPENSE"
    },
    {
      "id": "ck9iua9f90t4v07917cyg2pl4",
      "name": "Car Insurance",
      "amount": 62,
      "type": "EXPENSE"
    },
    {
      "id": "ck9iubjwe0tc40791r2e9js1y",
      "name": "netflix",
      "amount": 12.99,
      "type": "EXPENSE"
    },
    {
      "id": "ck9iuckc90thz0791z43ngtx7",
      "name": "Gym",
      "amount": 19.99,
      "type": "EXPENSE"
    },
    {
      "id": "ck9jqpawi00gn0791rbbrdpf4",
      "name": "Oil Change",
      "amount": 25.79,
      "type": "EXPENSE"
    },
    {
      "id": "ck9jqq9my00j90791zm2rebo1",
      "name": "Student Loans",
      "amount": 650,
      "type": "EXPENSE"
    },
    {
      "id": "ck9js9v7p02t10791kbaqiyhw",
      "name": "Water",
      "amount": 15,
      "type": "EXPENSE"
    },
    {
      "id": "ck9jx0z5q05t60791uyl027k0",
      "name": "Food",
      "amount": 260,
      "type": "EXPENSE"
    }
  ]

const sumBy = (array: any, key: any) => {
    return array.reduce((result: any, currentValue: string) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {}); 
  };


export default function MergeBudgets(array1: LineItemProps[], array2: LineItemProps[]){

    let incomesArray: LineItemProps[] = filterLineItemsByType(array1, "type", "INCOME").concat(filterLineItemsByType(array2, "type", "INCOME"))
    let expensesArray: LineItemProps[] = filterLineItemsByType(array1, "type", "EXPENSES").concat(filterLineItemsByType(array2, "type", "EXPENSES"))

    incomesArray = sumBy(incomesArray, "name")
    expensesArray = sumBy(expensesArray, "name")
    console.log(incomesArray, expensesArray)
    return {incomesArray, expensesArray}

}

MergeBudgets(array, array)