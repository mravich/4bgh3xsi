import React, { Component } from 'react';
import axios, {get} from 'axios'


class App extends Component {

  goToApi(){
    const url = "http://localhost:8000"
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
   fetch(url, {
     headers:{'Access-Control-Allow-Origin':'*'}}).then((res)=>{console.log(res)})
     .catch(console.log)
  }


  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Activity je poslan: ' + this.state.value);
  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
       <label>
         Add Activity
         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
     </form>
      </div>
    );
  }
}

export default App;
