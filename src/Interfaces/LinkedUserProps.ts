import UserDataProps from "./UserDataProps"

export default interface LinkedUser {
    inviteSent: boolean,
    inviteAccepted: boolean,
    invitedUserName: string,
    linkedUser: UserDataProps
}