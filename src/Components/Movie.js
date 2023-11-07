import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'



function Movie({ movie }) {

    const { name, image, description } = movie


    return <li>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header> <h1>{name}</h1></Accordion.Header>
                <Accordion.Body>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <p>{description}</p>
                            </Card.Text>
                            <Button variant="primary"><Link id="profile-button" to={`/movies/${movie.id}`}>More Details</Link></Button>
                            
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </li>
}

export default Movie