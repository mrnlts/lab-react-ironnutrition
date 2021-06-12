import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import { Component } from 'react';
import Form from './components/Form/Form';

class App extends Component{
  constructor() {
    super()
    this.state = {
      foods: foods
    }
  }

  addNewFood = (e, name, calories, image) => {
    e.preventDefault();
    const oldFoods = [...this.state.foods];
    oldFoods.push({ name, calories: Number(calories), image, quantity: 0 })
    this.setState({
      foods: oldFoods 
    })
  }

  render() {
    return (
      <div>
        <div className="App_header">
          <h1 className="f-3 p-l">IronNutrition</h1>
          <Form type="add" add={ this.addNewFood}/>
        </div>
        {this.state.foods.map((food, index) => <FoodBox key={index} item={ food }/>)}
      </div>
      );
  }
}

export default App;
