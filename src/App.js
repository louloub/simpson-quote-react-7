import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Displaysimpson from './components/DisplaySimpson';

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
  }

  getSimpson() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
    // let a = axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
    // console.log("a ==> " +a[0])
    // console.log("a 2 ==> " +a)
    // console.log("a 3 ==> " +a[0])
    // console.log("a 4 ==> " +a[0].data)
    .then(response => response.data)
    .then(data => {
      console.log("data ==> " +data)
      console.log("data character ==> " +data.character)
      this.setState({
        simpson : data
      })
    })
  }

  render() {
    return (
      <div className="App">
        {console.log("state simpson ==> " +this.state.simpson[0])}
        <Displaysimpson simpson={this.state.simpson[0]} />
        <button type="button" onClick={this.getSimpson}>Get simpson</button>
      </div>
    );
  }
}

export default App;

/* 

axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
    .then(response => response.data)
    .then(data => {
      this.setState({
        simpson : data.result
      })
    })

---

getSimpson() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      console.log(response)
      .then(data => {
        this.setState({
          simpson: data.results[0],
        });
    });
  }
*/