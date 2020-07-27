import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h3 style={linkStyle}>These are our amazing links:</h3>
      <Link to="/PokemonList">PokemonList</Link>|
      <Link to="/TypeList">TypeList</Link>
    </div>
  );
}

const linkStyle = {
  color: "#333",
};
