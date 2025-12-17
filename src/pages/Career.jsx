import React, { useEffect, useState } from "react";
import Form from "./Form";


export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    fetch("https://dev.to/api/articles?tag=career&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="loading">Loading careers...</h2>;

  return (
    <div className="careers-wrapper">
      <h1 className="careers-title">
        Join <span>Our Team</span>
      </h1>

      <div className="careers-grid">
        {jobs.map((job) => (
          <div className="career-card" key={job.id}>
            <img
              src={
                job.cover_image ||
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              }
              alt={job.title}
            />

            <h3>{job.title}</h3>
            <p>{job.description}</p>

            <button
              className="apply-btn"
              onClick={() => {
                setSelectedRole(job.title);
                setShowForm(true);
              }}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {showForm && (
        <Form
          role={selectedRole}
          closeForm={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
