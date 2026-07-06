import { useEffect, useState } from "react";
import API from "../api/treatment";
import "../styles/reminder.css";

function Reminder() {

  const [message, setMessage] = useState("");

  useEffect(() => {

    API.get("/treatments").then((res) => {

      const appointments = res.data
        .filter(t => t.appointment)
        .sort(
          (a,b)=>
          new Date(a.appointment)-new Date(b.appointment)
        );

      if(!appointments.length){

        setMessage("No upcoming appointments.");

        return;

      }

      const next = new Date(appointments[0].appointment);

      const today = new Date();

      const diff = Math.ceil(
        (next-today)/(1000*60*60*24)
      );

      if(diff<0){

        setMessage("You have missed an appointment.");

      }

      else if(diff===0){

        setMessage("Today is your laser appointment ✨");

      }

      else if(diff===1){

        setMessage("Appointment Tomorrow ✨");

      }

      else{

        setMessage(`Next appointment in ${diff} days`);

      }

      if("Notification" in window){

        Notification.requestPermission().then(permission=>{

          if(permission==="granted" && diff===0){

            new Notification("Laser Journey",{

              body:"Today is your appointment."

            });

          }

        });

      }

    });

  },[]);

  return(

<section className="reminder">

<h2>

Reminder

</h2>

<p>

{message}

</p>

</section>

  );

}

export default Reminder;