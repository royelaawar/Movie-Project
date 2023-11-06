function Movie({movie}){

    console.log(movie)

    return <li>
        <h1>{movie.name}</h1>
        <img src={movie.image}/>
        <h1>Category: {movie.category}</h1>
        <p>Description: {movie.description}</p>
    </li>
}

export default Movie;