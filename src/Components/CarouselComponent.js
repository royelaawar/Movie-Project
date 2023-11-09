import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './newLogo.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import logo from './newLogo.png'


function CarouselComponent() {
  return (
    <Carousel interval={null} fade id="carousel-yea">
      <Carousel.Item>
        <img className='img-carousel' text="First slide" src='https://static.vecteezy.com/system/resources/previews/021/992/261/large_2x/magic-theater-stage-red-curtains-show-spotlight-illustration-ai-generative-free-photo.jpg' />
        <Carousel.Caption>
          <h3>Welcome To Movie Mania!</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-carousel' text="Second slide" src="https://i.pinimg.com/1200x/ca/ba/70/caba7065a4c604228da25f1adc05a332.jpg" />
        <Carousel.Caption>
          <h3>A New Way To Explore Films</h3>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://png.pngtree.com/background/20230606/original/pngtree-old-movie-posters-on-the-wall-picture-image_2882816.jpg" style={{width: '30rem'}} />
            <Card.Body>
              <Card.Title>About Us:</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary"><Link to={`/movies`} id="profileLink" style={{ color: "white" }} >More Details</Link></Button>
            </Card.Body>
          </Card>

        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img className='img-carousel' text="Third slide" src="https://wallpapers.com/images/hd/movie-theater-background-1536-x-1024-2usv5dnbsrxgio1b.jpg" />
        <Carousel.Caption>
          <Button variant="primary"><Link to={`/movies`} id="profileLink" style={{ color: "white" }} >More Details</Link></Button>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default CarouselComponent;

// https://images.squarespace-cdn.com/content/v1/586f055903596e13f8dc234e/1592163737668-3RO8V7FUO2TXM3LRO2WG/red+theater+curtains.jpg?format=2500w

