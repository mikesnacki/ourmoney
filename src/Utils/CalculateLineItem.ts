const calculateLineItem = (inputArray: Array<any>, param: string, type: string, sumField:string) => {
    return inputArray.filter(inputItem=> inputItem[param] === type)
                     .reduce((sum, lineItem)=> sum + lineItem[sumField], 0)
}

export default calculateLineItem