import LineItemProps from "./LineItemProps"

export default interface UserDataProps {
    users :{
        id: string,
        email: string
        lineItems: Array<LineItemProps>
    }
}