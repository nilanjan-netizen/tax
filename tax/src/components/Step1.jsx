import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    applyingAs: 'Individual',
    name: '',
    gender: 'Male',
    fatherName: '',
    pan: '',
    mobile: '',
    email: '',
    captcha: '',
  });

  const [captchaExpression, setCaptchaExpression] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState(0);

  // Generate new captcha expression and answer
  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 90) + 10;
    const b = Math.floor(Math.random() * 90) + 10;
    setCaptchaExpression(`${a} + ${b}`);
    setCaptchaAnswer(a + b);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleApplicantType = () => {
    const newType = formData.applyingAs === 'Individual' ? 'Others' : 'Individual';
    setFormData((prev) => ({ ...prev, applyingAs: newType }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, fatherName, pan, mobile, email, captcha, applyingAs } = formData;

    if (applyingAs === 'Others') {
      alert('❌ Others not eligible. Please use Individual only.');
      return;
    }

    if (!name || !fatherName || !pan || !mobile || !email) {
      alert('❌ Please fill all required fields.');
      return;
    }

    if (parseInt(captcha) !== captchaAnswer) {
      alert('❌ Wrong CAPTCHA. Please try again.');
      generateCaptcha(); // Refresh CAPTCHA
      return;
    }

    navigate('/step2');
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <div className="bg-sky-700 text-white px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-4 w-full">
   
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold tracking-wide">Welcome To The Professional Tax Portal</h1>
          <h2 className="text-3xl font-light">Commissionerate of Taxes &amp; Excise</h2>
          <h3 className="text-2xl font-extralight">Government of Tripura</h3>
        </div>
        <div className="h-full flex items-stretch">
          <img
            src="https://www.amarchitrakatha.com/wp-content/uploads/2020/11/EmblemofTripura-Thumbnail-376x272-1.jpg"
            alt="Gov Logo"
            className="h-full w-44 object-cover border border-white rounded-md"
          />
        </div>
      </div>

      <div className="p-10">
        <h2 className="text-2xl font-semibold mb-6 text-blue-700">
          Step: <span className="text-green-600">1</span> of 3
        </h2>

        <div className="mb-6">
          <p className="font-semibold text-lg">Applying as:</p>
          <div className="flex items-center gap-4 mt-2">
            <span
              onClick={() => setFormData({ ...formData, applyingAs: 'Individual' })}
              className={`cursor-pointer px-3 py-1 rounded border ${formData.applyingAs === 'Individual' ? 'bg-red-100 text-red-600 font-bold border-red-400' : 'border-gray-300'}`}
            >
              Individual
            </span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={formData.applyingAs === 'Others'}
                onChange={toggleApplicantType}
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner relative">
                <div
                  className={`absolute top-0 left-0 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ease-in-out ${formData.applyingAs === 'Others' ? 'translate-x-full' : ''}`}
                ></div>
              </div>
            </label>
            <span
              onClick={() => setFormData({ ...formData, applyingAs: 'Others' })}
              className={`cursor-pointer px-3 py-1 rounded border ${formData.applyingAs === 'Others' ? 'bg-red-100 text-red-600 font-bold border-red-400' : 'border-gray-300'}`}
            >
              Others
            </span>
          </div>
          {formData.applyingAs === 'Others' && (
            <p className="text-red-600 text-sm mt-2 font-semibold text-center">
              ❌ Others not eligible. Please select Individual only.
            </p>
          )}
        </div>

        {formData.applyingAs === 'Individual' && (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="font-semibold">Name of the Applicant<span className="text-red-600">*</span></label>
              <input name="name" onChange={handleChange} className="w-full border p-3 rounded mt-1" placeholder="Full Name" />
              <p className="text-sm text-blue-500 mt-1">
                Name must match PAN/TAN. Don’t include prefix like Mr/Ms/Dr etc.
              </p>
            </div>

            <div>
              <label className="font-semibold">Gender<span className="text-red-600">*</span></label>
              <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border p-3 rounded mt-1">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">Father's Name of the Applicant<span className="text-red-600">*</span></label>
              <input name="fatherName" onChange={handleChange} className="w-full border p-3 rounded mt-1" placeholder="Father's Name" />
              <p className="text-sm text-blue-500 mt-1">
                Please, Do not write Mr/Shri/Er/Doc etc.
              </p>
            </div>

            <div>
              <label className="font-semibold">PAN or TAN<span className="text-red-600">*</span></label>
              <input name="pan" onChange={handleChange} className="w-full border p-3 rounded mt-1" placeholder="AAAAA1111G" />
              <p className="text-sm text-blue-500 mt-1">PAN/TAN issued to you</p>
            </div>

            <div>
              <label className="font-semibold">Mobile Number<span className="text-red-600">*</span></label>
              <input name="mobile" onChange={handleChange} className="w-full border p-3 rounded mt-1" placeholder="9999999999" />
              <p className="text-sm text-blue-500 mt-1">
                Valid number without country code (+91)
              </p>
            </div>

            <div>
              <label className="font-semibold">Email<span className="text-red-600">*</span></label>
              <input name="email" type="email" onChange={handleChange} className="w-full border p-3 rounded mt-1" placeholder="test@gmail.com" />
              <p className="text-sm text-blue-500 mt-1">
                Please provide a valid email address.
              </p>
            </div>

            <div className="md:col-span-2">
              <label className="font-semibold">Prove that you are not a robot<span className="text-red-600">*</span></label>
              <div className="flex items-center mt-2 gap-3">
                <span className="px-4 py-2 border rounded bg-gray-100 font-bold text-lg">
                  {captchaExpression} =
                </span>
                <input
                  name="captcha"
                  onChange={handleChange}
                  className="w-24 border p-3 rounded"
                  placeholder="Answer"
                />
              </div>
            </div>

            <div className="md:col-span-2 flex justify-start">
              <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded shadow flex items-center gap-2">
                ⏩ Next
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Step1;
