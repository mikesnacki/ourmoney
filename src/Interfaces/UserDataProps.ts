import LineItemProps from "./LineItemProps"
import LinkedUserProps from "./LinkedUserProps"

export default interface UserDataProps {
    users :{
        id: string,
        email: string
        lineItems: Array<LineItemProps>
        linkedUser: LinkedUserProps
    }
}