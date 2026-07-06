import "../styles/settings.css";
import { useNavigate } from "react-router-dom";

function Settings() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <main className="settings-page">

      <div className="settings-card">

        <h1>Settings</h1>

        <div className="setting-item">

          <div>

            <h3>Account</h3>

            <p>{user?.email}</p>

          </div>

          <button onClick={() => navigate("/profile")}>
            Profile
          </button>

        </div>

        <div className="setting-item">

          <div>

            <h3>Notifications</h3>

            <p>Browser reminders enabled</p>

          </div>

          <button disabled>
            Active
          </button>

        </div>

        <div className="setting-item">

          <div>

            <h3>Appointments</h3>

            <p>Manage your laser schedule</p>

          </div>

          <button onClick={() => navigate("/dashboard")}>
            Open
          </button>

        </div>

        <div className="setting-item">

          <div>

            <h3>Privacy</h3>

            <p>Your treatment data is securely stored.</p>

          </div>

          <button disabled>
            Secure
          </button>

        </div>

        <div className="setting-item">

          <div>

            <h3>Version</h3>

            <p>Laser Journey v1.0</p>

          </div>

          <button disabled>
            Latest
          </button>

        </div>

        <div className="setting-item">

          <div>

            <h3>Logout</h3>

            <p>Sign out of your account</p>

          </div>

          <button
            className="logout"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>

    </main>

  );

}

export default Settings;