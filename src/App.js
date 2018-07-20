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
      tableAction:"",
      tableName:""
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

  handleSubmit(action,name) {
    console.log("show table for",action,name)

    this.setState({
      tableAction:action,
      tableName:name
    })

  }



  render() {
    return (
      <div>
        <Header />
        <Sidebar handleSubmit={this.handleSubmit}/>
        <Content tableAction={this.state.tableAction}
        tableName={this.state.tableName}/>
      </div>
    );
  }
}

export default App;
