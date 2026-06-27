export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-green-50 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-900">
            Contact Amma Gardens
          </h2>

          <p className="mt-4 text-gray-600">
            We'd love to help you choose the perfect mango plant.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold text-green-700 mb-6">
              Nursery Information
            </h3>

            <div className="space-y-5 text-lg">

              <p>
                🌿 <strong>Nursery:</strong> Amma Gardens
              </p>

              <p>
                📍 <strong>Location:</strong> Kerala
              </p>

              <p>
                🚚 <strong>Delivery:</strong> Across Kerala
              </p>

              <p>
                🌱 <strong>Current Plant:</strong> Hridya Mango Plant
              </p>

              <p>
                💰 <strong>Price:</strong> ₹500 per plant
              </p>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center">

            <h3 className="text-2xl font-bold text-green-700 mb-6">
              Get in Touch
            </h3>

            <p className="text-gray-600 mb-8">
              Phone number, WhatsApp, and Google Maps will be added before launch.
            </p>

            <button className="bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl text-lg font-semibold transition">
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}