import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

    <div style={{
      display: "flex",
      flexDirection: "column",
      width: "300px",
      margin: "100px auto",
      gap: "15px"
    }}>

      <h1>PlacePro Register</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />

      <select
        name="role"
        onChange={handleChange}
      >
        <option value="STUDENT">STUDENT</option>
        <option value="RECRUITER">RECRUITER</option>
      </select>

      <button onClick={handleRegister}>
        Register
      </button>

    </div>
  );
}

export default RegisterPage;