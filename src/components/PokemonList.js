import React, { Component } from "react";
import Pokemons from "./Pokemons";

export class PokemonList extends Component {
  render() {
    return this.props.pokemons.results.map((pok) => (
      <Pokemons pok={pok} getId={this.props.getId} />
    ));
    // return this.props.pokemons.results.map((pok) => (
    //   <Link
    //     to={`/${pok.url.split("pokemon/")[1].replace("/", "")}`}
    //     onClick={this.props.getId.bind(
    //       this,
    //       pok.url.split("pokemon/")[1].replace("/", "")
    //     )}
    //   >
    //     <h3>{pok.name}</h3>
    //   </Link>
    // ));
  }
}

export default PokemonList;
