import Player from "./components/player"
import { useState } from "react"
import GameBoard from "./components/gameboard"

function App() {
 

  return (
    <main>
    <div id="game-container">
      <ol id="players">
       <Player user="player 1" symbol="X" ></Player>
       <Player user="player 2" symbol="O" ></Player>
      </ol>
      <GameBoard/>
    </div>
  
    </main>
  )
}

export default App
