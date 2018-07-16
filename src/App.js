import React, { Component } from 'react';
import { get, post } from 'axios';
import Table from './components/table'
import { DATABASE_COLLECTIONS } from './constants/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      message: '',
      showMenu :false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewActivity = this.addNewActivity.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }
  showMenu(event){
    event.preventDefault()
    this.setState({
      showMenu:true,
    });
  }

  addNewActivity() {
    const url = 'http://localhost:8000/addActivity';
    post(
      url,
      { activityName: this.state.value },
      {
        headers: { 'Access-Control-Allow-Origin': '*' },
      },
    )
      .then(response => {
        this.setState({
          message: 'Successfully added new activity: ' + response.data.name,
        });
      })
      .catch(console.log);
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
        style={{ textAlign: 'center', maxWidth: '1900px' }}>
        <h1>DATABASE MANAGMENT APP</h1>
        <button onClick={this.showMenu}>
          Show me databases
        </button>
         {
        this.state.showMenu ?
        (
          <div className = "menu">
         <Table property="Activity"/>
          </div>
        )
        :(
          null
        )
      }

      </div>
    );
  }
}

export default App;
