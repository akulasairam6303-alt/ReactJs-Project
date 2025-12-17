import React, { useState } from "react";

export default function Form({ role, closeForm }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: role,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const existing =
      JSON.parse(localStorage.getItem("applications")) || [];

   
    localStorage.setItem(
      "applications",
      JSON.stringify([...existing, form])
    );

    alert("Application submitted successfully!");
    closeForm();
  };

  return (
    <div className="form-overlay">
      <form className="apply-form" onSubmit={handleSubmit}>
        <h2>Apply for {role}</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={closeForm} className="cancel-btn">
          Cancel
        </button>
      </form>
    </div>
  );
}
