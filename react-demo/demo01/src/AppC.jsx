import { useState, Component } from 'react'
import logo from './logo.svg'
import './App.css'


class AppC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  } 

  setCount(newValue) {
    this.setState({count: newValue})
  }


  render() {
    console.log(this.state.count);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello React Class Component!</p>
          <p>
            <button type="button" onClick={() => this.setCount(this.state.count+1)}>
              count is: {this.state.count}
            </button>
          </p>
        </header>
      </div>
    );
  }
}

export default AppC
