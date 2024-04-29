// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const playGame = (playerChoice) => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(playerChoice, computerChoice);
    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);
    setResult(result);
  };

  const getResult = (player, computer) => {
    if (player === computer) return 'Draw';
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
      return 'You win!';
    }
    return 'You lose!';
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
    </div>
  );
}

export default App;
