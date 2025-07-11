import React, { useState } from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const setupCaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
        size: 'invisible',
        callback: (response) => {
          console.log("Recaptcha Resolved");
        },
        'expired-callback': () => {
          console.log("Recaptcha expired. Please try again.");
        }
      }, auth);

      window.recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
      });
    }
  };

  const sendOTP = async () => {
    console.log("Send OTP clicked:", phone);

    if (!phone || !phone.startsWith('+91') || phone.length !== 13) {
      setMsg('❌ Please enter a valid Indian number in +91XXXXXXXXXX format');
      return;
    }

    setupCaptcha();

    try {
      const result = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirm(result);
      setMsg(`✅ OTP sent to ${phone}`);
    } catch (error) {
      console.error("Error sending OTP:", error);
      setMsg('❌ OTP sending failed: ' + error.message);
    }
  };

  const verifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      setMsg('❌ Please enter a valid 6-digit OTP');
      return;
    }

    try {
      await confirm.confirm(otp);
      setMsg('✅ OTP Verified!');
      navigate('/dashboard');
    } catch (error) {
      console.error("Invalid OTP:", error);
      setMsg('❌ Invalid OTP');
    }
  };

  const maskedPhone = phone ? 'XXXXXX' + phone.slice(-4) : 'XXXXXX9999';

  return (
    <div className="p-6 max-w-xl mx-auto font-sans text-gray-800">
      <h3 className="text-lg mb-3">
        Dear <span className="text-red-600 font-semibold">Full Name</span>, To proceed further with the Enrolment/Registration process you need to verify Your Mobile Number.
      </h3>

      {confirm ? (
        <>
          <p className="mb-2">
            We have sent a 6 Digit Numeric OTP on Your Mobile Number{' '}
            <span className="text-red-600 font-semibold">{maskedPhone}</span>.
          </p>
          <p className="text-sm mb-4">
            Do you want to change the Name/Mobile Number/Email?{' '}
            <span className="text-blue-600 underline cursor-pointer" onClick={() => window.location.reload()}>Click Here</span>
          </p>

          <label className="block text-sm font-semibold mb-1">
            Enter the Numeric OTP received on Mobile<span className="text-red-600">*</span>
          </label>

          <div className="flex items-center border rounded px-3 py-2 max-w-sm mb-4">
            <FaMobileAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="outline-none w-full"
              placeholder="Enter OTP"
            />
          </div>

          <button
            onClick={verifyOTP}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded shadow"
          >
            ✅ Verify & Proceed Further
          </button>
        </>
      ) : (
        <>
          <label className="block mb-2">Enter Your Mobile Number (with +91)</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border rounded px-4 py-2 mb-4 w-full"
            placeholder="+91XXXXXXXXXX"
          />
          <button
            onClick={sendOTP}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
          >
            Send OTP
          </button>
        </>
      )}

      <div id="recaptcha" className="mt-4"></div>
      <p className="mt-3 text-green-700">{msg}</p>
    </div>
  );
};

export default Step2;
