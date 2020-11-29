import React, {Component} from 'react';
import Counter from './Components/Counter';
import './App.css';

class App extends Component {
  state = {
    startCount: [
      
    ]
  }  (props){
  
  return (
    <div className="App">
      <Counter startCount={0} countingRate={1} />
      <Counter startCount={2} countingRate={2} />
      <Counter startCount={3} countingRate={3} />
      <Counter startCount={4} countingRate={4} />
      <p>* starting count updates in console. no render function</p>
    </div> 
  );
  
}

export default App;
