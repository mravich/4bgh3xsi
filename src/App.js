import React, { Component } from 'react';
import axios, {get} from 'axios'

class App extends Component {

  goToApi(){
    const url = "https://localhost:8000"
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    get(proxyUrl + url,
    {
    //  withCredentials: true,
    mode:"no-cors",
      headers:{
        "Content-Type": "text/plane",
        "Accept": "application/json"
      }
    })
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
