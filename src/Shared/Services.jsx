import {
  Calendar,
  FileText,
  Users,
  CreditCard,
  Shield,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Appointment Booking",
    desc: "Book and manage appointments seamlessly.",
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    desc: "Generate and access prescriptions online.",
  },
  {
    icon: Users,
    title: "Patient Records",
    desc: "Centralized and secure patient history.",
  },
  {
    icon: Stethoscope,
    title: "Doctor Management",
    desc: "Manage schedules and doctor profiles.",
  },
  {
    icon: CreditCard,
    title: "Billing System",
    desc: "Track payments and invoices efficiently.",
  },
  {
    icon: Shield,
    title: "Data Security",
    desc: "Protected healthcare information storage.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Healthcare Services
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to run a modern healthcare facility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-600" size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-600">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
