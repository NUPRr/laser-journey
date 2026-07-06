import { useEffect, useState } from "react";
import API from "../../api/treatment";
import TreatmentCard from "./TreatmentCard";

function TreatmentGrid() {

  const [treatments, setTreatments] = useState([]);

  useEffect(() => {

    API.get("/treatments").then((res) => {

      const defaults = [

        { name: "Face", image: "/images/bodyparts/face.jpg" },

        { name: "Underarms", image: "/images/bodyparts/underarms.jpg" },

        { name: "Hands", image: "/images/bodyparts/hands.jpg" },

        { name: "Legs", image: "/images/bodyparts/legs.jpg" },

        { name: "Bikini", image: "/images/bodyparts/bikini.jpg" }

      ];

      const final = defaults.map((d) => {

        const db = res.data.find(
          x => x.body_part.toLowerCase() === d.name.toLowerCase()
        );

        return {

          ...d,

          completed: db ? db.completed_sessions : 0

        };

      });

      setTreatments(final);

    });

  }, []);

  return (

    <section className="treatment-grid">

      {

        treatments.map((item) => (

          <TreatmentCard
            key={item.name}
            item={item}
          />

        ))

      }

    </section>

  );

}

export default TreatmentGrid;