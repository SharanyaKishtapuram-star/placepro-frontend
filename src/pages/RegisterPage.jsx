import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

function RegisterPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "STUDENT"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async () => {

    try {

      await axios.post(
        "http://localhost:8182/api/auth/register",
        formData
      );

      alert("Registration Successful 🚀");

      navigate("/");

    } catch (error) {

      alert("Registration Failed");

      console.log(error);
    }
  };

  return (

   <div className="register-container">

      <h1 className="register-title">
    PlacePro Register 🚀</h1>

      <input
        className="register-input"
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      />

      <input
        className="register-input"
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
      />

      <input
        className="register-input"
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />

      <select
        className="register-select"
        name="role"
        onChange={handleChange}
      >
        <option value="STUDENT">STUDENT</option>
        <option value="RECRUITER">RECRUITER</option>
      </select>

      <button 
      className="register-button"
      onClick={handleRegister}>
        Register
      </button>

    </div>
  );
}

export default RegisterPage;