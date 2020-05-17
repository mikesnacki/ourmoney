import LineItemProps from "../Interfaces/LineItemProps"
import filterLineItemsByType from "../Utils/FilterLineItemsByType"

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
