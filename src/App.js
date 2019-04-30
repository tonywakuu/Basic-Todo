import React, { Component } from 'react';
import './App.css';
import {
  Input,
  Header,
  Body
} from './common'


// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'


library.add(faPlusSquare)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
}

onSubmit(e) {
  e.preventDefault()
  const newItem = {
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
  };
  const list = [...this.state.list];
  list.push(newItem);
  this.setState({
    list,
    newItem: ""
  });
}


render() {
  const {
    newItem
  } = this.state
  

  return (
    <div className="App">
      <Header className="App-header">
        <h2>
         React Todo App
        </h2>
      </Header>
    <Body className="App-body">
        Add Todo's:
      <Input
        placeholder="Your Todo..."
        value={newItem}
        onChange={newItem => this.setState({ newItem })}
        />
      <FontAwesomeIcon icon="plus-square"
        large
        type="submit"
        onClick={this.onSubmit.bind(this)} 
        /> 
      <p>
        Todo List:
        <ul>
        {this.state.list.map(item => {
          return (
            <li key={item.id}>
              {item.value}
            </li>
            );
          })}
        </ul>
      </p>
    </Body>
      <footer className="App-footer">
        React TODOs * Tony Walker
      </footer>
    </div>
    );
  }
}

export default App;
