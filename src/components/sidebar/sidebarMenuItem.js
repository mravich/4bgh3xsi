import React from 'react';
import Item from './item';
export default ({ menuItem,handleSubmit }) => {
  function renderMenuItems() {
    return menuItem.menuItems.map((item, key) => {
      return (
        <tr key={key}>
          <td>
            <Item name={item} handleSubmit={handleSubmit} />
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" href={'#' + menuItem.name} data-parent="#accordion">
            {menuItem.name.toUpperCase()}
          </a>
        </h4>
      </div>
      <div id={menuItem.name} className="panel-collapse collapse in">
        <div className="panel-body col-sm-12 col-md-12">
          <table className="table">
            <tbody>{renderMenuItems()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
