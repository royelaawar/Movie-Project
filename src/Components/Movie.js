import { Link } from "react-router-dom";

function Movie({movie}){

    console.log(movie)

    return <li>
        <h1>{movie.name}</h1>
        <img src={movie.image} alt={movie.name}/>
        <p>Description: {movie.description}</p>
        <br></br>
        <Link to={`/movies/${movie.id}`} >More Details</Link>
    </li>
}

export default Movie;