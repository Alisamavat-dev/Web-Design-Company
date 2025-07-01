import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt, FaGithub, FaStar, FaFilter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "./SEO/SEO";
import "../../index.css";

const Portfolio = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "fa";
  const isFA = lang === "fa";

  // Project data organized by categories
  const projectCategories = {
    featured: {
      title: isFA ? "پروژه‌های ویژه" : "Featured Projects",
      description: isFA
        ? "برگزیده‌ترین کارهای ما با تکنولوژی‌های پیشرفته"
        : "Our premium projects with cutting-edge technologies",
    },
    web: {
      title: isFA ? "توسعه وب" : "Web Development",
      description: isFA
        ? "راهکارهای تحت وب با آخرین فناوری‌ها"
        : "Web solutions with latest technologies",
    },
    mobile: {
      title: isFA ? "توسعه موبایل" : "Mobile Development",
      description: isFA
        ? "اپلیکیشن‌های موبایل با تجربه کاربری عالی"
        : "Mobile apps with great user experience",
    },
    fullstack: {
      title: isFA ? "فول‌استک" : "Fullstack Solutions",
      description: isFA
        ? "سیستم‌های کامل از فرانت‌اند تا بک‌اند"
        : "Complete systems from frontend to backend",
    },
  };

  const projects = [
    {
      id: 1,
      title: isFA ? "واونیکس" : "wavnix",
      description: isFA
        ? "سیستمی برای مدیریت محتوا با رابط کاربری آسان و پشتیبانی چندزبانه. این سیستم به مشتریان امکان مدیریت کامل محتوای وبسایت خود را می‌دهد."
        : "A CMS with user-friendly UI and multilingual support. Gives clients full control over their website content.",
      tags: ["React", "Node.js", "MongoDB"],
      category: "web",
      image: "https://uploadkon.ir/uploads/fd0e01_25logo-web.png",
      links: {
        live: "https://wavnix.ir/",
        code: "https://github.com/Alisamavat-dev/Web-Design-Company",
      },
      featured: true,
      year: 2023,
    },
    {
      id: 2,
      title: isFA ? "فروشگاه اینترنتی" : "Health Mobile App",
      description: isFA
        ? "اپلیکیشنی برای رژیم غذایی و تناسب اندام با قابلیت پیگیری پیشرفت و مشاوره با متخصصین"
        : "Diet and fitness app with progress tracking and expert consultation features",
      tags: ["React Native", "Firebase", "Redux"],
      category: "mobile",
      image:
        "https://armcade.com/pubimage/Portals/0/articleimages/w/630/url/torobb1.jpg",
      links: { live: "#", code: "#" },
      featured: true,
      year: 2022,
    },
    {
      id: 3,
      title: isFA ? "فروشگاه اینترنتی" : "Fashion E-commerce",
      description: isFA
        ? "پلتفرم فروشگاهی با امکان پرداخت آنلاین، سیستم توصیه‌گر محصولات و مدیریت موجودی"
        : "E-commerce platform with secure checkout, product recommender and inventory management",
      tags: ["Vue.js", "Laravel", "MySQL"],
      category: "web",
      image: "https://about.digikala.com/ogImage.jpg",
      links: { live: "#", code: "#" },
      year: 2023,
    },
    {
      id: 4,
      title: isFA ? "داشبورد تحلیلی کسب‌وکار" : "Business Analytics Dashboard",
      description: isFA
        ? "نمایش داده‌های تجاری با نمودارهای تعاملی، گزارشات سفارشی و هشدارهای هوشمند"
        : "Business data visualization with interactive charts, custom reports and smart alerts",
      tags: ["React", "D3.js", "Express", "TypeScript"],
      category: "fullstack",
      image: "https://storecode.ir/wp-content/uploads/2024/03/snapp.jpg",
      links: { live: "#", code: "#" },
      year: 2021,
    },
    {
      id: 5,
      title: isFA ? "سیستم رزرواسیون هتل" : "Hotel Booking System",
      description: isFA
        ? "سیستم مدیریت رزرو و میزبانی با تقویم آنلاین، مدیریت اتاق‌ها و پرداخت یکپارچه"
        : "Reservation management with online calendar, room management and integrated payments",
      tags: ["React", "Node.js", "PostgreSQL", "GraphQL"],
      category: "fullstack",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
      links: { live: "#", code: "#" },
      year: 2022,
    },
    {
      id: 6,
      title: isFA ? "پلتفرم آموزش آنلاین" : "E-learning Platform",
      description: isFA
        ? "سیستم مدیریت یادگیری با کلاس‌های آنلاین، آزمون‌ساز و گواهینامه دیجیتال"
        : "Learning management with online classes, quiz system and digital certificates",
      tags: ["React", "Django", "WebRTC", "Docker"],
      category: "web",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
      links: { live: "#", code: "#" },
      featured: true,
      year: 2023,
    },
    {
      id: 7,
      title: isFA ? "اپلیکیشن مسیریاب" : "Navigation App",
      description: isFA
        ? "راهنمای مسیر با قابلیت مسیریابی آفلاین، هشدار ترافیک و نقاط موردعلاقه"
        : "Navigation guide with offline maps, traffic alerts and points of interest",
      tags: ["Flutter", "Firebase", "Google Maps API"],
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1559060017-445fb9722f2a?auto=format&fit=crop&w=800&q=80",
      links: { live: "#", code: "#" },
      year: 2021,
    },
    {
      id: 8,
      title: isFA ? "سیستم مدیریت رویداد" : "Event Management System",
      description: isFA
        ? "پلتفرم جامع برای مدیریت رویدادها، فروش بلیط و آنالیز مشارکت کنندگان"
        : "Comprehensive platform for event management, ticket sales and attendee analytics",
      tags: ["Angular", "NestJS", "MongoDB", "Redis"],
      category: "fullstack",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      links: { live: "#", code: "#" },
      year: 2022,
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const uniqueTags = ["all", ...new Set(projects.flatMap((p) => p.tags))];
  const categories = ["all", ...Object.keys(projectCategories)];

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      let filtered = [...projects];

      if (activeCategory !== "all") {
        filtered = filtered.filter(
          (project) => project.category === activeCategory
        );
      }

      if (activeFilter !== "all") {
        filtered = filtered.filter((project) =>
          project.tags.includes(activeFilter)
        );
      }

      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(
          (project) =>
            project.title.toLowerCase().includes(term) ||
            project.description.toLowerCase().includes(term) ||
            project.tags.some((tag) => tag.toLowerCase().includes(term))
        );
      }

      filtered.sort((a, b) => {
        if (sortBy === "newest") return b.year - a.year;
        if (sortBy === "oldest") return a.year - b.year;
        if (sortBy === "featured")
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        return 0;
      });

      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeFilter, activeCategory, searchTerm, sortBy]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const filterButtonVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "#1E293B",
      color: "#CBD5E1",
    },
    active: {
      scale: 1.05,
      backgroundColor: "#0EA5E9",
      color: "#FFFFFF",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    hover: {
      scale: 1.03,
      backgroundColor: "#334155",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="pt-20 pb-16 ">
      <SEO
        title={isFA ? "نمونه کار | واونیکس" : "Portfolio | wavnix"}
        description={
          isFA
            ? "نمونه پروژه‌های انجام شده توسط تیم واونیکس"
            : "Project samples completed by team wavnix"
        }
        keywords={
          isFA
            ? "نمونه کار, پروژه, طراحی سایت, توسعه اپلیکیشن, واونیکس"
            : "portfolio, web development, mobile apps, projects, wavnix"
        }
        author={isFA ? "تیم واونیکس" : "Team wavnix"}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Hero Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-4">
            {isFA ? "نمونه کارها" : "Portfolio"}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {isFA
              ? "برخی از پروژه‌های برجسته‌ای که با تخصص و خلاقیت اجرا کرده‌ایم"
              : "Some of our notable projects executed with expertise and creativity"}
          </p>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            {/* Category Filters */}
            <div className="flex-1 w-full">
              <h3 className="text-sm font-medium text-gray-400 mb-2 flex items-center">
                <FaFilter className="ml-1" />
                {isFA ? "دسته‌بندی" : "Categories"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
                      activeCategory === category
                        ? "bg-sky-500 text-white"
                        : "bg-slate-700 text-gray-300"
                    }`}
                    variants={filterButtonVariants}
                    initial="inactive"
                    animate={
                      activeCategory === category ? "active" : "inactive"
                    }
                    whileHover="hover"
                    aria-label={`Filter by ${category}`}
                  >
                    {category === "all"
                      ? isFA
                        ? "همه"
                        : "All"
                      : projectCategories[category]?.title || category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="w-full md:w-auto">
              <label
                htmlFor="sort"
                className="text-sm font-medium text-gray-400 mb-2 block"
              >
                {isFA ? "مرتب‌سازی بر اساس:" : "Sort by:"}
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-700 border border-slate-600 text-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                <option value="newest">{isFA ? "جدیدترین" : "Newest"}</option>
                <option value="oldest">{isFA ? "قدیمی‌ترین" : "Oldest"}</option>
                <option value="featured">{isFA ? "ویژه" : "Featured"}</option>
              </select>
            </div>
          </div>

          {/* Search and Tag Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Search Input */}
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder={
                  isFA ? "جستجو در پروژه‌ها..." : "Search projects..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                dir={isFA ? "rtl" : "ltr"}
                aria-label={isFA ? "جستجو در پروژه‌ها" : "Search projects"}
              />
            </div>

            {/* Tag Filters */}
            <div className="w-full md:w-auto">
              <h3 className="text-sm font-medium text-gray-400 mb-2">
                {isFA ? "فیلتر برچسب‌ها" : "Filter by tags"}
              </h3>
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="bg-slate-700 border border-slate-600 text-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:border-transparent w-full"
              >
                <option value="all">
                  {isFA ? "همه برچسب‌ها" : "All tags"}
                </option>
                {uniqueTags
                  .filter((t) => t !== "all")
                  .map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Category Description */}
        {activeCategory !== "all" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-slate-800 rounded-xl border border-slate-700"
          >
            <h2 className="text-2xl font-bold text-sky-400 mb-2">
              {projectCategories[activeCategory]?.title}
            </h2>
            <p className="text-gray-300">
              {projectCategories[activeCategory]?.description}
            </p>
          </motion.div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <motion.div
              animate={{
                rotate: 360,
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"
            ></motion.div>
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && (
          <>
            {filteredProjects.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence>
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      className="rounded-xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-sky-500 transition-all duration-300 group relative"
                      whileHover="hover"
                      layout
                    >
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4 z-10">
                          <motion.span
                            className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs px-3 py-1 rounded-full shadow-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 15,
                            }}
                          >
                            <FaStar className="text-xs" />
                            {isFA ? "ویژه" : "Featured"}
                          </motion.span>
                        </div>
                      )}

                      {/* Year Badge */}
                      <div className="absolute top-4 left-4 z-10 bg-slate-900/80 text-gray-300 text-xs px-2 py-1 rounded">
                        {project.year}
                      </div>

                      {/* Project Image */}
                      <div className="relative overflow-hidden h-56">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-2 min-h-[3rem]">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, i) => (
                            <motion.span
                              key={i}
                              className="text-xs px-3 py-1 bg-sky-600/20 text-sky-300 rounded-full"
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(2, 132, 199, 0.3)",
                              }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <motion.a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 text-sm text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 px-4 py-2 rounded transition-all"
                            aria-label={`View live demo of ${project.title}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <FaExternalLinkAlt />
                            {isFA ? "مشاهده دمو" : "Live Demo"}
                          </motion.a>
                          <motion.a
                            href={project.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-white px-4 py-2 border border-slate-600 hover:border-sky-500 rounded transition-all"
                            aria-label={`View source code of ${project.title}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <FaGithub />
                            {isFA ? "کد منبع" : "Source Code"}
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl text-gray-300 mb-4">
                    {isFA ? "پروژه‌ای یافت نشد" : "No projects found"}
                  </h3>
                  <p className="text-gray-500 mb-6">
                    {isFA
                      ? "با فیلترهای فعلی هیچ پروژه‌ای وجود ندارد. لطفاً فیلترهای دیگری را امتحان کنید."
                      : "There are no projects with the current filters. Please try different filters."}
                  </p>
                  <motion.button
                    onClick={() => {
                      setActiveFilter("all");
                      setActiveCategory("all");
                      setSearchTerm("");
                    }}
                    className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isFA ? "حذف همه فیلترها" : "Clear all filters"}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </>
        )}

        {/* Call to Action */}
        {!isLoading && filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl text-gray-300 mb-4">
              {isFA
                ? "پروژه بعدی شما اینجا باشد!"
                : "Your next project could be here!"}
            </h3>
            <motion.a
              href={isFA ? "/fa/contact" : "/contact"}
              className="inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 5px 15px rgba(14, 165, 233, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {isFA ? "شروع پروژه جدید" : "Start a New Project"}
            </motion.a>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Portfolio;
