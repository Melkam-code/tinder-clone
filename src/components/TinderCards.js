import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@mui/material";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("Removing", nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name, "left the screen");
  };

  return (
    <div className="tinder-card">
      <div className="tinder-card-container">
        {people.map((p) => (
          <TinderCard
            className="swipe"
            key={p.name}
           // preventSwipe={(dir) => swiped(dir, p.name)}
            onCardLeftScreen={() => outOfFrame(p.name)}
          >
            <div className="card" style={{ backgroundImage: `url(${p.url})` }}>
              <h3>{p.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
