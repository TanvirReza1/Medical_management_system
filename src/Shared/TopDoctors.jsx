import { FaUserMd } from "react-icons/fa";
import doctors from "../data/doctors.json";

const TopDoctors = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Our Specialists</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition"
            >
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaUserMd className="text-blue-600 text-5xl" />
                </div>
              </div>

              <h3 className="text-center mt-6 text-xl font-bold text-slate-900">
                {doctor.name}
              </h3>

              <p className="text-center text-blue-600 mt-2">
                {doctor.specialty}
              </p>

              <p className="text-center text-slate-500 mt-2">
                {doctor.experience}
              </p>

              <button className="w-full mt-6 py-3 rounded-xl bg-blue-600 text-white">
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
