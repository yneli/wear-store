import React from "react";
import { Navbar, Nav, Link, Button, Container, Carousel } from 'react-bootstrap';
import '../index.scss';




function Slider() {


    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div className="contain">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/image2.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/im3.png"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/im2.png"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3></h3>
              <p>
                
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      );
    }

export default Slider;