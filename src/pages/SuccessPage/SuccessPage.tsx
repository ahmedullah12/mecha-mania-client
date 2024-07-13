import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M7 12a5 5 0 1110 0 5 5 0 01-10 0z"
          ></path>
        </svg>
        <h2 className="text-2xl font-bold mb-2">Order Placed!</h2>
        <p className="mb-6">Thank you for shopping with us. Your order has been successfully placed.</p>
        <Link to="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
