"use client";

import { useSearchParams } from "next/navigation";
import { product } from "@/data/product";
import { useState } from "react";

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const initialQuantity = Number(searchParams.get("quantity")) || 1;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(initialQuantity);

  const total = quantity * product.price;

  return (
    <main className="min-h-screen bg-green-50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-green-700 text-center">
          Checkout
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Complete your order
        </p>

        <div className="mt-10 space-y-6">

          <div>
            <label className="font-semibold block mb-2">
              Customer Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Delivery Address
            </label>

            <textarea
              rows={4}
              placeholder="Enter your complete address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Quantity
            </label>

            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full border rounded-xl p-4"
            />
          </div>

        </div>

        <div className="mt-10 bg-green-100 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Order Summary
          </h2>

          <p>
            <strong>Product:</strong> {product.name}
          </p>

          <p className="mt-2">
            <strong>Price:</strong> ₹{product.price}
          </p>

          <p className="mt-2">
            <strong>Quantity:</strong> {quantity}
          </p>

          <hr className="my-6" />

          <h2 className="text-4xl font-bold text-green-700">
            Total: ₹{total}
          </h2>

        </div>

        <button className="w-full mt-10 bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl text-lg font-semibold transition">
          Continue to Payment
        </button>

      </div>
    </main>
  );
}