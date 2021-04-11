import React, {Component} from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeypadComponent from './components/KeypadComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if(button === "=") {
      this.calculate()
    } else if (button === "C") {
      this.reset()
    } else if (button === "CE") {
      this.backspace()
    } else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    try {
      this.setState({
        //eslint-disable-next-line
        result: (eval(this.state.result) || "" ) + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div>
        <div className="title">
          <h1>Simple Calculator</h1>
          <h2>- Allison Lizaso -</h2>
          </div>
        <div className="calculator-body">
          <ResultComponent result={this.state.result}/>
          <KeypadComponent onClick={this.onClick}/>
        </div>

        <div className="foot">
          <h3>Created using React and Visual Studio Code</h3>
          <h4>April 11th, 2021</h4>
          <h5><a href="https://github.com/al-lizaso">Github/al-lizaso</a></h5>
        </div>
      </div>
    );
  }
}

export default App;
