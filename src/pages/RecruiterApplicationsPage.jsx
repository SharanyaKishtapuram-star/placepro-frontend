import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function RecruiterApplicationsPage() {

    const [applications, setApplications] = useState([]);
    const [statusFilter, setStatusFilter] =
    useState("ALL");

    useEffect(() => {

        fetchApplications();

    }, []);

    const fetchApplications = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "https://placepro-backend-production.up.railway.app/api/applications/recruiter",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(response.data);
            setApplications(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed to load applications");
        }
    };

    const filteredApplications =
    statusFilter === "ALL"

    ? applications

    : applications.filter(
          (application) =>
              application.status ===
              statusFilter
      );
    const updateStatus = async (id, status) => {

        try {

            const token = localStorage.getItem("token");

            await axios.put(
                `https://placepro-backend-production.up.railway.app/api/applications/${id}?status=${status}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Status Updated 🚀");

            fetchApplications();

        } catch (error) {

            console.error(error);

            alert("Failed to update status");
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
                    Recruiter Applications 📄
                </h1>
                
                <select
    value={statusFilter}
    onChange={(e) =>
        setStatusFilter(e.target.value)
    }
    style={{
        padding: "10px",
        marginBottom: "20px",
        borderRadius: "6px"
    }}
>

    <option value="ALL">
        ALL
    </option>

    <option value="APPLIED">
        APPLIED
    </option>

    <option value="SHORTLISTED">
        SHORTLISTED
    </option>

    <option value="SELECTED">
        SELECTED
    </option>

    <option value="REJECTED">
        REJECTED
    </option>

</select>
                <table
                    style={{
                        width: "100%",
                        backgroundColor: "white",
                        borderCollapse: "collapse"
                    }}
                >

                    <thead>

                        <tr
                            style={{
                                backgroundColor: "#1e3a8a",
                                color: "white"
                            }}
                        >

                           <th style={tableHeader}>Student</th>

                            <th style={tableHeader}>College</th>

                            <th style={tableHeader}>Branch</th>

                            <th style={tableHeader}>Skills</th>

                            <th style={tableHeader}>Phone</th>

                            <th style={tableHeader}>Resume</th>

                            <th style={tableHeader}>Company</th>

                            <th style={tableHeader}>Role</th>

                            <th style={tableHeader}>Status</th>

                            <th style={tableHeader}>Update</th>
                        </tr>

                    </thead>

                    <tbody>

                        {filteredApplications.map((application) => (

                            <tr key={application.id}>

                                <td style={tableCell}>
                                    {application.student?.studentName}
                                </td>
                                <td style={tableCell}>
                                    {application.student?.collegeName}
                                </td>
                                <td style={tableCell}>
                                    {application.student?.branch}
                                </td>

                                <td style={tableCell}>
                                    {application.student?.skills}
                                </td>

                                <td style={tableCell}>
                                    {application.student?.phoneNumber}
                                </td>

                                <td style={tableCell}>

    <a
        href={
            application.student?.resumeUrl
        }
        target="_blank"
        rel="noreferrer"
        style={{
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: "bold"
        }}
    >
        View Resume
    </a>

</td>

                                <td style={tableCell}>
                                    {application.job?.companyName}
                                </td>

                                <td style={tableCell}>
                                    {application.job?.jobRole}
                                </td>

                                <td style={tableCell}>
                                    {application.status}
                                </td>
                                
                                <td style={tableCell}>

                                    <select
                                        value={application.status}
                                        onChange={(e) =>
                                            updateStatus(
                                                application.id,
                                                e.target.value
                                            )
                                        }
                                        style={{
                                            padding: "8px",
                                            borderRadius: "6px"
                                        }}
                                    >

                                        <option value="APPLIED">
                                            APPLIED
                                        </option>

                                        <option value="SHORTLISTED">
                                            SHORTLISTED
                                        </option>

                                        <option value="SELECTED">
                                            SELECTED
                                        </option>

                                        <option value="REJECTED">
                                            REJECTED
                                        </option>

                                    </select>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

const tableHeader = {

    padding: "15px",
    textAlign: "left"
};

const tableCell = {

    padding: "15px",
    borderBottom: "1px solid #ddd"
};

export default RecruiterApplicationsPage;