import React, { useState } from "react";
import CardContainer from "./CardContainer";

const Blackjack = ({ deck }) => {
  const [drawNumber, setDrawNumber] = useState(2);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [turn, setTurn] = useState(1)
  console.log(drawNumber)

  return (
    <>
      <div className="dealer-div">
        <CardContainer turn={turn} draw={drawNumber} deck={deck}/>
        <h1>Dealer: {dealerScore}</h1>
      </div>
      <div className="player-div">
        <CardContainer turn={turn} draw={drawNumber} deck={deck}/>
        <h1>Player: {playerScore}</h1>
      </div>
    </>
  );
};

export default Blackjack;
