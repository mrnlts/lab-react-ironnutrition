import React, { Component } from 'react';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: this.props.foods,
    };
  }
  render() {
    return (
      <div>
        <ul>
          {[...this.state.foods].map((food) => (
            <li>
              {`${
                food.quantity +
                ' ' +
                food.name +
                '=' +
                food.calories * food.quantity
              }cal
              `}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FoodList;
