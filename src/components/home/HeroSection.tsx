import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import "./HeroSection.scss";

const HeroSection = () => {
  const stats = [
    { icon: Users, label: "Students Trained", value: "5000+" },
    { icon: Award, label: "Certified Courses", value: "15+" },
    { icon: BookOpen, label: "Expert Trainers", value: "20+" },
  ];

  return (
    <section className="hero-section relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background */}
      <div className="hero-bg">
        <img src={heroImage} alt="Computer Education" className="hero-image" />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-content space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="tagline"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to SCITS Ghaziabad
            </motion.span>

            <h1 className="hero-title">
              Your Gateway to{" "}
              <span className="gradient-text">Computer Education</span> and Career Growth
            </h1>

            <p className="hero-subtext">
              Master essential digital skills with practical, job-oriented training at
              Ghaziabad's trusted computer institute. Start your journey towards a
              successful tech career today.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="gradient-btn group">
                  Enroll Now{" "}
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="outline-btn">
                  Explore Courses
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              className="stats-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <div className="icon-container">
                    <stat.icon className="stat-icon" />
                  </div>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side Image (Optional future animation) */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="bottom-fade" />
    </section>
  );
};

export default HeroSection;
