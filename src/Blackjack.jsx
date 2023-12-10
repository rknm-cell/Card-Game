import React, { useState } from "react";
import CardContainer from "./CardContainer";
import { FetchDeck, SetDeck } from "./DeckFetch";


const Blackjack = ({ deckId }) => {
  const [drawNumber, setDrawNumber] = useState(2);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [turn, setTurn] = useState(1)
  const [draw, setDraw] = useState(true)
  const [deck, setDeck] = useState([])
  console.log(drawNumber)
  const drawCards = async () => {
    try {
      const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${drawNumber}`);
      const data = await response.json();
      console.log('Drawn cards:', data.cards);
      setDeck(data.cards)
    } catch (error) {
      console.error('Error drawing cards:', error);
    }
  };

  return (
    <>
    {/* <FetchDeck />
    <SetDeck deckId ={deckId}/> */}
    
    {deck ? <> 
    <div className="dealer-div">
        <CardContainer turn={turn} drawNumber={drawNumber} draw={draw} deck={deck}/>
        <h1>Dealer: {dealerScore}</h1>
      </div>
      <div className="player-div">
        <CardContainer turn={turn} drawNumber={drawNumber} draw={draw} deck={deck}/>
        <h1>Player: {playerScore}</h1>
      </div> </>
      : <>
      
      </> }
      
    </>
  );
};

export default Blackjack;
