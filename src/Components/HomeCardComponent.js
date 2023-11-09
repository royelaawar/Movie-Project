import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom'
import audioFile from "./sound.mp3"

const CardComponent = () => {

  const audioRef = useRef( );
  console.log( audioRef );
  const [ playScene, playPush ] = useState( false );

  useEffect(( ) => { 
    if( audioRef.current ) {
      try {
        // audioRef.current.play( );
        
      } catch (error) {
        console.log( error );        
      }
    }
  }, [ audioRef ]);

  useEffect(( ) => {
    if( !playScene ) return;
    audioRef.current.play( );


  }, [ playScene ]);

  const handleBtn = ( ) => {
    audioRef.current.play( );
    setTimeout(( ) => playPush( true ), 5000);
  };

  const trigger = playScene.toString( );
  return (
    <div id="Greeting" style={{ textShadow: "2px 2px 0 black, -2px 2px 0 black,-2px -2px 0 black, 2px -2px 0 black", color: "white" }}>
      <span>
        Welcome to Movie Mania!
      </span>
      <div onClick={ handleBtn  } id="PlayBtn" play-pushed={ trigger }>
        <div id="actualPlayBtn" play-pushed={ trigger }>
          <div className='spotLight'/>
          <div className='spotLight'/>
          <div className='spotLight'/>
          <div className='spotLight'/>
          <span>Your exclusive movie library..</span>
        </div>
      </div>
      <audio controls preload="auto" ref={ audioRef } style={{ visibility: "hidden"}}>
        <source src={audioFile} type="audio/mp3" />
      </audio>
    </div>
    // <div className="card" style={{ width: '35rem' }}>
    //   <img src="" className="card-img-top" alt="..." />
    //   <div className="card-body">
    //     <h5 className="card-title">Movie Mania!</h5>
    //     <p className="card-text">Welcome to Movie Mania, your ultimate destination for a cinematic journey through the highest-grossing films of all time! Our website offers you a front-row seat to the top 15 highest-grossing movies, allowing you to explore these blockbuster hits with ease. But that's not all; Movie Mania empowers you to be the director of your own movie list. You can effortlessly add your favorite films to the collection, creating a personalized watchlist. And, when your tastes change or new classics emerge, you have the power to delete and update your list as you please. Join us at Movie Mania, where you can curate your cinematic universe and relive the magic of the silver screen!</p>
    //     <a href="#" className="btn btn-primary">
    //     <Link to="/movies" style={{ color: "white" }}>Movies</Link>
    //     </a>
    //   </div>
    // </div>
  );
};

export default CardComponent;