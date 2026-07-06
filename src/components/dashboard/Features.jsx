import "../../styles/features.css";
import {
  FiCalendar,
  FiBell,
  FiTrendingUp,
} from "react-icons/fi";

import { FiCircle } from "react-icons/fi";

function Features() {
  return (
    <section className="features">

      

      <div className="features-container">

        <p className="section-tag">
          DESIGNED FOR YOUR JOURNEY
        </p>

        <h2>
          Everything you need,
          <br />
          in one place.
        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="icon-circle">
              <FiCalendar />
            </div>

            <h3>Track Progress</h3>

            <p>
              Monitor each session and celebrate every milestone.
            </p>

          </div>

          <div className="feature-card">

            <div className="icon-circle">
              <FiBell />
            </div>

            <h3>Appointments</h3>

            <p>
              Never miss a session with smart reminders.
            </p>

          </div>

          <div className="feature-card">

            <div className="icon-circle">
              <FiCircle />
            </div>

            <h3>All Areas</h3>

            <p>
              Manage all treatment areas in one beautiful place.
            </p>

          </div>

          <div className="feature-card">

            <div className="icon-circle">
              <FiTrendingUp />
            </div>

            <h3>See Results</h3>

            <p>
              Visualize your progress and stay motivated every step.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;