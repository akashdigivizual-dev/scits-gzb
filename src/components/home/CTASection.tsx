import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import "./CTASection.scss";

const CTASection = () => {
  return (
    <section className="cta-section">
      {/* Animated Gradient Background */}
      <div className="cta-bg"></div>

      <div className="cta-container">
        <div className="cta-content">
          <span className="cta-badge">Ready to Start?</span>

          <h2 className="cta-title">
            Join <span className="highlight">SCITS</span> Today and Transform Your Career
          </h2>

          <p className="cta-description">
            Take the first step toward mastering essential computer skills. 
            Enroll now and gain access to expert trainers, hands-on learning, 
            and industry-recognized certifications.
          </p>

          <div className="cta-buttons">
            <Link to="/contact">
              <Button size="lg" className="cta-primary-btn">
                Enroll Now
                <ArrowRight className="icon" size={20} />
              </Button>
            </Link>

            <a href="tel:+918826023765">
              <Button size="lg" variant="outline" className="cta-secondary-btn">
                <Phone className="icon" size={20} />
                Call Us Now
              </Button>
            </a>
          </div>

          <div className="cta-contact">
            <div className="contact-card">
              <Phone className="contact-icon" />
              <div className="contact-info">
                <p className="contact-label">Call Us</p>
                <p className="contact-value">+91 8826023765</p>
              </div>
            </div>

            <div className="contact-card">
              <Mail className="contact-icon" />
              <div className="contact-info">
                <p className="contact-label">Email Us</p>
                <p className="contact-value">scitsgzbofficial@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
