// import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import "bootstrap/dist/css/bootstrap.min.css"
// import { Link } from 'react-router-dom'



// function Movie({ movie }) {

//     const { name, image, description } = movie


//     return <li>
//         <Accordion>
//             <Accordion.Item eventKey="0">
//                 <Accordion.Header> <h1>{name}</h1></Accordion.Header>
//                 <Accordion.Body>
//                     <Card style={{ width: '20rem' }}>
//                         <Card.Img variant="top" src={image} />
//                         <Card.Body>
//                             <Card.Title>{name}</Card.Title>
//                             <Card.Text>
//                                 <p>{description}</p>
//                             </Card.Text>
//                             <Button variant="primary"><Link id="profile-button" to={`/movies/${movie.id}`}>More Details</Link></Button>

//                         </Card.Body>
//                     </Card>
//                 </Accordion.Body>
//             </Accordion.Item>
//         </Accordion>
//     </li>
// }

// export default Movie

import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function Movie({ movie, handleDelete }) {


    return (
        <div>
            {/* <h1>{movie.name}</h1>
            <img src={movie.image} alt={movie.name}/>
            <p>Description: {movie.description}</p>
            <br></br>
            <Link to={`/movies/${movie.id}`} >More Details</Link> */}
            <Accordion defaultActiveKey="1" style={{ paddingBottom: "2rem" }}>
                <Accordion.Item eventKey={movie.id}>
                    <Accordion.Header><h3>{movie.name}<span className="year-released">({movie.year_released})</span></h3></Accordion.Header>
                    <Accordion.Body>
                        <div className="card float-right">
                            <div className="row">
                                <div className="col-sm-5">
                                    <img className="d-block w-100" src={movie.image} alt={movie.name} />
                                </div>
                                <div className="col-sm-7">
                                    <div className="card-block">
                                        {/* <!--           <h4 class="card-title">Small card</h4> --> */}
                                        <br />
                                        <p>{movie.description}</p>
                                        <br />
                                        {/* <a href="#" class="btn btn-primary btn-sm float-right">Read More</a> */}
                                        {/* <Button variant="primary"><Link to={`/movies/${movie.id}`} id="profileLink" style={{color: "white"}} >More Details</Link></Button> */}
                                        <Button variant="primary" href={`/movies/${movie.id}`}>More Details</Button>
                                        <br></br>
                                        <br></br>
                                        <Button variant="secondary" onClick={() => handleDelete(movie.name, movie.id)} >Delete</Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Movie;
