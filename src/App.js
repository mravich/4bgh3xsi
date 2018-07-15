import React, { Component } from 'react';
import axios, {get,post} from 'axios'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  addNewActivity(){
    const url = "http://localhost:8000/addActivity"
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
   post(url,{activityName:this.state.value}, {
     headers:{'Access-Control-Allow-Origin':'*'}}).then((res)=>{console.log(res)})
     .catch(console.log)
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

       <label>
         Add Activity
         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
      <button onClick={()=>this.addNewActivity()}>Add activity</button>

      </div>
    );
  }
}

export default App;
