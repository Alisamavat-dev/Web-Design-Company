import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaSearch,
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import SEO from "./SEO/SEO";

const Help = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "fa";
  const [searchTerm, setSearchTerm] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

  const faqs = [
    {
      question: "چگونه می‌توانم پروژه جدیدی ثبت کنم؟",
      answer:
        "برای ثبت پروژه جدید، به بخش 'ثبت سفارش' مراجعه کرده و فرم مربوطه را پر کنید.",
    },
    {
      question: "آیا امکان پیگیری آنلاین وضعیت پروژه وجود دارد؟",
      answer:
        "بله، از طریق داشبورد کاربری خود می‌توانید وضعیت لحظه‌ای پروژه را پیگیری کنید.",
    },
    {
      question: "چگونه می‌توانم با تیم پشتیبانی در ارتباط باشم؟",
      answer:
        "شما می‌توانید از طریق فرم تماس در همین صفحه یا با اطلاعات تماس ارائه شده در بخش 'تماس با ما' با ما در ارتباط باشید.",
    },
  ];

  const faqsEn = [
    {
      question: "How can I submit a new project?",
      answer:
        "To submit a new project, please visit the 'Submit Project' section and fill out the form.",
    },
    {
      question: "Is it possible to track project status online?",
      answer:
        "Yes, you can track the real-time status of your project through your user dashboard.",
    },
    {
      question: "How can I contact the support team?",
      answer:
        "You can contact us via the contact form on this page or using the contact information provided in the 'Contact Us' section.",
    },
  ];

  const popularArticles = [
    {
      title: "راهنمای شروع به کار با واونیکس",
      description: "با این راهنما، به سرعت با خدمات ما آشنا شوید.",
      link: "#",
    },
    {
      title: "بهینه‌سازی سئو برای وب‌سایت شما",
      description: "نکات کلیدی برای بهبود رتبه سایت شما در موتورهای جستجو.",
      link: "#",
    },
    {
      title: "چگونه یک وب‌سایت واکنش‌گرا طراحی کنیم؟",
      description: "اصول طراحی ریسپانسیو و ابزارهای مورد نیاز.",
      link: "#",
    },
  ];

  const popularArticlesEn = [
    {
      title: "Getting Started with Wavnix",
      description: "Quick guide to understand our services.",
      link: "#",
    },
    {
      title: "SEO Optimization for Your Website",
      description: "Key tips to improve your website's search engine ranking.",
      link: "#",
    },
    {
      title: "How to Design a Responsive Website?",
      description: "Principles of responsive design and necessary tools.",
      link: "#",
    },
  ];

  const recentUpdates = [
    {
      date: "۱۴۰۲/۱۰/۱۵",
      title: "ویژگی جدید: سیستم پیگیری پروژه",
      description:
        "امکان پیگیری وضعیت لحظه‌ای پروژه‌ها از طریق داشبورد اضافه شد.",
    },
    {
      date: "۱۴۰۲/۰۹/۰۱",
      title: "بهبود عملکرد وب‌سایت",
      description: "سرعت بارگذاری صفحات و بهینه‌سازی کلی سایت.",
    },
  ];

  const recentUpdatesEn = [
    {
      date: "2024-01-05",
      title: "New Feature: Project Tracking System",
      description:
        "Added the ability to track real-time project status through the dashboard.",
    },
    {
      date: "2023-12-22",
      title: "Website Performance Improvement",
      description:
        "Page loading speed and overall website optimization improved.",
    },
  ];

  const filteredFaqs = (lang === "fa" ? faqs : faqsEn).filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-white py-28 px-4 sm:px-6 lg:px-8">
      <SEO
        title={lang === "fa" ? "مرکز راهنما | واونیکس" : "Help Center | wavnix"}
        description={
          lang === "fa"
            ? "پاسخ به سوالات متداول و راهنمای استفاده از خدمات واونیکس"
            : "Frequently asked questions and guides for using wavnix services"
        }
        keywords={
          lang === "fa"
            ? "راهنما، سوالات متداول، پشتیبانی، واونیکس"
            : "help, FAQ, support, wavnix"
        }
        author={lang === "fa" ? "تیم واونیکس" : "Team wavnix"}
      />

      <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl shadow-xl border border-slate-700 p-8 transition-all duration-300 hover:shadow-2xl hover:border-blue-600">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-blue-400">
          {lang === "fa" ? "مرکز راهنما" : "Help Center"}
        </h1>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder={
              lang === "fa" ? "جستجو در سوالات متداول..." : "Search FAQs..."
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-12"
            dir={lang === "fa" ? "rtl" : "ltr"}
          />
          <FaSearch
            className="absolute top-1/2 -translate-y-1/2 text-gray-400 text-xl"
            style={lang === "fa" ? { right: "1rem" } : { left: "1rem" }}
          />
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">
            {lang === "fa" ? "سوالات متداول" : "Frequently Asked Questions"}
          </h2>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-700 p-6 rounded-lg shadow-md border border-slate-600 transition-all duration-300 hover:shadow-lg hover:border-blue-500"
              >
                <h3 className="font-semibold text-xl text-slate-200 mb-2 flex items-center">
                  <FaQuestionCircle className="text-blue-400 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">
              {lang === "fa" ? "موردی یافت نشد." : "No results found."}
            </p>
          )}
        </div>

        {/* Recent Updates Section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">
            {lang === "fa" ? "آخرین به‌روزرسانی‌ها" : "Recent Updates"}
          </h2>
          {(lang === "fa" ? recentUpdates : recentUpdatesEn).map(
            (update, index) => (
              <div
                key={index}
                className="bg-slate-700 p-6 rounded-lg shadow-md border border-slate-600 transition-all duration-300 hover:shadow-lg hover:border-blue-500"
              >
                <p className="text-sm text-gray-400 mb-1">{update.date}</p>
                <h3 className="font-semibold text-xl text-slate-200 mb-2">
                  {update.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {update.description}
                </p>
              </div>
            )
          )}
        </div>

        {/* Related Topics Section */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">
            {lang === "fa" ? "موضوعات مرتبط" : "Related Topics"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[]
              .concat(
                lang === "fa"
                  ? [
                      { title: "وبلاگ", link: "/blog" },
                      { title: "تماس با ما", link: "/contact" },
                    ]
                  : [
                      { title: "Blog", link: "/blog" },
                      { title: "Contact Us", link: "/contact" },
                    ]
              )
              .map((topic, index) => (
                <a
                  key={index}
                  href={topic.link}
                  className="flex items-center justify-center p-4 bg-slate-700 rounded-lg shadow-md border border-slate-600 text-white font-semibold hover:bg-blue-600 transition-colors duration-200"
                >
                  {topic.title}
                </a>
              ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-800 shadow-lg border border-slate-700 transition-all duration-300 hover:shadow-xl hover:border-blue-500 text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">
            {lang === "fa" ? "نیاز به کمک بیشتر دارید؟" : "Need More Help?"}
          </h2>
          <p className="text-gray-300 mb-6">
            {lang === "fa"
              ? "اگر سوالی دارید که در لیست بالا پیدا نکردید، از طریق راه‌های زیر با ما در ارتباط باشید:"
              : "If you have a question not listed above, please contact us through the following methods:"}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 sm:space-x-reverse">
            <a
              href="mailto:alisamavat.dev@gmail.com"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 space-x-reverse"
            >
              <FaEnvelope className="ml-2" />
              <span>{lang === "fa" ? "ارسال ایمیل" : "Send Email"}</span>
            </a>
            <a
              href="tel:+989194565784"
              className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2 space-x-reverse"
            >
              <FaPhone className="ml-2" />
              <span>{lang === "fa" ? "تماس تلفنی" : "Call Us"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;