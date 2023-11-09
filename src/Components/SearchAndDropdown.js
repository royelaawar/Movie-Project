import React from "react";
import { Form } from "react-bootstrap";

function SearchAndDropdown({ setSearchText, handleSort }) {
    return (
        <div style={{ color: "white", width: "30rem", display: "inline-grid", backgroundColor: "rgba(0, 0, 0, .7)", borderRadius: "25px", position: "absolute", top: "14rem", left: "50%", transform: "translateX(-50%)", padding: '0.5rem' }}>
            <Form.Group className="mb-3">
                <Form.Label style={{display: 'flex', justifyContent: 'center'}}>Search Movies:</Form.Label>
                <Form.Control placeholder="Type to search..." onChange={(event) => { setSearchText(event.target.value) }} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{display: 'flex', justifyContent: 'center'}} >Sort Movies:</Form.Label>
                <Form.Select onChange={handleSort}>
                    <option value="allMovies">All Movies</option>
                    <option value="alphaNorm">Name (A-Z)</option>
                    <option value="alphaReverse">Name (Z-A)</option>
                    <option value='yearDesc' >Year Released (Descending)</option>
                    <option value='yearAsc' >Year Released (Ascending)</option>
                </Form.Select>
            </Form.Group>
        </div>
    )
}

export default SearchAndDropdown;