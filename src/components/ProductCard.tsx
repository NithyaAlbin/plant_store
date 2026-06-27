export default function ProductCard() {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Featured Product
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Carefully grown and ready for your garden.
        </p>

        <div className="mt-16 flex justify-center">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-sm w-full hover:shadow-2xl transition">

            <div className="h-72 bg-green-100 flex items-center justify-center">
              <span className="text-8xl">🌳</span>
            </div>

            <div className="p-8">

              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                In Stock
              </span>

              <h3 className="text-3xl font-bold mt-5">
                Hridya Mango Plant
              </h3>

              <p className="text-gray-600 mt-3">
                Healthy grafted mango plant grown with care at Amma Gardens.
              </p>

              <div className="mt-5 text-yellow-500 text-xl">
                ★★★★★
              </div>

              <div className="mt-5 text-4xl font-bold text-green-700">
                ₹500
              </div>

              <button className="mt-8 w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold transition">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}