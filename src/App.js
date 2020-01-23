import React, { Component } from "react";
import Favourites from "./components/Favourites";
import RandomDog from "./components/RandomDog";
import DogBattle from "./components/DogBattle";
import Breeds from "./components/Breeds";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      favouriteBreeds: [],
      savedPhotos: []
    };
  }
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((savedPhotos) => {
        console.log(savedPhotos.message);
        const array = this.state.savedPhotos;
        array.push(savedPhotos.message);
        this.setState({
          savedPhotos: array
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dogs!</h1>
        </header>
        <Favourites />
        <RandomDog />
        <DogBattle />
        <Breeds />
      </div>
    );
  }
}

export default App;
