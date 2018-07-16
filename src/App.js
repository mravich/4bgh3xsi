import React, { Component } from 'react';
import { get, post } from 'axios';
import Table from './components/table';
import {DATABASE_COLLECTIONS} from "./constants";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Activity je poslan: ' + this.state.value);
  }

  render() {
    return (
      <div
        className="container"
        style={{ textAlign: 'center', maxWidth: '1900px' }}
      >
        <h1>DATABASE MANAGMENT APP</h1>
          {Object.entries(DATABASE_COLLECTIONS).map((item,key)=>{
            return <Table property={item[0]} key={key}/>
          })}
      </div>
    );
  }
}

export default App;
