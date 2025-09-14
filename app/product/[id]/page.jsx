"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import products from "../../../data/product"

export default function ProductDetails() {
  const params = useParams();
  const { id } = params;

  // find product by id
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto mt-20 px-6 py-12 grid md:grid-cols-2 gap-10">
      {/* Left - Product Image */}
      <div className="flex justify-center items-start">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={500}
          height={600}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Right - Product Info */}
      <div>
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

        {/* Rating */}
        <div className="flex items-center text-xl gap-2 mb-4">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < Math.floor(product.rating) ? "★" : "☆"}</span>
            ))}
          </div>
          <span className="text-gray-600">({product.rating})</span>
        </div>

        <p className="text-gray-600 mb-6">{product.description}</p>
        <p className="text-3xl font-semibold text-red-500 mb-6">
          ${product.price}
        </p>

        {/* Sizes */}
        <div className="mb-6 text-black">
          <h2 className="font-semibold mb-2">Sizes</h2>
          <div className="flex gap-3 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                className="border rounded-md px-4 py-2 hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="mb-6 text-black">
          <h2 className="font-semibold mb-2">Colors</h2>
          <div className="flex gap-3 flex-wrap">
            {product.colors.map((color) => (
              <span
                key={color}
                className="px-4 py-2 border rounded-md text-sm cursor-pointer hover:bg-gray-100"
              >
                {color}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
            Add to Cart
          </button>
          <button className="border px-6 py-3 rounded-md hover:bg-gray-100">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
