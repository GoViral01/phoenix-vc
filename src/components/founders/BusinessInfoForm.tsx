import React from "react";

const BusinessInfoForm = () => {
  return (
    <form aria-label="investor registration form">
      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="startupName">
          Startup Name
        </label>
        <input
          type="text"
          id="startupName"
          placeholder="Enter your startup name"
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="website">
          Website
        </label>
        <input
          type="text"
          id="website"
          placeholder="https://www.example.com"
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="businessOverview">
          Business Overview
        </label>
        <textarea
          id="businessOverview"
          placeholder="Describe what your business does in two paragraphs"
          className="w-full rounded border border-[#D1D5DB] p-4 min-h-52 resize-none hover:resize-y"
        />
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="elevatorPitch">
          Elevator Pitch
        </label>
        <textarea
          id="elevatorPitch"
          placeholder="provide your elevator pitch between 50 to 80 characters long"
          className="w-full rounded border border-[#D1D5DB] p-4 min-h-52 resize-none hover:resize-y"
        />
      </div>
    </form>
  );
};

export default BusinessInfoForm;
