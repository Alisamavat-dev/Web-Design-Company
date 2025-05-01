import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Baner from "../../components/Home/Baner/Baner";
import Card from "../../components/Home/Card/Card";
import SEO from "../../components/Home/SEO/SEO";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingDots = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <span className="inline-block w-6">{dots}</span>;
};

const Home = () => {
  const {
    data: homeData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["homeData"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_JSONBIN_BIN_ID}`,
        {
          headers: {
            "X-Master-Key": import.meta.env.VITE_JSONBIN_MASTER_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات");
      }

      const data = await response.json();
      return data.record;
    },
  });

  if (isPending) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animation: `twinkle ${Math.random() * 3 + 2}s infinite ${
                  Math.random() * 2
                }s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-blue-500/30 animate-[spin_4s_linear_infinite]">
              <div className="w-32 h-32 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-[spin_2s_linear_infinite]" />
            </div>

            <div className="absolute top-4 left-4 w-24 h-24 rounded-full border-4 border-purple-500/30 animate-[spin_3s_linear_infinite_reverse]">
              <div className="w-24 h-24 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-[spin_1.5s_linear_infinite_reverse]" />
            </div>

            <div className="absolute top-8 left-8 w-16 h-16 rounded-full border-4 border-pink-500/30 animate-[spin_2s_linear_infinite]">
              <div className="w-16 h-16 rounded-full border-4 border-t-pink-500 border-r-transparent border-b-transparent border-l-transparent animate-[spin_1s_linear_infinite]" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transform animate-pulse">
                <AiOutlineLoading3Quarters
                  size={24}
                  className="text-blue-400 animate-[spin_2s_linear_infinite]"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
                در حال بارگذاری
              </span>
              <LoadingDots />
            </h2>
            <p className="mt-3 text-blue-300/80 text-base font-light">
              در حال آماده‌سازی محتوا برای شما
            </p>
          </div>

          <div className="mt-8 relative">
            <div className="w-64 h-1.5 bg-gray-700/30 rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[loading_2s_ease-in-out_infinite]" />
            </div>
            <div className="absolute -top-2 left-0 w-4 h-4 bg-blue-500 rounded-full animate-[bounce_1s_infinite] shadow-lg shadow-blue-500/50" />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl max-w-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            خطا در بارگذاری اطلاعات
          </h2>
          <p className="text-gray-300">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            تلاش مجدد
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="pt-15 lg:pt-8">
        <Baner data={homeData?.baner} />
      </div>
      <div className="lg:pt-10">
        <Card data={homeData?.Services} />
      </div>
      <SEO data={homeData?.SEOHome} />
    </>
  );
};

export default Home;

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes loading {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  @keyframes twinkle {
    0%, 100% { opacity: 0; transform: scale(0.5); }
    50% { opacity: 1; transform: scale(1); }
  }
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
document.head.appendChild(styleSheet);
