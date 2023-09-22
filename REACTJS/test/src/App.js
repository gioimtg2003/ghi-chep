//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { w3cwebsocket } from 'websocket';
const client = new w3cwebsocket('ws://localhost:8080');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply! ', dataFromServer);
      if (dataFromServer.type === 'message') {
        this.setState((state, props) => ({
          count: state.count + 1
        }));
      }
    }
  }

  render () {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h3>Counter {this.state.count}</h3>
        
      </div>
    )
  }
}
export default App;