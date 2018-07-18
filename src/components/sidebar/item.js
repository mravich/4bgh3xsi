import React from 'react'


export default ({id})=>{
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href={'#'+id}
                    >
                        <span className="glyphicon glyphicon-folder-close" />{id.toUpperCase()}
                    </a>
                </h4>
            </div>
            <div id={id} className="panel-collapse collapse in">
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
    )
}