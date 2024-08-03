import React from 'react';

export default function Gallery() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div>
        <h1 className="text-center">Gallery</h1>
        
        <div
          className="ecommerce-gallery"
          data-mdb-ecommerce-gallery-init
          data-mdb-zoom-effect="true"
          data-mdb-auto-height="true"
          style={{ maxWidth: '800px', margin: 'auto' }} // Centering the gallery and setting max width
        >
          <div className="row py-3 shadow-5">
            <div className="col-12 mb-1">
              <div className="lightbox" data-mdb-lightbox-init>
                <img
                  src="https://www.shutterstock.com/image-photo/beautiful-luxury-mens-gold-watch-600w-2311553491.jpg"
                  alt="Gallery image 1"
                  className="ecommerce-gallery-main-img active w-100"
                  style={{ height: '400px', objectFit: 'cover' }} // Setting the height and object fit
                />
              </div>
            </div>
            <div className="col-3 mt-1">
              <img
                src="https://ih1.redbubble.net/image.4309240829.7597/ssrco,active_tshirt,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg"
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                alt="Gallery image 1"
                className="active w-100"
                style={{ height: '150px', objectFit: 'cover' }} // Setting the height and object fit
              />
            </div>
            <div className="col-3 mt-1">
              <img
                src="https://images.bestsellerclothing.in/data/JJ/sep-9-2022/231115202_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto"
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                alt="Gallery image 2"
                className="w-100"
                style={{ height: '150px', objectFit: 'cover' }} // Setting the height and object fit
              />
            </div>
            <div className="col-3 mt-1">
              <img
                src="https://m.media-amazon.com/images/I/618YDCPjnKL.jpg"
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                alt="Gallery image 3"
                className="w-100"
                style={{ height: '150px', objectFit: 'cover' }} // Setting the height and object fit
              />
            </div>
            <div className="col-3 mt-1">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
                alt="Gallery image 4"
                className="w-100"
                style={{ height: '150px', objectFit: 'cover' }} // Setting the height and object fit
              />
            </div>
          </div>
        </div>
      </div>
      <hr /><br /><br /> <br />
    </div>
  );
}
