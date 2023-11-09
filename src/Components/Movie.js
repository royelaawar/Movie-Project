// import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function Movie({ movie, handleDelete }) {

    console.log(movie)

    return (
        <div>
            {/* <h1>{movie.name}</h1>
            <img src={movie.image} alt={movie.name}/>
            <p>Description: {movie.description}</p>
            <br></br>
            <Link to={`/movies/${movie.id}`} >More Details</Link> */}
            <Accordion defaultActiveKey="1" style={{paddingBottom: "2rem"}}>
                <Accordion.Item eventKey={movie.id}>
                    <Accordion.Header><h3>{movie.name}<span className="year-released">({movie.year_released})</span></h3></Accordion.Header>
                    <Accordion.Body>
                        <div className="card float-right" style={{borderWidth: 'thick', borderColor: 'white', borderStyle: 'double', backgroundColor: 'black', color: 'white', borderRadius: "35px"}}>
                            <div className="row">
                                <div className="col-sm-5">
                                    <img className="d-block w-100" id='listImage' src={movie.image} alt={movie.name}/>
                                </div>
                                <div className="col-sm-7" style={{display: 'flex', alignItems: 'center', paddingRight: '5rem', paddingLeft: '4rem', flexWrap: 'wrap'}}>
                                    <div className="card-block" style={{marginTop: '-4rem'}}>
                                        {/* <!--           <h4 class="card-title">Small card</h4> --> */}
                                        <br/>
                                        <p>{movie.description}</p>
                                        <br />
                                        {/* <a href="#" class="btn btn-primary btn-sm float-right">Read More</a> */}
                                        {/* <Button variant="primary"><Link to={`/movies/${movie.id}`} id="profileLink" style={{color: "white"}} >More Details</Link></Button> */}
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Button variant="primary" href={`/movies/${movie.id}`} style={{marginRight: '1rem'}}>More Details</Button>
                                        <Button variant="secondary" onClick={() => handleDelete(movie.name, movie.id)} >Delete</Button>
                                        </div>{/* <Button variant="secondary" onClick={() => handleDelete(movie.name, movie.id)} >Delete</Button> */}
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