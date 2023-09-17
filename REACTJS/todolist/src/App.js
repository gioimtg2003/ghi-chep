import './App.css';
import { Button } from './components/Button/Button';
import { Input } from './components/input/Input';
import { connect } from 'react-redux';
import { List } from './components/listTodo/List';
import 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './listAction';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      loading: true
    }
  }

  onChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }
      , 500)
  }
  componentWillMount(){
    if(localStorage.getItem('todos')){
      const todos = JSON.parse(localStorage.getItem('todos'));
      for (let i = 0; i < todos.length; i++) {
        this.props.onAdd(todos[i]);
      }
    }
  }
  addTodo = () => {
    this.props.onAdd(this.state.input);
    this.setState({
      input: ''
    });
  }
  onKeyUp = () => {
    this.props.onAdd(this.state.input);
    this.setState({
      input: ''
    });
  }

  onDelete = (id) => {
    this.props.onDelete(id);
  }
  render() {
    const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    
    if (this.state.loading) {
      document.title = 'Loading...';
      return <div>Loading...</div>
    }
    document.title = 'Todo List';
    return (
      <div className="App">
        <div className="App-header">
          <h1>Todo List</h1>
          <div className="container-header" style={{width:'40%'}}>
            <Input value={this.state.input} onChange={this.onChange}  onKeyUp={this.onKeyUp}/>
            <Button text="ADD"  onClick={this.addTodo}/>
          </div>
          <List todos={todos} onDelete={this.onDelete} />
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
