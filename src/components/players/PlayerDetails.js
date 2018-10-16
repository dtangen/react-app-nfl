import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const PlayerDetails = props => {
  const { player } = props;

  if (player) {
    return (
      <div className="container section player-details">
        <div className="card z-depth-0">
          <div className="card-content center player-content">
            <span className="card-title">{player.name}</span>
            <div className="wrapper left">
              <img src={player.image} alt="Player" />
            </div>
            <div className="info center col s12 m4">
              <div className="player-stats">
                Position(s):
                {player.position.map(position => {
                  return (
                    <p>
                      {position}
                      {"\u00A0"}
                    </p>
                  );
                })}
              </div>
              <div className="player-stats">
                Team(s):
                {player.teams.map(team => {
                  return (
                    <p>
                      {team}
                      {"\u00A0"}
                    </p>
                  );
                })}
              </div>
              <div className="player-stats">
                Years Active:
                <p>
                  {player.years[0]} - {player.years[player.years.length - 1]}
                </p>
              </div>
              <div className="player-stats">
                Inducted:
                <p>{player.class}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Player ...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const players = state.firestore.data.players;
  const player = players ? players[id] : null;
  return {
    player: player
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "players" }])
)(PlayerDetails);
