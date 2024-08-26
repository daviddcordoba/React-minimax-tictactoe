import { Square } from "./Square"

export function WinnerModal ({winner,resetGame}){
    if(winner == '-') return null
    return(
        <section className="winner">
              <div className="text">
                <h2>{winner === 'Empate' ? 'Empate' : `Ganó: ${winner}`}</h2>
                <header className="win">{winner !== 'Empate' && <Square>{winner}</Square>}</header>
                <footer>
                  <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
              </div>
        </section>
      
    )
}