import React, { Component } from 'react';

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <div className="box w-50">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={item.image} alt="pizza" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{item.name}</strong> <br />
                <small>{item.calories}cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={item.quantity} />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
