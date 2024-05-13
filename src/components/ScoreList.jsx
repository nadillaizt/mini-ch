import React from 'react';
import ScoreItem from './ScoreItem';

const ScoreList = ({ scores, onDelete }) => {
  return (
    <div>
      {scores.map((score) => (
        <ScoreItem key={score.id} score={score} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ScoreList;
