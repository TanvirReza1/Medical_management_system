// src/components/Auth/AuthLayout.jsx

import { Outlet } from "react-router-dom";
import { HeartPulse, ShieldCheck, Users } from "lucide-react";

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side */}
      <div className="hidden lg:flex flex-col justify-center bg-blue-600 text-white p-16">
        <h1 className="text-5xl font-bold leading-tight">
          Smart Medical
          <br />
          Management System
        </h1>

        <p className="mt-6 text-blue-100 text-lg">
          Securely manage appointments, doctors, patients and prescriptions from
          one platform.
        </p>

        <div className="mt-12 space-y-6">
          <div className="flex items-center gap-4">
            <ShieldCheck size={28} />
            <span>Secure Patient Records</span>
          </div>

          <div className="flex items-center gap-4">
            <Users size={28} />
            <span>Multi Role Access Control</span>
          </div>

          <div className="flex items-center gap-4">
            <HeartPulse size={28} />
            <span>Healthcare Analytics</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center bg-slate-50 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
