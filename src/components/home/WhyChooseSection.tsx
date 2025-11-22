import { motion } from "framer-motion";
import {
  Award,
  Users,
  DollarSign,
  FileCheck,
  Briefcase,
  Clock,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import "./WhyChooseSection.scss";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Users,
      title: "Experienced Trainers",
      description:
        "Learn from industry experts with years of practical and teaching experience.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Award,
      title: "Practical Learning",
      description:
        "Gain hands-on experience through live projects, tools, and real-world challenges.",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: DollarSign,
      title: "Affordable Fees",
      description:
        "Access high-quality education at fair prices with flexible payment options.",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: FileCheck,
      title: "Recognized Certificate",
      description:
        "Earn industry-approved certificates that validate your skills and boost your resume.",
      color: "from-orange-500 to-red-400",
    },
    {
      icon: Briefcase,
      title: "Job Guidance",
      description:
        "Get personalized career mentoring, resume support, and interview preparation.",
      color: "from-indigo-500 to-blue-400",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description:
        "Multiple batch options to match your schedule, whether you’re a student or professional.",
      color: "from-teal-500 to-cyan-400",
    },
  ];

  return (
    <section className="why-choose-section py-24 relative overflow-hidden">
      <div className="why-bg"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">What Makes SCITS Special</h2>
          <p className="section-subtext">
            We’re dedicated to providing an exceptional learning experience
            backed by real expertise and proven results.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <Card className="reason-card group relative overflow-hidden p-8">
                <div
                  className={`icon-box bg-gradient-to-br ${reason.color} shadow-lg`}
                >
                  <reason.icon className="icon" />
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
