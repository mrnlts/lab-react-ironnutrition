import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Form from './components/Form/Form';
import Search from './components/Search/Search';
import FoodList from './components/FoodList/FoodList';
class App extends Component{
  constructor() {
    super()
    this.state = {
      foods: foods,
      filteredFoods: foods,
      todaysFoods: [],
      cals: 0
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

  updateCals = (foods) => {
    let cals = 0;
    foods.forEach(food => cals = cals + (food.calories * food.quantity));
    return cals;
  }
  
  addTodaysFoods = (item) => {
    const oldFoods = this.state.foods;
    oldFoods.map(food => food === item ? food.quantity = food.quantity + 1 : null)

    const oldTodaysFoods = this.state.todaysFoods;
    if (!oldTodaysFoods.includes(item)) {
      oldTodaysFoods.push(item)
    }
    
    this.setState({
      foods: oldFoods,
      todaysFoods: oldTodaysFoods,
      cals: this.updateCals(oldTodaysFoods)
    })
  }

  removeItem = (item) => {
    const oldFoods = this.state.foods;
    oldFoods.map(food => food === item ? food.quantity = 0 : null);

    const oldTodaysFoods = [...this.state.todaysFoods];
    oldTodaysFoods.splice([this.state.todaysFoods.indexOf(item)], 1);
    this.setState({
      foods: oldFoods,
      todaysFoods: oldTodaysFoods,
      cals: this.updateCals(oldTodaysFoods)
    })
  }

  render() {
    const { filteredFoods } = this.state;
    return (
      <div>
        <div className="flex">
          <h1 className="f-3 p-l">IronNutrition</h1>
          <Form add={ this.addNewFood}/>
        </div>

        <Search onType={this.checkString}/>
        <div className="flex">
          <div className="w-50 p-l">
            {(filteredFoods.length === 0) ? 'No items found' : filteredFoods.map((food, index) => <FoodBox key={index} item={food} add={this.addTodaysFoods}/>)}
          </div>
          <div className="w-50">
            <h1 className="f-2">Today's foods</h1>
            <FoodList todaysFoods={this.state.todaysFoods} remove={this.removeItem}/>
            <p>{`Total: ${this.state.cals + ''} cal`}</p>
          </div>
        </div>
      </div>
      );
  }
}

export default App;
