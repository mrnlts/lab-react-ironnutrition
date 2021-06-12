import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onType(e.target.value);
  };

  render() {
    return (
      <input
        className="searchbar"
        placeholder="Type the food you want to search"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}
export default Search;
