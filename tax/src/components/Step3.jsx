import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step3 = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    establishmentName: '',
    jurisdiction: 'Agartala',
    charge: 'Charge - I',
    district: 'West Tripura',
    pinCode: '799001',
    address: '',
    additionalName: '',
    additionalAddress: '',
    category: 'Legal Profession',
    subCategory: 'Practitioners'
  });

  const [extraFields, setExtraFields] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const addExtraField = () => {
    if (extraFields.length < 5) {
      setExtraFields([...extraFields, { id: Date.now(), type: '', value: '' }]);
    }
  };

  const handleExtraFieldChange = (id, field, value) => {
    setExtraFields(prev =>
      prev.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleBack = () => {
    navigate('/step2');
  };

  const handleNext = () => {
    navigate('/step4');
  };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <p className="text-blue-700 text-lg font-semibold">Step: <span className="text-green-600 font-bold">2 of 3</span></p>

      <h2 className="text-xl font-semibold text-cyan-800 border-b pb-2">Establishment Information</h2>

      <p className="text-sm text-red-600">[Note: You may be engaged with any one or multiple among Profession/Trade/Calling/Employment, but here you need to furnish the details of only one among Profession/Trade/Calling/Employment from which you have the maximum earning.]</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="font-bold underline">Name of Establishment (Profession/Trade/Calling/Employment)*</label>
          <input name="establishmentName" onChange={handleChange} value={form.establishmentName} className="border w-full p-2 rounded mt-1" />
        </div>

        <div>
          <label className="font-bold underline">Area of Jurisdiction*</label>
          <select name="jurisdiction" onChange={handleChange} value={form.jurisdiction} className="border w-full p-2 rounded mt-1">
            <option>Agartala</option>
            <option>Udaipur</option>
            <option>Kailashahar</option>
            <option>Dharmanagar</option>
          </select>
        </div>

        <div>
          <label className="font-bold underline">Charge*</label>
          <select name="charge" onChange={handleChange} value={form.charge} className="border w-full p-2 rounded mt-1">
            <option>Charge - I</option>
            <option>Charge - II</option>
            <option>Charge - III</option>
          </select>
        </div>

        <div>
          <label className="font-bold underline">District*</label>
          <select name="district" onChange={handleChange} value={form.district} className="border w-full p-2 rounded mt-1">
            <option>West Tripura</option>
            <option>Sepahijala</option>
            <option>Khowai</option>
            <option>Gomati</option>
            <option>Dhalai</option>
            <option>Unakoti</option>
            <option>North Tripura</option>
            <option>South Tripura</option>
          </select>
        </div>

        <div>
          <label className="font-bold underline text-red-700">PIN Code*</label>
          <input name="pinCode" onChange={handleChange} value={form.pinCode} className="border w-full p-2 rounded mt-1" />
        </div>

        <div className="md:col-span-2">
          <label className="font-bold underline">Establishment Address*</label>
          <input name="address" onChange={handleChange} value={form.address} className="border w-full p-2 rounded mt-1" />
          <p className="text-sm text-gray-600 mt-1">Shop Number / Building Number / Street Name / Road Name etc.</p>
        </div>

        <div className="md:col-span-2">
          <p className="text-blue-700 text-sm">If you are having Additional Place of work, please <span className="text-blue-500 underline">specify Name and Address</span></p>
        </div>

        <div>
          <label className="font-bold underline">Name of Establishment (Profession/Trade/Calling/Employment)</label>
          <input name="additionalName" onChange={handleChange} value={form.additionalName} className="border w-full p-2 rounded mt-1" />
        </div>

        <div>
          <label className="font-bold underline">Establishment Address (Full Address)</label>
          <input name="additionalAddress" onChange={handleChange} value={form.additionalAddress} className="border w-full p-2 rounded mt-1" />
        </div>

        <div className="md:col-span-2">
          <button onClick={addExtraField} className="bg-blue-600 text-white px-4 py-2 rounded mt-2">+ Add More (Max 5)</button>
        </div>

        {extraFields.map((field, index) => (
          <React.Fragment key={field.id}>
            <div>
              <label className="font-bold underline">Additional Detail Type #{index + 1}</label>
              <select
                value={field.type}
                onChange={(e) => handleExtraFieldChange(field.id, 'type', e.target.value)}
                className="border w-full p-2 rounded mt-1"
              >
                <option value="">Select Type</option>
                <option value="Income Source">Income Source</option>
                <option value="Monthly Revenue">Monthly Revenue</option>
                <option value="Client Type">Client Type</option>
                <option value="Number of Employees">Number of Employees</option>
                <option value="GST Registered">GST Registered</option>
              </select>
            </div>
            <div>
              <label className="font-bold underline">Detail</label>
              <input
                value={field.value}
                onChange={(e) => handleExtraFieldChange(field.id, 'value', e.target.value)}
                className="border w-full p-2 rounded mt-1"
              />
            </div>
          </React.Fragment>
        ))}

        <div>
          <label className="font-bold underline">Category of Profession/Trade/Calling/Employment*</label>
          <select name="category" onChange={handleChange} value={form.category} className="border w-full p-2 rounded mt-1">
            <option>Legal Profession</option>
            <option>Medical Profession</option>
            <option>Engineering</option>
            <option>Architecture</option>
            <option>Education</option>
          </select>
        </div>

        <div>
          <label className="font-bold underline">Sub-Category of Profession/Trade/Calling/Employment*</label>
          <select name="subCategory" onChange={handleChange} value={form.subCategory} className="border w-full p-2 rounded mt-1">
            <option>Practitioners</option>
            <option>Consultants</option>
            <option>Freelancers</option>
            <option>Trainers</option>
            <option>Assistants</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={handleBack} className="bg-yellow-500 px-6 py-2 rounded hover:bg-yellow-600">⬅ Back</button>
        <button onClick={handleNext} className="bg-yellow-500 px-6 py-2 rounded hover:bg-yellow-600">Next ➡</button>
      </div>
    </div>
  );
};

export default Step3;
