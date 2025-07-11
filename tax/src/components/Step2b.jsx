import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMobileAlt } from 'react-icons/fa';

const Step2b = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [emojiShown, setEmojiShown] = useState(false);

  useEffect(() => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    setGeneratedOtp(newOtp);
    console.log('📲 OTP for testing:', newOtp);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp !== generatedOtp) {
      alert('❌ Incorrect OTP. Please try again.');
      return;
    }

    alert('✅ OTP verified successfully!');
    navigate('/step3');
  };

 
  const handleClickHere = () => {
  alert(
    "🕵️‍♂️💡 Hmm... trying to outsmart the system?\n" +
    "🤖📱 No email, no number...\n" +
    "🧠💭 Then how do you expect to get the OTP?\n" +
    "🫣😜\n\n" +
    "👉👉 JUST LOOK AT THE BROWSER CONSOLE TO GET THE OTP! 👈👈"
  );
  setEmojiShown(true);
};

  return (
    <div className="min-h-screen bg-white font-sans px-6 py-10 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-gray-50 p-10 rounded shadow-xl border">
        <p className="text-lg mb-4 text-gray-800">
          Dear <span className="text-red-600 font-semibold"><i>Responsible Citizen</i></span>, to proceed further with the Enrolment/Registration
          process you need to verify your Mobile Number.
        </p>

        <p className="text-lg mb-4 text-gray-800">
          We have sent a 6 Digit Numeric OTP on Your Mobile Number{' '}
          <span className="text-red-600 font-semibold">XXXXXX9999</span>.
        </p>

        {/* Click Here */}
        <p className="text-blue-700  text-2xl text-[16px] font-medium mb-6">
          Do you want to change the Name/Mobile Number/Email?{' '}
          <span
            className="font-bold underline cursor-pointer hover:text-blue-800"
            onClick={handleClickHere}
          >
            Click Here
            {emojiShown && <span className="ml-2 text-3xl">🧠🫣🫣</span>}
          </span>
        </p>

        {/* OTP form */}
        <form onSubmit={handleSubmit}>
          <label className="block font-medium text-lg mb-2">
            Enter the Numeric OTP received on Mobile<span className="text-red-600">*</span>
          </label>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white border px-4 py-2 rounded text-gray-700 text-xl">
              <FaMobileAlt />
            </div>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              className="w-full border px-4 py-2 rounded text-lg"
              required
            />
          </div>

          <div className="flex justify-between mt-8">
            {/* Back Button */}
            <button
              type="button"
              onClick={() => navigate('/step2')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded shadow"
            >
              ⬅️ Back
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded shadow"
            >
              🟡 Verify & Proceed Further
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2b;
