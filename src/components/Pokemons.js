import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Pokemons extends Component {
  state = {
    actualPokemon: [],
    picture: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${this.props.pok.url
          .split("pokemon/")[1]
          .replace("/", "")}/`
      )
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
          border: "solid black",
          marginLeft: "10px",
          marginRight: "auto",
          width: "20%",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        <div class="container">
          <Link
            to={`pokemon/${this.props.pok.url
              .split("pokemon/")[1]
              .replace("/", "")}`}
            onClick={this.props.getId.bind(
              this,
              this.props.pok.url.split("pokemon/")[1].replace("/", "")
            )}
          >
            <h3>{this.props.pok.name}</h3>
          </Link>
        </div>
        <div class="pic">
          <img
            src={this.state.picture.front_default}
            alt="pic"
            style={{ width: "100%", background: "#eee" }}
          ></img>
        </div>
      </div>
    );
  }
}

export default Pokemons;
