import React from "react";

function Statistics() {
  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">Gadget Heaven Statistics</h1>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Products Sold */}
          <div className="bg-white shadow-lg p-6 rounded-2xl text-center">
            <h2 className="text-xl font-semibold">Total Products Sold</h2>
            <p className="text-4xl font-bold text-blue-500 mt-2">12,345</p>
          </div>

          {/* Customer Reviews */}
          <div className="bg-white shadow-lg p-6 rounded-2xl text-center">
            <h2 className="text-xl font-semibold">Customer Reviews</h2>
            <p className="text-4xl font-bold text-green-500 mt-2">4,678</p>
          </div>

          {/* Top Rated Product */}
          <div className="bg-white shadow-lg p-6 rounded-2xl text-center">
            <h2 className="text-xl font-semibold">Top Rated Product</h2>
            <p className="text-2xl font-bold text-gray-700 mt-2">Gadget X Pro</p>
            <p className="text-yellow-500 text-lg mt-1">★★★★★</p>
          </div>
        </div>

        {/* Detailed Info Section */}
        <div className="mt-10 bg-white shadow-lg p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Detailed Information</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Gadget Heaven's statistics page. Here, you'll find key metrics about our performance,
            including the total number of products sold, the feedback from our satisfied customers, and insights
            into our top-rated gadgets. Our flagship product, <strong>Gadget X Pro</strong>, has been a customer favorite,
            consistently receiving 5-star ratings. Stay tuned for updates as we continue to innovate and deliver
            the best tech solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
