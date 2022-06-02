import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from '../axios';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
     async function fetchData() {
         const req = await axios.get('/cards');
         setPeople(req.data);
     }
     fetchData();
  }, []);

  console.log("PEOPLE", people);

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
            <div className="card" style={{ backgroundImage: `url(${p.imgUrl})` }}>
              <h3>{p.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
