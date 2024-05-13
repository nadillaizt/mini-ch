import React from 'react';

const ScoreItem = ({ score, onDelete }) => {
  return (
    <div>
      <span>{score.name}: {score.score}</span>
      <button onClick={() => onDelete(score.id)}>Hapus</button>
    </div>
  );
};

export default ScoreItem;
