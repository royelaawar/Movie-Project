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
                <h1>{movie.name}</h1>
                <img src={movie.image} alt={movie.name} />
                <h1>Category: {movie.category}</h1>
                <h2>Description: {movie.description}</h2>
                <h2>Year Released: {movie.year_released}</h2>
                <h3>Box Office Earnings: {movie.box_office_earnings}</h3>
                <h3>Director: {movie.director}</h3>
                <h4>Main Cast: {movie.main_cast_members}</h4>
            </li>
            <br></br>
            <Link to="/movies" >Back to Movies</Link>
        </div>
    )
}


export default MovieProfile

//     const [favorite, setFavorite] = useState(false)
//     const [displayName, setDisplayName] = useState(true)

//     const {adoptPet, increaseLikes} = useOutletContext();

//     function updateDisplayName(){
//         setDisplayName(displayName => !displayName)
//     }

//     function toggleFavorite(){
//         setFavorite(!favorite)
//     }

//     if(!pet) {
//         return <h1>Error: Pet Not Found!</h1>
//     }
    
//     return (
//         <div className="pet">
//             <img src={pet.image} alt={pet.name} />
//             <button onClick={toggleFavorite} className={favorite? "favorite-button active" : "favorite-button"}>{favorite? "★" : "☆"}</button>
//             <h4 onClick={updateDisplayName}>{displayName ? pet.name : pet.animal_type}</h4>
//             <button onClick={() => {
//                 increaseLikes(pet)
//             }} className="likes-button">{pet.likes} likes</button>
//             <br/><br/>
//             <button onClick={() => {
//                 adoptPet(pet.id)
//             }} className="adopt-button">Adopt</button>
//             <br />
//             <br />
//             <Link to="/pets" >Back to Pets</Link>
//         </div>
//     )
// }

// export default PetProfile;
