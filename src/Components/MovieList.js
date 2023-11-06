import Movie from "./Movie"

function MovieList({movies}){

    const movieComponents = movies.map(movie => {
        console.log(movie)
        return <Movie key={movie.id} movie={movie}/>
    })

    return <ul>
        {movieComponents}
    </ul>
}

export default MovieList