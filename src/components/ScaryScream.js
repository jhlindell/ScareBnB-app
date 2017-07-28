import React from "react";

class ScaryScream extends React.Component {
  render() {
  return (
    <Sound


      playFromPosition={3000 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
  );
}
}

export default ScaryScream;
