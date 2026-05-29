import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentProfilePage() {

    const navigate = useNavigate();

    const [studentName, setStudentName] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [branch, setBranch] = useState("");
    const [skills, setSkills] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [resumeUrl, setResumeUrl] = useState("");

const handleSave = async () => {

    try {

        const userId =
            localStorage.getItem("userId");

        const token =
            localStorage.getItem("token");

        console.log(userId);
        console.log(token);

        await axios.post(

            `http://localhost:8182/api/student/save/${userId}`,

            {
                studentName,
                collegeName,
                branch,
                skills,
                phoneNumber,
                resumeUrl
            },

            {
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

        alert("Profile Saved Successfully 🚀");

        navigate("/student-dashboard");

    }

    catch (error) {

        console.log(error);

        alert("Failed To Save Profile");
    }
};

    return (

        <div
            style={{
                backgroundColor: "#f3f4f6",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <div
                style={{
                    backgroundColor: "white",
                    padding: "40px",
                    borderRadius: "12px",
                    width: "400px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                }}
            >

                <h1
                    style={{
                        marginBottom: "25px",
                        color: "#1e3a8a"
                    }}
                >
                    Student Profile 🎓
                </h1>

                <input
                    type="text"
                    placeholder="Student Name"
                    value={studentName}
                    onChange={(e) =>
                        setStudentName(e.target.value)
                    }
                    style={inputStyle}
                />

                <input
                    type="text"
                    placeholder="College Name"
                    value={collegeName}
                    onChange={(e) =>
                        setCollegeName(e.target.value)
                    }
                    style={inputStyle}
                />

                <input
                    type="text"
                    placeholder="Branch"
                    value={branch}
                    onChange={(e) =>
                        setBranch(e.target.value)
                    }
                    style={inputStyle}
                />

                <input
                    type="text"
                    placeholder="Skills"
                    value={skills}
                    onChange={(e) =>
                        setSkills(e.target.value)
                    }
                    style={inputStyle}
                />

                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) =>
                        setPhoneNumber(e.target.value)
                    }
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="Resume URL"
                    value={resumeUrl}
                    onChange={(e) =>
                         setResumeUrl(e.target.value)
                    }
                    style={inputStyle}
/>

                <button
                    onClick={handleSave}
                    style={{
                        width: "100%",
                        padding: "12px",
                        backgroundColor: "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    Save Profile
                </button>

            </div>

        </div>
    );
}

const inputStyle = {

    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px"
};

export default StudentProfilePage;