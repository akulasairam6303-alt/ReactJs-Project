import React, { useEffect, useState } from "react";


export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dev.to/api/articles?per_page=8")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <h2 className="loading">Loading services...</h2>;

  return (
    <div className="services-wrapper">
      <h1 className="services-title">
        Our <span>Services</span>
      </h1>

      <p className="services-subtitle">
        Sai Software Solutions builds modern web, mobile, and cloud-based
        applications using cutting-edge technologies.
      </p>

      <div className="services-grid">
        {services.map((item) => (
          <div className="service-card" key={item.id}>
            <img
              src={
                item.cover_image ||
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              }
              alt={item.title}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
