export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-green-100 to-green-50">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="text-center lg:text-left">

            <span className="inline-flex items-center gap-2 bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium">
              🌱 Trusted Nursery in Kerala
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Welcome to
              <br />
              <span className="text-green-700">
                Amma Gardens
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9">
              We grow healthy grafted mango plants with care and deliver them
              safely across Kerala. Every plant is selected and packed to
              ensure the best quality reaches your home.
            </p>

            <div className="mt-10">
              <button className="bg-green-700 hover:bg-green-800 transition text-white px-10 py-4 rounded-xl font-semibold shadow-lg">
                Shop Current Plant
              </button>
            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-full max-w-lg aspect-square rounded-3xl bg-white shadow-2xl flex items-center justify-center">

              <div className="text-center">

                <div className="text-9xl">
                  🌳
                </div>

                <p className="mt-6 text-gray-500 text-lg">
                  Beautiful Mango Plant Image
                  <br />
                  (We'll replace this later)
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}