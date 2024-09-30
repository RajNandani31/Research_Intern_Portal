import React, { useState } from 'react';
import { Select } from 'antd';

const JobListingForm = () => {
  const [formData, setFormData] = useState({
    prof_name: '',
    title: '',
    description: '',
    isActive: true,
    tags: '',
    type: '',
    stipend: '',
    hours_required: '',
    applicants: [],
    requirements: {
      cpi: '',
      branch: [],
      study_year: ''
    },
    accepting: true,
    last_date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRequirementChange = (selectedBranches) => {
    setFormData({
      ...formData,
      requirements: {
        ...formData.requirements,
        branch: selectedBranches,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  const branchOptions = [
    { value: '', label: 'All branches are allowed' },
    { value: 'Computer Science', label: 'Computer Science' },
    { value: 'Mechanical', label: 'Mechanical' },
    { value: 'Electrical', label: 'Electrical' },
    { value: 'Chemistry', label: 'Chemistry' },
    { value: 'Physics', label: 'Physics' },
    { value: 'Civil', label: 'Civil' },
    { value: 'Other', label: 'Other' }
  ];

  return (
    <form onSubmit={handleSubmit} className="py-4 px-8 bg-white shadow-lg rounded-lg space-y-4">
      <h2 className="text-2xl font-bold text-center">Create New Job Listing</h2>

      {/* Job Details Section */}
      <div className="border-b pb-2">
        <h3 className="text-xl font-semibold mb-2">Job Details</h3>
        
        <div className="flex flex-col sm:flex-row flex-wrap mb-2 gap-2">
          <div className="flex flex-col flex-grow mb-2">
            <label className="font-semibold">
              Professor Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="prof_name"
              value={formData.prof_name}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 mt-1 w-full"
              required
            />
          </div>

          <div className="flex flex-col flex-grow mb-2">
            <label className="font-semibold">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 mt-1 w-full"
              required
            />
          </div>

          <div className="flex flex-col flex-grow mb-2 w-full">
            <label className="font-semibold">
              Job Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 mt-1 ml-0 w-full"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap mb-2 gap-2">
          <div className="flex flex-col flex-grow mb-2">
            <label className="font-semibold">
              Job Type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 mt-1 w-full"
              required
            />
          </div>

          <div className="flex flex-col flex-grow mb-2">
            <label className="font-semibold">
              Stipend <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="stipend"
              value={formData.stipend}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 mt-1 w-full"
              required
            />
          </div>

          <div className="flex flex-col flex-grow mb-2">
            <label className="font-semibold">
              Hours Required <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="hours_required"
              value={formData.hours_required}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 mt-1 w-full"
              required
            />
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="border-b pb-2">
        <h3 className="text-xl font-semibold mb-2">Requirements</h3>

        <div className="flex flex-wrap mb-2 gap-2">
          <div className="flex flex-col flex-grow mb-2">
            <label className="font-semibold">
              Minimum CPI Requirement <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="cpi"
              value={formData.requirements.cpi}
              onChange={(e) => setFormData({
                ...formData,
                requirements: { ...formData.requirements, cpi: e.target.value }
              })}
              className="border border-gray-300 rounded p-2 mt-1 w-full"
              required
            />
          </div>

          <div className="flex flex-col flex-grow mb-2">
            <label className="font-semibold">
              Study Year Requirement <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="study_year"
              value={formData.requirements.study_year}
              onChange={(e) => setFormData({
                ...formData,
                requirements: { ...formData.requirements, study_year: e.target.value }
              })}
              className="border border-gray-300 rounded p-2 mt-1 w-full"
              required
            />
          </div>
        </div>

        <div className="flex flex-col mb-2">
          <label className="font-semibold">
            Branch Requirement <span className="text-red-500">*</span>
          </label>
          <Select
            mode="multiple"
            value={formData.requirements.branch}
            onChange={handleRequirementChange}
            placeholder="Please select branches"
            style={{ width: '100%' }}
            options={branchOptions}
          />
        </div>
      </div>

      {/* Application Details Section */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Application Details</h3>
        <div className="flex flex-col mb-2">
          <label className="font-semibold">
            Last Date to Apply <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="last_date"
            value={formData.last_date}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 mt-1 w-full"
            required
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
          Create Job Listing
        </button>
      </div>
    </form>
  );
};

export default JobListingForm;
