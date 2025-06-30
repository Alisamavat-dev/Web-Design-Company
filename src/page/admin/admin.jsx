import { Link, Outlet } from "react-router-dom";
import { FaPlus, FaHome, FaSignOutAlt, FaUserCog } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const ManageLayout = () => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="relative">
        <header className="sticky top-0 z-50">
          <nav className="bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-md shadow-md border-b border-gray-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-4">
                  <Link
                    to="/"
                    className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold"
                  >
                    <img
                      src="https://uploadkon.ir/uploads/fd0e01_25logo-web.png"
                      alt="logo"
                      className="h-8"
                      title="رایانیتا"
                    />
                    <span className="hidden md:block">صفحه اصلی</span>
                  </Link>
                  <div className="flex gap-2">
                    <Link
                      to="/manage"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-blue-400 hover:bg-blue-900/30 transition-all duration-300"
                    >
                      <FaHome className="text-lg" />
                      <span className="hidden md:block">داشبورد</span>
                    </Link>
                    <Link
                      to="/manage/website"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-yellow-400 hover:bg-yellow-900/30 transition-all duration-300"
                    >
                      <MdWeb className="text-lg" />
                      <span className="hidden md:block">مدیریت سایت</span>
                    </Link>
                    <Link
                      to="/manage/create"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-green-400 hover:bg-green-900/30 transition-all duration-300"
                    >
                      <FaPlus className="text-lg" />
                      <span className="hidden md:block">محصول جدید</span>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-200">
                    <FaUserCog className="text-lg" />
                    <span className="hidden md:block">مدیر سیستم</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-200 hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <FaSignOutAlt className="text-lg" />
                    <span className="hidden md:block">خروج</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </main>

        <footer className="bg-white/10 backdrop-blur-md shadow-md mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="text-center text-gray-300 text-sm">
              © پنل مدیریت واونیکس. تمامی حقوق محفوظ است.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ManageLayout;
