import React, { useEffect, useState } from "react";


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [countdown, setCountdown] = useState(null);
  const [pendingData, setPendingData] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPendingData(form);
    setCountdown(5);
  };


  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      saveToLocalStorage();
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const saveToLocalStorage = () => {
    const existing =
      JSON.parse(localStorage.getItem("contacts")) || [];

    localStorage.setItem(
      "contacts",
      JSON.stringify([...existing, pendingData])
    );

    setPendingData(null);
    setCountdown(null);
    setSuccess(true);

    setForm({ name: "", email: "", message: "" });
  };

  const cancelSubmit = () => {
    setPendingData(null);
    setCountdown(null);
    alert("Submission cancelled");
  };

  return (
    <div className="contact-wrapper">
      <h1>
        Contact <span>Us</span>
      </h1>

      <p className="subtitle">
        Reach out to Sai Software Solutions for software development,
        consulting, or collaboration.
      </p>

      {success && (
        <div className="success-msg">
          Form submitted successfully!
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {countdown !== null && (
        <div className="timer-box">
          <p>
            Submitting in <b>{countdown}</b> seconds...
          </p>
          <button onClick={cancelSubmit} className="cancel-btn">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
