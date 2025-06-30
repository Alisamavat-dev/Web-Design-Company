import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";
import SEO from "./SEO/SEO";
import "../../index.css";

const Contact = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "fa";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormStatus({
        submitted: true,
        success: false,
        message:
          lang === "fa"
            ? "لطفاً تمام فیلدها را پر کنید."
            : "Please fill in all fields.",
      });
      return;
    }

    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message:
          lang === "fa"
            ? "پیام شما با موفقیت ارسال شد!"
            : "Your message has been sent successfully!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className={`mt-22`}>
      <SEO
        title={lang === "fa" ? "تماس با ما | واونیکس" : "Contact Us | wavnix"}
        description={
          lang === "fa"
            ? "برای هرگونه سوال یا درخواست با ما تماس بگیرید."
            : "Contact us for any inquiries or requests."
        }
        keywords={
          lang === "fa"
            ? "تماس، پشتیبانی، سوال، ارتباط, واونیکس"
            : "wavnix ,contact, support, inquiry, connect"
        }
        author={
          lang === "fa"
          ? "تیم واونیکس"
          : "Team wavnix"
        }
      />

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-blue-400">
          {lang === "fa" ? "تماس با ما" : "Contact Us"}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-800 shadow-lg border border-slate-700 transition-all duration-300 hover:shadow-xl hover:border-blue-500">
              <h2 className="text-xl font-bold mb-4 text-blue-300">
                {lang === "fa" ? "اطلاعات تماس" : "Contact Information"}
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="mt-1 text-blue-400">
                    <FaPhone className="text-xl" />
                  </div>
                  <div className="flex-1pr-5">
                    <span className="block font-semibold text-slate-200 pr-5">
                      {lang === "fa" ? "تلفن" : "Phone"}
                    </span>
                      <a
                        href="tel:+989194565784"
                        className="text-gray-300 hover:text-blue-300 transition-colors duration-200 pr-5"
                        dir="ltr"
                      >
                        +98 919 456 5784
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="mt-1 text-blue-400">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div className="flex-1 pr-5">
                    <span className="block font-semibold text-slate-200">
                      {lang === "fa" ? "ایمیل" : "Email"}
                    </span>
                    <a
                      href="mailto:alisamavat.dev@gmail.com"
                      className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
                    >
                      alisamavat.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="mt-1 text-blue-400">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div className="flex-1 pr-5">
                    <span className="block font-semibold text-slate-200">
                      {lang === "fa" ? "آدرس" : "Address"}
                    </span>
                    <p className="text-gray-300">
                      {lang === "fa"
                        ? "خیابان نمونه، شهر نمونه، کشور نمونه"
                        : "123 Sample St, Sample City, Sample Country"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="p-6 rounded-2xl bg-slate-800 shadow-lg border border-slate-700 transition-all duration-300 hover:shadow-xl hover:border-blue-500">
              <h2 className="text-xl font-bold mb-4 text-blue-300">
                {lang === "fa" ? "شبکه‌های اجتماعی" : "Social Media"}
              </h2>
              <div className="flex justify-center space-x-12">
                <a
                  href="https://github.com/alisamavat-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ali-samavat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://twitter.com/alisamavatdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <FaTwitter size={28} />
                </a>
                <a
                  href="https://t.me/alisamavat_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  aria-label="Telegram"
                >
                  <FaTelegram size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column - Map */}
          <div className="lg:col-span-1">
            <div className="h-full p-6 rounded-2xl bg-slate-800 shadow-lg border border-slate-700 transition-all duration-300 hover:shadow-xl hover:border-blue-500">
              <h2 className="text-xl font-bold mb-4 text-blue-300">
                {lang === "fa" ? "موقعیت ما" : "Our Location"}
              </h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md border border-slate-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d51.421500000000005!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00465c026d3f%3A0x6b0a6d0d0b0c0b0c!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v1678912345678!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map of our location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="h-full p-6 rounded-2xl bg-slate-800 shadow-lg border border-slate-700 transition-all duration-300 hover:shadow-xl hover:border-blue-500">
              <h2 className="text-xl font-bold mb-6 text-blue-300">
                {lang === "fa" ? "فرم تماس" : "Contact Form"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {lang === "fa" ? "نام شما" : "Your Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder={
                      lang === "fa" ? "نام کامل شما" : "Your full name"
                    }
                    dir={lang === "fa" ? "rtl" : "ltr"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {lang === "fa" ? "ایمیل شما" : "Your Email"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder={
                      lang === "fa" ? "ایمیل شما" : "Your email address"
                    }
                    dir={lang === "fa" ? "rtl" : "ltr"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {lang === "fa" ? "موضوع" : "Subject"}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder={
                      lang === "fa" ? "موضوع پیام" : "Subject of your message"
                    }
                    dir={lang === "fa" ? "rtl" : "ltr"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {lang === "fa" ? "پیام شما" : "Your Message"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder={
                      lang === "fa"
                        ? "پیام خود را اینجا بنویسید..."
                        : "Write your message here..."
                    }
                    dir={lang === "fa" ? "rtl" : "ltr"}
                  ></textarea>
                </div>

                {formStatus.submitted && (
                  <p
                    className={`text-center text-sm font-medium ${
                      formStatus.success ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {formStatus.message}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  {lang === "fa" ? "ارسال پیام" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
