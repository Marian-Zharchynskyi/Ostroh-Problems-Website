import React from "react";
import "./layout.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 w-100">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href="/" className="d-flex align-items-center text-light mb-3">
              <span className="fs-4 fw-bold">QuickStart</span>
            </a>
            <div>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
            <div className="mt-4">
              <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-md-2">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="#" className="text-light">About us</a></li>
              <li><a href="#" className="text-light">Services</a></li>
              <li><a href="#" className="text-light">Terms of service</a></li>
              <li><a href="#" className="text-light">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Our Newsletter</h5>
            <form className="d-flex">
              <input type="email" className="form-control me-2" placeholder="Your email" />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="text-center mt-5">
          <p>© Copyright <strong>QuickStart</strong> All Rights Reserved</p>
          <p>Designed by <a href="https://bootstrapmade.com/" className="text-light">BootstrapMade</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
