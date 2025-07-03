import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
        HELLO, WELCOME TO THE TAX PORTAL
      </h1>

      <button
        onClick={() => navigate('/step3')}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go to Step 3 ➡
      </button>
    </div>
  );
};

export default Home;
