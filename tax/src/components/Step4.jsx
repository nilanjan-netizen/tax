// src/pages/Step4.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step4 = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    commencementDate: '2025-06-01',
    periodStanding: '0 Year 0 Month 9 Days',
    pan: 'AAAAA1111G',
    annualBusiness: '10000',
    avgWorkers: '10000',
    avgEmployees: '100',
    vat: '11111',
    cst: '11111',
    gst: '11111',
    engagedWith: 'Profession',
    vehicles: {
      taxis: 1,
      threeWheelers: 1,
      lightMotor: 1,
      goodVehicles: 1,
      trucks: 1,
      buses: 1
    },
    society: {
      state: true,
      district: true
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleVehicleChange = (type, value) => {
    setForm(prev => ({
      ...prev,
      vehicles: {
        ...prev.vehicles,
        [type]: value
      }
    }));
  };

  const handleEngagedChange = (value) => {
    setForm(prev => ({ ...prev, engagedWith: value }));
  };

  const handleSubmit = () => {
  console.log("Submitted:", form);
  alert("✅ Thanks to you, form submitted!");
  setFormSubmitted(true);
};

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <p className="text-blue-700 text-lg font-semibold">Step: <span className="text-green-600 font-bold">3 of 3</span></p>

      <h3 className="text-lg font-semibold text-cyan-800 underline">Other Details</h3>

<p className="mt-2 font-semibold text-gray-800">Engaged with*:</p>
<div className="flex flex-wrap gap-6 mt-2">
  {['Profession', 'Trade', 'Calling', 'Employment'].map(option => (
    <label
      key={option}
      className="flex items-center gap-3 px-4 py-2 bg-gray-100 rounded shadow-sm cursor-pointer hover:bg-blue-100 transition-all font-semibold text-lg text-gray-800 border border-gray-300"
    >
      <input
        type="radio"
        name="engagedWith"
        value={option}
        checked={form.engagedWith === option}
        onChange={(e) => handleEngagedChange(e.target.value)}
        className="w-5 h-5"
      />
      {option}
    </label>
  ))}
</div>

      <p className="font-semibold mt-4">Furnish the Details of Profession:</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="font-bold underline">Date of Commencement*</label>
          <input type="date" name="commencementDate" value={form.commencementDate} onChange={handleChange} className="border w-full p-2 rounded" />
        </div>
        <div>
          <label className="font-bold underline">Period of Standing*</label>
          <input name="periodStanding" value={form.periodStanding} onChange={handleChange} className="border w-full p-2 rounded" />
        </div>
        <div>
          <label className="font-bold underline">PAN/TAN*</label>
          <input name="pan" value={form.pan} onChange={handleChange} className="border w-full p-2 rounded" />
          <p className="text-sm text-gray-600">Permanent Income Tax Account Number</p>
        </div>
        <div>
          <label className="font-bold underline">Annual Gross Business*</label>
          <input name="annualBusiness" value={form.annualBusiness} onChange={handleChange} className="border w-full p-2 rounded" />
        </div>
        <div>
          <label className="font-bold underline">Monthly Average Number of Workers</label>
          <input name="avgWorkers" value={form.avgWorkers} onChange={handleChange} className="border w-full p-2 rounded" />
        </div>
        <div>
          <label className="font-bold underline">Monthly Average Number of Employees</label>
          <input name="avgEmployees" value={form.avgEmployees} onChange={handleChange} className="border w-full p-2 rounded" />
        </div>
      </div>

      <div className="mt-6">
        <p className="text-blue-700">If registered taxpayer under one or more from the list below, Please select:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div>
            <label className="font-bold">✔ Registered Under VAT</label>
            <input name="vat" value={form.vat} onChange={handleChange} className="border w-full p-2 rounded" />
          </div>
          <div>
            <label className="font-bold">✔ Registered Under CST</label>
            <input name="cst" value={form.cst} onChange={handleChange} className="border w-full p-2 rounded" />
          </div>
          <div>
            <label className="font-bold">✔ Registered Under GST</label>
            <input name="gst" value={form.gst} onChange={handleChange} className="border w-full p-2 rounded" />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-blue-700">If held Vehicles under the Motor Vehicles Act-1939, Please select:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
          {Object.keys(form.vehicles).map((key) => (
            <div key={key}>
              <label className="font-bold">✔ {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
              <input
                type="number"
                value={form.vehicles[key]}
                onChange={(e) => handleVehicleChange(key, e.target.value)}
                className="border w-full p-2 rounded"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-blue-700">If engaged with Co-operative Society, Please select:</p>
        <div className="flex gap-6 mt-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={form.society.state} onChange={() => setForm(prev => ({ ...prev, society: { ...prev.society, state: !prev.society.state } }))} />
            State Level Society
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={form.society.district} onChange={() => setForm(prev => ({ ...prev, society: { ...prev.society, district: !prev.society.district } }))} />
            District Level Society
          </label>
        </div>
      </div>

      <div className="flex justify-between mt-6">
  <button onClick={() => navigate('/step3')} className="bg-yellow-500 px-6 py-2 rounded hover:bg-yellow-600">⬅ Back</button>
  <button onClick={handleSubmit} className="bg-yellow-500 px-6 py-2 rounded hover:bg-yellow-600">Submit ✅</button>
</div>


    </div>
  );
};



export default Step4;
