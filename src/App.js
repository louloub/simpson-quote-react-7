import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const sampleSimpson = [
  {
    "quote": "By chilling my loins I increase the chances of impregnating my wife.",
    "character": "Apu Nahasapeemapetilon",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    "characterDirection": "Left"
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: sampleSimpson
    };
    
    this.getSimpson = this.getSimpson.bind(this);
    // This ensures that inside getEmployee, this actually refers to the component instance.
  }

  getSimpson() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          simpson: data.results[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <DisplayEmployee employee={this.state.employee} />
        <button type="button" onClick={this.getEmployee}>Get employee</button>
      </div>
    );
  }
}

export default App;
