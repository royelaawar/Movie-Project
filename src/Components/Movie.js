import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function Movie({ movie }) {

    console.log(movie)

    return (
        <div>
            {/* <h1>{movie.name}</h1>
            <img src={movie.image} alt={movie.name}/>
            <p>Description: {movie.description}</p>
            <br></br>
            <Link to={`/movies/${movie.id}`} >More Details</Link> */}
            <Accordion defaultActiveKey="1" style={{'padding-bottom': "2rem"}}>
                <Accordion.Item eventKey={movie.id}>
                    <Accordion.Header><h3>{movie.name}</h3></Accordion.Header>
                    <Accordion.Body>
                        <div class="card float-right">
                            <div class="row">
                                <div class="col-sm-5">
                                    <img class="d-block w-100" src={movie.image} alt={movie.name}/>
                                </div>
                                <div class="col-sm-7">
                                    <div class="card-block">
                                        {/* <!--           <h4 class="card-title">Small card</h4> --> */}
                                        <br/>
                                        <p>{movie.description}</p>
                                        <br />
                                        {/* <a href="#" class="btn btn-primary btn-sm float-right">Read More</a> */}
                                        <Button variant="primary"><Link to={`/movies/${movie.id}`} id="profileLink" style={{color: "white"}} >More Details</Link></Button>
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