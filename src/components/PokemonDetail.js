import React, { Component } from "react";
import axios from "axios";

export class PokemonDetail extends Component {
  state = {
    actualPokemon: [],
    picture: [],
  };

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.id}/`)
      .then((response) => {
        this.setState({ actualPokemon: response.data });
        this.setState({ picture: response.data.sprites });
      });
  }

  render() {
    return (
      <div
        class="card"
        style={{
          width: "30%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
          border: "black solid",
        }}
      >
        <img
          class="card"
          src={this.state.picture.front_default}
          alt="image"
          style={{ background: "#eee", marginLeft: "225px" }}
        ></img>
        <div class="card-body">
          <p class="card-text" style={{ textAlign: "center" }}>
            <b>{this.state.actualPokemon.name}</b>
            <div>Id: {this.state.actualPokemon.id}</div>
            <div>Height: {this.state.actualPokemon.height}</div>
            <div>Weight: {this.state.actualPokemon.weight}</div>
            <div>
              Base experience: {this.state.actualPokemon.base_experience}
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
