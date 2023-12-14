import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Games from "./Games";
import LandingPage from "./LandingPage";
import Blackjack from "./Blackjack";
import NavBar from "./NavBar";

function App() {
  const [game, setGame] = useState(null);
  const [deckNumber, setDeckNumber] = useState(6);
  const [deckId, setDeckId] = useState(null);
  const [deck, setDeck] = useState([])
  const [drawNumber, setDrawNumber] = useState(52 * deckNumber)


  // maybe add a mount check so that the useeffect doesn't run if the 
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deckNumber}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch data from the API');
        }

        const data = await response.json();

        // Check if the component is still mounted before updating state
        if (isMounted) {
          console.log(data)
          setDeckId(data.deck_id);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
        // You may want to handle errors, e.g., set an error state
      }
    };

    fetchData();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

 

 

  
  
  return (
    <>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/games" element={<Games deck={deck}/>} />
        <Route path="/blackjack"  element={<Blackjack deckId={deckId}/>}/>
      </Routes>
    </>
  );
}

export default App;
