import { useNavigate } from "react-router-dom";
import "../styles/about.css";
import Footer from "../components/layout/Footer";

function About() {

  const navigate = useNavigate();

  return (

    <div className="about">

      <section className="aboutHero">

        <div className="overlay">

          <p className="smallTitle">Luxury Treatment Tracker</p>

          <h1>Laser Journey</h1>

          <p className="heroText">

            Every treatment deserves beautiful organization.

            Track appointments, sessions and progress in one elegant place.

          </p>

          <button onClick={() => navigate("/signup")}>
            Begin Your Journey
          </button>

        </div>

      </section>

      <section className="story">

        <h2>Our Story</h2>

        <p>

          Laser Journey was created to simplify laser treatment tracking.
          Instead of remembering appointments, completed sessions and
          progress manually, everything is stored beautifully in one place.

        </p>

      </section>

      <section className="featuresGrid">

        <div className="featureCard">

          <h3>Treatment Tracking</h3>

          <p>Track all 30 sessions effortlessly.</p>

        </div>

        <div className="featureCard">

          <h3>Appointments</h3>

          <p>Never miss your next visit.</p>

        </div>

        <div className="featureCard">

          <h3>Progress</h3>

          <p>Watch your journey beautifully.</p>

        </div>

        <div className="featureCard">

          <h3>Photos</h3>

          <p>Store every transformation.</p>

        </div>

        <div className="featureCard">

          <h3>Private</h3>

          <p>Your data belongs only to you.</p>

        </div>

      </section>

      <section className="promise">

        <h2>

          Confidence grows one session at a time.

        </h2>

      </section>
<Footer />
    </div>

  );

}

export default About;