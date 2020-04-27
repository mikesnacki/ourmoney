export default interface CreateItemProps {
    newItemDisplayed: boolean,
    setNewItemDisplayed: (newItemDisplayed: boolean)=> void,
    refetch?: any,
}