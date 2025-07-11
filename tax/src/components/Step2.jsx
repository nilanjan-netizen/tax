import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [applyingAs, setApplyingAs] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 50) + 10;
    const b = Math.floor(Math.random() * 50) + 10;
    setCaptcha(`${a} + ${b}`);
  };

  const validateCaptcha = () => {
    const [a, b] = captcha.split('+').map((val) => parseInt(val.trim()));
    return a + b === parseInt(userCaptcha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateCaptcha()) {
      alert('❌ Wrong captcha');
      return;
    }
    navigate('/step2b');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans">
     

      {/* Step Content */}
      <div className="px-10 py-8 w-full max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-blue-700">
          Step: <span className="text-green-600">2</span> of 3
        </h2>

        {/* Applicant Type */}
        <div className="mb-6">
          <label className="block font-medium mb-1 text-lg">Applying as:</label>
          <div className="flex items-center gap-6">
            <label className="text-red-600 font-semibold cursor-pointer text-lg">
              <input
                type="radio"
                name="applyingAs"
                value="Individual"
                onChange={(e) => setApplyingAs(e.target.value)}
              />{' '}
              Individual
            </label>
            <label className="text-gray-700 font-semibold cursor-pointer text-lg">
              <input
                type="radio"
                name="applyingAs"
                value="Others"
                onChange={(e) => setApplyingAs(e.target.value)}
              />{' '}
              Others
            </label>
          </div>
        </div>

        {/* Not Eligible */}
        {applyingAs === 'Individual' && (
          <div className="text-red-600 font-semibold mb-4 text-lg">
            Not eligible. Please select <span className="underline">Others</span> only.
          </div>
        )}

        {/* Form Section */}
        {applyingAs === 'Others' && (
          <form onSubmit={handleSubmit} className="bg-gray-100 p-10 rounded shadow-xl w-full">
            <h3 className="text-2xl font-semibold mb-6 text-blue-800">Business Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-medium mb-1 text-lg">
                  Name of the Establishment<span className="text-red-600">*</span>
                </label>
                <input type="text" placeholder="Applicant's Name" className="w-full border px-4 py-2 rounded" required />
                <p className="text-sm text-blue-600 mt-1">
                  Name must match with PAN/TAN. No prefix like Mr/Ms/Sri etc.
                </p>
              </div>

              <div>
                <label className="block font-medium mb-1 text-lg">
                  PAN or TAN<span className="text-red-600">*</span>
                </label>
                <input type="text" placeholder="PAN" className="w-full border px-4 py-2 rounded" required />
                <p className="text-sm text-blue-600 mt-1">PAN/TAN issued to you</p>
              </div>

              <div>
                <label className="block font-medium mb-1 text-lg">
                  Mobile Number<span className="text-red-600">*</span>
                </label>
                <input type="text" placeholder="Enter Mobile Number" className="w-full border px-4 py-2 rounded" required />
                <p className="text-sm text-blue-600 mt-1">
                  Valid Mobile Number only, without Country Code (+91).
                </p>
              </div>

              <div>
                <label className="block font-medium mb-1 text-lg">
                  Email<span className="text-red-600">*</span>
                </label>
                <input type="email" placeholder="Enter Email Address" className="w-full border px-4 py-2 rounded" required />
                <p className="text-sm text-blue-600 mt-1">Valid email required to complete enrolment.</p>
              </div>
            </div>

            {/* Captcha */}
            <div className="mt-10">
              <label className="block font-medium mb-1 text-lg">
                Prove that you are not a robot<span className="text-red-600">*</span>
              </label>
              <div className="flex items-center gap-4">
                <div className="bg-white border px-6 py-3 font-bold text-xl shadow-inner min-w-[130px] text-center">{captcha}</div>
                <input
                  type="number"
                  placeholder="Expression Result"
                  value={userCaptcha}
                  onChange={(e) => setUserCaptcha(e.target.value)}
                  className="border px-4 py-2 rounded max-w-xs w-full"
                  required
                />
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="mt-10 flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded shadow"
              >
                ⬅️ Back
              </button>
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded shadow"
              >
                ✅ Next
              </button>
            </div>
          </form>
        )}

        {msg && <p className="mt-6 text-lg font-semibold text-center text-red-600">{msg}</p>}
      </div>
    </div>
  );
};

export default Step2;
