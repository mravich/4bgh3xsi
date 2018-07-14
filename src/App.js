import React, { Component } from 'react';
import axios, {get} from 'axios'

class App extends Component {

  goToApi(){
    const url = "http://localhost:8000"
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
   fetch(url, {
     headers:{'Access-Control-Allow-Origin':'*'}}).catch(console.log)
  }

  render() {
    return (
      <div className="App">
      <button onClick={()=>this.goToApi()}>
      Go to API!
      </button>
      </div>
    );
  }
}

export default App;
