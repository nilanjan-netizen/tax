import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step8 = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/step6b');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-12">
      <div className="w-11/12 bg-white border border-blue-300 rounded-2xl shadow-2xl p-12 space-y-10 font-sans text-gray-800 relative">

        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-6 left-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded text-base shadow"
        >
          ⬅ Back
        </button>

        {/* Thank You Heading */}
        <h1 className="text-3xl font-bold text-center text-green-700 mb-4">🎉 Thank You!</h1>

        {/* Acknowledgement Message */}
        <div className="text-xl leading-relaxed">
          <p>
            Dear <b>Full Name</b>,
          </p>
          <p className="mt-4">
            Thank you for submitting your application for enrolment with the <b>Profession Tax Web-Portal</b>.
          </p>
          <p className="mt-4">
            Please note down your <span className="text-blue-700 font-bold">Reference Application Number: 202516 XXX00015</span>.
          </p>
          <p className="mt-2">
            Application Number has been sent to your registered Mobile Number:{" "}
            <span className="text-green-600 font-bold">9999999999</span>.
          </p>
        </div>

        {/* Important Notes */}
        <div>
          <h2 className="text-orange-600 font-bold text-2xl mb-5">Important Notes:</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-800 leading-relaxed">
            <li>Please save the Enrolment Application Number for future references.</li>
            <li>The details furnished during enrolment are subject to verification and approval by the respective authorities.</li>
            <li>
              You may <span className="text-blue-600 underline cursor-pointer">check the status</span> of your application from the home page.
            </li>
            <li>After approval, your credentials will be sent to your registered mobile/email.</li>
            <li>You can then log in at the Profession Tax Web-Portal using your credentials.</li>
            <li>
              After login, the <b>Liable Profession Tax Amount</b> will be shown based on your enrolment data. You can pay it easily.
            </li>
            <li>For any issues, queries, or feedback, feel free to reach out via email.</li>
          </ul>
        </div>

        {/* Contact Link */}
        <div className="text-xl mt-6">
          <p className="flex items-center gap-2">
            📞 For urgent queries,&nbsp;
            <a
              href="https://wa.me/913812418059"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold underline hover:text-green-700 transition"
            >
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step8;
