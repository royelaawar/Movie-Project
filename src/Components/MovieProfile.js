import { useParams, Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Card } from "react-bootstrap";
import {NavLink} from "react-router-dom"

function MovieProfile({ movies }) {

    //need to get movie
    const { id } = useParams();

    const movie = movies.find(m => {
        return m.id === Number(id);
    });

    // const { name, image, category, description, year_released, box_office_earnings, director, main_cast_members } = movie;

    if (!movie) {
        return <h1>Error: Movie Not Found!</h1>
    }


    return (
        <Card className="profile-card" >
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text id="yea">
                    {movie.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item> <strong>Category:</strong> {movie.category}</ListGroup.Item>
                <ListGroup.Item><strong>Year:</strong> {movie.year_released}</ListGroup.Item>
                <ListGroup.Item><strong>Earnings:</strong> {movie.box_office_earnings}</ListGroup.Item>
                <ListGroup.Item><strong>Director:</strong> {movie.director}</ListGroup.Item>
                <ListGroup.Item><strong>Cast:</strong> {movie.main_cast_members}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <NavLink to="/movies">Movies</NavLink>
                
            </Card.Body>
        </Card>
    );


}


export default MovieProfile

{/* <div>
            <li>
                
                <h1>{movie.name}</h1>
                <img src={movie.image} alt={movie.name} />
                <h2><strong>Category: </strong>{movie.category}</h2>
                <h2><strong>Year Released: </strong>{movie.year_released}</h2>
                <h2><strong>Box Office Earnings: </strong>{movie.box_office_earnings}</h2>
                <h2><strong>Director: </strong>{movie.director}</h2>
                <h2><strong>Main Cast: </strong>{movie.main_cast_members}</h2>
                <h4><strong>Description: </strong>{movie.description}</h4>
            </li>
            <br></br>
            <Link to="/movies" >Back to Movies</Link>
        </div> */}