import {NavLink} from "react-router-dom"

function NavBar(){
    return <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/add_movie">Add Movie</NavLink>
    </nav>
}

export default NavBar