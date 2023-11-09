import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Photos = ({ movies }) => {

  // Create an array of photo URLs

  const photoUrls = []


  movies.forEach(movie => {
    photoUrls.push(movie.image)
  })

  const [ran, sran ] = useState( false );
  const [x,sx] = useState( null );
  const { ref, inView } = useInView( );

  useEffect(( ) => {
    console.log(inView);
    if( inView ) sran( true );
    if( !inView && ran ) {
      sx("moveRightToLeft 45s linear infinite");
    }
  }, [ inView ]);

  return (
 
    <div className="photos-container" ref={ ref  } style={{ animation: x }}>
      {photoUrls.map((photoUrl, index) => (
        <img key={index} src={photoUrl} alt={`Photo ${index + 1}`} className="photo" />
      ))}
    </div>
  
  );
};

export default Photos;