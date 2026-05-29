import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

const handleLogin = async () => {

    try {

        console.log(email);
        console.log(password);

        const response = await axios.post(

            "http://localhost:8182/api/auth/login",

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

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "300px",
                margin: "100px auto",
                gap: "10px"
            }}
        >

            <h1>PlacePro Login</h1>

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />

            <button onClick={handleLogin}>

                Login

            </button>

        </div>

    );
}

export default LoginPage;