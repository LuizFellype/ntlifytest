import React, { Component } from 'react';

class Camera extends Component {
  render() {
    return (
      <div style={{marginTop: "20px" }}>
        <input type="file" accept="image/*" capture="environment" />
      </div>
    );
  }
}

export default Camera;
