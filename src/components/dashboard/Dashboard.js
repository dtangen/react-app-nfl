import React, { Component } from "react";
import PlayerList from "../players/PlayerList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { players } = this.props;
    return (
      <div className="dashbaord container">
        <div className="row">
        <div className="col m3"></div>
          <div className="center col s12 m6">
            <PlayerList players={players} />
          </div>
          <div className="col m3"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    players: state.firestore.ordered.players
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "players" }])
)(Dashboard);
