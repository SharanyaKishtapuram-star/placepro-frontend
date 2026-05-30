import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import "./LoginPage.css";

function LoginPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

const handleLogin = async () => {

    try {

        console.log(email);
        console.log(password);

        const response = await axios.post(

            "https://placepro-backend-production.up.railway.app/api/auth/login",

            {
                email: email,
                password: password
            },

            {
                headers: {
                    "Content-Type": "application/json"
                }
            }

        );

console.log(response.data);

localStorage.setItem(
    "token",
    response.data.token
);

localStorage.setItem(
    "userId",
    response.data.id
);

localStorage.setItem(
    "role",
    response.data.role
);

alert("Login Successful 🚀");

if (response.data.role === "RECRUITER") {

    navigate("/recruiter-dashboard");

} else {

    navigate("/student-dashboard");
}

    }

    catch (error) {

        console.log(error);

        console.log(error.response);

        alert("Invalid Credentials");

    }

};

    return (

        <div className="login-container">

            <h1 className="login-title">PlacePro Login 🚀</h1>

            <p
    style={{
        textAlign: "center",
        marginTop: "10px"
    }}
>
    Don't have an account?{" "}
    <span
        onClick={() => navigate("/register")}
        style={{
            color: "#1e3a8a",
            fontWeight: "bold",
            cursor: "pointer"
        }}
    >
        Register Here
    </span>
</p>
           <input
    className="login-input"
    type="email"
    placeholder="Enter Email"
    value={email}
    onChange={(e) =>
        setEmail(e.target.value)
    }
/>

           <input
    className="login-input"
    type="password"
    placeholder="Enter Password"
    value={password}
    onChange={(e) =>
        setPassword(e.target.value)
    }
/>

            <button
    className="login-button"
    onClick={handleLogin}
>

                Login

            </button>

        </div>

    );
}

export default LoginPage;