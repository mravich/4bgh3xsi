import React from 'react';
import { DATABASE_COLLECTIONS } from '../constants';
import DateTime from 'react-datetime';
export default () => {
  function getTableField(item) {
    switch (item.type) {
      case 'input':
        return (
          <input
            type="text"
            className={item.className}
            placeholder={item.placeholder}
          />
        );
      case 'button':
        return (
          <button
            className={item.className}
            onClick={() => {
              console.log(item.actionText);
            }}
          >
            {item.actionText}
          </button>
        );
      case 'date':
        return <DateTime inputProps={{ placeholder: 'N/A', disabled: true }} />;
    }
  }
  function getTableHeader(property) {
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
  function getTableBody(property) {
    return (
      <tbody>
        <tr>
          {DATABASE_COLLECTIONS[property].tableOptions.map((item, key) => {
            return <td key={key}>{getTableField(item)}</td>;
          })}
        </tr>
      </tbody>
    );
  }

  function getTable(property, key) {
    return (
      <div style={{ borderStyle: 'solid', marginBottom: '10px' }} key={key}>
        <h2>Add new {property} table</h2>
        <table className="table">
          {getTableHeader(property)}
          {getTableBody(property)}
        </table>
      </div>
    );
  }
  return (
    <div>
      {Object.entries(DATABASE_COLLECTIONS).map((item, key) => {
        return getTable(item[0], key);
      })}
    </div>
  );
};
