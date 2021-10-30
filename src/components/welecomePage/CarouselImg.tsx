import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const CarouselImg= () => {
  return (
    
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/ff/4a/europe.jpg?w=2400&h=-1&s=1"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/ff/4a/europe.jpg?w=2400&h=-1&s=1"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
   
  );
};
