import Movie from "./Movie"

function MovieList({movies}){

    const movieComponents = movies.map(movie => {
        console.log(movie)
        return <Movie key={movie.id} movie={movie}/>
    })

    return <div id="movieList" style={{padding: "10rem"}}>
        {movieComponents}
    </div>
}

export default MovieList