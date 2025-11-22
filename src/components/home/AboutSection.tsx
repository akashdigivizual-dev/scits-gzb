import { motion } from "framer-motion";
import { Target, Heart, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import "./AboutSection.scss";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide practical, job-oriented computer training in a friendly and supportive environment.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Quality education, personal attention, and student success are at the heart of what we do.",
    },
    {
      icon: TrendingUp,
      title: "Our Vision",
      description:
        "To build confident professionals who are ready to excel in the evolving digital world.",
    },
  ];

  return (
    <section className="about-section relative overflow-hidden py-24">
      {/* Background gradient & light effects */}
      <div className="about-bg"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="section-label">About SCITS</span>
          <h2 className="section-title">Empowering Students Since Establishment</h2>
          <p className="section-subtext">
            SCITS (Smart Computer Institute of Technology, Ghaziabad) is a
            trusted name in computer education, helping students and professionals
            master essential digital skills with confidence.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="values-grid grid md:grid-cols-3 gap-10 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <Card className="value-card p-10 text-center">
                <div className="icon-wrapper mx-auto mb-6">
                  <value.icon className="icon" />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Description Box */}
        <motion.div
          className="info-box bg-card rounded-3xl shadow-xl p-10 md:p-14"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="info-text">
            <p>
              At SCITS, we believe that everyone deserves access to quality computer
              education. Whether you're a student building your foundation, a
              professional upgrading your skills, or a career changer venturing into
              technology — we have the right course for you.
            </p>
            <p>
              Our expert trainers bring real-world knowledge to every class,
              ensuring that students gain both theoretical understanding and
              practical experience. With affordable fees, flexible timings, and
              industry-recognized certifications, SCITS empowers your journey toward
              digital excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
