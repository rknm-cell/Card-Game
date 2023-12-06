import React from 'react'

const DeckFetch = () => {
   
  return (
    <div>DeckFetch</div>
  )
}
export const FetchDeck = () => {
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
}

export const SetDeck = ({deckId}) => {
        
    useEffect(() => {
    
    fetch(`https://www.deckofcardsapi.com/api/deck/kod6wv5zzot0/draw/?count=${drawNumber}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setDeck(data.cards)
      console.log(deck)
    })
   
  },[])

}

export default DeckFetch