////ALERT: This component is currently not in use
/// DONT USE IT having some issues with the formData prop


import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step6 = ({ formData }) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!formData.declaration || formData.captcha !== '135') {
      alert('❌ Please check the declaration and solve the captcha correctly.');
      return;
    }
    alert('✅ Form Submitted Successfully!');
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl text-red-600 font-bold text-center mb-2">Review Information</h2>
      <p className="text-center text-lg text-gray-700 mb-6">Applying as <span className="text-red-500">Individual</span></p>

      {/* Personal/Business Information */}
      <div className="border p-4 rounded mb-4">
        <h3 className="font-bold text-blue-700 mb-2">Personal/ Business Information</h3>
        <p><strong>Name:</strong> {formData.fullName || 'Full Name'}</p>
        <p><strong>Gender:</strong> {formData.gender || 'Not Provided'}</p>
        <p><strong>PAN/TAN:</strong> {formData.pan || 'Not Provided'}</p>
        <p><strong>Mobile:</strong> {formData.mobile || 'Not Provided'}</p>
        <p><strong>Father's Name:</strong> {formData.fatherName || 'Not Provided'}</p>
        <p><strong>Email:</strong> {formData.email || 'Not Provided'}</p>
      </div>

      {/* Establishment Information */}
      <div className="border p-4 rounded mb-4">
        <h3 className="font-bold text-blue-700 mb-2">Establishment Information</h3>
        <p><strong>Business Name:</strong> {formData.businessName || 'Establishment Name'}</p>
        <p><strong>Area of Jurisdiction:</strong> {formData.jurisdiction || 'Agartala'}</p>
        <p><strong>Address:</strong> {formData.establishmentAddress || 'Not Provided'}</p>
        <p><strong>Charge:</strong> {formData.charge || 'Charge - I'}</p>
        <p><strong>Category:</strong> {formData.category || 'Legal Profession'}</p>
        <p><strong>Sub Category:</strong> {formData.subCategory || 'Practitioners'}</p>
        <p><strong>Other Establishment Details:</strong> {formData.otherDetails || 'Not Provided'}</p>
        <p><strong>Name:</strong> {formData.establishmentType || 'Establishment Type'}</p>
        <p><strong>Address:</strong> {formData.establishmentAddress || 'Establishment Address'}</p>
      </div>

      {/* Employment Details */}
      <div className="border p-4 rounded mb-4">
        <h3 className="font-bold text-blue-700 mb-2">Employment Details</h3>
        <p><strong>Date of Commencement:</strong> {formData.commencementDate || 'Not Provided'}</p>
        <p><strong>Period of Standing:</strong> {formData.periodStanding || 'Not Provided'}</p>
        <p><strong>PAN:</strong> {formData.pan || 'Not Provided'}</p>
        <p><strong>Registered Under VAT:</strong> {formData.vat || 'Not Provided'}</p>
        <p><strong>Registered Under CST:</strong> {formData.cst || 'Not Provided'}</p>
        <p><strong>Registered Under GST:</strong> {formData.gst || 'Not Provided'}</p>
        <p><strong>Applicant Salary:</strong> {formData.avgSalary || 'Not Provided'}</p>
        <p><strong>Simultaneously Engaged in Employment of more than one Employer:</strong> {formData.multiEmployer ? 'Yes' : 'No'}</p>
        {(formData.employers || []).map((emp, i) => (
          <div key={i} className="ml-4">
            <p><strong>Employer Name:</strong> {emp.name || 'Not Provided'}</p>
            <p><strong>Employer Address:</strong> {emp.address || 'Not Provided'}</p>
            <p><strong>Applicant Salary:</strong> {emp.salary || 'Not Provided'}</p>
          </div>
        ))}
      </div>

      {/* Declaration and Captcha */}
      <div className="mb-6">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={formData.declaration || false}
            onChange={(e) => formData.setFormData({ ...formData, declaration: e.target.checked })}
          />
          <span className="text-sm text-red-600">
            I hereby declare that the details furnished above are true and correct to the best of my knowledge...
          </span>
        </label>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <span className="bg-gray-100 px-4 py-2 border rounded">35 + 100 =</span>
        <input
          type="text"
          className="border p-2 w-32 rounded"
          value={formData.captcha || ''}
          onChange={(e) => formData.setFormData({ ...formData, captcha: e.target.value })}
        />
      </div>

      <div className="flex justify-between">
        <button onClick={() => navigate('/step5')} className="bg-yellow-500 px-6 py-2 rounded hover:bg-yellow-600">⬅ Edit</button>
        <button onClick={handleSubmit} className="bg-yellow-500 px-6 py-2 rounded hover:bg-yellow-600">Submit ✅</button>
      </div>
    </div>
  );
};

export default Step6;
