export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <span className="inline-block bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium text-sm">
              Trusted Nursery in Kerala
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Premium
              <br />
              <span className="text-green-700">
                Hridya Mango Plant
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              Healthy grafted mango plants grown with care at Amma Gardens.
              Carefully packed and delivered across Kerala.
            </p>

            <h2 className="mt-8 text-5xl font-bold text-green-700">
              ₹500
            </h2>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold transition">
                Buy Now
              </button>

              <button className="border-2 border-green-700 text-green-700 hover:bg-green-100 px-8 py-4 rounded-xl font-semibold transition">
                Learn More
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <div className="w-full max-w-md aspect-square rounded-3xl bg-white shadow-xl flex flex-col items-center justify-center">

              <div className="text-7xl sm:text-8xl">
                🌳
              </div>

              <p className="mt-6 text-gray-500 text-center">
                Product Image Coming Soon
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}