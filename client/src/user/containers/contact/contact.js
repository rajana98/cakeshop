import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

// contact form using bootstrap
const Contact = () => {
  return (
    <>
    <div style={{margin:"30px"}}>
      <section className="mb-4">

        <p className="text-center w-responsive mx-auto mb-5 big-font" style={{fontSize: "24px"}}>
          Do you have any questions? Please do not hesitate to contact us directly. 
          Our team will come back to you within a matter of hours to help you.</p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label for="name" className="">Your name</label>
                    <input type="text" id="name" name="name" className="form-control" />

                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label for="email" className="">Your email</label>
                    <input type="text" id="email" name="email" className="form-control" />

                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label for="subject" className="">Subject</label>
                    <input type="text" id="subject" name="subject" className="form-control" />

                  </div>
                </div>
              </div>

              <div className="row">

                <div className="col-md-12">

                  <div className="md-form">
                    <label for="message">Your message</label>
                    <textarea type="text" id="message" name="message" rows="2"
                      className="form-control md-textarea"></textarea>
                  </div>

                </div>
              </div>

            </form><br></br><br></br>

            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                Send Message
              </Button>{' '}
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>New Baneshwor,Nepal</p>
              </li>

              <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+9779804400486/+9779864403077</p>
              </li>

              <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>gautamdb28@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>

      </section>
      </div>
    </>
  )
}

export default Contact