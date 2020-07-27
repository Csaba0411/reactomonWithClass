import React, { Component } from "react";

export class TypeList extends Component {
  render() {
    return this.props.types.results.map((type) => <h3>{type.name}</h3>);
  }
}

export default TypeList;
