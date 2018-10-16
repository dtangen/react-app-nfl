import React from "react";
import PlayerSummary from "./PlayerSummary";
import { Link } from "react-router-dom";

const PlayerList = ({ players }) => {
  return (
    <div className="player-list-section">
      {players &&
        players.map(player => {
          return (
            <Link to={"/player/" + player.id} key={player.id}>
              <PlayerSummary player={player} />
            </Link>
          );
        })}
    </div>
  );
};

export default PlayerList;
