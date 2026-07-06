import { useEffect, useState } from "react";
import API from "../../api/treatment";
import "../../styles/overallProgress.css";

function OverallProgress() {

  const [completed, setCompleted] = useState(0);

  useEffect(() => {

    loadProgress();

  }, []);

  const loadProgress = async () => {

    try {

      const res = await API.get("/treatments");

      let total = 0;

      res.data.forEach((t) => {
        total += t.completed_sessions;
      });

      setCompleted(total);

    } catch (err) {
      console.log(err);
    }

  };

  return (

    <section className="progress">

      <div className="progress-header">

        <h2>Overall Progress</h2>

        <span>{completed} / 30 Sessions</span>

      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${completed / 30 * 100}%`
          }}
        />

      </div>

    </section>

  );

}

export default OverallProgress;