import React from "react";
import { Form } from "react-bootstrap";

function SearchAndDropdown({ setSearchText, handleSort }) {
    return (
        <div style={{color: "white", width: "30rem", display: "inline-grid", backgroundColor: "rgba(0, 0, 0, .7)",  borderRadius: "25px", position: "absolute", top: "14rem", left: "50%", transform: "translateX(-50%)"}}>
            <Form.Group className="mb-3">
                <Form.Label>Search Movies:</Form.Label>
                <Form.Control placeholder="Type to search..." onChange={(event) => {setSearchText(event.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Sort Movies</Form.Label>
                <Form.Select onChange={handleSort}>
                    <option value="allMovies">All Movies</option>
                    <option value="alphaNorm">Name (A-Z)</option>
                    <option value="alphaReverse">Name (Z-A)</option>
                </Form.Select>
            </Form.Group>
        </div>
    )
}

export default SearchAndDropdown;