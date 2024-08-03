import React from 'react';

export default function Contact() {
  return (
    <div style={{ backgroundColor: '#f2f2f2', color: '#333', padding: '60px 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1>Get in Touch</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <form name="enq" method="post" action="contact.php" onSubmit={(e) => e.preventDefault()}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="col-12">
                  <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                </div>
                <div className="col-12">
                  <textarea rows="6" name="message" className="form-control" placeholder="Your Message" required></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-5">
            <div className="mb-4">
              <i className="fa fa-map-marker fa-lg"></i>
              <h4 className="d-inline ms-2">Our Address</h4>
              <p>3481 Melrose Place, Beverly Hills</p>
            </div>
            <div className="mb-4">
              <i className="fa fa-envelope fa-lg"></i>
              <h4 className="d-inline ms-2">Send your message</h4>
              <p>info@example.com</p>
            </div>
            <div className="mb-4">
              <i className="fa fa-phone fa-lg"></i>
              <h4 className="d-inline ms-2">Call us on</h4>
              <p>(+1) 517 397 7100</p>
            </div>
            <div>
              <i className="fa fa-clock-o fa-lg"></i>
              <h4 className="d-inline ms-2">Work Time</h4>
              <p>Mon - Fri: 08.00 - 16.00 <br /> Sat: 10.00 - 14.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
