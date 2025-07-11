import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step7 = () => {
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [valid, setValid] = useState(true);
  const [timer, setTimer] = useState(15);
  const navigate = useNavigate();

  const generateOtp = () => {
    const newOtp = Math.floor(10000 + Math.random() * 90000).toString();
    setGeneratedOtp(newOtp);
    setValid(true);
    setTimer(25);
    console.clear();
    console.log('%cGenerated OTP: ' + newOtp, 'color: green; font-weight: bold;');
  };

  useEffect(() => {
    generateOtp();
  }, []);

  useEffect(() => {
    if (!valid) return;
    if (timer === 0) {
      setValid(false);
      return;
    }
    const interval = setTimeout(() => setTimer(prev => prev - 1), 1000);
    return () => clearTimeout(interval);
  }, [timer, valid]);

  const handleSubmit = () => {
    if (!valid) {
      alert('❌ OTP expired. Please resend.');
    } else if (otp === generatedOtp) {
      alert('✅ OTP Verified Successfully!');
      navigate('/step8');
    } else {
      alert('❌ Invalid OTP.');
    }
  };

  const handleResend = () => {
    generateOtp();
    setOtp('');
  };

  const handleBack = () => {
    navigate('/step6b');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 border-2 border-blue-600 rounded-xl bg-blue-50 shadow-lg font-sans">
        <p className="text-gray-700 text-base mb-6">
          We have sent an OTP on your Mobile Number{' '}
          <span className="text-green-600 font-bold">XXXXXXX789</span>.<br />
          You must enter the OTP to finally submit the Enrolment Form.
        </p>

        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            value={otp}
            maxLength="5"
            onChange={(e) => setOtp(e.target.value)}
            className="border border-gray-400 rounded px-4 py-2 w-32 text-center text-xl"
            placeholder="Enter OTP"
          />
          <button
            onClick={handleSubmit}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded flex items-center gap-2 text-lg"
          >
            ✅ Submit
          </button>
        </div>

        <p className="text-sm text-gray-700 mb-4">
          {valid ? (
            <>
              If you don't receive OTP in{' '}
              <span className="text-red-600 font-medium">0 Min {timer} Sec</span>, you may click on Resend Button.
            </>
          ) : (
            <span className="text-red-600 font-medium">OTP expired. Please click Resend Button.</span>
          )}
        </p>

        {/* Button Row */}
        <div className="flex justify-start gap-4 mt-6">
          <button
            onClick={handleBack}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded text-lg"
          >
            ⬅️ Back
          </button>
          <button
            onClick={handleResend}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded text-lg"
          >
            🔁 Resend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step7;
