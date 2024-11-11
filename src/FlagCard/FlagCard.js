import react from "react";
import { useState, useEffect } from "react";
import "../FlagCard/FlagCard.css";

const FlagCard = () => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const flagData = async () => {
      try {
        const res = await fetch(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        const data = await res.json();
        console.log(data);
        setFlags(data);
      } catch (e) {
        console.error("Error fetching data: " + e);
      }
    };
    flagData();
  }, []);

  return (
    <div className="flag-show">
      {flags.map((flg, idx) => {
        return (
          <div key={idx} className="flag-item">
            <img src={flg.flag} alt={flg.abbr} />
            <h2>{flg.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default FlagCard;
