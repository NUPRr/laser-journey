import "../../styles/hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {

    const navigate = useNavigate();

    return (

        <section className="hero">

            <div className="hero-content">

                <p className="hero-tag">
                    PERSONAL LASER HAIR REDUCTION TRACKER
                </p>

                <h1>
                    Laser
                    <br />
                    Journey
                </h1>

                <div
                    style={{
                        width: "80px",
                        height: "1px",
                        background: "#D4B99A",
                        margin: "35px 0"
                    }}
                />

                <p className="hero-description">
                    Track your progress,
                    beautifully.
                    <br />
                    <br />
                    A private space to keep every
                    laser session, appointment and
                    milestone in one place.
                </p>

                <button
                    className="hero-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    Continue Journey →
                </button>

            </div>
            

        </section>

    );

}

export default Hero;