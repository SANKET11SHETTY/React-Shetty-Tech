import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';


const ContactUs = () => {
 const [text, setText] = useState("");

 const alerted = () => {
  setText(<Container><Alert dismissible variant='success'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill " viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </svg> &nbsp; 
  Your details are successfully submitted
        </Alert></Container> );
 }
   
  return (
    
    <> <section className="container top-section pt-lg-2 pt-4 pb-3">
      
    <div className="text-center">
      <h1>CONTACT US</h1>
      <p className="text-center">
        Heyo! We are located in Mumbai and Pune. Feel free to use the
        <br />contact form to the right to reach out to us, or write us the
        old fashion way.
      </p>
    </div>
  </section>

  <section className="container-fluid pt-2 mid-section">
    <div className="row">
      <div className="col-lg-6 mid-section-left">
        <div className="left-mid-top">
          <h5>SNAIL MAIL</h5>
          <div className="mail-p pt-3">
            <p>Shetty Tech</p>
            <p>Band Stand Apartments</p>
            <p className="pb-5">Bandra West, Mumbai, 400050</p>
          </div>
          <hr className="hr-line" />
        </div>

        <div className="left-mid-middle pt-4">
          <h5>ELECTRONIC MAIL</h5>
          <p className="pb-5 pt-3">sanketshetty811@gmail.com</p>
          <hr className="hr-line" />
        </div>

        <div className="left-mid-bottom pt-4">
          <h5>PHONE SUPPORT</h5>
          <p className="pt-3">Hours: 9am-5pm, Monday - Friday</p>
          <p className="pb-5">835-594-3395</p>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="container form-section">
          <form className="row g-3" action="contact.html" method="post">
            <div className="mb-3">
              <label for="name" className="form-label">NAME</label>
              <input type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label"
                >EMAIL</label
              >
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label"
                >PHONE NUMBER</label
              >
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="number"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label"
                >MESSAGE</label
              >
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="7"
                name="message"
              ></textarea>
            </div>
            <div className="btn-form pb-4">
              <button
                type="button"
                className="btn btn-primary rounded-3 px-3 fw-semibold" onClick={alerted}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
<section>
<div className="text-center"><b id="skt" className="text-dark">{text}</b></div>
</section>
  
</>

  )
}

export default ContactUs;