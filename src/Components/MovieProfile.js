import { useParams, Link } from "react-router-dom";


function MovieProfile({ movies }) {

    //need to get movie
    const {id} = useParams();

    const movie = movies.find(m => {
        return m.id === Number(id);
    });

    // const { name, image, category, description, year_released, box_office_earnings, director, main_cast_members } = movie;

    if(!movie) {
        return <h1>Error: Movie Not Found!</h1>
    }


    return (
        <div>
            <li>
                <h1 class='movie-title'>{movie.name}</h1>
                    <iframe
                    width="560"
                    height="315"
                    src={movie.trailer}
                    title={movie.name}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    ></iframe>
                {/* <img src={movie.image} alt={movie.name} />     */}
                <h1>Category: {movie.category}</h1>
                <h2>Description: {movie.description}</h2>
                <h2>Year Released: {movie.year_released}</h2>
                <h3>Box Office Earnings: {movie.box_office_earnings}</h3>
                <h3>Director: {movie.director}</h3>
                <h4>Main Cast: {movie.main_cast_members}</h4>
            
            </li>
            <br></br>
            <Link to="/movies" >Back to Movies</Link>
            {/* <Link id="trailer-button" to={`${movie.trailer}`} target="_blank">Watch Trailer</Link> */}
        </div>
    )
}


export default MovieProfile