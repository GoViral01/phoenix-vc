import React from "react";

const ContactForm = () => {
  return (
    <form aria-label="founders registration form">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="font-medium mb-1" htmlFor="firstName">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="w-full rounded border border-[#D1D5DB] p-4"
          />
        </div>

        <div>
          <label className="font-medium mb-1" htmlFor="lastName">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className="w-full rounded border border-[#D1D5DB] p-4"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="phoneNumber">
          Phone number
        </label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="+2348123424823"
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="location">
          Location
        </label>
        <input
          type="text"
          id="location"
          placeholder="Ikeja, Lagos"
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="linkedIn">
          LinkedIn
        </label>
        <input
          type="text"
          id="linkedIn"
          placeholder="https://www.linkedin.com/my-profile"
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="twitter">
          Twitter (optional)
        </label>
        <input
          type="text"
          id="twitter"
          placeholder="https://www.twitter.com/my-profile"
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="instagram">
          Instagram (Optional)
        </label>
        <input
          type="text"
          id="instagram"
          placeholder="https://www.instagram.com/my-profile"
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="facebook">
          Facebook (Optional)
        </label>
        <input
          type="text"
          id="facebook"
          placeholder="https://www.facebook.com/my-profile"
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
      </div>
    </form>
  );
};

export default ContactForm;
