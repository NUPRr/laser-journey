import { useNavigate } from "react-router-dom";
import "../../styles/treatmentCard.css";

function TreatmentCard({ item }) {

  const navigate = useNavigate();

  return (

    <div
      className="treatment-card"
      onClick={() => navigate(`/treatment/${item.name.toLowerCase()}`)}
    >

      <img
        src={item.image}
        alt={item.name}
      />

      <div className="overlay">

        <h3>{item.name}</h3>

        <p>{item.completed} / 6 Sessions</p>

      </div>

    </div>

  );
}

export default TreatmentCard;