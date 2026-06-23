import { Link } from "react-router-dom";
import { FaStethoscope } from "react-icons/fa";

const Navbar = () => {
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
            <Link
              to="/"
              className="text-slate-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/doctors"
              className="text-slate-700 hover:text-blue-600 transition"
            >
              Doctors
            </Link>

            <Link
              to="/appointments"
              className="text-slate-700 hover:text-blue-600 transition"
            >
              Appointments
            </Link>

            <Link
              to="/about"
              className="text-slate-700 hover:text-blue-600 transition"
            >
              About
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg shadow-blue-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
