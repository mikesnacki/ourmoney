export default interface ICreateItem {
    newItemDisplayed: boolean,
    setNewItemDisplayed: (newItemDisplayed: boolean)=> void,
    refetch?: any,
}