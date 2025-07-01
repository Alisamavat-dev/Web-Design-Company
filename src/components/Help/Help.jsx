import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaSearch,
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
  FaExternalLinkAlt,
  FaBook,
  FaTools,
  FaRocket
} from "react-icons/fa";
import SEO from "./SEO/SEO";

const Help = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "fa";
  const [searchTerm, setSearchTerm] = useState("");
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Data moved outside component for better organization
  const content = {
    fa: {
      faqs: [
        {
          question: "چگونه می‌توانم پروژه جدیدی ثبت کنم؟",
          answer:
            "برای ثبت پروژه جدید، به بخش 'ثبت سفارش' مراجعه کرده و فرم مربوطه را پر کنید. پس از تکمیل فرم، تیم پشتیبانی ما در اسرع وقت با شما تماس خواهند گرفت.",
        },
        {
          question: "آیا امکان پیگیری آنلاین وضعیت پروژه وجود دارد؟",
          answer:
            "بله، از طریق داشبورد کاربری خود می‌توانید وضعیت لحظه‌ای پروژه را پیگیری کنید. همچنین اعلان‌های مربوط به تغییر وضعیت پروژه از طریق ایمیل و پیامک برای شما ارسال می‌شود.",
        },
        {
          question: "چگونه می‌توانم با تیم پشتیبانی در ارتباط باشم؟",
          answer:
            "شما می‌توانید از طریق فرم تماس در همین صفحه، چت آنلاین وبسایت، یا با اطلاعات تماس ارائه شده در بخش 'تماس با ما' با ما در ارتباط باشید. زمان پاسخگویی ما 24 ساعته در روزهای کاری است.",
        },
        {
          question: "روش‌های پرداخت شما چگونه است؟",
          answer:
            "ما از طریق درگاه‌های بانکی معتبر، پرداخت آنلاین را می‌پذیریم. همچنین امکان پرداخت نقدی و کارت به کارت نیز وجود دارد. برای پروژه‌های بزرگ، امکان پرداخت اقساطی نیز فراهم است.",
        },
        {
          question: "سیاست بازگشت هزینه چگونه است؟",
          answer:
            "در صورت عدم رضایت از خدمات، تا 7 روز پس از تحویل پروژه می‌توانید درخواست بازگشت هزینه دهید. مبلغ بازگشتی پس از بررسی توسط تیم فنی، به حساب شما واریز خواهد شد.",
        },
      ],
      popularArticles: [
        {
          title: "راهنمای شروع به کار با واونیکس",
          description: "با این راهنما، به سرعت با خدمات ما آشنا شوید.",
          link: "#",
          icon: <FaRocket className="text-yellow-400" />
        },
        {
          title: "بهینه‌سازی سئو برای وب‌سایت شما",
          description: "نکات کلیدی برای بهبود رتبه سایت شما در موتورهای جستجو.",
          link: "#",
          icon: <FaSearch className="text-blue-400" />
        },
        {
          title: "چگونه یک وب‌سایت واکنش‌گرا طراحی کنیم؟",
          description: "اصول طراحی ریسپانسیو و ابزارهای مورد نیاز.",
          link: "#",
          icon: <FaTools className="text-green-400" />
        },
      ],
      recentUpdates: [
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
      ],
      contactMethods: [
        {
          title: "چت آنلاین",
          description: "پاسخگویی 24 ساعته در روزهای کاری",
          icon: <FaEnvelope className="text-blue-400" />,
          action: "شروع چت",
          link: "#chat"
        },
        {
          title: "تیکت پشتیبانی",
          description: "پاسخ در کمتر از 2 ساعت کاری",
          icon: <FaBook className="text-green-400" />,
          action: "ارسال تیکت",
          link: "#ticket"
        },
        {
          title: "تماس تلفنی",
          description: "شنبه تا چهارشنبه 9 صبح تا 5 بعدازظهر",
          icon: <FaPhone className="text-purple-400" />,
          action: "تماس بگیرید",
          link: "tel:+989194565784"
        }
      ]
    },
    en: {
      faqs: [
        {
          question: "How can I submit a new project?",
          answer:
            "To submit a new project, please visit the 'Submit Project' section and fill out the form. Our support team will contact you as soon as possible after you complete the form.",
        },
        {
          question: "Is it possible to track project status online?",
          answer:
            "Yes, you can track the real-time status of your project through your user dashboard. You'll also receive email and SMS notifications about status changes.",
        },
        {
          question: "How can I contact the support team?",
          answer:
            "You can contact us via the contact form on this page, live chat on our website, or using the contact information provided in the 'Contact Us' section. Our response time is 24/7 on business days.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept online payments through secure banking gateways. Cash payments and bank transfers are also available. For large projects, installment payments can be arranged.",
        },
        {
          question: "What is your refund policy?",
          answer:
            "If you're not satisfied with our services, you can request a refund within 7 days of project delivery. After review by our technical team, the amount will be refunded to your account.",
        },
      ],
      popularArticles: [
        {
          title: "Getting Started with Wavnix",
          description: "Quick guide to understand our services.",
          link: "#",
          icon: <FaRocket className="text-yellow-400" />
        },
        {
          title: "SEO Optimization for Your Website",
          description: "Key tips to improve your website's search engine ranking.",
          link: "#",
          icon: <FaSearch className="text-blue-400" />
        },
        {
          title: "How to Design a Responsive Website?",
          description: "Principles of responsive design and necessary tools.",
          link: "#",
          icon: <FaTools className="text-green-400" />
        },
      ],
      recentUpdates: [
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
      ],
      contactMethods: [
        {
          title: "Live Chat",
          description: "24/7 response on business days",
          icon: <FaEnvelope className="text-blue-400" />,
          action: "Start Chat",
          link: "#chat"
        },
        {
          title: "Support Ticket",
          description: "Response in less than 2 business hours",
          icon: <FaBook className="text-green-400" />,
          action: "Submit Ticket",
          link: "#ticket"
        },
        {
          title: "Phone Call",
          description: "Saturday to Wednesday 9AM to 5PM",
          icon: <FaPhone className="text-purple-400" />,
          action: "Call Now",
          link: "tel:+989194565784"
        }
      ]
    }
  };

  const currentContent = content[lang] || content.en;

  // Debounce search input
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setHasSearched(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setHasSearched(false);
    }
  }, [searchTerm]);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const filteredFaqs = currentContent.faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-white py-20 px-4 sm:px-6 lg:px-8 ">
      <SEO
        title={lang === "fa" ? "مرکز راهنما | واونیکس" : "Help Center | wavnix"}
        description={
          lang === "fa"
            ? "پاسخ به سوالات متداول و راهنمای استفاده از خدمات واونیکس"
            : "Frequently asked questions and guides for using wavnix services"
        }
        keywords={
          lang === "fa"
            ? "راهنما, سوالات متداول, پشتیبانی, واونیکس, آموزش, FAQ"
            : "help, FAQ, support, wavnix, tutorial, documentation"
        }
        author={lang === "fa" ? "تیم واونیکس" : "Team wavnix"}
      />

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {lang === "fa" ? "چگونه می‌توانیم کمک کنیم؟" : "How can we help?"}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {lang === "fa" 
              ? "پاسخ سوالات خود را در مرکز راهنمای واونیکس پیدا کنید یا با تیم پشتیبانی ما در ارتباط باشید." 
              : "Find answers in the wavnix help center or contact our support team."}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder={
                lang === "fa" 
                  ? "جستجو در سوالات متداول، مقالات و راهنماها..." 
                  : "Search FAQs, articles, and guides..."
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-14 text-lg"
              dir={lang === "fa" ? "rtl" : "ltr"}
              aria-label={lang === "fa" ? "جستجو در راهنما" : "Search help center"}
            />
            <button className="absolute top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              style={lang === "fa" ? { left: "0.5rem" } : { right: "0.5rem" }}>
              <FaSearch className="text-white text-xl" />
            </button>
          </div>
          {isLoading && (
            <p className="text-center text-gray-400 mt-2">
              {lang === "fa" ? "در حال جستجو..." : "Searching..."}
            </p>
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - FAQ */}
          <div className="lg:col-span-2 space-y-8">
            {/* FAQ Section */}
            <section aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-2xl font-bold mb-6 flex items-center">
                <FaQuestionCircle className="mr-2 text-blue-400" />
                {lang === "fa" ? "سوالات متداول" : "Frequently Asked Questions"}
              </h2>
              
              {hasSearched && filteredFaqs.length === 0 ? (
                <div className="bg-slate-800 p-8 rounded-xl text-center">
                  <p className="text-gray-400 mb-4">
                    {lang === "fa" 
                      ? "نتیجه‌ای برای جستجوی شما یافت نشد." 
                      : "No results found for your search."}
                  </p>
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    {lang === "fa" ? "نمایش همه سوالات" : "Show all questions"}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {(searchTerm ? filteredFaqs : currentContent.faqs.slice(0, 5)).map((faq, index) => (
                    <div 
                      key={index}
                      className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 transition-all duration-200 hover:border-blue-500"
                    >
                      <button
                        className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeAccordion === index}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <span className="font-semibold text-lg text-slate-200">
                          {faq.question}
                        </span>
                        <span className="text-blue-400 text-xl transform transition-transform duration-200">
                          {activeAccordion === index ? '−' : '+'}
                        </span>
                      </button>
                      <div
                        id={`faq-answer-${index}`}
                        className={`px-5 pb-4 ${activeAccordion === index ? 'block' : 'hidden'}`}
                      >
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {!searchTerm && (
                <div className="mt-6 text-center">
                  <a 
                    href={lang === "fa" ? "/faq" : "/en/faq"} 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    {lang === "fa" ? "مشاهده تمام سوالات متداول" : "View all FAQs"}
                    <FaExternalLinkAlt className="mr-2 text-sm" />
                  </a>
                </div>
              )}
            </section>

            {/* Recent Updates */}
            <section aria-labelledby="updates-heading">
              <h2 id="updates-heading" className="text-2xl font-bold mb-6">
                {lang === "fa" ? "آخرین به‌روزرسانی‌ها" : "Recent Updates"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.recentUpdates.map((update, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors duration-200"
                  >
                    <p className="text-sm text-gray-400 mb-2">{update.date}</p>
                    <h3 className="font-semibold text-lg text-slate-200 mb-2">
                      {update.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {update.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Resources */}
          <div className="space-y-8">
            {/* Popular Articles */}
            <section aria-labelledby="articles-heading">
              <h2 id="articles-heading" className="text-2xl font-bold mb-6">
                {lang === "fa" ? "مقالات پرطرفدار" : "Popular Articles"}
              </h2>
              <div className="space-y-4">
                {currentContent.popularArticles.map((article, index) => (
                  <a
                    key={index}
                    href={article.link}
                    className="block bg-slate-800 hover:bg-slate-700 p-5 rounded-xl border border-slate-700 transition-colors duration-200 group"
                  >
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        {article.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-slate-200 group-hover:text-blue-400 mb-1">
                          {article.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Contact Methods */}
            <section aria-labelledby="contact-heading">
              <h2 id="contact-heading" className="text-2xl font-bold mb-6">
                {lang === "fa" ? "راه‌های ارتباطی" : "Contact Methods"}
              </h2>
              <div className="space-y-4">
                {currentContent.contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="block bg-slate-800 hover:bg-slate-700 p-5 rounded-xl border border-slate-700 transition-colors duration-200 group"
                  >
                    <div className="flex items-center">
                      <div className="mr-4">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-slate-200 group-hover:text-blue-400 mb-1">
                          {method.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-2">
                          {method.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 text-blue-400 group-hover:text-blue-300 text-sm font-medium flex items-center">
                      {method.action}
                      <FaExternalLinkAlt className="mr-2 text-xs" />
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Helpful Resources */}
            <section aria-labelledby="resources-heading">
              <h2 id="resources-heading" className="text-2xl font-bold mb-6">
                {lang === "fa" ? "منابع مفید" : "Helpful Resources"}
              </h2>
              <div className="space-y-3">
                <a href={lang === "fa" ? "/blog" : "/en/blog"} className="flex items-center text-blue-400 hover:text-blue-300">
                  <FaBook className="ml-2" />
                  {lang === "fa" ? "وبلاگ آموزشی" : "Tutorial Blog"}
                </a>
                <a href={lang === "fa" ? "/docs" : "/en/docs"} className="flex items-center text-blue-400 hover:text-blue-300">
                  <FaBook className="ml-2" />
                  {lang === "fa" ? "مستندات فنی" : "Technical Documentation"}
                </a>
                <a href={lang === "fa" ? "/community" : "/en/community"} className="flex items-center text-blue-400 hover:text-blue-300">
                  <FaBook className="ml-2" />
                  {lang === "fa" ? "انجمن کاربران" : "User Community"}
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;