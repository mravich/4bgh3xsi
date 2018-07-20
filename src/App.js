import React, { Component } from 'react';
import { get, post } from 'axios';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header';
import Content from './components/content/content';
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

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
