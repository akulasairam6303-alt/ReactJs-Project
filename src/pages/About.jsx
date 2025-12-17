import React from "react";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.jpg"
import img8 from "../assets/img8.jpg"

export default function About() {
  return (
    <div className="about-wrapper">
      <h1>
        <span style={{ color: "red" }}>About</span> Sai Software Solutions
      </h1>

      <p>
        Sai Software Solutions is a technology-focused company dedicated to
        building reliable, scalable, and future-ready digital products for
        businesses of all sizes.
      </p>

      <h2>Our Achievements</h2>

      <div className="achievement-grid">
        <div className="achievement-card">
          <img src={img1}alt="Started" />
        </div>

        <div className="achievement-card">
          <img src={img2}alt="Growth" />
        </div>

        <div className="achievement-card">
          <img src={img3} alt="Team" />
        </div>

        <div className="achievement-card">
          <img src={img4} alt="Projects" />
        </div>

        <div className="achievement-card">
          <img src={img5} alt="Clients" />
        </div>

        <div className="achievement-card">
          <img src={img6} alt="Technology" />
        </div>

        <div className="achievement-card">
          <img src={img7} alt="Innovation" />
        </div>

        <div className="achievement-card">
          <img src={img8} alt="Future" />
        </div>
      </div>

      <h2>Our Journey</h2>
      <p>
        Since our inception, we have continuously evolved by adapting to new
        technologies and industry standards. Each project has strengthened our
        expertise and commitment to excellence.
      </p>

      <h2>Our Work Culture</h2>
      <p>
        We foster a collaborative and learning-driven environment where ideas
        are encouraged and innovation is part of everyday work.
      </p>

      <h2>Quality & Trust</h2>
      <p>
        Quality is the foundation of everything we build. We ensure that every
        solution meets high performance standards and delivers real value to
        our clients.
      </p>

      <h2>Looking Ahead</h2>
      <p>
        Our focus remains on creating future-ready solutions that empower
        businesses to grow confidently in a rapidly changing digital world.
      </p>
    </div>
  );
}
