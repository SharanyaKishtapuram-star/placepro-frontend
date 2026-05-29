import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getApplications } from "../services/applicationListService";

function ApplicationsPage() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {

        fetchApplications();

    }, []);

    const fetchApplications = async () => {

        try {

            const response = await getApplications();

            console.log(response.data);

            setApplications(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed to load applications");
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
                    padding: "40px"
                }}
            >

                <h1
                    style={{
                        color: "#1e3a8a",
                        marginBottom: "30px"
                    }}
                >
                    My Applications 📄
                </h1>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "20px"
                    }}
                >

                    {applications.map((application) => (

                        <div
                            key={application.id}
                            style={{
                                backgroundColor: "white",
                                padding: "20px",
                                borderRadius: "10px",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                            }}
                        >

                            <h2>
                                {application.job?.companyName}
                            </h2>

                            <p>
                                <strong>Role:</strong>
                                {" "}
                                {application.job?.jobRole}
                            </p>

                            <p>
    <strong>Status:</strong>

    <span
        style={{
            marginLeft: "10px",
            padding: "5px 12px",
            borderRadius: "20px",
            color: "white",
            backgroundColor:
                application.status === "SELECTED"
                    ? "green"
                    : application.status === "SHORTLISTED"
                    ? "orange"
                    : application.status === "REJECTED"
                    ? "red"
                    : "#2563eb"
        }}
    >
        {application.status}
    </span>
</p>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default ApplicationsPage;