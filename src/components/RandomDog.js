import React from "react";
import "./RandomDog.css";

class RandomDog extends React.Component {
  render() {
    return (
      <div className="RandomDog">
        <h2 className="RandomDog-title">Random Dogs</h2>
        <img className="RandomDog-image" />

        <button className="RandomDog-button">Save Image</button>
        <button className="RandomDog-button">Next Dog</button>
      </div>
    );
  }
}

export default RandomDog;
