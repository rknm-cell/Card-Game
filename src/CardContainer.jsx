import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardContainer = ({ deck, drawNumber, dealerPlayer, turn, draw }) => {
  const [hand, setHand] = useState([]);
  const [score, setScore] = useState(0);
    


  function handleCardRender() {
    return deck.map((card) => (
      <Card
        key={card.code}
        image={card.image}
        value={card.value}
        updateScore={() => handleScoreUpdate(card.value)}
      />
    ));
  }
 

  return (
    <>
      {handleCardRender()}
    <div className={`div-dealerplayer`}>{dealerPlayer}</div>
    <div className="score">Score: {score}</div>
      
    </>
  );
};

export default CardContainer;
