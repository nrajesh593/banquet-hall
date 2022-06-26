import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: '/w1.jpg',
      thumbnail: '/w1.jpg',
    },
    {
      original: '/w2.jpg',
      thumbnail: '/w2.jpg'
    },
    {
      original: '/w3.webp',
      thumbnail: '/w3.webp'
    }
  ]


const Slider = () => {
    return <ImageGallery items={images}  autoPlay={true} showFullscreenButton={false}  />;
  };
  
  export default Slider;