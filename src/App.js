import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Form from './components/Form/Form';
import Search from './components/Search/Search';
class App extends Component{
  constructor() {
    super()
    this.state = {
      foods: foods,
      filteredFoods: foods
    }
  }

  addNewFood = (e, name, calories, image) => {
    e.preventDefault();
    const oldFoods = [...this.state.foods];
    oldFoods.push({ name, calories: Number(calories), image, quantity: 0 })
    this.setState({
      foods: oldFoods,
      filteredFoods: oldFoods
    })
  }

  checkString = (query) => {
    const filteredFoods = [...this.state.foods].filter(food => food.name.toLowerCase().includes(query))
    return this.setState({
      filteredFoods: filteredFoods
    })
  }

  render() {
    const { filteredFoods } = this.state;
    return (
      <div>
        <div className="App_header">
          <h1 className="f-3 p-l">IronNutrition</h1>
          <Form add={ this.addNewFood}/>
        </div>
        <Search onType={this.checkString}/>
        {(filteredFoods.length === 0) ? 'No items found' : filteredFoods.map((food, index) => <FoodBox key={index} item={ food }/>)}
      </div>
      );
  }
}

export default App;
