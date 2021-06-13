import React, { Component } from 'react';
import Listitem from '../Listitem/Listitem';
import './FoodList.css';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todaysFoods: this.props.todaysFoods,
    };
  }

  removeItem = (item) => {
    this.props.remove(item);
  };

  updateList = () => {
    this.setState({
      todaysFoods: this.props.todaysFoods,
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todaysFoods.map((food, index) => (
            <Listitem item={food} key={index} delete={this.removeItem} />
          ))}
        </ul>
      </div>
    );
  }
}

export default FoodList;
