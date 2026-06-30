import { Link, useNavigate } from "react-router-dom";
import { FaStethoscope } from "react-icons/fa";
import { LayoutDashboard, LogOut, User } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl">
              <FaStethoscope />
            </div>

            <div>
              <h1 className="font-bold text-xl text-slate-900">MedH</h1>
              <p className="text-xs text-slate-500">Medical Management</p>
            </div>
          </Link>

          {/* Menu */}

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link to="/doctors" className="hover:text-blue-600">
              Doctors
            </Link>

            <Link to="/appointments" className="hover:text-blue-600">
              Appointments
            </Link>

            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </div>

          {/* Right Side */}

          <div className="flex items-center gap-3">
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer avatar">
                  <div className="w-11 rounded-full ring ring-blue-500 ring-offset-2">
                    <img
                      src={
                        user.photoURL ||
                        `https://ui-avatars.com/api/?name=${
                          user.displayName || "User"
                        }&background=2563eb&color=ffffff`
                      }
                      alt="profile"
                    />
                  </div>
                </label>

                <div
                  tabIndex={0}
                  className="dropdown-content mt-4 z-[100] w-72 rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
                >
                  {/* User Info */}
                  <div className="px-5 py-4 border-b border-slate-200">
                    <h2 className="text-lg font-bold text-slate-900">
                      {user.displayName || "User"}
                    </h2>

                    <p className="text-sm text-slate-500 break-all">
                      {user.email}
                    </p>
                  </div>

                  {/* Menu */}
                  <div className="p-2">
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <LayoutDashboard size={18} />
                      Dashboard
                    </Link>

                    <Link
                      to="/profile"
                      className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <User size={18} />
                      My Profile
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 hover:bg-red-50 transition"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium hover:bg-slate-100 transition"
                >
                  Login
                </Link>

                <Link
                  to="/auth/register"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
