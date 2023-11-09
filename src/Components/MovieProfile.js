import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";

function MovieProfile({ movies }) {

    //need to get movie
    const { id } = useParams();

    const movie = movies.find(m => {
        return m.id === Number(id);
    });

    if (!movie) {
        return <h1>Error: Movie Not Found!</h1>
    }


    // return (
    // <div>
    //     <li>
    //         <h1>{movie.name}</h1>
    //         <img src={movie.image} alt={movie.name} />
    //         <h1>Category: {movie.category}</h1>
    //         <h2>Description: {movie.description}</h2>
    //         <h2>Year Released: {movie.year_released}</h2>
    //         <h3>Box Office Earnings: {movie.box_office_earnings}</h3>
    //         <h3>Director: {movie.director}</h3>
    //         <h4>Main Cast: {movie.main_cast_members}</h4>
    //     </li>
    //     <br></br>
    //     <Link to="/movies" >Back to Movies</Link>
    // </div>
    // )


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', paddingBottom: '4rem' }}>
            <Card style={{ width: '38rem', display: 'inline-block', backgroundColor: 'black', color: 'white', border: '2px solid white', borderRadius: '10px', marginTop: '4rem', boxShadow: "0.1rem 0.1rem 1rem 0.3rem rgba(0, 0, 0, 1)" }}>
                {/* <Card.Img variant="top" src={movie.trailer}  /> */}
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}><h2><strong>{movie.name}</strong></h2></Card.Title>
                    <iframe
                        width="560"
                        height="315"
                        src={movie.trailer}
                        title={movie.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </Card.Body>
                {/* <Card.Body>
                    <Card.Title><strong>{movie.name}</strong></Card.Title>
                    <Card.Text>{movie.description}</Card.Text>
                </Card.Body> */}
                <ListGroup className="list-group-flush" >
                    <ListGroup.Item><h5><strong >Category: </strong><span className="span">{movie.category}</span></h5></ListGroup.Item>
                    <ListGroup.Item><h5><strong >Year Released: </strong><span className="span">{movie.year_released}</span></h5></ListGroup.Item>
                    <ListGroup.Item><h5><strong >Box Office Earnings: </strong><span className="span">{movie.box_office_earnings}</span></h5></ListGroup.Item>
                    <ListGroup.Item><h5><strong >Director: </strong><span className="span">{movie.director}</span></h5></ListGroup.Item>
                    <ListGroup.Item><h6><strong >Main Cast: </strong><span className="span">{movie.main_cast_members}</span></h6></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    {/* <Card.Link href="/movies">Go to Movies</Card.Link> */}
                    <Button variant="primary" href="/movies" style={{ display: 'flex', justifyContent: 'center' }}>Back to Movies</Button>
                    {/* <Card.Link to={`/movies`} id="profileLink" style={{color: "white"}} >Back to Movies</Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    );
}


export default MovieProfile;
