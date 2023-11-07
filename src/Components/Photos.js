import React from 'react';

const Photos = ({ movies }) => {

  // Create an array of photo URLs

  const photoUrls = []


  movies.forEach(movie => {
    photoUrls.push(movie.image)
  })


  return (
 
    <div className="photos-container">
      {photoUrls.map((photoUrl, index) => (
        <img key={index} src={photoUrl} alt={`Photo ${index + 1}`} className="photo" />
      ))}
    </div>
  
  );
};

export default Photos;