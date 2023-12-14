import React, { useState, useCallback, useMemo, useEffect } from "react";
import CardContainer from "./CardContainer";

const Blackjack = ({ deckId }) => {
  const [drawNumber, setDrawNumber] = useState(2);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [turn, setTurn] = useState(0);
  const [draw, setDraw] = useState(true);
  const [deck, setDeck] = useState([]);
  const dealerPlayer = ["Dealer", "Player"];

  const drawCards = async () => {
    try {
      const response = await fetch(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${drawNumber}`
      );
      const data = await response.json();
      console.log(data)
      setDeck(data.cards);
    } catch (error) {
      console.error("Error drawing cards:", error);
    }
  };
  
  const handleGameStart = useCallback(async () => {
    setTurn(1);
    setDraw(2);
    for (const player of dealerPlayer) {
      await drawCards();
    }
  }, []);
  
  useEffect(() => {
    if (turn === 1 && draw === 2) {
      dealerPlayer.forEach(async () => {
        await drawCards();
      });
    }
  }, []);
  
  function handleCardRender() {
    return dealerPlayer.map((player) => (
      drawCards(),
      <CardContainer
        key={player}
        dealerPlayer={player}
        turn={turn}
        drawNumber={drawNumber}
        draw={draw}
        deck={deck}
      />
    ));
  }
  return (
  
  <>
  
  {handleCardRender()}
  </>
  )
};
export default Blackjack;
