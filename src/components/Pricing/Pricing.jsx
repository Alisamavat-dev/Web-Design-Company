import React from "react";
import { useTranslation } from "react-i18next";
import { FaCheck, FaStar, FaRocket, FaRegLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import SEO from "./SEO/SEO";

const Pricing = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "fa";
  const isRTL = lang === "fa";

  const pricingPlans = [
    {
      id: 1,
      name: isRTL ? "پایه" : "Basic",
      price: isRTL ? "۲,۹۹۰,۰۰۰" : "$299",
      duration: isRTL ? "تومان / ماه" : "/month",
      description: isRTL
        ? "مناسب برای کسب‌وکارهای نوپا و استارتاپ‌ها"
        : "Perfect for startups and small businesses",
      features: [
        isRTL ? "طراحی ۵ صفحه" : "5 Page Design",
        isRTL ? "هاستینگ رایگان ۱ سال" : "1 Year Free Hosting",
        isRTL ? "پشتیبانی ۳ ماهه" : "3 Months Support",
        isRTL ? "سئوی پایه" : "Basic SEO",
      ],
      recommended: false,
      icon: <FaRegLightbulb className="text-yellow-400" />,
    },
    {
      id: 2,
      name: isRTL ? "حرفه‌ای" : "Professional",
      price: isRTL ? "۵,۹۹۰,۰۰۰" : "$599",
      duration: isRTL ? "تومان / ماه" : "/month",
      description: isRTL
        ? "مناسب برای کسب‌وکارهای در حال رشد"
        : "Ideal for growing businesses",
      features: [
        isRTL ? "طراحی ۱۵ صفحه" : "15 Page Design",
        isRTL ? "هاستینگ رایگان ۲ سال" : "2 Years Free Hosting",
        isRTL ? "پشتیبانی ۶ ماهه" : "6 Months Support",
        isRTL ? "سئوی پیشرفته" : "Advanced SEO",
        isRTL ? "سیستم مدیریت محتوا" : "Content Management System",
      ],
      recommended: true,
      icon: <FaRocket className="text-blue-400" />,
    },
    {
      id: 3,
      name: isRTL ? "اختصاصی" : "Enterprise",
      price: isRTL ? "۹,۹۹۰,۰۰۰" : "$999",
      duration: isRTL ? "تومان / ماه" : "/month",
      description: isRTL
        ? "راهکارهای سفارشی برای سازمان‌ها"
        : "Custom solutions for organizations",
      features: [
        isRTL ? "طراحی نامحدود صفحات" : "Unlimited Pages",
        isRTL ? "هاستینگ رایگان ۳ سال" : "3 Years Free Hosting",
        isRTL ? "پشتیبانی ۱۲ ماهه" : "12 Months Support",
        isRTL ? "سئوی حرفه‌ای" : "Professional SEO",
        isRTL ? "سیستم مدیریت محتوای سفارشی" : "Custom CMS",
        isRTL ? "تحلیل رفتار کاربران" : "User Behavior Analytics",
      ],
      recommended: false,
      icon: <FaStar className="text-purple-400" />,
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

  return (
    <div className="py-20">
      <SEO
        title={isRTL ? "تعرفه خدمات | واونیکس" : "Pricing | wavnix"}
        description={
          isRTL
            ? "تعرفه خدمات طراحی و توسعه وبسایت شرکت واونیکس"
            : "Website design and development pricing plans from wavnix"
        }
        keywords={
          isRTL
            ? "تعرفه, قیمت, طراحی سایت, هزینه طراحی وبسایت"
            : "pricing, web design cost, website development price"
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
            {isRTL ? "تعرفه خدمات" : "Pricing Plans"}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {isRTL
              ? "پلن‌های قیمت‌گذاری انعطاف‌پذیر برای نیازهای مختلف کسب‌وکار شما"
              : "Flexible pricing plans for your business needs"}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`relative rounded-xl overflow-hidden border-2 ${
                plan.recommended
                  ? "border-sky-500 shadow-lg shadow-sky-500/20 transform md:-translate-y-4"
                  : "border-slate-700"
              } bg-slate-800`}
              whileHover={{ scale: 1.02 }}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-sky-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  {isRTL ? "پیشنهاد ویژه" : "Recommended"}
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{plan.icon}</div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400"> {plan.duration}</span>
                </div>

                <p className="text-gray-300 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0 ml-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.recommended
                      ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700"
                      : "bg-slate-700 text-white hover:bg-slate-600"
                  }`}
                >
                  {isRTL ? "شروع پروژه" : "Get Started"}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-slate-800 rounded-xl border border-slate-700 p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {isRTL ? "سوالات متداول" : "Frequently Asked Questions"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-white mb-2">
                {isRTL
                  ? "آیا امکان پرداخت اقساطی وجود دارد؟"
                  : "Do you offer payment plans?"}
              </h4>
              <p className="text-gray-300">
                {isRTL
                  ? "بله، برای پروژه‌های بالای ۱۰ میلیون تومان امکان پرداخت در ۲ یا ۳ قسط وجود دارد."
                  : "Yes, we offer 2 or 3 installment payments for projects over $1000."}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-2">
                {isRTL
                  ? "مدت زمان تحویل پروژه چقدر است؟"
                  : "What's the project delivery time?"}
              </h4>
              <p className="text-gray-300">
                {isRTL
                  ? "مدت زمان تحویل بسته به نوع پروژه بین ۲ تا ۸ هفته متغیر است."
                  : "Delivery time varies from 2 to 8 weeks depending on project type."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;