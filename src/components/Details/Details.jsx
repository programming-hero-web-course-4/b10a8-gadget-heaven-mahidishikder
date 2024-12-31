import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams(); // URL থেকে id পাবে
  const [productDetails, setProductDetails] = useState(null); // প্রোডাক্ট ডেটার জন্য state

  useEffect(() => {
    fetch(`/public.json`) // JSON ফাইল লোড
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data); // পুরো ডেটা দেখুন
        const matchedProduct = data.find((item) => item.product_id === Number(id)); // product_id দিয়ে ফিল্টার
        console.log("Matched Product:", matchedProduct); // মিলে যাওয়া ডেটা
        setProductDetails(matchedProduct);
      })
      .catch((err) => console.error("Error fetching data:", err)); // ত্রুটি হ্যান্ডলিং
  }, [id]);

  // লোডিং বার্তা
  if (!productDetails) {
    return <div className="text-center text-lg font-bold mt-10">Loading product details...</div>;
  }

  // প্রোডাক্ট ডেটা দেখানো
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={productDetails.product_image}
            alt={productDetails.product_title}
            className="w-3/4 rounded-lg shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 md:pl-6">
          <h1 className="text-2xl font-bold mb-4">{productDetails.product_title}</h1>
          <p className="text-xl font-semibold text-gray-700 mb-2">
            <strong>Price:</strong> ${productDetails.price}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Description:</strong> {productDetails.description}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Category:</strong> {productDetails.category}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Brand:</strong> {productDetails.brand}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Rating:</strong> {productDetails.rating} / 5
          </p>
          <p
            className={`font-semibold mb-4 ${
              productDetails.availability ? "text-green-600" : "text-red-600"
            }`}
          >
            <strong>Availability:</strong>{" "}
            {productDetails.availability ? "In Stock" : "Out of Stock"}
          </p>
          <h3 className="font-bold text-lg mb-2">Specifications:</h3>
          <ul className="list-disc pl-5">
            {productDetails.Specification.map((spec, index) => (
              <li key={index} className="text-gray-700 mb-1">
                {spec}
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center gap-6 mt-8">
          <button className="btn bg-violet-600 text-white/90">Add To Card <span className=" text-2xl"><CiShoppingCart /></span></button>
           <img className="ring-1 p-2 ring-gray-300 shadow hover:ring-violet-700  hover:shadow-2xlxl cursor-pointer rounded-full" src="https://img.icons8.com/?size=24&id=85038&format=png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
