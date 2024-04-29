// server.js
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/play', (req, res) => {
  const { playerChoice } = req.body;
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = getResult(playerChoice, computerChoice);
  res.json({ playerChoice, computerChoice, result });
});

const getResult = (player, computer) => {
  if (player === computer) return 'Draw';
  if ((player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')) {
    return 'You win!';
  }
  return 'You lose!';
};

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
