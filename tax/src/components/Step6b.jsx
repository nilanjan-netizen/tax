import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Step6b = () => {
  const navigate = useNavigate();
  const [editable, setEditable] = useState(false);

  const [formData, setFormData] = useState({
    name: 'Full Name',
    gender: 'Male',
    fatherName: 'Fathers Name',
    mobile: '9999999999',
    email: 'test@gmail.com',
    pan: 'AAAAA1111G',
    businessName: 'Establishment Name',
    jurisdiction: 'Agartala',
    address: 'Establishment Address, West Tripura, 799001',
    category: 'Legal Profession',
    otherDetails: 'Other Establishment Details',
    subCategory: 'Practitioners',
    charge: 'Charge - I',
    establishmentType: 'Establishment Type',
    establishmentAddress: 'Establishment Address',
    commencement: '01 June 2025',
    standing: '0 Year 0 Month 9 Days',
    vat: '11111111111',
    cst: '11111111111',
    pan2: 'AAAAA1111G',
    gst: 'Not Provided',
    employer1Name: 'test',
    employer1Address: 'test',
    employer1Salary: '1000',
    multiple: 'Yes',
    employer2Name: 'test',
    employer2Address: 'test',
    employer2Salary: '1000',
    employer3Name: 'Not Provided',
    employer3Address: 'Not Provided',
    employer3Salary: 'Not Provided',
    employer4Name: 'Not Provided',
    employer4Address: 'Not Provided',
    employer4Salary: 'Not Provided',
  });

  const [captcha, setCaptcha] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const a = Math.floor(Math.random() * 50 + 10);
    const b = Math.floor(Math.random() * 50 + 10);
    setCaptcha(`${a} + ${b}`);
    setCaptchaAnswer((a + b).toString());
  }, []);

  const handleChange = (e) => {
    if (!editable) return;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => setEditable(true);
  const handleSave = () => {
    setEditable(false);
    alert('💾 Changes saved successfully!');
  };

  const handleSubmit = () => {
    if (!agreed) return alert('☑️ Please accept the declaration before submitting.');
    if (userCaptcha !== captchaAnswer) return alert('❌ Incorrect CAPTCHA. Try again.');
    alert('✅ Successfully Submitted!');
    navigate('/step7');
  };

  const handleBack = () => navigate('/step5');

  const renderInputGroup = (label, name) => (
    <div className="flex items-center gap-4">
      <label className="w-60 text-[1.05rem] font-medium text-gray-700">{label}:</label>
      <input
        name={name}
        value={formData[name]}
        onChange={handleChange}
        readOnly={!editable}
        className="flex-1 border rounded px-4 py-2 text-[1.05rem]"
      />
    </div>
  );

  return (
    <div className="w-[75%] mx-auto p-10 bg-white shadow-xl rounded-lg font-sans text-[1.05rem] space-y-6">
      <h1 className="text-center text-3xl text-red-600 font-semibold">Review Information</h1>
      <p className="text-center text-xl text-gray-600">
        Applying as <span className="font-semibold">Individual</span>
      </p>

      {/* Personal / Business Info */}
      <section className="border rounded">
        <div className="bg-blue-50 px-4 py-3 font-semibold text-blue-700 text-lg">
          Personal / Business Information
        </div>
        <div className="grid grid-cols-2 gap-6 p-6">
          {renderInputGroup("Name", "name")}
          {renderInputGroup("Gender", "gender")}
          {renderInputGroup("Father's Name", "fatherName")}
          {renderInputGroup("PAN/TAN", "pan")}
          {renderInputGroup("Mobile", "mobile")}
          {renderInputGroup("Email", "email")}
        </div>
      </section>

      {/* Establishment Info */}
      <section className="border rounded">
        <div className="bg-blue-50 px-4 py-3 font-semibold text-blue-700 text-lg">
          Establishment Information
        </div>
        <div className="grid grid-cols-2 gap-6 p-6">
          {renderInputGroup("Business Name", "businessName")}
          {renderInputGroup("Area of Jurisdiction", "jurisdiction")}
          {renderInputGroup("Address", "address")}
          {renderInputGroup("Category", "category")}
          {renderInputGroup("Other Details", "otherDetails")}
          {renderInputGroup("Sub Category", "subCategory")}
          {renderInputGroup("Charge", "charge")}
          {renderInputGroup("Name", "establishmentType")}
          {renderInputGroup("Address", "establishmentAddress")}
        </div>
      </section>

      {/* Other Details */}
      <section className="border rounded">
        <div className="bg-blue-50 px-4 py-3 font-semibold text-blue-700 text-lg">
          Other Details
        </div>
        <div className="grid grid-cols-2 gap-6 p-6">
          {renderInputGroup("Date of Commencement", "commencement")}
          {renderInputGroup("Period of Standing", "standing")}
          {renderInputGroup("Registered under VAT", "vat")}
          {renderInputGroup("Registered under CST", "cst")}
          {renderInputGroup("PAN", "pan2")}
          {renderInputGroup("Registered under GST", "gst")}
        </div>
      </section>

      {/* Employment Details */}
      <section className="border rounded">
        <div className="bg-green-50 px-4 py-3 font-semibold text-green-700 text-lg">
          Employment Details
        </div>
        <div className="grid grid-cols-2 gap-6 p-6">
          {renderInputGroup("Employer Name", "employer1Name")}
          {renderInputGroup("Employer Address", "employer1Address")}
          {renderInputGroup("Applicant Salary", "employer1Salary")}
          {renderInputGroup("Simultaneously employed in more than one", "multiple")}
          {renderInputGroup("Employer Name", "employer2Name")}
          {renderInputGroup("Employer Address", "employer2Address")}
          {renderInputGroup("Applicant Salary", "employer2Salary")}
          {renderInputGroup("Employer Name", "employer3Name")}
          {renderInputGroup("Employer Address", "employer3Address")}
          {renderInputGroup("Applicant Salary", "employer3Salary")}
          {renderInputGroup("Employer Name", "employer4Name")}
          {renderInputGroup("Employer Address", "employer4Address")}
          {renderInputGroup("Applicant Salary", "employer4Salary")}
        </div>
      </section>

      {/* Declaration */}
      <div className="text-[1.05rem] text-red-600">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1"
          />
          <span>
            I hereby declare that the details furnished above are true and correct to the best of my knowledge and belief and I undertake to inform you of any changes therein, immediately...
          </span>
        </label>
      </div>

      {/* CAPTCHA */}
      <div className="space-y-2">
        <p className="font-semibold text-gray-700">🤖 Prove that you are human</p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="text-xl font-bold bg-gray-100 px-5 py-3 rounded">{captcha}</div>
          <input
            type="text"
            placeholder="Expression Result"
            value={userCaptcha}
            onChange={(e) => setUserCaptcha(e.target.value)}
            className="border px-4 py-3 rounded w-48 text-[1.05rem]"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-4">
        <button
          onClick={handleBack}
          className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded font-semibold text-[1.05rem]"
        >
          🔙 Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-yellow-400 hover:bg-yellow-500 px-8 py-3 rounded font-semibold text-[1.05rem]"
        >
          Submit
        </button>
        {!editable ? (
          <button
            onClick={handleEdit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded font-semibold text-[1.05rem]"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded font-semibold text-[1.05rem]"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default Step6b;
