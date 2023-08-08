import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Signup.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",

    userId: "",

    password: "",

    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "userId") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
          userIdError: "Invalid email format",
        });

        return;
      }
    }
    setFormData({ ...formData, [name]: value, userIdError: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please try again.");

      return;
    }

    console.log("Form data:", formData);

    setFormData({ name: "", userId: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name.."
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="userId">User ID:</label>

        <input
          type="text"
          id="userId"
          name="userId"
          value={formData.userId}
          placeholder="Enter ID"
          onChange={handleChange}
          required
        />

        {formData.userIdError && (
          <p className="error">{formData.userIdError}</p>
        )}

        <label htmlFor="password">Password:</label>

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Valid password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>

        <input
          type="password"
          id="confirmPassword"
          placeholder="Re-enter password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <Link to="/Login">
          <button type="submit">Sign Up</button>
        </Link>
      </form>
    </div>
  );
};

export default SignupPage;
