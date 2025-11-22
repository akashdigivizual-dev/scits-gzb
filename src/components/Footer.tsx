import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import "./Footer.scss";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const courses = [
    { name: "Basic Computer Course", slug: "basic-computer-course" },
    { name: "Advanced Excel", slug: "advanced-excel" },
    { name: "Tally Course", slug: "tally-course" },
    { name: "Graphic Design", slug: "graphic-design" },
    { name: "CCNA Networking", slug: "ccna-networking" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-about">
            <div className="footer-logo">
              <div className="footer-icon">
                {/* <GraduationCap className="footer-icon-img" /> */}
                <img
                  src="/Images/scitslogo.png"
                  alt="SCITS Logo"
                  className="navbar__image"
                />
              </div>
              <div>
                <h3 className="footer-title">SCITS</h3>
                <p className="footer-location">Ghaziabad</p>
              </div>
            </div>
            <p className="footer-description">
              Your Gateway to Computer Education and Career Growth. Providing
              quality computer education since establishment.
            </p>
            <div className="footer-socials">
              <a 
                href="https://www.facebook.com/scitsgzb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                title="Follow us on Facebook"
              >
                <Facebook />
              </a>
              <a 
                href="https://www.instagram.com/scit.sgzb/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                title="Follow us on Instagram"
              >
                <Instagram />
              </a>
              <a 
                href="https://www.youtube.com/@Scitsgzb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                title="Subscribe to our YouTube"
              >
                <Youtube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="footer-courses">
            <h3 className="footer-heading">Our Courses</h3>
            <ul>
              {courses.map((course) => (
                <li key={course.slug}>
                  <Link 
                    to={`/courses?course=${course.slug}`} 
                    className="footer-link"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul>
              <li className="footer-contact-item">
                <span className="contact-icon">📍</span>
                <span>
                  113-B Maliwara Pocket A
                  <br />
                  Nehru Nagar 2nd Ghaziabad, Uttar Pradesh
                </span>
              </li>
              <li className="footer-contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+918826023765" className="contact-link">
                  +91 8826023765
                </a>
              </li>
              <li className="footer-contact-item">
                <span className="contact-icon">📩</span>
                <a href="mailto:scitsgzbofficial@gmail.com" className="contact-link">
                  scitsgzbofficial@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} SCITS Ghaziabad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
