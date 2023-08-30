//import logo from './logo.svg';
import './App.css';
import {Increment, Decrement, Reset} from './Components/Button';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState( (state) => ({
      count: state.count + 1
    }))
  }

  decrement = () => {
    this.setState( (state) => ({
      count: state.count - 1
    }))
  }

  reset = () => {
    this.setState ( () => ({
      count: 0
    }))
  }

  render () {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h3>Counter {this.state.count}</h3>
        <Increment increment={this.increment}/>
        <Decrement decrement={this.decrement}/>
        <Reset reset={this.reset}/>
      </div>
    )
  }
}
export default App;