import { useParams, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from "react-bootstrap";


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
        <div className="new-div">
            <Card style={{ width: '30rem' }}>
                <Card.Img src={movie.image} />
                <Card.Body>
                    <Card.Title><strong>Category:</strong> {movie.category}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><strong>Description:</strong> {movie.description}</ListGroup.Item>
                    <ListGroup.Item><strong>Year Released: </strong> {movie.year_released}</ListGroup.Item>
                    <ListGroup.Item><strong>Box Office Earnings:</strong> {movie.box_office_earnings}</ListGroup.Item>
                    <ListGroupItem><strong>Director:</strong> {movie.director}</ListGroupItem>
                    <ListGroupItem><strong>Cast Members:</strong> {movie.main_cast_members}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                <Link to="/movies" >Back to Movies</Link>
                </Card.Body>
            </Card>
            
        </div>
    )
}


export default MovieProfile;