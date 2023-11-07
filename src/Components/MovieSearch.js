function MovieSearch({setSearchText}){
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Movies:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                onChange={(event) => {
                    setSearchText(event.target.value)
                }}
            />
        </div>
    )
}

export default MovieSearch;