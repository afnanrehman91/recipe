import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "6afb93323b63eec2ee9e4850f81cc505";

class App extends Component {
  state = {
    recipes: []
  };

  handleOnSubmit = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const API_CALL = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=3`
    );
    const data = await API_CALL.json();
    this.setState({ recipes: data.recipes });
    //console.log(this.state.recipes);
  };

componentDidMount = () => {
  const jsonObject = localStorage.getItem("recipes");
  const recipes = JSON.parse(jsonObject);
//  this.setState({ recipes });
}

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form handleOnSubmit={this.handleOnSubmit} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
