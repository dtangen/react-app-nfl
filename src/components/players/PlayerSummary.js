import React from "react";

const PlayerSummary = ({ player }) => {
  return (
    <div className="card z-depth-0 player-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{player.name}</span>
      </div>
    </div>
  );
};

export default PlayerSummary;
