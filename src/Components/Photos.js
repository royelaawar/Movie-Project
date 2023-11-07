import React from 'react';



const Photos = () => {
 // Create an array of photo URLs
 const photoUrls = [
   'https://i.ebayimg.com/images/g/-dsAAOSwXS5ir7bq/s-l1200.webp',
   'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
   'https://m.media-amazon.com/images/I/91WlTjCgu4L.jpg',
   "https://deadline.com/wp-content/uploads/2021/11/spidermannowayhomeposter.jpg",
   "https://m.media-amazon.com/images/I/81S36TZzg9L.jpg",
   'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
   'https://m.media-amazon.com/images/I/910VekmDZ5L._AC_UF894,1000_QL80_.jpg',
   'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg',
 ];


 return (
   <div className="photos-container">
     {photoUrls.map((photoUrl, index) => (
       <img key={index} src={photoUrl} alt={`Photo ${index + 1}`} className="photo" />
     ))}
   </div>
 );
};


export default Photos;
