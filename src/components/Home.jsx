import React from 'react';
import Shoes from './Shoes';
import Recents from './Recents';
import Categories from './Categories';
import image1 from '../assets/watch.png'
import image2 from '../assets/shirt.jpg'
import image3 from '../assets/shoes.jpg'

export default function Carousel() {
  return (
    <>
    <Categories/>
    <div className="carousel-container">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        style={{ maxWidth: '1550px', margin: 'auto' }} // Centering and setting the width
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={{ height: '500px', backgroundColor: '#f8f9fa' }}> {/* Setting the height and background color */}
          <div className="carousel-item active" data-bs-interval="3000" style={{ backgroundColor: '#000' }}> {/* Individual background color */}
            <img
              src={image1}
              className="d-block w-100"
              alt="First slide"
              style={{ objectFit: 'cover', height: '100%' }} // Ensuring image covers the area
            />
            <div className="carousel-caption d-none d-md-block">
             
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000" style={{ backgroundColor: '#333' }}>
            <img
              src={image2}
              className="d-block w-100"
              alt="Second slide"
              style={{ objectFit: 'cover', height: '100%' }}
            />
            <div className="carousel-caption d-none d-md-block">
             
            </div>
          </div>
          <div className="carousel-item" style={{ backgroundColor: '#666' }}>
            <img
              src={image3}
              className="d-block w-100"
              alt="Third slide"
              style={{ objectFit: 'cover', height: '100%' }}
            />
            <div className="carousel-caption d-none d-md-block">
              
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <hr /> 

      

      <Recents/>
      <Shoes/>
    </div>
    </>

    
  );
}
