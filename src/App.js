import React, { Component } from 'react';
import { get, post } from 'axios';
import Table from './components/table';
import { DATABASE_COLLECTIONS } from './constants';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      message: '',
      showMenu: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({
      showMenu: true,
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Activity je poslan: ' + this.state.value);
  }

  /*OVO TU TI JE IZLIST SVIH TABLICA -> SVAKA MORA DOBIT property="Ime koleckije" da bi znala koje fieldove treba imati -> to je u database.js


        <h1>DATABASE MANAGMENT APP</h1>
        {Object.entries(DATABASE_COLLECTIONS).map((item, key) => {
        console.log("ITEM: ", item)
          return <Table property={item[0]} key={key} />;
        })}
   */
  render() {
    return (
      <div
        className="container"
        style={{ textAlign: 'center', maxWidth: '1900px' }}
      >
        <button onClick={this.showMenu}>Show me databases</button>
        {this.state.showMenu ? (
          <div className="menu">
            <Table property="Activity" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
