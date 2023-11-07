import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Movie({ movie }) {

    const { name, image, description } = movie


    return <li>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header> <h1>{name}</h1></Accordion.Header>
                <Accordion.Body>
                    <Card className="custom-card avatar">
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <hr></hr>
                            <Card.Text>
                               {description}
                            </Card.Text>
                            <Button variant="primary"><Link id="profile-button" to={`/movies/${movie.id}`} >More Details</Link></Button>
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </li>
}

export default Movie