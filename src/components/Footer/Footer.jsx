import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import Icon from "../Icons";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { fetchFooter } from "../../api/Footer/footerApi";
const Footer = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "fa";

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["Footer", lang],
    queryFn: () => fetchFooter(lang),
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="relative">
          <AiOutlineLoading3Quarters
            size={44}
            className="animate-spin text-blue-400"
          />
          <div className="absolute inset-0 blur-xl bg-blue-500/20 animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-red-500/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-500/20">
          <p className="text-red-400">
            Error: {error?.message || "Footer data not found."}
          </p>
        </div>
      </div>
    );
  }

  const {
    logo,
    siteName,
    slogan,
    description,
    links,
    socials,
    contactInfo,
    newsletter,
    paymentMethods,
    badges,
  } = data;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-12 pb-8 sm:pt-16 sm:pb-10 mt-20 border-t border-blue-500/20 shadow-2xl">
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start gap-5">
            <div className="flex items-center gap-3">
              {logo && (
                <img
                  src={logo.src || logo}
                  alt={logo.alt || siteName}
                  title={logo.title || siteName}
                  className="w-16 h-16 rounded-xl shadow-lg border-2 border-blue-400/30 bg-white/10"
                />
              )}
              <div>
                <a
                  href="#"
                  className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
                  title="شرکت طراحی سایت"
                  aria-label="شرکت طراحی سایت"
                >
                  {siteName}
                </a>
                {slogan && <p className="text-sm text-blue-200">{slogan}</p>}
              </div>
            </div>
            {description && (
              <p className="text-slate-300 text-sm text-center md:text-right">
                {description}
              </p>
            )}

            {newsletter && (
              <div className="w-full mt-4">
                <a
                  href="#newsletter"
                  className="text-blue-300 font-medium mb-2 block"
                  title="عضویت در خبرنامه"
                  aria-label="عضویت در خبرنامه"
                >
                  {newsletter.title}
                </a>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder={newsletter.placeholder}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    {newsletter.buttonText}
                  </button>
                </form>
              </div>
            )}
          </div>

          {links && links.length > 0 && (
            <div className="flex flex-col items-center md:items-start">
              <a
                href="#quick-links"
                className="text-lg font-bold text-white mb-4 border-b border-blue-500/30 pb-2 w-full block"
                title="لینک‌های سریع"
                aria-label="لینک‌های سریع"
              >
                {lang === "fa" ? "لینک‌های سریع" : "Quick Links"}
              </a>
              <ul className="grid grid-cols-2 gap-2 w-full">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-blue-300 hover:text-purple-400 transition-colors duration-200 text-sm px-3 py-1.5 rounded-lg hover:bg-gray-700/50 block text-right"
                      title={link.label}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {contactInfo && (
            <div className="flex flex-col items-center md:items-start">
              <a
                href="#contact-us"
                className="text-lg font-bold text-white mb-4 border-b border-blue-500/30 pb-2 w-full block"
                title="تماس با ما"
                aria-label="تماس با ما"
              >
                {lang === "fa" ? "تماس با ما" : "Contact Us"}
              </a>
              <ul className="space-y-3 w-full">
                {contactInfo.address && (
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-blue-400 mt-0.5">
                      <Icon name="map-pin" size={16} />
                    </span>
                    {contactInfo.address}
                  </li>
                )}
                {contactInfo.phone && (
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-blue-400">
                      <Icon name="phone" size={16} />
                    </span>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="hover:text-blue-300"
                      title={`تماس با ${contactInfo.phone}`}
                    >
                      {contactInfo.phone}
                    </a>
                  </li>
                )}
                {contactInfo.email && (
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-blue-400">
                      <Icon name="mail" size={16} />
                    </span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-blue-300"
                      title={`ارسال ایمیل به ${contactInfo.email}`}
                    >
                      {contactInfo.email}
                    </a>
                  </li>
                )}
                {contactInfo.workingHours && (
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-blue-400">
                      <Icon name="clock" size={16} />
                    </span>
                    {contactInfo.workingHours}
                  </li>
                )}
              </ul>
            </div>
          )}

          {socials && socials.length > 0 && (
            <div className="flex flex-col items-center md:items-start">
              <a
                href="#socials"
                className="text-lg font-bold text-white mb-4 border-b border-blue-500/30 pb-2 w-full block"
                title="ما را دنبال کنید"
                aria-label="ما را دنبال کنید"
              >
                {lang === "fa" ? "ما را دنبال کنید" : "Follow Us"}
              </a>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                {socials.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 bg-gray-700 hover:bg-gradient-to-tr hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 rounded-full p-2 shadow-lg hover:scale-110 border border-gray-600 focus:ring-2 focus:ring-blue-400/40 focus:outline-none group"
                    title={
                      item.icon === "instagram"
                        ? "اینستاگرام واونیکس"
                        : item.icon === "github"
                        ? "گیت‌هاب واونیکس"
                        : item.icon === "linkedin"
                        ? "لینکدین واونیکس"
                        : item.label || item.icon
                    }
                  >
                    <span className="text-xl group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.7)] transition-all duration-300">
                      <Icon name={item.icon} />
                    </span>
                  </a>
                ))}
              </div>

              {paymentMethods && paymentMethods.length > 0 && (
                <>
                  <a
                    href="#payment-methods"
                    className="text-sm font-medium text-gray-400 mb-2 mt-4 w-full block"
                    title="روش‌های پرداخت"
                    aria-label="روش‌های پرداخت"
                  >
                    {lang === "fa" ? "روش‌های پرداخت" : "Payment Methods"}
                  </a>
                  <div className="flex flex-wrap gap-2 w-full">
                    {paymentMethods.map((method, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-700/50 rounded-lg p-2 flex items-center justify-center"
                        title={method.name}
                      >
                        <img
                          src={method.icon?.src || method.icon}
                          alt={method.icon?.alt || method.name}
                          title={method.icon?.title || method.name}
                          className="h-6 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="border-t border-gray-700 pt-6">
          {badges && badges.length > 0 && (
            <div className="flex justify-center gap-4 mb-6">
              {badges.map((badge, idx) => (
                <a
                  key={idx}
                  href={badge.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src={badge.image}
                    alt={badge.alt}
                    className="h-10 object-contain"
                  />
                </a>
              ))}
            </div>
          )}

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left text-sm text-gray-400">
              © {year} {siteName}.{" "}
              {lang === "fa" ? "تمامی حقوق محفوظ است." : "All rights reserved."}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
