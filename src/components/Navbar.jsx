import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    const navButtonStyle = {
    width: "140px",
    height: "40px",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "white",
    color: "#1e3a8a",
     whiteSpace: "nowrap"
};
    return (

        <div
            style={{
                height: "70px",
                backgroundColor: "#1e3a8a",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 40px",
                color: "white"
            }}
        >

            <h2
                style={{
                    cursor: "pointer"
                }}
                onClick={() => navigate("/student-dashboard")}
            >
                PlacePro 🚀
            </h2>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center"
                }}
            >

                <button
    onClick={() => {

    const role =
        localStorage.getItem("role");

    if (role === "RECRUITER") {

        navigate("/manage-jobs");

    } else {

        navigate("/jobs");
    }
}}
    style={navButtonStyle}
>
    Jobs
</button>
                <button
    onClick={() => {

    const role =
        localStorage.getItem("role");

    if (role === "RECRUITER") {

        navigate("/recruiter-applications");

    } else {

        navigate("/applications");
    }
}}
    style={navButtonStyle}
>
    Applications
</button>
                {localStorage.getItem("role") !== "RECRUITER" && (
    <button
        onClick={() => navigate("/notifications")}
        style={navButtonStyle}
    >
        🔔 Notifications
    </button>
)}
                <button
    onClick={logout}
    style={{
        ...navButtonStyle,
        backgroundColor: "#dc2626",
        color: "white"
    }}
>
    Logout
</button>

            </div>

        </div>

    );
}
export default Navbar;