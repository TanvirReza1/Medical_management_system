// src/pages/Login.jsx

import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import useAuth from "../hooks/useAuth";
import GoogleLogin from "../Components/Auth/GoogleLogin";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      await login(email, password);

      alert("Login Successful!");

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl border border-slate-200">
      <h2 className="text-4xl font-bold text-slate-900">Welcome Back 👋</h2>

      <p className="mt-2 text-slate-500">Sign in to your medical account</p>

      <form onSubmit={handleLogin} className="mt-8 space-y-5">
        {/* Email */}

        <div className="relative">
          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Password */}

        <div className="relative">
          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="password"
            name="password"
            required
            placeholder="Enter your password"
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          Login
        </button>
      </form>

      <div className="my-7 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200"></div>

        <span className="text-slate-400 text-sm">OR</span>

        <div className="h-px flex-1 bg-slate-200"></div>
      </div>

      <GoogleLogin />

      <p className="mt-8 text-center text-slate-600">
        Don't have an account?{" "}
        <Link
          to="/auth/register"
          className="font-semibold text-blue-600 hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
