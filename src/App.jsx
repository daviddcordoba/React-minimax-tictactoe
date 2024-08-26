import { useState } from 'react';
import './App.css';
import confetti from 'canvas-confetti'
import { Square } from './components/Square';
import { TURNS, BOARD_SIZE } from './constants';
import { getWinner } from './lib/main';
import { WinnerModal } from './components/WinnerModal';

function App() {
  // Inicializar el tablero como un arreglo bidimensional
  const [board, setBoard] = useState(Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill('-')));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState('-');
  const checkEndGame = (board) => board.flat().every(square => square !== '-'); 

  const updateBoard = (index) => {
    const row = Math.floor(index / BOARD_SIZE);
    const col = index % BOARD_SIZE

    if (board[row][col] === TURNS.X || board[row][col] === TURNS.O || winner !== '-') {
      return;
    }


    const newBoard = board.map(row => [...row]);
    
    newBoard[row][col] = turn;
    setBoard(newBoard);

    
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = getWinner(newBoard);

    if (newWinner !== '-') {
      confetti()
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner('Empate');
    }
  }
    
  
  
  const resetGame = () => {
    setBoard(Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill('-')))
    setTurn(TURNS.X)
    setWinner('-')
  }

  return (
    <main className="board">
      <h1>tic-tac-toe</h1>
      <button onClick={resetGame}>Reiniciar el juego</button>
      <section className="game">
        {board.flat().map((square, index) => (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
            {square}
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  );
}

export default App;
