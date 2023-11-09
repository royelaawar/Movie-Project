import React from 'react';
import backgroundVideo from '../pop_corn_black_side.mp4';

const VideoBackground = () => {
  return (
    // <video autoPlay muted loop id='video'>
    //     <source src={ backgroundVideo } type="video/mp4" />
    //     Your browser does not support the video tag.
    // </video>
    <video style={{
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      opacity: "80%",
      objectFit: 'contain',
    }} src={backgroundVideo} muted autoPlay loop id='backgroundVideo'></video>
  );
};

export default VideoBackground;

