const StatsSection = () => {
  const stats = [
    { number: "10K+", title: "Patients" },
    { number: "150+", title: "Doctors" },
    { number: "25K+", title: "Appointments" },
    { number: "50+", title: "Hospitals" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-2xl p-6 shadow-md text-center"
          >
            <h2 className="text-4xl font-bold text-blue-600">{stat.number}</h2>
            <p className="mt-2 text-slate-600">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
