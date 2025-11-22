import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, TrendingUp, Award, Users, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import "./About.scss";

const About = () => {
  const achievements = [
    { icon: Users, label: "Students Trained", value: "5000+" },
    { icon: Award, label: "Courses Offered", value: "15+" },
    { icon: Clock, label: "Years of Excellence", value: "10+" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower individuals with practical computer skills and knowledge that prepare them for real-world challenges in the digital workplace.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "We believe in quality education, personalized attention to each student, continuous innovation in teaching methods, and unwavering commitment to student success.",
    },
    {
      icon: TrendingUp,
      title: "Our Vision",
      description:
        "To become the leading computer education institute in Ghaziabad, recognized for excellence in training and producing industry-ready professionals.",
    },
  ];

  return (
    <div className="about-page">
      <Navbar />
      {/* logo image */}
            <img src="/Images/banneer.png" alt="SCITS Logo" className="navbar__image" />
      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero " style={{color:"white"}}>
          <div className="about-container">
            <div className="about-hero-content">
              <span className="about-badge">About SCITS</span>
              <h1 className="about-title">
                Building Digital Excellence Since Establishment
              </h1>
              <p className="about-description">
                SCITS (Smart Computer Institute of Technology) is Ghaziabad's
                trusted destination for quality computer education and
                professional skill development.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats">
          <div className="about-container">
            <div className="about-stats-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="about-stat-item">
                  <div className="about-stat-icon">
                    <achievement.icon />
                  </div>
                  <div className="about-stat-text">
                    <p className="about-stat-value">{achievement.value}</p>
                    <p className="about-stat-label">{achievement.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="about-values">
          <div className="about-container">
            <div className="about-values-grid">
              {values.map((value, index) => (
                <Card key={index} className="about-value-card">
                  <div className="about-value-icon">
                    <value.icon />
                  </div>
                  <h3 className="about-value-title">{value.title}</h3>
                  <p className="about-value-description">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed About Content */}
        <section className="about-details">
          <div className="about-container">
            <div className="about-details-content">
              <div className="about-story">
                <h2>Our Story</h2>
                <p>
                  Founded with a vision to make quality computer education
                  accessible to everyone, SCITS has grown to become one of
                  Ghaziabad's most trusted names in professional training. What
                  started as a small initiative has now transformed thousands of
                  lives, helping students and professionals achieve their career
                  goals.
                </p>
                <p>
                  Our institute is equipped with modern infrastructure,
                  including state-of-the-art computer labs, experienced faculty,
                  and a curriculum that's constantly updated to match industry
                  requirements. We don't just teach theory – we focus on
                  practical, hands-on learning that prepares our students for
                  real-world challenges.
                </p>
              </div>

              <div className="about-unique">
                <h2>What Sets Us Apart</h2>
                <div className="about-unique-points">
                  <div className="about-point">
                    <div className="about-dot" />
                    <div>
                      <h4>Industry-Relevant Curriculum</h4>
                      <p>
                        Our courses are designed in consultation with industry
                        experts to ensure you learn skills that are in high
                        demand.
                      </p>
                    </div>
                  </div>

                  <div className="about-point">
                    <div className="about-dot" />
                    <div>
                      <h4>Small Batch Sizes</h4>
                      <p>
                        We maintain small class sizes to ensure every student
                        gets personalized attention and guidance from trainers.
                      </p>
                    </div>
                  </div>

                  <div className="about-point">
                    <div className="about-dot" />
                    <div>
                      <h4>Placement Support</h4>
                      <p>
                        We provide comprehensive job placement assistance,
                        including resume building, interview preparation, and
                        direct connections with hiring companies.
                      </p>
                    </div>
                  </div>

                  <div className="about-point">
                    <div className="about-dot" />
                    <div>
                      <h4>Lifetime Support</h4>
                      <p>
                        Even after course completion, we remain available to
                        answer your questions and provide guidance throughout
                        your career.
                      </p>
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

export default About;
