import React from "react";
import video from "../assets/video.mp4";

export default function Home() {
  return (
    <div className="home-main">
      <div className="home-top">
        <div className="home-text">
          <h1>
            <span style={{ color: "red" }}>Welcome</span> to our website
          </h1>

          <p>
            We provide high-quality services, expert guidance, and complete
            customer satisfaction. Our team works passionately to deliver modern
            solutions, powerful tools, and seamless user experience.
          </p>

          <p>
            Whether you are exploring our services or learning about our company,
            we ensure that you get the best information and support.
          </p>
        </div>

        <div className="home-image">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Home"
          />
        </div>
      </div>

      <div className="home-bottom">
        <h2>
          <span style={{ color: "red" }}>What </span> We Offer</h2>

        <p>
          Our platform is designed to provide innovative solutions, modern
          features, and a smooth digital experience.
        </p>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team"
        />

        <h2>
          <span style={{ color: "red" }}>Why</span> Choose Us <span style={{ color: "red" }}>?</span>
        </h2>

        <ul>
          <li>High-quality service</li>
          <li>Expert & friendly team</li>
          <li>Clean and modern UI</li>
          <li>Fast support</li>
          <li>100% satisfaction</li>
        </ul>

        <video controls autoPlay muted loop playsInline src={video} />


      </div>
    </div>
  );
}
