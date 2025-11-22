import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import "./Contact.scss";

// Declare EmailJS types
declare global {
  interface Window {
    emailjs: any;
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init('IJ-WsOevpdJ3VcNDn');
      }
    };
    document.body.appendChild(script);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!window.emailjs) {
        toast.error("Email service not loaded. Please refresh and try again.");
        setIsSubmitting(false);
        return;
      }

const templateParams = {
  full_name: formData.name,
  phone_number: formData.phone,
  email: formData.email,
  course: formData.course || "Not Specified",
  message: formData.message
};



      const response = await window.emailjs.send(
        "service_al2ocbv",
        "template_wmv3hfe",
        templateParams
      );

      if (response.status === 200) {
        toast.success("Thank you! We'll contact you soon.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          course: "",
          message: "",
        });
      }
    } catch (error: any) {
      console.error("Email send failed:", error);
      toast.error(error.text || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 8826023765"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@scitsghaziabad.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Near Main Market", "Ghaziabad, Uttar Pradesh", "PIN: 201001"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM-7:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <div className="contact-page">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-badge">Contact Us</span>
              <h1 className="hero-title">Get In Touch With Us</h1>
              <p className="hero-description">
                Have questions about our courses? Want to schedule a visit?
                We're here to help!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <Card key={index} className="contact-card">
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <h3 className="contact-title">{info.title}</h3>
                  <div className="contact-details">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="contact-form-section">
              {/* Contact Form */}
              <Card className="contact-form-card">
                <h2 className="form-heading">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <Input 
                        name="name"
                        placeholder="Your name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <Input 
                        name="phone"
                        type="tel" 
                        placeholder="+91 XXXXX XXXXX" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Course Interested In</label>
                    <select 
                      name="course"
                      className="form-select"
                      value={formData.course}
                      onChange={handleChange}
                    >
                      <option value="">Select a course</option>
                      <option value="basic-computer">Basic Computer Course</option>
                      <option value="advanced-excel">Advanced Excel</option>
                      <option value="tally">Tally Course</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="ccna">CCNA Networking</option>
                      <option value="digital-marketing">Digital Marketing</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Message *</label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="loading-text">
                        <span className="spinner"></span>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>

              {/* Animated Illustration Section */}
              <div className="contact-illustration-card">
                <div className="illustration-container">
                  {/* Animated Chat Bubble */}
                  <div className="floating-element chat-bubble bubble-1">
                    <div className="bubble-content">
                      <p>Have Questions?</p>
                      <div className="dot-loader">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>

                  {/* Message Icon */}
                  <div className="floating-element mail-icon">
                    <Mail size={80} />
                  </div>

                  {/* Phone Icon */}
                  <div className="floating-element phone-icon">
                    <Phone size={80} />
                  </div>

                  {/* Success Checkmark */}
                  <div className="floating-element check-icon">
                    <CheckCircle size={60} />
                  </div>

                  {/* Chat Bubble 2 */}
                  <div className="floating-element chat-bubble bubble-2">
                    <div className="bubble-content">
                      <p>Get Expert Guidance</p>
                    </div>
                  </div>

                  {/* Decorative Circles */}
                  <div className="decorative-circle circle-1"></div>
                  <div className="decorative-circle circle-2"></div>
                  <div className="decorative-circle circle-3"></div>

                  {/* Main Content Text */}
                  <div className="illustration-text">
                    <h3>We're Here To Help!</h3>
                    <p>Reach out to us and our team will respond within 24 hours.</p>
                    <div className="contact-quick-info">
                      <div className="quick-info-item">
                        <span className="info-icon">📞</span>
                        <span className="info-text">24/7 Support</span>
                      </div>
                      <div className="quick-info-item">
                        <span className="info-icon">⚡</span>
                        <span className="info-text">Quick Response</span>
                      </div>
                      <div className="quick-info-item">
                        <span className="info-icon">✅</span>
                        <span className="info-text">Expert Advice</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
