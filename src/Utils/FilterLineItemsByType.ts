export default function filterLineItemsByType(inputArray: Array<any>, param: string, type: string){
    return inputArray.filter(inputItem=> inputItem[param] === type)
}

