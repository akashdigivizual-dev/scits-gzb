import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./Courses.scss";
import {
  Monitor,
  TrendingUp,
  Calculator,
  Palette,
  Network,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [searchParams] = useSearchParams();
  const courseRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [highlightedCourse, setHighlightedCourse] = useState<string | null>(null);

  const courses = [
    {
      icon: Monitor,
      title: "Basic Computer Course",
      slug: "basic-computer-course",
      duration: "3 Months",
      level: "Beginner",
      description:
        "Complete foundation course covering essential computer skills for students and beginners",
      topics: [
        "Computer Fundamentals & Hardware Basics",
        "Typing Skills & Speed Development",
        "MS Paint & Basic Graphics",
        "MS Word - Document Creation & Formatting",
        "MS Excel - Basic Spreadsheets & Formulas",
        "MS PowerPoint - Presentation Design",
        "MS Access - Database Basics",
        "Internet & Email Management",
      ],
      slug_color: "blue",
    },
    {
      icon: TrendingUp,
      title: "Advanced Excel Coursec (Basic to Advanced)",
      slug: "advanced-excel",
      duration: "2 Months",
      level: "Intermediate to Advanced",
      description:
        "Master Excel for data analysis, reporting, and automation in business environments",
      topics: [
        "Advanced Formulas & Functions",
        "VLOOKUP, HLOOKUP & INDEX MATCH",
        "Pivot Tables & Pivot Charts",
        "Data Validation & Conditional Formatting",
        "Data Analysis & What-If Analysis",
        "Macros & VBA Programming Basics",
        "Dashboard Creation & Reporting",
        "Power Query & Power Pivot",
      ],
      slug_color: "green",
    },
    {
      icon: Calculator,
      title: "Tally Course",
      slug: "tally-course",
      duration: "3 Months",
      level: "Beginner to Advanced",
      description:
        "Complete accounting software training from fundamentals to advanced GST implementation",
      topics: [
        "Tally Prime Basics & Interface",
        "Company Creation & Configuration",
        "Voucher Entry & Day Books",
        "GST Configuration & Returns Filing",
        "Payroll Management & TDS",
        "Banking & Reconciliation",
        "Financial Statements & Reports",
        "Inventory Management & Stock Analysis",
        "TDS (TAX Deducted at Source)"
      ],
      slug_color: "orange",
    },
    {
      icon: Palette,
      title: "Graphic Design Basics",
      slug: "graphic-design",
      duration: "3 Months",
      level: "Beginner to Intermediate",
      description:
        "Learn professional graphic design tools to create stunning visuals and branding materials",
      topics: [
        "Design Principles & Color Theory",
        "CorelDRAW - Vector Graphics & Illustration",
        "Adobe Photoshop - Photo Editing & Manipulation",
        "Logo Design & Brand Identity",
        "Banner & Poster Design",
        "Business Card & Brochure Design",
        "Social Media Graphics",
        "Print & Digital Design Standards",
      ],
      slug_color: "purple",
    },
    {
      icon: Network,
      title: "Networking for CCNA Exam Preparation",
      slug: "ccna-networking",
      duration: "6 Months",
      level: "Intermediate to Advanced",
      description:
        "Comprehensive networking course preparing you for CCNA certification and network administration",
      topics: [
        "Network Fundamentals & OSI Model",
        "IP Addressing & Subnetting",
        "Routing Protocols (RIP, OSPF, EIGRP)",
        "Switching & VLANs Configuration",
        "Network Security Basics",
        "WAN Technologies",
        "Cisco IOS Commands & Configuration",
        "Troubleshooting & Network Management",
      ],
      slug_color: "indigo",
    },
    {
      icon: Globe,
      title: "Digital Marketing Course (Complete Program)",
      slug: "digital-marketing",
      duration: "4 Months",
      level: "Beginner to Advanced",
      description:
        "Master the essential digital marketing skills including SEO, social media, Google Ads, and analytics for business growth.",
      topics: [
        "Introduction to Digital Marketing",
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (Google Ads)",
        "Social Media Marketing (Facebook, Instagram, LinkedIn)",
        "Email Marketing & Automation",
        "Content Marketing Strategy",
        "YouTube & Video Marketing",
        "Google Analytics & Data Insights",
        "Affiliate & Influencer Marketing",
        "Online Reputation Management (ORM)",
      ],
      slug_color: "blue",
    },
  ];

  useEffect(() => {
    const courseSlug = searchParams.get("course");
    if (courseSlug && courseRefs.current[courseSlug]) {
      setHighlightedCourse(courseSlug);
      courseRefs.current[courseSlug]?.scrollIntoView({ behavior: "smooth" });
      // Remove highlight after 3 seconds
      const timer = setTimeout(() => setHighlightedCourse(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <div className="courses-page">
      <Navbar />

      <main className="courses-main">
        {/* Hero Section */}
        <section className="courses-hero">
          <div className="courses-container">
            <div className="courses-hero-content">
              <span className="courses-hero-badge">Our Courses</span>
              <h1 className="courses-hero-title">
                Professional Training Programs
              </h1>
              <p className="courses-hero-description">
                Choose from our comprehensive range of industry-relevant courses
                designed to accelerate your career growth.
              </p>
            </div>
          </div>
        </section>

        {/* Courses List */}
        <section className="courses-list-section">
          <div className="courses-container">
            <div className="courses-list">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  ref={(el) => {
                    if (el) courseRefs.current[course.slug] = el;
                  }}
                  className={`course-card course-${course.slug_color} ${
                    highlightedCourse === course.slug
                      ? "ring-4 ring-blue-500 shadow-lg scale-105 transition-all duration-500"
                      : ""
                  }`}
                >
                  <div className="course-content">
                    {/* Left Side */}
                    <div className="course-left">
                      <div className="course-icon-wrapper">
                        <course.icon className="course-icon" />
                      </div>

                      <div className="course-info">
                        <h2 className="course-title">{course.title}</h2>
                        <p className="course-description">
                          {course.description}
                        </p>
                      </div>

                      <div className="course-meta">
                        <div className="course-meta-item">
                          <Clock className="meta-icon" />
                          <div>
                            <p className="meta-label">Duration</p>
                            <p className="meta-value">{course.duration}</p>
                          </div>
                        </div>
                        <div className="course-meta-item">
                          <Award className="meta-icon" />
                          <div>
                            <p className="meta-label">Level</p>
                            <p className="meta-value">{course.level}</p>
                          </div>
                        </div>
                      </div>

                      <Link to="/contact" className="enroll-link">
                        <Button className="enroll-button">Enroll Now</Button>
                      </Link>
                    </div>

                    {/* Right Side */}
                    <div className="course-right">
                      <h3 className="course-topics-title">What You'll Learn</h3>
                      <div className="course-topics">
                        {course.topics.map((topic, idx) => (
                          <div key={idx} className="course-topic">
                            <div className="topic-dot" />
                            <p className="topic-text">{topic}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="courses-cta">
          <div className="courses-container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Start Learning?</h2>
              <p className="cta-description">
                Join thousands of students who have transformed their careers
                with SCITS. Get expert training, recognized certification, and
                placement support.
              </p>
              <div className="cta-buttons">
                <Link to="/contact">
                  <Button className="cta-btn-primary">Enroll Now</Button>
                </Link>
                <Link to="/about">
                  <Button className="cta-btn-outline">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
