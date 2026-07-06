import "../styles/profile.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/treatment";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    treatments: 0,
    sessions: 0,
    appointment: "No Appointment",
  });

  useEffect(() => {
    API.get("/treatments")
      .then((res) => {
        const data = res.data;

        let completed = 0;

        data.forEach((t) => {
          completed += t.completed_sessions;
        });

        const upcoming = data.find((t) => t.appointment);

        setStats({
          treatments: data.length,
          sessions: completed,
          appointment: upcoming
            ? new Date(upcoming.appointment).toLocaleDateString()
            : "No Appointment",
        });
      })
      .catch(console.error);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <main className="profile-page">

      <div className="profile-card">

        <div className="avatar">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <h1>{user?.name}</h1>

        <p>{user?.email}</p>

        <div className="stats">

          <div>
            <h2>{stats.treatments}</h2>
            <span>Treatments</span>
          </div>

          <div>
            <h2>{stats.sessions}</h2>
            <span>Sessions</span>
          </div>

        </div>

        <div className="appointment-box">

          <h3>Upcoming Appointment</h3>

          <p>{stats.appointment}</p>

        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </main>
  );
}

export default Profile;