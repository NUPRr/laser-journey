import { useEffect, useState } from "react";
import API from "../../api/treatment";
import "../../styles/upcomingAppointment.css";

function UpcomingAppointment() {

  const [appointment, setAppointment] = useState(null);

  useEffect(() => {

    API.get("/treatments").then((res) => {

      const list = res.data.filter(x => x.appointment);

      if (list.length === 0) return;

      list.sort(
        (a, b) =>
          new Date(a.appointment) -
          new Date(b.appointment)
      );

      setAppointment(list[0]);

    });

  }, []);

  return (

    <section className="appointment">

      <h2>Next Appointment</h2>

      <div className="appointment-box">

        {

          appointment ?

            <>

              <div>

                <h3>{appointment.body_part}</h3>

                <p>

                  {new Date(appointment.appointment).toLocaleString()}

                </p>

              </div>

            </>

            :

            <>

              <div>

                <h3>No Appointment</h3>

                <p>Add your next treatment.</p>

              </div>

            </>

        }

      </div>

    </section>

  );

}

export default UpcomingAppointment;