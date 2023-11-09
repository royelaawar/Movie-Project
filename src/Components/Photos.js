import React from 'react';

const Photos = ({ movies }) => {

  // Create an array of photo URLs

  return (
 
    <div className="photos-container">
      {movies.map((movie, index) => (
        <a className="photo-div" key={movie.id} href={`/movies/${movie.id}`}>
            <img key={index} src={movie.image} alt={`pict ${index + 1}`} className="photo"/>
        </a>
      ))}
    </div>
  
  );
};

export default Photos;