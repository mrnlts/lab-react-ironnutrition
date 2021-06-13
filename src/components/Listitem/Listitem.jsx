import React, { Component } from 'react';

class Listitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFood: this.props.item,
    };
  }

  removeItem = () => {
    this.props.delete(this.state.currentFood);
  };

  render() {
    const food = this.state.currentFood;
    return (
      <li>
        {food.quantity > 0 ? (
          <div className="flex list-item">
            <p className="w-50">
              {food.quantity} {food.name} = {food.calories * food.quantity} cal
            </p>
            <i className="fas fa-trash-alt" onClick={this.removeItem}></i>{' '}
          </div>
        ) : null}
      </li>
    );
  }
}

export default Listitem;
