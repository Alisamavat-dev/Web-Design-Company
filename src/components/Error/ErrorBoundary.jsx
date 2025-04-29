import { useAsyncError } from "react-router";
import React, { useState, useEffect } from "react";

const ErrorBoundary = () => {
  let error = useAsyncError();
  const [isWaving, setIsWaving] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [message, setMessage] = useState(0);

  const messages = [
    "دارم سعی می‌کنم درستش کنم... 🔧",
    "یکم دیگه صبر کن... ⏳",
    "تقریباً درست شد... 🛠️",
    "اوه اوه! سخت‌تر از چیزی بود که فکر می‌کردم! 😅",
    "کاش یه فنجون قهوه داشتم! ☕",
    "خب، این پیچ رو بچرخونم یا اون یکی رو؟ 🤔",
  ];

  useEffect(() => {
    // Wave animation
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1000);
    }, 5000);

    // Sleeping animation
    const sleepInterval = setInterval(() => {
      setIsSleeping(true);
      setTimeout(() => setIsSleeping(false), 2000);
    }, 8000);

    // Blinking animation
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000);

    // Change messages
    const messageInterval = setInterval(() => {
      setMessage((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => {
      clearInterval(waveInterval);
      clearInterval(sleepInterval);
      clearInterval(blinkInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex items-center justify-center p-4 overflow-hidden">
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            >
              {["⚡", "🔧", "⚙️", "💡", "🔌"][i % 5]}
            </div>
          ))}
        </div>

        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
          <div
            className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative text-center z-10">
          {/* Cute Robot Animation */}
          <div className="mb-12 relative">
            <div className="w-48 h-48 mx-auto">
              {/* Robot Body */}
              <div className="absolute w-36 h-40 bg-gradient-to-b from-gray-300 to-gray-400 rounded-2xl left-1/2 -translate-x-1/2 top-24 shadow-lg">
                {/* Robot Chest Light */}
                <div className="absolute w-8 h-8 bg-blue-400 rounded-full left-1/2 -translate-x-1/2 top-4 animate-pulse shadow-lg shadow-blue-400/50">
                  <div className="absolute inset-0 bg-blue-300 rounded-full animate-ping opacity-75"></div>
                </div>
                {/* Robot Pattern */}
                <div className="absolute w-24 h-1.5 bg-gray-500/50 left-1/2 -translate-x-1/2 top-16 rounded-full"></div>
                <div className="absolute w-24 h-1.5 bg-gray-500/50 left-1/2 -translate-x-1/2 top-20 rounded-full"></div>
                <div className="absolute w-24 h-1.5 bg-gray-500/50 left-1/2 -translate-x-1/2 top-24 rounded-full"></div>
              </div>

              {/* Robot Head */}
              <div
                className={`absolute w-32 h-32 bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl left-1/2 -translate-x-1/2 top-0 shadow-xl ${
                  !isSleeping ? "animate-bounce" : ""
                }`}
              >
                {/* Robot Eyes */}
                <div className="absolute w-6 h-6 bg-blue-500 rounded-full left-5 top-8 shadow-lg shadow-blue-500/50 transition-all duration-300">
                  <div
                    className={`w-2.5 h-2.5 bg-white rounded-full absolute top-1 left-1 ${
                      isBlinking ? "scale-y-0" : ""
                    } ${isSleeping ? "hidden" : ""}`}
                  ></div>
                  {isSleeping && (
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                      ×
                    </div>
                  )}
                </div>
                <div className="absolute w-6 h-6 bg-blue-500 rounded-full right-5 top-8 shadow-lg shadow-blue-500/50 transition-all duration-300">
                  <div
                    className={`w-2.5 h-2.5 bg-white rounded-full absolute top-1 left-1 ${
                      isBlinking ? "scale-y-0" : ""
                    } ${isSleeping ? "hidden" : ""}`}
                  ></div>
                  {isSleeping && (
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                      ×
                    </div>
                  )}
                </div>
                {/* Robot Mouth */}
                <div className="absolute w-16 h-2.5 bg-gray-600 rounded-lg left-1/2 -translate-x-1/2 bottom-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
                </div>
                {/* Robot Antenna */}
                <div className="absolute w-2.5 h-10 bg-gradient-to-t from-gray-400 to-gray-300 left-1/2 -translate-x-1/2 -top-8">
                  <div className="w-5 h-5 bg-red-500 rounded-full -top-3 -left-1.5 absolute animate-ping shadow-lg shadow-red-500/50"></div>
                </div>
              </div>

              {/* Robot Arms */}
              <div
                className={`absolute w-8 h-28 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full left-10 top-32 origin-top transform transition-all duration-500 ${
                  isWaving ? "-rotate-45 animate-wave" : "rotate-12"
                }`}
              >
                <div className="absolute bottom-0 w-10 h-10 bg-gray-300 rounded-full -left-1"></div>
              </div>
              <div className="absolute w-8 h-28 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full right-10 top-32 rotate-[-12deg]">
                <div className="absolute bottom-0 w-10 h-10 bg-gray-300 rounded-full -right-1"></div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl mx-4 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              اوپس! یه مشکلی پیش اومد!
              <span className="inline-block animate-bounce">🤖</span>
            </h1>
            <p className="text-blue-100 mb-8 text-xl font-light">
              {error ? error.message : messages[message]}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>یه بار دیگه تلاش کنیم!</span>
                <span className="inline-block transition-transform group-hover:rotate-180">
                  🚀
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>

          {/* Fun Message */}
          <div className="relative">
            <p className="text-blue-200 mt-8 text-lg animate-pulse font-light">
              {isSleeping
                ? "هووووم... چرت کوچولو! 😴"
                : "در حال تعمیر... شاید! 🛠️"}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes wave {
          0%,
          100% {
            transform: rotate(-45deg);
          }
          50% {
            transform: rotate(-30deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-wave {
          animation: wave 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ErrorBoundary;
