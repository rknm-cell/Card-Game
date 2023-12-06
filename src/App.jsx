import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Games from "./Games";
import LandingPage from "./LandingPage";

function App() {
  const [game, setGame] = useState(null);
  const [deckNumber, setDeckNumber] = useState(1);
  const [deckId, setDeckId] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deckNumber}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.deck_id)
        setDeckId(data.deck_id);
      });
  }, []);
  return (
    <>
      
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/games" element={<Games deck={deckId}/>} />
      </Routes>
    </>
  );
}

export default App;
