import Welcome from "../components/dashboard/Welcome";
import OverallProgress from "../components/dashboard/OverallProgress";
import UpcomingAppointment from "../components/dashboard/UpcomingAppointment";
import AppointmentCalendar from "../components/dashboard/AppointmentCalendar";
import Reminder from "./Reminder";
import TreatmentGrid from "../components/dashboard/TreatmentGrid";
import RecentActivity from "../components/dashboard/RecentActivity";
import Footer from "../components/layout/Footer";

import "../styles/dashboard.css";

function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (

    <>

      <main className="dashboard">

        <section className="dashboardHero">

          <div>

            <p
              style={{
                color:"#B88963",
                letterSpacing:"2px",
                textTransform:"uppercase",
                fontSize:"13px",
                marginBottom:"10px"
              }}
            >
              Welcome Back
            </p>

            <h1>

              {greeting},

              <br />

              {user?.name || "Guest"}

            </h1>

            <p>

              Continue your laser journey beautifully.

            </p>

          </div>

        </section>

        <Welcome />

        <OverallProgress />

        <UpcomingAppointment />

        <Reminder />

        <AppointmentCalendar />

        <TreatmentGrid />

        <RecentActivity />

      </main>

      <Footer />

    </>

  );

}

export default Dashboard;