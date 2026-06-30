import { ShieldCheck, Clock3, HeartPulse, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Medical Records",
    desc: "Protected patient information with enterprise-grade security.",
  },
  {
    icon: Clock3,
    title: "24/7 Availability",
    desc: "Access healthcare services anytime and anywhere.",
  },
  {
    icon: HeartPulse,
    title: "Quality Care",
    desc: "Experienced healthcare professionals dedicated to patients.",
  },
  {
    icon: Users,
    title: "Patient Centered",
    desc: "Designed to improve patient experience and satisfaction.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose MedH?
          </h2>

          <p className="mt-4 text-slate-600">
            Modern healthcare management built for hospitals and clinics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
