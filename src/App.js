import React, { useState } from 'react';
import './App.css';

const ScoreItem = ({ score, onDelete }) => {
  return (
    <div>
      <span>{score.name}: {score.score}</span>
      <button onClick={() => onDelete(score.id)}>Hapus</button>
    </div>
  );
};

const ScoreList = ({ scores, onDelete }) => {
  return (
    <div>
      {scores.map((score) => (
        <ScoreItem key={score.id} score={score} onDelete={onDelete} />
      ))}
    </div>
  );
};

function App() {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [scores, setScores] = useState([
    { id: 1, name: 'Player 1', score: 100 },
    { id: 2, name: 'Player 2', score: 150 },
    // tambahkan data lain jika perlu
  ]);

  const playGame = (playerChoice) => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(playerChoice, computerChoice);
    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);
    setResult(result);
  };

  const getResult = (player, computer) => {
    let newPlayerScore = playerScore;
    let newComputerScore = computerScore;

    if (player === computer) return 'Draw';

    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
      newPlayerScore++;
      setPlayerScore(newPlayerScore);
      return 'You win!';
    }

    newComputerScore++;
    setComputerScore(newComputerScore);
    return 'You lose!';
  };

  const handleDelete = (id) => {
    if (id === 1) {
      setPlayerScore(0); // Reset player score
    } else if (id === 2) {
      setComputerScore(0); // Reset computer score
    } else {
      setScores(scores.filter((score) => score.id !== id)); // Hapus skor berdasarkan ID
    }
  };
  

  return (
    <div className="container">
      <h1>Rock Paper Scissors</h1>
      <div className="buttons">
        <button onClick={() => playGame('rock')}>Rock</button>
        <button onClick={() => playGame('paper')}>Paper</button>
        <button onClick={() => playGame('scissors')}>Scissors</button>
      </div>
      <div className="result">
        {playerChoice && computerChoice && result && (
          <>
            <h2>Player Choice: {playerChoice}</h2>
            <h2>Computer Choice: {computerChoice}</h2>
            <h2>Result: {result}</h2>
          </>
        )}
      </div>
      <div className="score">
        <h2>Player Score: {playerScore} <button onClick={() => handleDelete(1)}>Hapus</button></h2>
        <h2>Computer Score: {computerScore} <button onClick={() => handleDelete(2)}>Hapus</button></h2>
      </div>

    </div>
  );
}

export default App;
