import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardContainer = ({ deck, drawNumber }) => {

const [hand, setHand] = useState([])

// function handleDraw(){
//     setHand(deck.splice(0, drawNumber))
// }

//   const [cardsDrawn, setCardsDrawn] = useState();
//   console.log(deckId);
//   console.log(drawNumber);

  useEffect(() => {
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${drawNumber}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        console.log(data.cards);
        setCardsDrawn(data.cards);
      });
  }, []);

  function handleCardRender() {
    return (
       hand.map((card) => <Card key={card.code} image={card.image} value={card.value}/>)
        
        );
  }
  return (
    <>
    {/* {handleDraw()} */}
    { handleCardRender() }
    </>
    )
};

export default CardContainer;
