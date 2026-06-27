"use client";

import { useState } from "react";
import { product } from "@/data/product";

export default function ProductCard() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const total = quantity * product.price;

  return (
    <section className="bg-white py-20" id="product">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            🌟 Currently Available
          </span>

          <h2 className="text-5xl font-bold mt-6">
            {product.name}
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            {product.description}
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Product Image */}

          <div className="bg-green-50 rounded-3xl shadow-xl aspect-square flex flex-col justify-center items-center">

            <div className="text-9xl">
              🌳
            </div>

            <p className="mt-6 text-gray-500">
              Product Image Coming Soon
            </p>

          </div>

          {/* Product Details */}

          <div>

            <div className="text-yellow-500 text-2xl">
              ★★★★★
            </div>

            <h3 className="text-4xl font-bold mt-4">
              ₹{product.price}
            </h3>

            <p className="text-gray-500 mt-2">
              Price per plant
            </p>

            <div className="mt-10">

              <h4 className="font-semibold text-lg">
                Quantity
              </h4>

              <div className="flex items-center gap-4 mt-4">

                <button
                  onClick={decrease}
                  className="w-12 h-12 rounded-xl bg-gray-200 text-2xl"
                >
                  -
                </button>

                <span className="text-2xl font-bold w-10 text-center">
                  {quantity}
                </span>

                <button
                  onClick={increase}
                  className="w-12 h-12 rounded-xl bg-green-700 text-white text-2xl"
                >
                  +
                </button>

              </div>

            </div>

            <div className="mt-10">

              <p className="text-gray-500">
                Total
              </p>

              <h2 className="text-5xl font-bold text-green-700">
                ₹{total}
              </h2>

            </div>

            <button className="mt-10 w-full bg-green-700 hover:bg-green-800 transition text-white py-4 rounded-xl font-semibold text-lg">
              Buy Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}