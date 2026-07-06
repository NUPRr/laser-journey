import { useEffect, useState } from "react";
import API from "../../api/treatment";

function RecentActivity() {

  const [activity, setActivity] = useState([]);

  useEffect(() => {

    API.get("/treatments/activity")
      .then((res) => setActivity(res.data))
      .catch(() => {});

  }, []);

  return (

    <section className="recent">

      <h2>Recent Activity</h2>

      {

        activity.length===0 ?

        <div className="activity-card">
          No recent activity.
        </div>

        :

        activity.map(item=>(

          <div
            key={item.id}
            className="activity-card"
          >

            ✅ Session {item.session_number}
            completed for {item.body_part}

          </div>

        ))

      }

    </section>

  );

}

export default RecentActivity;