// src/components/Game.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import styles from './styles.module.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  font-size: 1.5rem;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
`;

const Game = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = async (choice) => {
    setPlayerChoice(choice);
    const response = await fetch('http://localhost:5000/play', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ playerChoice: choice })
    });
    const { computerChoice, result } = await response.json();
    setComputerChoice(computerChoice);
    setResult(result);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <div className={styles.choices}>
        {choices.map((choice) => (
          <Button key={choice} onClick={() => handleClick(choice)}>
            {choice}
          </Button>
        ))}
      </div>
      <Modal show={showModal} result={result} onClose={handleCloseModal} />
    </Container>
  );
};

export default Game;
