import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import "./App.css";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import axios from "axios";

class App extends Component {
  state = {
    pokemons: [],
    types: [],
    actualpokemonid: "",
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => this.setState({ pokemons: response.data }));
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((response) => this.setState({ types: response.data }));
  }

  getId = (id) => {
    this.setState({ actualpokemonid: id });
    return id;
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route
              path="/pokemon/:id"
              render={(props) => (
                <React.Fragment>
                  <PokemonDetail id={this.state.actualpokemonid} />
                </React.Fragment>
              )}
            />
            <Route
              path="/PokemonList"
              render={(pro) => (
                <React.Fragment>
                  <PokemonList
                    pokemons={this.state.pokemons}
                    getId={this.getId}
                  />
                </React.Fragment>
              )}
            />
            <Route
              path="/TypeList"
              render={(props) => (
                <React.Fragment>
                  <TypeList types={this.state.types} />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
