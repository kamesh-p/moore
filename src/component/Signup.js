import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Signup.css";

import axios from "axios";

const SignupPage = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showGenre, setShowGenre] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");

      return;
    }

    const UserObject = {
      name: name,

      email: email,

      password: password,
    };

    axios
      .post("http://localhost:4000/users/create-user", {
        name: name,
        email: email,
        password: password,
      })

      .then((result) => {
        console.log(result);

        setName("");

        setEmail("");

        setPassword("");

        setConfirmPassword("");
        setShowGenre(true);
      })
      .catch((error) => alert("enter the credentials"));
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="emailId">Email ID:</label>

        <input
          type="email"
          id="emailId"
          name="emailId"
          placeholder="Enter email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Valid password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>

        <input
          type="password"
          id="confirmPassword"
          placeholder="Re-enter password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          <Link to="/Genre">Sign Up</Link>
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
