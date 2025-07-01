import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPaperPlane, FaFileAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import SEO from "./SEO/SEO";

const SubmitProject = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "fa";
  const isRTL = lang === "fa";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "website",
    budget: "medium",
    description: "",
    attachments: null,
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projectTypes = [
    { value: "website", label: isRTL ? "طراحی وبسایت" : "Website Design" },
    { value: "ecommerce", label: isRTL ? "فروشگاه اینترنتی" : "E-commerce" },
    { value: "webapp", label: isRTL ? "وب اپلیکیشن" : "Web Application" },
    { value: "mobile", label: isRTL ? "اپلیکیشن موبایل" : "Mobile App" },
    { value: "seo", label: isRTL ? "سئو و بهینه‌سازی" : "SEO & Optimization" },
    { value: "other", label: isRTL ? "سایر" : "Other" },
  ];

  const budgetRanges = [
    { value: "low", label: isRTL ? "زیر ۵ میلیون تومان" : "Under $500" },
    { value: "medium", label: isRTL ? "۵ تا ۱۵ میلیون تومان" : "$500 - $1500" },
    { value: "high", label: isRTL ? "۱۵ تا ۵۰ میلیون تومان" : "$1500 - $5000" },
    { value: "enterprise", label: isRTL ? "بالای ۵۰ میلیون تومان" : "Over $5000" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "website",
        budget: "medium",
        description: "",
        attachments: null,
        agreeTerms: false,
      });
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <div className="py-20">
      <SEO
        title={isRTL ? "ثبت سفارش | واونیکس" : "Submit Project | wavnix"}
        description={
          isRTL
            ? "فرم ثبت سفارش طراحی و توسعه وبسایت"
            : "Website design and development project submission form"
        }
        keywords={
          isRTL
            ? "ثبت سفارش, طراحی سایت, سفارش پروژه, توسعه وب"
            : "submit project, order website, web development, project request"
        }
        author={isRTL ? "تیم واونیکس" : "Team wavnix"}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-4">
            {isRTL ? "ثبت سفارش پروژه" : "Submit Your Project"}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {isRTL
              ? "فرم زیر را پر کنید تا همکاران ما در اسرع وقت با شما تماس بگیرند"
              : "Fill out the form below and our team will contact you soon"}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800 rounded-xl border border-slate-700 p-6 md:p-8"
          >
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center bg-green-500/10 p-4 rounded-full mb-6">
                  <FaPaperPlane className="text-green-400 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {isRTL ? "سفارش شما ثبت شد!" : "Your project submitted!"}
                </h3>
                <p className="text-gray-300 mb-6">
                  {isRTL
                    ? "متشکریم! همکاران ما در اسرع وقت با شما تماس خواهند گرفت."
                    : "Thank you! Our team will contact you soon."}
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
                >
                  {isRTL ? "ثبت سفارش جدید" : "Submit New Project"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      {isRTL ? "نام کامل *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder={isRTL ? "نام و نام خانوادگی" : "Your full name"}
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        {isRTL ? "ایمیل *" : "Email *"}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="example@domain.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        {isRTL ? "شماره تماس *" : "Phone *"}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder={isRTL ? "09xxxxxxxxx" : "Your phone number"}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      {isRTL ? "نام شرکت (اختیاری)" : "Company (Optional)"}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder={isRTL ? "نام شرکت یا سازمان" : "Your company name"}
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {isRTL ? "نوع پروژه *" : "Project Type *"}
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {projectTypes.map((type) => (
                        <label key={type.value} className="flex items-center">
                          <input
                            type="radio"
                            name="projectType"
                            value={type.value}
                            checked={formData.projectType === type.value}
                            onChange={handleChange}
                            className="h-4 w-4 text-sky-500 focus:ring-sky-500 border-slate-600"
                            required
                          />
                          <span className="ml-2 text-gray-300">{type.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {isRTL ? "بودجه تقریبی *" : "Estimated Budget *"}
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {budgetRanges.map((budget) => (
                        <label key={budget.value} className="flex items-center">
                          <input
                            type="radio"
                            name="budget"
                            value={budget.value}
                            checked={formData.budget === budget.value}
                            onChange={handleChange}
                            className="h-4 w-4 text-sky-500 focus:ring-sky-500 border-slate-600"
                            required
                          />
                          <span className="ml-2 text-gray-300">{budget.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                      {isRTL ? "توضیحات پروژه *" : "Project Description *"}
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder={isRTL ? "جزئیات پروژه، نیازمندی‌ها و اهداف" : "Project details, requirements and goals"}
                    ></textarea>
                  </div>

                  {/* Attachments */}
                  <div>
                    <label htmlFor="attachments" className="block text-sm font-medium text-gray-300 mb-2">
                      {isRTL ? "ضمیمه فایل (اختیاری)" : "Attachments (Optional)"}
                    </label>
                    <div className="flex items-center">
                      <label className="cursor-pointer bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg px-4 py-3 flex items-center transition-colors">
                        <FaFileAlt className="text-gray-400 mr-2" />
                        <span className="text-gray-300">
                          {formData.attachments
                            ? isRTL
                              ? `${formData.attachments.length} فایل انتخاب شده`
                              : `${formData.attachments.length} files selected`
                            : isRTL
                            ? "انتخاب فایل"
                            : "Choose files"}
                        </span>
                        <input
                          type="file"
                          id="attachments"
                          name="attachments"
                          onChange={handleChange}
                          className="hidden"
                          multiple
                        />
                      </label>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 text-sky-500 focus:ring-sky-500 border-slate-600 rounded"
                      />
                    </div>
                    <div className="mr-3 text-sm">
                      <label htmlFor="agreeTerms" className="text-gray-300">
                        {isRTL
                          ? "با شرایط و قوانین و حریم خصوصی موافقم"
                          : "I agree to the terms and privacy policy"}
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <motion.button
                      type="submit"
                      className={`w-full flex justify-center items-center py-3 px-6 rounded-lg font-medium transition-colors ${
                        isSubmitting
                          ? "bg-slate-700 cursor-not-allowed"
                          : "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
                      }`}
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {isRTL ? "در حال ارسال..." : "Submitting..."}
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="ml-2" />
                          {isRTL ? "ثبت سفارش" : "Submit Project"}
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                {isRTL ? "راه‌های ارتباطی" : "Contact Information"}
              </h3>
              <p className="text-gray-300 mb-6">
                {isRTL
                  ? "اگر سوالی دارید یا نیاز به مشاوره دارید، از راه‌های زیر با ما در تماس باشید:"
                  : "If you have any questions or need consultation, contact us through:"}
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-sky-500/10 p-2 rounded-lg mr-4">
                    <FaPhone className="text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">
                      {isRTL ? "تماس تلفنی" : "Phone Call"} 
                    </h4>
                    <a
                      href="tel:+989123456789"
                      className="text-white hover:text-sky-400 transition-colors"
                    >
                      +98 912 345 6789
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-500/10 p-2 rounded-lg mr-4">
                    <FaWhatsapp className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">WhatsApp</h4>
                    <a
                      href="https://wa.me/989123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      +98 912 345 6789
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-2 rounded-lg mr-4">
                    <FaPaperPlane className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Email</h4>
                    <a
                      href="mailto:info@wavnix.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      info@wavnix.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                {isRTL ? "چرا واونیکس؟" : "Why Choose Wavnix?"}
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  {isRTL
                    ? "تیم حرفه‌ای با بیش از ۱۰ سال تجربه"
                    : "Professional team with 10+ years experience"}
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  {isRTL
                    ? "طراحی اختصاصی و منحصر به فرد"
                    : "Custom and unique designs"}
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  {isRTL
                    ? "پشتیبانی ۲۴/۷ پس از تحویل پروژه"
                    : "24/7 support after project delivery"}
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  {isRTL
                    ? "بهینه‌سازی شده برای موتورهای جستجو"
                    : "Optimized for search engines"}
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  {isRTL
                    ? "ضمانت بازگشت وجه در صورت عدم رضایت"
                    : "Money back guarantee if not satisfied"}
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SubmitProject;