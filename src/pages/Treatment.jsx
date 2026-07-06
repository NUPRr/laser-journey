import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/treatment";

function Treatment() {
  const { name } = useParams();
  const navigate = useNavigate();

 

  const [sessions, setSessions] = useState([false, false, false, false, false, false]);
  const [appointment, setAppointment] = useState("");

  useEffect(() => {

  API.get("/treatments").then((res) => {

    const t = res.data.find(
      (x) => x.body_part === name
    );

    if (!t) return;

    setAppointment(t.appointment || "");

    const arr = new Array(6).fill(false);

    for (let i = 0; i < t.completed_sessions; i++) {
      arr[i] = true;
    }

    setSessions(arr);

  });

}, [name]);

  

 const completeSession = async (index) => {

  const updated = [...sessions];

  updated[index] = !updated[index];

  setSessions(updated);

  try {

    await API.post("/treatments", {

      body_part: name,

      completed_sessions: updated.filter(Boolean).length,

      appointment,

    });

  } catch (err) {

    console.log(err);

  }

};

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F7F2EB",
        maxWidth: "500px",
        margin: "auto",
        padding: "25px",
      }}
    >
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          border: "none",
          background: "transparent",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ← Back
      </button>

      <img
        src={`/images/bodyparts/${name}.jpg`}
        alt={name}
        style={{
          width: "100%",
          aspectRatio: "3/4",
          objectFit: "cover",
          borderRadius: "24px",
          marginBottom: "20px",
        }}
      />

      <h1
        style={{
          fontFamily: "Cormorant Garamond",
          fontSize: "42px",
          textTransform: "capitalize",
          marginBottom: "10px",
        }}
      >
        {name}
      </h1>

      <p
        style={{
          color: "#B88963",
          marginBottom: "25px",
          fontWeight: "600",
        }}
      >
        {sessions.filter(Boolean).length} / 6 Sessions Completed
      </p>

      <div
        style={{
          background: "#fff",
          borderRadius: "22px",
          padding: "22px",
          boxShadow: "0 10px 25px rgba(0,0,0,.06)",
        }}
      >
        <h2 style={{ marginBottom: "18px" }}>Sessions</h2>

        {sessions.map((done, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px 0",
              borderBottom:
                index !== 5 ? "1px solid #eee" : "none",
            }}
          >
            <span>Session {index + 1}</span>

            <button
              
              onClick={() => completeSession(index)}
              style={{
                background: done ? "#3E7C4A" : "#B88963",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                padding: "10px 18px",
                cursor: done ? "default" : "pointer",
              }}
            >
              {done ? "Completed" : "Mark Complete"}
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "#fff",
          marginTop: "25px",
          padding: "22px",
          borderRadius: "22px",
          boxShadow: "0 10px 25px rgba(0,0,0,.06)",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Next Appointment</h2>

        <input
          type="datetime-local"
          value={appointment}
         onChange={async (e) => {

  const value = e.target.value;

  setAppointment(value);

  try {

    await API.post("/treatments", {

      body_part: name,

      completed_sessions: sessions.filter(Boolean).length,

      appointment: value,

    });

  } catch (err) {

    console.log(err);

  }

}}
        />
      </div>
    </main>
  );
}

export default Treatment;