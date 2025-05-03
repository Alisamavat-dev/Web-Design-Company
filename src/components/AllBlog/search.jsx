import React from "react";

export default function Search({ searchQuery, setSearchQuery, lang }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-30">
      <div className="mb-8">
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder={
              lang === "fa" ? "جستجو در مقالات..." : "Search in blog..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 rounded-2xl border border-blue-200 bg-white/10 text-slate-700 dark:text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all pr-12"
            style={lang === "fa" ? { direction: "rtl" } : { direction: "ltr" }}
          />

        </div>
      </div>
    </div>
  );
}
