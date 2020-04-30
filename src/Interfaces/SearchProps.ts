export default interface SearchProps {
    searched?: boolean
    error?: boolean
    setSearchResults?: (searched: boolean) => void
}