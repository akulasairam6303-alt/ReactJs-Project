import { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/head.css";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find(
      (u) =>
        u.email === loginData.email &&
        u.password === loginData.password
    );

    if (found) {
      alert("Login successfully completed");
      setShowLogin(false);
    } else {
      alert("Invalid email or password");
    }
  };

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(signupData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successfully completed");
    setShowSignup(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img className="logo" src={logo} alt="Logo" />
        </div>

        <div className="nav-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/Career">Careers</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-right">
          <button className="btn login" onClick={() => setShowLogin(true)}>
            Login
          </button>
          <button className="btn signup" onClick={() => setShowSignup(true)}>
            Sign Up
          </button>
        </div>
      </nav>

      {showLogin && (
        <div className="modal">
          <div className="modal-box">
            <h2>Login</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleLoginChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleLoginChange}
            />
            <button className="btn primary" onClick={handleLogin}>
              Login
            </button>
            <button
              className="btn close"
              onClick={() => setShowLogin(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showSignup && (
        <div className="modal">
          <div className="modal-box">
            <h2>Sign Up</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleSignupChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleSignupChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleSignupChange}
            />
            <button className="btn primary" onClick={handleSignup}>
              Create Account
            </button>
            <button
              className="btn close"
              onClick={() => setShowSignup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
