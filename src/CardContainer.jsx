import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardContainer = ({ deck, drawNumber, turn, draw }) => {
  const [hand, setHand] = useState([]);
  const [score, setScore] = useState(0);
    function handleCardDraw(){
        setHand(deck.splice(0, draw)) 
    }


  function handleCardRender() {
    return hand.map((card) => (
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
      
    </>
  );
};

export default CardContainer;
