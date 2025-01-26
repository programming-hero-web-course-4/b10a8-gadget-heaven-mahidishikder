function Contact() {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Heading Section */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Have any questions or need assistance with our gadgets? We’re here to help you make the right choice!
        </p>

        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Contact Information</h2>
          <ul className="text-gray-600">
            <li>Email: <span className="font-medium">info@gadgetstore.com</span></li>
            <li>Phone: <span className="font-medium">+123 456 7890</span></li>
            <li>Address: <span className="font-medium">456 Tech Street, Silicon Valley</span></li>
          </ul>
        </div>

        {/* Product Assistance */}
        <div className="mt-8 bg-yellow-50 p-5 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-700 mb-3">
            Need Help Choosing the Right Gadget?
          </h2>
          <p className="text-gray-600">
            Our experts are available to guide you through our wide range of gadgets, ensuring you find the perfect match for your needs.
          </p>
          <button className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded transition">
            Get Expert Advice
          </button>
        </div>

        {/* Designer Promotion */}
        <div className="mt-8 bg-blue-50 p-5 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            Hire the Best Designer for Your Gadget Customization
          </h2>
          <p className="text-gray-600">
            Want to customize your gadgets? Our expert designers can help you create a unique look for your products.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition">
            Get More Info
          </button>
        </div>

        {/* Contact Form */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Your Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Your Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

