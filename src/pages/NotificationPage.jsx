import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function NotificationPage() {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const response =
                await axios.get(
                    "http://localhost:8182/api/notifications",
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

            setNotifications(response.data);

        } catch (error) {

            console.error(error);
        }
    };

    return (

        <div>
            <Navbar />

            <div style={{ padding: "40px" }}>

                <h1>🔔 Notifications</h1>

                {notifications.map((notification) => (

                    <div
                        key={notification.id}
                        style={{
                            background: "white",
                            padding: "15px",
                            marginTop: "10px",
                            borderRadius: "10px"
                        }}
                    >
                        {notification.message}
                    </div>

                ))}

            </div>

        </div>
    );
}

export default NotificationPage;