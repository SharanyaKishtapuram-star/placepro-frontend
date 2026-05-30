import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function AddJobPage() {

    const [companyName, setCompanyName] = useState("");
    const [jobRole, setJobRole] = useState("");
    const [location, setLocation] = useState("");
    const [salaryPackage, setSalaryPackage] = useState("");

const handleAddJob = async () => {

    try {

        const token = localStorage.getItem("token");

        await axios.post(
            "https://placepro-backend-production.up.railway.app/api/jobs",
            {
                companyName: companyName,
                jobRole: jobRole,
                location: location,
                salaryPackage: salaryPackage,
                jobDescription: "Good Job Opportunity"
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        alert("Job Added Successfully 🚀");

        setCompanyName("");
        setJobRole("");
        setLocation("");
        setSalaryPackage("");

    } catch (error) {

        console.error(error);

        alert("Failed to Add Job");
    }
};

    return (

        <div
            style={{
                backgroundColor: "#f3f4f6",
                minHeight: "100vh"
            }}
        >

            <Navbar />

            <div
                style={{
                    width: "400px",
                    margin: "50px auto",
                    backgroundColor: "white",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                }}
            >

                <h1
                    style={{
                        marginBottom: "25px",
                        color: "#1e3a8a"
                    }}
                >
                    Add New Job 🚀
                </h1>

                <input
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) =>
                        setCompanyName(e.target.value)
                    }
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "15px",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                />

                <input
                    type="text"
                    placeholder="Job Role"
                    value={jobRole}
                    onChange={(e) =>
                        setJobRole(e.target.value)
                    }
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "15px",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                />

                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) =>
                        setLocation(e.target.value)
                    }
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "15px",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                />

                <input
                    type="text"
                    placeholder="Package Offered"
                    value={salaryPackage}

onChange={(e) =>
    setSalaryPackage(e.target.value)
}
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "20px",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                />

                <button
                    onClick={handleAddJob}
                    style={{
                        width: "100%",
                        padding: "12px",
                        backgroundColor: "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "16px",
                        cursor: "pointer"
                    }}
                >
                    Add Job
                </button>

            </div>

        </div>
    );
}

export default AddJobPage;