import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ImageCarousel() {
  let imageStyle = {
    height: '30vh',
    objectFit: 'cover',
  };

  return (
    <div className="border-bottom border-5 border-dark">
      <Carousel
        className="border-bottom border-5 border-dark"
        style={{ height: '30vh' }}
      >
        <Carousel.Item style={{ height: '30vh' }}>
          <img
            className="d-block w-100"
            style={imageStyle}
            src="/Carousel-Images/landscape-1.jpg"
            alt="forest at sunset with river in foreground and mountains in background"
          />
          <Carousel.Caption>
            <h3>Page 1 preview image</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '30vh' }}>
          <img
            className="d-block w-100"
            style={imageStyle}
            src="/Carousel-Images/landscape-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Page 2 preview image</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '30vh' }}>
          <img
            className="d-block w-100"
            style={imageStyle}
            src="/Carousel-Images/landscape-3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Page 3 preview image</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
