import React from 'react';

export default function Footer() {
  return (
    <div className="container my-5" style={{ maxWidth: '100%' }}>
      <footer style={{ backgroundColor: '#494d4a', color: '#ffffff', padding: '40px 0', minHeight: '300px' }}>
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#ffede7' }}>Shopping Online</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff' }}>Frequently Asked Questions</a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff' }}>Delivery</a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff' }}>Pricing</a>
                </li>
                <li>
                  <a href="#!" style={{ color: '#ffffff' }}>Where We Deliver?</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#ffede7' }}>Gift Cards</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff' }}>Frequently Asked Questions</a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff' }}>Delivery and Payment</a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff' }}>Activate the Card</a>
                </li>
                <li>
                  <a href="#!" style={{ color: '#ffffff' }}>Rules</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#ffede7' }}>Company</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff' }}>Buy a Gift Card</a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff' }}>History</a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff' }}>Return</a>
                </li>
                <li>
                  <a href="#!" style={{ color: '#ffffff' }}>Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#ffede7' }}>Diamond Club</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff' }}>Registration</a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff' }}>Application</a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff' }}>About Program</a>
                </li>
                <li>
                  <a href="#!" style={{ color: '#ffffff' }}>Rules</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/" style={{ color: '#ffffff' }}>MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
}
