import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Services from "../../Shared/Services";
import StatsSection from "../../Shared/StatsSection";
import TopDoctors from "../../Shared/TopDoctors";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Trusted Healthcare Platform
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
              {" "}
              Smart Healthcare
              <span className="text-blue-600"> Management </span>
              For Modern Clinics
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Manage appointments, doctors, prescriptions and patient records
              from one secure and centralized system.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-8 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
                Get Started
              </button>

              <button className="px-8 text-black py-4 rounded-xl border border-slate-300 hover:bg-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center items-center">
            {/* Background Blur 1 */}
            <div className="absolute w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>

            {/* Background Blur 2 */}
            <div className="absolute right-10 bottom-10 w-56 h-56 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Doctor Image */}
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700"
              alt="Doctor"
              className="
      relative
      z-10
      rounded-3xl
      shadow-2xl
      max-h-[550px]
      object-cover
      hover:scale-105
      transition-all
      duration-700
      animate-float
    "
            />
            <div className="absolute top-10 -left-8 bg-white shadow-xl rounded-2xl px-5 py-4 z-20">
              <p className="text-sm text-slate-500">Today's Appointments</p>

              <h3 className="text-2xl font-bold text-blue-600">245</h3>
            </div>
            <div className="absolute bottom-10 -right-8 bg-white shadow-xl rounded-2xl px-5 py-4 z-20">
              <p className="text-sm text-slate-500">Active Patients</p>

              <h3 className="text-2xl font-bold text-green-600">1.2K</h3>
            </div>
          </div>
        </div>
      </section>
      <StatsSection></StatsSection>
      <Services> </Services>
      <TopDoctors></TopDoctors>
      <Footer></Footer>
    </div>
  );
};

export default Home;
