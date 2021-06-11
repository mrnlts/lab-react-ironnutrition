import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';


function App() {
  return (
    <div className="App">
      <h1 className="f-3 p-l">IronNutrition</h1>
      {foods.map(food => <FoodBox item={ food }/>)}
    </div>
  );
}

export default App;
