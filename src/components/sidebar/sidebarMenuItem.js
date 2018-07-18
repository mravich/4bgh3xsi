import React from 'react';
import Item from './item';
export default ({ menuItem }) => {
  function renderMenuItems() {
    return menuItem.menuItems.map((item, key) => {
      return (
        <tr key={key}>
          <td>
            <Item name={item} />
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a
            data-toggle="collapse"
            data-parent="#accordion"
            href={'#' + menuItem.name}
          >
            <span className="glyphicon glyphicon-folder-close" />
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
