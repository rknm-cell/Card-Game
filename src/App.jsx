import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [game, setGame] = useState(null)
  const [deckNumber, setDeckNumber] = useState(1)
  const [deckId, setDeckId] = useState(null)
  

  useEffect(()=>{
    fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deckNumber}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    setDeckId(data.id);
  })
  },[])
  return (
    <>
    <h1>Card Game!</h1>
    <Route
            path="/products"
            element={
              <ProductGrid
                searchInput={searchInput}
                onSearch={onSearch}
                wines={filteredWines}
                user={user}
                session={session}
              />
      
    </>
  )
}

export default App
