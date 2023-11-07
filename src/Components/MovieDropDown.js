import React from "react";

function MovieDropdown({ handleSort }) {
    return (
        <select onChange={handleSort}>
            <option value='allMovies' >Sort Movies...</option>
            <option value='alphaNorm' >Name (A-Z)</option>
            <option value='alphaReverse' >Name (Z-A)</option>
        </select>
    )
}

export default MovieDropdown;