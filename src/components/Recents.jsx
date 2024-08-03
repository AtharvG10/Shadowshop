import React from 'react';

export default function Recents() {
  return (
    <div>
      <section style={{ backgroundColor: '#787a79' }}>
        <style>
          {`
            .hover-zoom img {
              transition: transform 0.5s ease;
            }
            .hover-zoom:hover img {
              transform: scale(1.1);
            }
            .ripple {
              position: relative;
              overflow: hidden;
            }
            .ripple::before {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              width: 300%;
              padding-top: 300%;
              border-radius: 50%;
              background-color: rgba(0, 0, 0, 0.2);
              transition: transform 0.6s, opacity 1s;
              transform: translate(-50%, -50%) scale(0);
              opacity: 0;
            }
            .ripple:hover::before {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
          `}
        </style>

        <div className="container py-5">
          <h2 className="text-center mb-5"><strong>Recents</strong></h2>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp" className="w-100" alt="Product 1" />
                <a href="#!">
                  <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-dark">$123</span></h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(2).webp" className="w-100" alt="Product 2" />
                <a href="#!">
                  <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-dark">$239</span></h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(3).webp" className="w-100" alt="Product 3" />
                <a href="#!">
                  <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-dark">$147</span></h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded ripple-surface">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp" className="w-100" alt="Product 4" />
                <a href="#!">
                  <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-dark">$83</span></h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp" className="w-100" alt="Product 5" />
                <a href="#!">
                  <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-dark">$106</span></h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(6).webp" className="w-100" alt="Product 6" />
                <a href="#!">
                  <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-dark">$58</span></h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
