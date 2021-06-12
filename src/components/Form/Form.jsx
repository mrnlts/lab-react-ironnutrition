import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formDisplay: 'none',
      btnDisplay: 'block',
      foodName: '',
      foodCals: '',
      foodImg: '',
    };
  }
  addNewFood = (e) => {
    const { foodName, foodCals, foodImg } = this.state;
    this.props.add(e, foodName, foodCals, foodImg);
    this.handleClick();
    this.setState({ foodName: '', foodCals: '', foodImg: '' });
  };

  handleClick = () => {
    this.setState({
      formDisplay: this.state.formDisplay === 'block' ? 'none' : 'block',
      btnDisplay: this.state.btnDisplay === 'none' ? 'block' : 'none',
    });
  };

  handleChangeName = (e) => this.setState({ foodName: e.target.value });
  handleChangeCals = (e) => this.setState({ foodCals: e.target.value });
  handleChangeImg = (e) => this.setState({ foodImg: e.target.value });

  render() {
    return (
      <div>
        <button
          style={{ display: `${this.state.btnDisplay}` }}
          onClick={this.handleClick}
        >
          Add new food
        </button>
        <form style={{ display: `${this.state.formDisplay}` }}>
          <label htmlFor="foodName">Food name:</label>
          <input
            type="text"
            value={this.state.foodName}
            onChange={this.handleChangeName}
          />
          <label htmlFor="foodCals">Food calories:</label>
          <input
            type="number"
            value={this.state.foodCals}
            onChange={this.handleChangeCals}
          />
          <label htmlFor="foodImg">Food image:</label>
          <input
            type="text"
            value={this.state.foodImg}
            onChange={this.handleChangeImg}
          />
          <button onClick={this.addNewFood}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
