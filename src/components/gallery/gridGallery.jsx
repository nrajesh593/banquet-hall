import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const GridGallery = () => {
  const IMAGES = [];
  for(var i=0;i<=25;i++){
var img = {
  src:"/images/gallery/"+i+".jpg",
  thumbnail:"/images/gallery/"+i+".jpg",
  thumbnailWidth: getRndInteger(300,500),
  thumbnailHeight: getRndInteger(100,300),
}
IMAGES.push(img);
  }
     return <>
     <Gallery
      images={IMAGES}
      enableLightbox={true}
      // maxRows={3}
      backdropClosesModal
      // currentImage={3}
      // isOpen={ true}
    />
    </>;
  };
  
  export default GridGallery;