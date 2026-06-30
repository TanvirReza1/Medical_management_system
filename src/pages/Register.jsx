import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import useAuth from "../hooks/useAuth";
import GoogleLogin from "../Components/Auth/GoogleLogin";

const Register = () => {
  const { register, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 6) {
      return alert("Password must be at least 6 characters.");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match.");
    }

    try {
     await register(email, password);

      await updateUserProfile(
        name,
        `https://ui-avatars.com/api/?name=${encodeURIComponent(
          name,
        )}&background=2563eb&color=ffffff`,
      );

      alert("Account Created Successfully!");
      form.reset();

      navigate("/");
    } catch (error) {
      console.log(error.code);
      alert(error.message);
    }
  };

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl border border-slate-200">
      <h2 className="text-4xl font-bold text-slate-900">Create Account</h2>

      <p className="mt-2 text-slate-500">Join our Smart Medical Platform</p>

      <form onSubmit={handleRegister} className="mt-8 space-y-5">
        {/* Name */}

        <div className="relative">
          <User
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </div>

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
            placeholder="Email Address"
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Password */}

        <div className="relative">
          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            placeholder="Password"
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-12 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Confirm Password */}

        <div className="relative">
          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            required
            placeholder="Confirm Password"
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-12 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
          >
            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <p className="text-xs text-slate-500">
          Password must contain at least 6 characters.
        </p>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition"
        >
          Create Account
        </button>
      </form>

      <div className="my-7 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200"></div>
        <span className="text-sm text-slate-400">OR</span>
        <div className="h-px flex-1 bg-slate-200"></div>
      </div>

      <GoogleLogin />

      <p className="mt-8 text-center text-slate-600">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
