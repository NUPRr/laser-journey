import "../../styles/navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <header className="navbar">

      <div className="container navbar-container">

        <h2
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Laser Journey
        </h2>

        <nav className="nav-links">

          <button onClick={() => navigate("/about")}>
            About
          </button>

          {token ? (

            <>

              <button onClick={() => navigate("/dashboard")}>
                Dashboard
              </button>

              <button onClick={() => navigate("/profile")}>
                Profile
              </button>

              <button onClick={() => navigate("/settings")}>
                Settings
              </button>

              <button onClick={logout}>
                Logout
              </button>

            </>

          ) : (

            <button onClick={() => navigate("/login")}>
              Login
            </button>

          )}

        </nav>

      </div>

    </header>

  );

}

export default Navbar;