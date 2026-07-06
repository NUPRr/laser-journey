import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar.css";
import API from "../../api/treatment";

function AppointmentCalendar() {

  const [appointments, setAppointments] = useState([]);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    API.get("/treatments")
      .then((res) => setAppointments(res.data))
      .catch(console.error);
  }, []);

  const hasAppointment = (date) => {

    return appointments.some((a) => {

      if (!a.appointment) return false;

      const d = new Date(a.appointment);

      return (
        d.getDate() === date.getDate() &&
        d.getMonth() === date.getMonth() &&
        d.getFullYear() === date.getFullYear()
      );

    });

  };

  return (

    <section className="calendar-section">

      <h2>Your Appointment Calendar</h2>

      <Calendar
        value={value}
        onChange={setValue}
        tileClassName={({ date }) =>
          hasAppointment(date) ? "appointment-day" : ""
        }
      />

    </section>

  );

}

export default AppointmentCalendar;