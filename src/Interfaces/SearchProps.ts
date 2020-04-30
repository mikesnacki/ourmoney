interface SearchResultProps {
    email?: string,
    id?: string,
}

export default interface SearchProps {
    userSearched?: string;
    searchResult?: SearchResultProps
    searched?: boolean;
    error?: boolean;
    setSearchResults?: (searched: boolean) => void;
    prevState?: any,
}