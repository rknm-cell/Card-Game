import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Games from "./Games";
import LandingPage from "./LandingPage";
import Blackjack from "./Blackjack";

function App() {
  const [game, setGame] = useState(null);
  const [deckNumber, setDeckNumber] = useState(6);
  const [deckId, setDeckId] = useState(null);
  const [deck, setDeck] = useState([])
  const [drawNumber, setDrawNumber] = useState(52 * deckNumber)

  useEffect(() => {
    fetch(
      `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deckNumber}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setDeckId(data.deck_id);
      })
      .then();
  }, []);

  useEffect(() => {
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${drawNumber}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setDeck(data.cards)
      console.log(deck)
    })
  },[deckId])
  
  return (
    <>
      
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/games" element={<Games deck={deck}/>} />
        <Route path="/blackjack" element={<Blackjack deck={deck}/>}/>
      </Routes>
    </>
  );
}

export default App;
