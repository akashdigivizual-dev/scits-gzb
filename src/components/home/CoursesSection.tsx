import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

import {
  Monitor,
  TrendingUp,
  Calculator,
  Palette,
  Network,
  ArrowRight,
} from "lucide-react";
import "./CoursesSection.scss";

const CoursesSection = () => {
  const courses = [
    {
      icon: Monitor,
      title: "Basic Computer Course",
      slug: "basic-computer-course",
      description:
        "Master fundamentals including Typing, MS Paint, Word, Excel, PowerPoint, and Access.",
      features: [
        "Complete MS Office",
        "Typing Skills",
        "Internet Basics",
        "Email Management",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Advanced Excel",
      slug: "advanced-excel",
      description:
        "Become an Excel expert with advanced formulas, data analysis, and automation tools.",
      features: [
        "VLOOKUP & Pivot Tables",
        "Advanced Formulas",
        "Data Analysis",
        "Macros & VBA",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Calculator,
      title: "Tally Course",
      slug: "tally-course",
      description:
        "Complete accounting software training from fundamentals to advanced financial features.",
      features: [
        "GST Compliance",
        "Payroll Management",
        "Financial Reports",
        "Tally Prime",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Palette,
      title: "Graphic Design Basics",
      slug: "graphic-design",
      description:
        "Learn top design tools and principles to create eye-catching graphics and brand visuals.",
      features: [
        "CorelDRAW",
        "Adobe Photoshop",
        "Logo Design",
        "Banner Creation",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Network,
      title: "Networking for CCNA",
      slug: "ccna-networking",
      description:
        "Prepare for CCNA certification with practical, real-world networking experience.",
      features: [
        "IP Addressing",
        "Routing Protocols",
        "Network Setup",
        "Cisco IOS",
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Globe,
      title: "Digital Marketing Mastery",
      slug: "digital-marketing",
      description:
        "Learn digital marketing from scratch with practical strategies for SEO, social media, ads, and analytics.",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Google Ads & PPC Campaigns",
        "Email Marketing & Automation",
      ],
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="courses-section py-24 relative overflow-hidden">
      <div className="courses-bg"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="section-label">Our Courses</span>
          <h2 className="section-title">Professional Training Programs</h2>
          <p className="section-subtext">
            Choose from a wide range of career-focused programs designed to help
            you upskill and grow in the digital era.
          </p>
        </motion.div>

        {/* Course Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <Card className="course-card group p-8 relative overflow-hidden">
                <div
                  className={`icon-wrapper bg-gradient-to-br ${course.color}`}
                >
                  <course.icon className="icon" />
                </div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>

                <ul className="course-features">
                  {course.features.map((feature, idx) => (
                    <li key={idx}>
                      <div className="dot"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={`/courses?course=${course.slug}`}>
                  <Button variant="ghost" className="learn-btn group">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to="/courses">
            <Button size="lg" className="gradient-btn">
              View All Courses <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
