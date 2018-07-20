import React from 'react';
import { DATABASE_ACTIONS } from '../../constants/database';

export default ({ name,handleSubmit}) => {


  function renderMenuEndItems() {
    return DATABASE_ACTIONS.map((action, key) => {
      return (
        <tr key={key}>
          <td>
            <button className="btn btn-link" onClick={() => handleSubmit(action,name)}>
              {action}
            </button>
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h6 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href={'#' + name}>
            {name.toUpperCase()}
          </a>
        </h6>
      </div>
      <div id={name} className="panel-collapse collapse in">
        <div className="panel-body col-sm-12 col-md-12">
          <table className="table">
            <tbody>{renderMenuEndItems()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
