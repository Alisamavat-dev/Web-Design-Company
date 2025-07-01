import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import SEO from "./SEO/SEO";

const Developers = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "fa";
  const isRTL = lang === "fa";

  const teamMembers = [
    {
      id: 1,
      name: isRTL ? "علی صمدی" : "Ali Samadi",
      role: isRTL ? "توسعه‌دهنده فرانت‌اند" : "Frontend Developer",
      bio: isRTL
        ? "متخصص در React و Next.js با ۵ سال تجربه در توسعه رابط کاربری"
        : "React and Next.js specialist with 5 years of UI development experience",
      skills: ["React", "TypeScript", "TailwindCSS"],
      social: {
        github: "https://github.com/alisamadi",
        linkedin: "https://linkedin.com/in/alisamadi",
        twitter: "https://twitter.com/alisamadi",
      },
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: isRTL ? "سارا محمدی" : "Sara Mohammadi",
      role: isRTL ? "توسعه‌دهنده بک‌اند" : "Backend Developer",
      bio: isRTL
        ? "متخصص در Node.js و Python با تمرکز بر معماری‌های مقیاس‌پذیر"
        : "Node.js and Python expert focused on scalable architectures",
      skills: ["Node.js", "Python", "Django", "PostgreSQL"],
      social: {
        github: "https://github.com/saramohammadi",
        linkedin: "https://linkedin.com/in/saramohammadi",
        twitter: "https://twitter.com/saramohammadi",
      },
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: isRTL ? "رضا کریمی" : "Reza Karimi",
      role: isRTL ? "مهندس DevOps" : "DevOps Engineer",
      bio: isRTL
        ? "متخصص در زیرساخت ابری و اتوماسیون با ۴ سال تجربه"
        : "Cloud infrastructure and automation specialist with 4 years experience",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      social: {
        github: "https://github.com/rezakarimi",
        linkedin: "https://linkedin.com/in/rezakarimi",
        twitter: "https://twitter.com/rezakarimi",
      },
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 4,
      name: isRTL ? "نازنین احمدی" : "Nazanin Ahmadi",
      role: isRTL ? "توسعه‌دهنده فول‌استک" : "Fullstack Developer",
      bio: isRTL
        ? "متخصص در JavaScript و Ruby on Rails با ۶ سال تجربه"
        : "JavaScript and Ruby on Rails expert with 6 years experience",
      skills: ["JavaScript", "Ruby", "Rails", "GraphQL"],
      social: {
        github: "https://github.com/nazaninahmadi",
        linkedin: "https://linkedin.com/in/nazaninahmadi",
        twitter: "https://twitter.com/nazaninahmadi",
      },
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#0EA5E9",
      color: "#FFFFFF",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="py-20">
      <SEO
        title={isRTL ? "تیم توسعه‌دهندگان | واونیکس" : "Development Team | wavnix"}
        description={
          isRTL
            ? "معرفی تیم توسعه‌دهندگان حرفه‌ای واونیکس"
            : "Meet the professional development team of wavnix"
        }
        keywords={
          isRTL
            ? "تیم توسعه, برنامه‌نویسان, توسعه‌دهندگان, واونیکس"
            : "development team, programmers, developers, wavnix"
        }
        author={isRTL ? "تیم واونیکس" : "Team wavnix"}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-4">
            {isRTL ? "تیم توسعه‌دهندگان" : "Development Team"}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {isRTL
              ? "با تیم حرفه‌ای ما که پروژه‌های شما را به واقعیت تبدیل می‌کنند آشنا شوید"
              : "Meet our professional team who bring your projects to life"}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-sky-500 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sky-400 mb-3">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.bio}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {member.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="text-xs px-3 py-1 bg-slate-700 text-gray-300 rounded-full"
                      variants={skillVariants}
                      whileHover="hover"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name} GitHub`}
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-sky-400 transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center bg-sky-500/10 p-3 rounded-full mb-4">
              <FaCode className="text-sky-400 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {isRTL ? "به تیم ما بپیوندید" : "Join Our Team"}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {isRTL
                ? "ما همیشه به دنبال استعدادهای درخشان در زمینه توسعه نرم‌افزار هستیم. اگر علاقه‌مند به همکاری با ما هستید، رزومه خود را برای ما ارسال کنید."
                : "We're always looking for brilliant talents in software development. If you're interested in working with us, send us your resume."}
            </p>
            <motion.a
              href={isRTL ? "/fa/careers" : "/careers"}
              className="inline-block px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg hover:from-sky-600 hover:to-blue-700 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {isRTL ? "فرصت‌های شغلی" : "Career Opportunities"}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Developers;