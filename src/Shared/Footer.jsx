import React from "react";
import Container from "../components/Container";

const Footer = () => {
  return (
    <div className="p-10 bg-base-200 font-semibold text-slate-600">
   <Container>
   <footer className="footer text-base-content">
        <div>
          <span className="footer-title">Facilities</span>
          <a className="link link-hover">Classroom Booking</a>
          <a className="link link-hover">Sports Facilities</a>
          <a className="link link-hover">Auditorium Reservations</a>
          <a className="link link-hover">Library Resources</a>
        </div>
        <div>
          <span className="footer-title">Schools</span>
          <a className="link link-hover">List Your School</a>
          <a className="link link-hover">School Admin Login</a>
          <a className="link link-hover">FAQs</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Subscribe to our Newsletter</span>
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
   </Container>
    </div>
  );
};

export default Footer;
