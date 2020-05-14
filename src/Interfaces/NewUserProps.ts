interface User {
    given_name?: string
    family_name?: string
    name?: string
    picture?: string
    email?: string,
    email_verified?: boolean
}

export default interface NewUserProps {
    user: User 
}