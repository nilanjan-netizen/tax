// src/pages/Step5.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step5 = () => {
  const [form, setForm] = useState({
    commencementDate: '2025-06-01',
    periodStanding: '0 Year 0 Month 9 Days',
    pan: 'AAAAA1111G',
    vat: '1111111111',
    cst: '1111111111',
    gst: '1111111111111',
    foreignEmployer: {
      name: '',
      address: '',
      salary: ''
    },
    multipleEmployers: true,
    additionalEmployers: [
      { name: '', address: '', salary: '' }
    ],
    engagedWith: 'Employment'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEngagedChange = (e) => {
    setForm({ ...form, engagedWith: e.target.value });
  };

  const handleEmployerChange = (index, field, value) => {
    const updatedEmployers = [...form.additionalEmployers];
    updatedEmployers[index][field] = value;
    setForm({ ...form, additionalEmployers: updatedEmployers });
  };

  const addEmployer = () => {
    setForm({
      ...form,
      additionalEmployers: [...form.additionalEmployers, { name: '', address: '', salary: '' }]
    });
  };

  const handleSubmit = () => {
    console.log("Submitted Step 5:", form);
    alert("✅ Step 5 submitted successfully!");
    navigate('/step6b');
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
            className={`flex items-center gap-3 px-4 py-2 rounded shadow-sm cursor-pointer font-semibold text-lg border ${form.engagedWith === option ? 'bg-blue-200 border-blue-600' : 'bg-gray-100 border-gray-300'}`}
          >
            <input
              type="radio"
              name="engagedWith"
              value={option}
              checked={form.engagedWith === option}
              onChange={handleEngagedChange}
              className="w-5 h-5"
            />
            {option}
          </label>
        ))}
      </div>

      <h4 className="text-blue-700 font-semibold mt-6">Furnish the Details of Employment:</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
        <div>
          <label className="font-bold">Date of Commencement*</label>
          <input type="date" name="commencementDate" value={form.commencementDate} onChange={handleChange} className="border w-full p-2 rounded" />
        </div>
        <div>
          <label className="font-bold">Period of Standing*</label>
          <input name="periodStanding" value={form.periodStanding} onChange={handleChange} className="border w-full p-2 rounded" />
        </div>
        <div>
          <label className="font-bold">PAN/TAN*</label>
          <input name="pan" value={form.pan} onChange={handleChange} className="border w-full p-2 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
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

      <h4 className="text-blue-700 mt-6">If an Employee of any Diplomatic or Consular Office, provide following details:</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
        <input name="foreignEmployer.name" placeholder="Name of the Employer" className="border w-full p-2 rounded" />
        <input name="foreignEmployer.address" placeholder="Address of the Employer" className="border w-full p-2 rounded" />
        <input name="foreignEmployer.salary" placeholder="Monthly Salary/Wages" className="border w-full p-2 rounded" />
      </div>

      <p className="mt-4 text-blue-700">Are you simultaneously engaged with more than one employer?</p>
      <div className="flex gap-4 items-center mt-2">
        <label className="flex items-center gap-2">
          <input type="radio" name="multipleEmployers" checked={!form.multipleEmployers} onChange={() => setForm({ ...form, multipleEmployers: false })} /> No
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="multipleEmployers" checked={form.multipleEmployers} onChange={() => setForm({ ...form, multipleEmployers: true })} /> Yes
        </label>
      </div>

      {form.multipleEmployers && (
        <div className="mt-4 space-y-4">
          {form.additionalEmployers.map((emp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 border p-4 rounded">
              <input value={emp.name} onChange={(e) => handleEmployerChange(idx, 'name', e.target.value)} placeholder="Name of the Employer" className="border p-2 rounded" />
              <input value={emp.address} onChange={(e) => handleEmployerChange(idx, 'address', e.target.value)} placeholder="Address of the Employer" className="border p-2 rounded" />
              <input value={emp.salary} onChange={(e) => handleEmployerChange(idx, 'salary', e.target.value)} placeholder="Monthly Salary/Wages" className="border p-2 rounded" />
            </div>
          ))}
          <button onClick={addEmployer} className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded border border-green-400">+ Add Employer</button>
        </div>
      )}

      <div className="flex justify-between mt-6">
        <button onClick={() => navigate('/step4')} className="bg-yellow-500 px-6 py-2 rounded hover:bg-yellow-600">⬅ Back</button>
        <button onClick={handleSubmit} className="bg-yellow-500 px-6 py-2 rounded hover:bg-yellow-600">Submit ✅</button>
      </div>
    </div>
  );
};

export default Step5;
