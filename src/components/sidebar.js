import React from 'react';

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                  >
                    <span className="glyphicon glyphicon-folder-close" />DATABASE
                  </a>
                </h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in">
                <div className="panel-body col-sm-12 col-md-12">
                  <table className="table">
                    <tr>
                      <td>
                        <a href="http://www.jquery2dotnet.com">ADD</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="http://www.jquery2dotnet.com">EDIT</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="http://www.jquery2dotnet.com">DELETE</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="http://www.jquery2dotnet.com">LIST</a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

/*
 */
