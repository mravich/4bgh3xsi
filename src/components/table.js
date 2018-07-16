import React, { Component } from 'react';
import { post } from 'axios';
import DateTime from 'react-datetime';
import {
  ADD_ITEM_URL,
  REQUEST_OPTIONS,
  DATABASE_COLLECTIONS,
} from '../constants';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errMessage: '',
    };

    this.handleActionButtonClick = this.handleActionButtonClick.bind(this);
  }

  componentDidMount() {
    DATABASE_COLLECTIONS[this.props.property].tableOptions.map((item, key) => {
      if (item.value !== 'Action') {
        return this.setState({
          [item.code]: '',
          itemValue: this.props.property
        });
      }
    });
  }

  handleChange(e) {
    console.log("NAME: ", e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleActionButtonClick() {
    Object.entries(this.state).map((item, key) => {
      console.log('Item:', Object.keys(item));
      if (!item) {
        return this.setState({
          errMessage: 'Please provide all required fields.',
        });
      }
    });

    const requestBody = this.state;
    return post(ADD_ITEM_URL, requestBody, REQUEST_OPTIONS)
      .then(res => console.log('Response: ', res))
      .catch(error => console.log('Error occured: ', error));
  }

  getTableField(item) {
    switch (item.type) {
      case 'input':
        return (
          <input
            type="text"
            className={item.className}
            placeholder={item.placeholder}
            name={item.code}
            onChange={this.handleChange.bind(this)}
          />
        );
      case 'button':
        return (
          <button
            className={item.className}
            onClick={() => {
              this.handleActionButtonClick();
            }}
          >
            {item.actionText}
          </button>
        );
      case 'date':
        return <DateTime inputProps={{ placeholder: 'N/A', disabled: true }} />;
    }
  }
  getTableHeader(property) {
    return (
      <thead>
        <tr>
          {DATABASE_COLLECTIONS[property].tableOptions.map((item, key) => {
            return <th key={key}>{item.value}</th>;
          })}
        </tr>
      </thead>
    );
  }
  getTableBody(property) {
    return (
      <tbody>
        <tr>
          {DATABASE_COLLECTIONS[property].tableOptions.map((item, key) => {
            return <td key={key}>{this.getTableField(item)}</td>;
          })}
        </tr>
      </tbody>
    );
  }

  getTable(property) {
    return (
      <div style={{ borderStyle: 'solid', marginBottom: '10px' }}>
        <h2>Add new {property} table</h2>
        <table className="table">
          {this.getTableHeader(property)}
          {this.getTableBody(property)}
        </table>
      </div>
    );
  }
  render() {
    return (
      <div>
        <b style={{ color: 'red' }}>{this.state.errMessage}</b>
        {this.getTable(this.props.property)}
      </div>
    );
  }
}
