export default function WhyChooseUs() {
  const features = [
    {
      title: "Healthy Plants",
      description: "Every plant is carefully nurtured and inspected before delivery.",
      icon: "🌱",
    },
    {
      title: "Secure Packaging",
      description: "Plants are packed safely to prevent damage during transport.",
      icon: "📦",
    },
    {
      title: "Kerala Delivery",
      description: "Fast and reliable delivery across Kerala.",
      icon: "🚚",
    },
    {
      title: "Quality Guaranteed",
      description: "We focus on healthy grafted plants with excellent growth.",
      icon: "💚",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Why Choose Amma Gardens?
        </h2>

        <p className="text-center text-gray-600 mt-4">
          We are committed to providing healthy plants and excellent customer service.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-green-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-5">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}