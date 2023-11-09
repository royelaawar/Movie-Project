import React from "react";

function MovieDropdown({ handleSort }) {
    return (
        <select onChange={handleSort}>
            <option value='allMovies' >Sort Movies...</option>
            <option value='alphaNorm' >Name (A-Z)</option>
            <option value='alphaReverse' >Name (Z-A)</option>
            <option value='yearDesc' >Year Released (Descending)</option>
            <option value='yearAsc' >Year Released (Ascending)</option>
        </select>
    )
}

export default MovieDropdown;